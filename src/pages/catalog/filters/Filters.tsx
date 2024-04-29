import { useState, useEffect, useContext } from "react";

import { FilterTypes } from "../../../types";

import {
  useBreakpoint,
  useGetMaxPrice,
  useGetMinPrice,
  useScrollToTop
} from "../../../hooks";

import BikeContext from "../../../context/bike-context";

import { useNavigate, useLocation } from "react-router-dom";

import { Checkbox } from "../../../components";
import { P, theme, breakpoints } from "../../../theme";
import { Slider } from "@mui/material";
import * as Elements from "./Elements";

import { filtersMenuIcon } from "../../../assets";

export const Filters = () => {
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();
  const location = useLocation();
  const { getFilteredBikes, getFilterColors, filterColors } = useContext(BikeContext);
  const { scrollToTop } = useScrollToTop();
  const minPrice = useGetMinPrice();
  const maxPrice = useGetMaxPrice();
  const [price, setPrice] = useState<number[]>([minPrice, maxPrice]);
  const [openFilters, setOpenFilters] = useState(false);

  const [filters, setFilters] = useState<FilterTypes>({
    search: "",
    bicycleType: [],
    minPrice: "",
    maxPrice: "",
    materialType: [],
    wheelSize: [],
    frameType: [],
    color: "",
  });

  const changeCategoryHandler = (name: string) => {
    if (filters.bicycleType.includes(name)) {
      setFilters({
        ...filters,
        bicycleType: filters.bicycleType.filter(item => item !== name),
      });
    } else {
      setFilters({
        ...filters,
        bicycleType: [...filters.bicycleType, name],
      });
    }
  }

  const changeMaterialHandler = (name: string) => {
    if (filters.materialType.includes(name)) {
      setFilters({
        ...filters,
        materialType: filters.materialType.filter(item => item !== name),
      });
    } else {
      setFilters({
        ...filters,
        materialType: [...filters.materialType, name],
      });
    }
  }

  const changeWheelHandler = (name: string) => {
    if (filters.wheelSize.includes(name)) {
      setFilters({
        ...filters,
        wheelSize: filters.wheelSize.filter(item => item !== name),
      });
    } else {
      setFilters({
        ...filters,
        wheelSize: [...filters.wheelSize, name],
      });
    }
  }

  const changeFrameTypeHandler = (name: string) => {
    if (filters.frameType.includes(name)) {
      setFilters({
        ...filters,
        frameType: filters.frameType.filter(item => item !== name),
      });
    } else {
      setFilters({
        ...filters,
        frameType: [...filters.frameType, name],
      });
    }
  }

  const priceChangeHandler = (_event: any, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  }

  const filterHandler = () => {
    const queryParams = new URLSearchParams();

    if (filters.bicycleType.length !== 0) {
      filters.bicycleType.forEach((type) => queryParams.append("bicycleType", type));
    }

    if (filters.wheelSize.length !== 0) {
      filters.wheelSize.forEach((wheel) => queryParams.append("wheelSize", wheel));
    }

    if (filters.materialType.length !== 0) {
      filters.materialType.forEach((type) => queryParams.append("materialType", type));
    }

    if (filters.frameType.length !== 0) {
      filters.frameType.forEach((type) => queryParams.append("frameType", type));
    }

    if (filters.color !== "") {
      queryParams.set("color", filters.color);
    }

    if (price[0] !== minPrice || price[1] !== maxPrice) {
      queryParams.set("lowerBoundPrice", filters.minPrice.toString());
      queryParams.set("upperBoundPrice", filters.maxPrice.toString());
    }

    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const search = params.get("search") || "";

    if (search !== "") {
      navigate(`/catalog?search=${search}&${queryParams.toString()}`);
    } else {
      navigate(`/catalog?${queryParams.toString()}`);
    }

    scrollToTop();
    setOpenFilters(false);
  }

  useEffect(() => {
    setFilters({
      ...filters,
      minPrice: price[0].toString(),
      maxPrice: price[1].toString(),
    });
  }, [price]);

  useEffect(() => {
    const parseQueryString = (queryString: string) => {
      const params = new URLSearchParams(queryString);
      const parsedFilters = {
        search: params.get("search") || "",
        bicycleType: params.getAll("bicycleType"),
        minPrice: params.get("lowerBoundPrice") || "",
        maxPrice: params.get("upperBoundPrice") || "",
        materialType: params.getAll("materialType"),
        wheelSize: params.getAll("wheelSize"),
        frameType: params.getAll("frameType"),
        color: params.get("color") || "",
      };

      setPrice([Number(params.get("lowerBoundPrice")) || minPrice, Number(params.get("upperBoundPrice")) || maxPrice]);

      return parsedFilters;
    };

    const queryString = window.location.search;

    setFilters(parseQueryString(queryString));
    getFilterColors();
  }, [location, minPrice, maxPrice]);

  useEffect(() => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const page = params.get("page");

    if (location.search !== "" && page === null) {
      getFilteredBikes(location.search);
    }
  }, [location]);

  return (
    <Elements.FilterBoxWrapper>
      <Elements.FilterButton onClick={() => setOpenFilters(true)}>
        <P>Фільтр</P>
        <img src={filtersMenuIcon} alt="menu" />
      </Elements.FilterButton>

      {
        <Elements.FilterBoxMenuWrapper
          style={{
            left: (openFilters || breakpoint > breakpoints.tablet) ? "0" : "-400px"
          }}
        >
          <Elements.FilterBox>
            <Elements.FiltersList>
              <P>Категорія товару</P>
              <Elements.FilterItem>
                <Checkbox
                  id="mountain"
                  name="categories"
                  checked={filters.bicycleType.includes("MOUNTAIN")}
                  onChange={() => changeCategoryHandler("MOUNTAIN")}
                />
                <label htmlFor="mountain">Гірський</label>
              </Elements.FilterItem>
              <Elements.FilterItem>
                <Checkbox
                  id="highway"
                  name="categories"
                  checked={filters.bicycleType.includes("HIGHWAY")}
                  onChange={() => changeCategoryHandler("HIGHWAY")}
                />
                <label htmlFor="highway">Шосейний</label>
              </Elements.FilterItem>
              <Elements.FilterItem>
                <Checkbox
                  id="city"
                  name="categories"
                  checked={filters.bicycleType.includes("CITY")}
                  onChange={() => changeCategoryHandler("CITY")}
                />
                <label htmlFor="city">Міський</label>
              </Elements.FilterItem>
              <Elements.FilterItem>
                <Checkbox
                  id="electro"
                  name="categories"
                  checked={filters.bicycleType.includes("ELECTRO")}
                  onChange={() => changeCategoryHandler("ELECTRO")}
                />
                <label htmlFor="electro">Електро</label>
              </Elements.FilterItem>
            </Elements.FiltersList>

            <Elements.FiltersList>
              <P>Ціна</P>
              <Elements.PriceInputBox>
                <div>
                  <P style={{ fontWeight: "normal" }}>{price[0]}</P>
                </div>
                <div/>
                <div>
                  <P style={{ fontWeight: "normal" }}>{price[1]}</P>
                </div>
              </Elements.PriceInputBox>

              <Slider
                min={minPrice}
                max={maxPrice}
                getAriaLabel={() => "Ціна"}
                value={price}
                onChange={priceChangeHandler}
                valueLabelDisplay="auto"
                sx={{
                  width: "100%",
                  "& .MuiSlider-thumb": {
                    backgroundColor: theme.light.palette.brown,
                    height: 22,
                    "&:hover": {
                      boxShadow: "none",
                    },
                  },
                  "& .MuiSlider-track": {
                    border: "none",
                    height: 16,
                    backgroundColor: theme.light.palette.orange,
                  },
                  "& .MuiSlider-rail": {
                    height: 15,
                    backgroundColor: theme.light.palette.lightBrown,
                    opacity: 1,
                  },
                }}
              />
            </Elements.FiltersList>

            <Elements.FiltersList>
              <P>Матеріал</P>
              <Elements.FilterItem>
                <Checkbox
                  id="aluminiuim"
                  name="materials"
                  checked={filters.materialType.includes("ALUMINIUM")}
                  onChange={() => changeMaterialHandler("ALUMINIUM")}
                />
                <label htmlFor="aluminiuim">Алюміній</label>
              </Elements.FilterItem>
              <Elements.FilterItem>
                <Checkbox
                  id="carbon"
                  name="materials"
                  checked={filters.materialType.includes("CARBON")}
                  onChange={() => changeMaterialHandler("CARBON")}
                />
                <label htmlFor="carbon">Карбон</label>
              </Elements.FilterItem>
              <Elements.FilterItem>
                <Checkbox
                  id="titanium"
                  name="materials"
                  checked={filters.materialType.includes("TITANIUM")}
                  onChange={() => changeMaterialHandler("TITANIUM")}
                />
                <label htmlFor="titanium">Титан</label>
              </Elements.FilterItem>
            </Elements.FiltersList>

            <Elements.FiltersList>
              <P>Розмір колес</P>
              <Elements.FilterItem>
                <Checkbox
                  id="26"
                  name="wheels"
                  checked={filters.wheelSize.includes("26")}
                  onChange={() => changeWheelHandler("26")}
                />
                <label htmlFor="26">26’’</label>
              </Elements.FilterItem>
              <Elements.FilterItem>
                <Checkbox
                  id="28"
                  name="wheels"
                  checked={filters.wheelSize.includes("28")}
                  onChange={() => changeWheelHandler("28")}
                />
                <label htmlFor="28">28’’</label>
              </Elements.FilterItem>
              <Elements.FilterItem>
                <Checkbox
                  id="29"
                  name="wheels"
                  checked={filters.wheelSize.includes("29")}
                  onChange={() => changeWheelHandler("29")}
                />
                <label htmlFor="29">29’’</label>
              </Elements.FilterItem>
            </Elements.FiltersList>

            <Elements.FiltersList>
              <P>Колір</P>
              <ul style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {filterColors.map(item => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        if (filters.color !== item) {
                          setFilters({
                            ...filters,
                            color: item,
                          });
                        } else {
                          setFilters({
                            ...filters,
                            color: "",
                          });
                        }
                      }}
                      style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: item,
                        borderRadius: "5px",
                        border: "1px solid grey",
                        borderColor: filters.color === item ? "orange" : "grey",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </Elements.FiltersList>

            <Elements.FiltersList>
            <P>Тип рами</P>
            <Elements.FilterItem>
              <Checkbox
                id="closed"
                name="frame-types"
                checked={filters.frameType.includes("CLOSED")}
                onChange={() => changeFrameTypeHandler("CLOSED")}
              />
              <label htmlFor="closed">Закрита</label>
            </Elements.FilterItem>
            <Elements.FilterItem>
              <Checkbox
                id="open"
                name="frame-types"
                checked={filters.frameType.includes("OPEN")}
                onChange={() => changeFrameTypeHandler("OPEN")}
              />
              <label htmlFor="open">Відкрита</label>
            </Elements.FilterItem>
          </Elements.FiltersList>
          </Elements.FilterBox>

          <Elements.FiltersButton onClick={filterHandler}>
            Підібрати
          </Elements.FiltersButton>
        </Elements.FilterBoxMenuWrapper>
      }

      {openFilters && (
        <Elements.FiltersMenuWrapper>
          <div onClick={() => setOpenFilters(false)} />
        </Elements.FiltersMenuWrapper>
      )}
    </Elements.FilterBoxWrapper>
  );
}