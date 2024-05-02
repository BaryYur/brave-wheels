import { useContext, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useBreakpoint, useScrollToTop } from "../../hooks";

import BikeContext from "../../context/bike-context";

import {
  Container,
  BreadcrumbsList,
  ViewedBikesSlider,
} from "../../components";
import { BikeItems } from "./bike-items/BikeItems";
import { DefaultLink, H2, P, breakpoints, theme } from "../../theme";
import { Filters } from "./filters/Filters";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import * as Elements from "./Elements";

import axios from "axios";

const mainPath = import.meta.env.VITE_API_PATH;

export const CatalogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getAllBikesByPagination } = useContext(BikeContext);
  const { scrollToTop } = useScrollToTop();
  const breakpoint = useBreakpoint();
  const breadcrumbs = [
    <DefaultLink key="1" to="/home">
      Головна
    </DefaultLink>,
    <DefaultLink key="2" to="/catalog">
      Каталог
    </DefaultLink>,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsCounter, setItemsCounter] = useState(0);

  const paginationChangeHandler = (value: number) => {
    setCurrentPage(value);
    getAllBikesByPagination("12", (value - 1).toString());
    navigate(`${location.pathname}?page=${value}`);
    scrollToTop();
  };

  const getItemsCounter = async () => {
    try {
      const { data } = await axios.get(
        `${mainPath}/bicycle/page-request?size=100000&page=0`,
      );

      setItemsCounter(data.content.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const page = params.get("page");

    if (location.search === "" && page === null) {
      getAllBikesByPagination("12", "0");
    } else if (location.search !== "" && page !== null) {
      getAllBikesByPagination("12", (Number(page) - 1).toString());
    }

    if (Number(page) > Math.floor(itemsCounter / 12 + 1)) {
      setCurrentPage(1);
    } else {
      setCurrentPage(Number(page));
    }

    getItemsCounter();
  }, [location, currentPage]);

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const pathPage = params.get("page");
  const searchString = params.get("search") || "";

  return (
    <Elements.CatalogWrapper>
      <Container styles={{ paddingBottom: "20px" }}>
        <BreadcrumbsList breadcrumbs={breadcrumbs} />
        <H2>Каталог</H2>
        {searchString.length > 0 && <P style={{ marginTop: "15px" }}>
          Пошук: <span style={{ fontWeight: "600" }}>{searchString}</span>
        </P>}

        <div
          style={{
            marginTop: "50px",
            display: breakpoint > breakpoints.tablet ? "flex" : "block",
            gap: "12px",
          }}
        >
          <Filters />
          <BikeItems />
        </div>

        {(pathPage !== null || location.search === "") && itemsCounter > 12 && (
          <Stack
            sx={{
              margin: "10px 0 20px 0",
              "& ul": {
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Pagination
              // add all item length
              count={Math.floor(itemsCounter / 12 + 1)}
              variant="outlined"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontFamily: "Open Sans",
                  fontWeight: "500",
                  padding: "20px",
                  borderRadius: "10px",
                  "&.Mui-selected": {
                    backgroundColor: theme.light.palette.orange,
                    border: `1px solid ${theme.light.palette.orange}`,
                    color: "white",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: theme.light.palette.orange,
                    color: "white",
                  },
                },
              }}
              onChange={(_e, value) => paginationChangeHandler(value)}
              defaultPage={Number(pathPage) || 1}
            />
          </Stack>
        )}
      </Container>

      <ViewedBikesSlider />
    </Elements.CatalogWrapper>
  );
};
