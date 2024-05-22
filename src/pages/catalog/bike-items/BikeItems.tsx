import { useContext } from "react";

import { useBreakpoint } from "../../../hooks";

import BikeContext from "../../../context/bike-context";

import { BikeCard, Loader } from "../../../components";
import { P, breakpoints, theme } from "../../../theme";
import * as Elements from "./Elements";

export const BikeItems = () => {
  // const stylesForBigScreen = {
  //   "& li:first-of-type": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderRight: "none",
  //     borderRadius: "10px 0 0 10px",
  //   },
  //   "& li:nth-of-type(4n + 2)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderRight: "none",
  //   },
  //   "& li:nth-of-type(4n + 3)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //   },
  //   "& li:nth-of-type(5n)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderTopLeftRadius: "10px",
  //     borderBottomLeftRadius: "10px",
  //     borderRight: "none",
  //   },
  //   "& li:last-child": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderTopRightRadius: "10px",
  //     borderBottomRightRadius: "10px",
  //   },
  //   "& li:nth-of-type(4n)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderLeft: "none",
  //     borderRadius: "0 10px 10px 0",
  //   },
  // }
  //
  // const stylesForTablet = {
  //   "& li:first-of-type": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderRight: "none",
  //     borderRadius: "10px 0 0 10px",
  //   },
  //   "& li:nth-of-type(4n + 2)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderRight: "none",
  //   },
  //   "& li:nth-of-type(4n + 3)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //   },
  //   "& li:nth-of-type(5n)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderTopLeftRadius: "10px",
  //     borderBottomLeftRadius: "10px",
  //     borderRight: "none",
  //   },
  //   "& li:last-child": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderTopRightRadius: "10px",
  //     borderBottomRightRadius: "10px",
  //   },
  //   "& li:nth-of-type(4n)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderLeft: "none",
  //     borderRadius: "0 10px 10px 0",
  //   },
  // }
  //
  // const stylesForPhone = {
  //   "& li:first-of-type": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderRight: "none",
  //     borderRadius: "10px 0 0 10px",
  //   },
  //   "& li:nth-of-type(4n + 2)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderRight: "none",
  //   },
  //   "& li:nth-of-type(4n + 3)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //   },
  //   "& li:nth-of-type(5n)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderTopLeftRadius: "10px",
  //     borderBottomLeftRadius: "10px",
  //     borderRight: "none",
  //   },
  //   "& li:last-child": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderTopRightRadius: "10px",
  //     borderBottomRightRadius: "10px",
  //   },
  //   "& li:nth-of-type(4n)": {
  //     border: `1px solid ${theme.light.palette.grey}`,
  //     borderLeft: "none",
  //     borderRadius: "0 10px 10px 0",
  //   },
  // }

  const breakpoint = useBreakpoint();
  const { currentBikes, catalogItemsLoading } = useContext(BikeContext);

  // const getGridHandler = (breakpoint: number) => {
  //   if (breakpoint > breakpoints.tablet) {
  //     return "repeat(4, 1fr)";
  //   } else {
  //     return "repeat(3, 1fr)";
  //   }
  // }

  return (
    <div style={{ width: "100%" }}>
      <Elements.BikeItemsList
        sx={{
          marginTop: breakpoint < breakpoints.laptop ? "30px" : "0",
          // gridTemplateColumns: getGridHandler(breakpoint),
          // ...(breakpoint > breakpoints.tablet ? stylesForBigScreen : {}),
        }}
      >
        {!catalogItemsLoading &&
          currentBikes.map(item => (
            <li key={item.id} style={{ display: "flex" }}>
              <BikeCard
                id={item.id ?? ""}
                name={item.name}
                price={item.price}
                image={item.images[0]}
                bikeMainPath="/home"
                styles={{
                  width: "240px",
                  border: `1px solid ${theme.light.palette.grey}`,
                  borderRadius: "10px",
                  margin: "0 auto",
                  // width: "100%"
                }}
              />
            </li>
          ))}
      </Elements.BikeItemsList>

      <P style={{ textAlign: "center", marginTop: "50px" }}>
        {currentBikes.length === 0 && !catalogItemsLoading && (
          <span>Нічого не знайдено</span>
        )}
      </P>
      <Elements.LoaderBox
        style={{ minHeight: catalogItemsLoading ? "200px" : "0" }}
      >
        {catalogItemsLoading && <Loader />}
      </Elements.LoaderBox>
    </div>
  );
};
