import { useContext, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { useBreakpoint } from "../../hooks";

import BikeContext from "../../context/bike-context";

import { Container, BreadcrumbsList, ViewedBikesSlider } from "../../components";
import { BikeItems } from "./bike-items/BikeItems";
import { DefaultLink, H2, breakpoints, theme } from "../../theme";
import { Filters } from "./filters/Filters";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import * as Elements from "./Elements";

export const CatalogPage = () => {
  const location = useLocation();
  const { getAllBikesByPagination, currentBikes } = useContext(BikeContext);
  const breakpoint = useBreakpoint();
  const breadcrumbs = [
    <DefaultLink key="1" to="/home">
      Головна
    </DefaultLink>,
    <DefaultLink key="2" to="/catalog">
      Каталог
    </DefaultLink>,
  ];

  useEffect(() => {
    if (location.search === "") {
      getAllBikesByPagination("100", "0");
    }
  }, [location]);

  return (
    <Elements.CatalogWrapper>
      <Container>
        <BreadcrumbsList breadcrumbs={breadcrumbs} />
        <H2>Каталог</H2>

        <div
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            display: breakpoint > breakpoints.tablet ? "flex" : "block",
            gap: "12px",
          }}
        >
          <Filters />
          <BikeItems />
        </div>

        {/*{currentBikes.length > 12 && location.search !== "" && <Stack*/}
        {/*    sx={{*/}
        {/*      margin: "40px 0",*/}
        {/*      "& ul": {*/}
        {/*        display: "flex",*/}
        {/*        justifyContent: "center"*/}
        {/*      }*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <Pagination*/}
        {/*      count={10}*/}
        {/*      variant="outlined"*/}
        {/*      shape="rounded"*/}
        {/*      sx={{*/}
        {/*        "& .MuiPaginationItem-root": {*/}
        {/*          fontFamily: "Open Sans",*/}
        {/*          fontWeight: "500",*/}
        {/*          padding: "20px",*/}
        {/*          borderRadius: "10px",*/}
        {/*          "&.Mui-selected": {*/}
        {/*            backgroundColor: theme.light.palette.orange,*/}
        {/*            border: `1px solid ${theme.light.palette.orange}`,*/}
        {/*            color: "white",*/}
        {/*          },*/}
        {/*          "&.Mui-selected:hover": {*/}
        {/*            backgroundColor: theme.light.palette.orange,*/}
        {/*            color: "white",*/}
        {/*          },*/}
        {/*        },*/}
        {/*      }}*/}
        {/*      // onChange={(e, value) => paginationChangingHandler(e, value)}*/}
        {/*    />*/}
        {/*  </Stack>*/}
        {/*}*/}
      </Container>

      <ViewedBikesSlider />
    </Elements.CatalogWrapper>
  );
}