import { useState } from "react";

import { useBreakpoint, useScrollToTop } from "../../../hooks";

import { useNavigate } from "react-router-dom";

import { SliderCarousel } from "../../../components";
import { Container } from "../../../components/wrappers/Container";
import { DefaultButton, H1, H3, Input, P, Button, theme } from "../../../theme";
import { Slider, Stack } from "@mui/material";

import * as Elements from "./Elements";

import {
  selectionBike,
  mBikeIcon,
  electricBikeIcon,
  hillBikeIcon,
  roadBikeIcon,
  userHeightIcon,
} from "../../../assets";

const BIKE_TYPES = [
  {
    name: "Шосейний",
    value: "Highway",
    icon: roadBikeIcon,
  },
  {
    name: "Гірський",
    value: "Mountain",
    icon: hillBikeIcon,
  },
  {
    name: "Міський",
    value: "City",
    icon: mBikeIcon,
  },
  {
    name: "Електро",
    value: "Electro",
    icon: electricBikeIcon,
  },
];

const WheelIcon = ({ width, height }: { width: string; height: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.5 24.0667C26.03 24.0667 24.0667 26.03 24.0667 28.5C24.0667 30.97 26.03 32.9333 28.5 32.9333C30.97 32.9333 32.9333 30.97 32.9333 28.5C32.9333 26.03 30.97 24.0667 28.5 24.0667ZM28.5 30.4C27.4233 30.4 26.6 29.5133 26.6 28.5C26.6 27.4233 27.4233 26.6 28.5 26.6C29.5767 26.6 30.4 27.4233 30.4 28.5C30.4 29.5133 29.5767 30.4 28.5 30.4ZM28.5 0C12.7933 0 0 12.7933 0 28.5C0 44.2067 12.7933 57 28.5 57C44.2067 57 57 44.2067 57 28.5C57 12.7933 44.2067 0 28.5 0ZM28.5 54.4667C14.1867 54.4667 2.53333 42.8133 2.53333 28.5C2.53333 14.1867 16.0312 3.5625 28.5 2.67188C38.76 4.45312 50.7656 15.1406 54.4667 28.5C54.4667 42.8133 42.8133 54.4667 28.5 54.4667ZM28.5 2.67188C16.2767 2.67188 -0.890625 14.1233 1.78125 29.1333C1.78125 41.3567 11.5781 55.2188 28.5 56.1094C52.5469 50.7656 54.4667 40.7233 54.4667 28.5C54.4667 16.2767 40.7233 2.67188 28.5 2.67188ZM47.6267 24.13H36.6067L36.3533 23.6867L41.8633 14.1233C44.7133 16.7833 46.74 20.2033 47.6267 24.13ZM28.5 8.86667C30.5267 8.86667 32.49 9.18333 34.3267 9.75333L28.8167 19.3167H28.2467L22.7367 9.75333C24.51 9.18333 26.4733 8.86667 28.5 8.86667ZM15.1367 14.1233L20.6467 23.6867L20.3933 24.13H9.37333C10.26 20.2033 12.2867 16.7833 15.1367 14.1233ZM9.37333 32.87H20.3933L20.6467 33.3133L15.1367 42.8767C12.2867 40.2167 10.26 36.7967 9.37333 32.87ZM28.5 48.1333C26.4733 48.1333 24.51 47.8167 22.6733 47.2467L28.1833 37.6833H28.7533L34.2633 47.2467C32.49 47.8167 30.5267 48.1333 28.5 48.1333ZM41.8633 42.8767L36.3533 33.3133L36.6067 32.87H47.6267C46.74 36.7967 44.7133 40.2167 41.8633 42.8767ZM48.07 30.3367H35.8467C35.4033 30.3367 34.96 30.59 34.77 30.97L33.7567 32.68C33.5033 33.06 33.5033 33.5667 33.7567 33.9467L39.8367 44.46C39.52 44.7133 39.14 44.9667 38.76 45.1567L37.6833 45.79C37.3667 45.98 36.9867 46.17 36.6067 46.2967L30.5267 35.7833C30.3367 35.4033 29.8933 35.15 29.45 35.15H27.4233C26.98 35.15 26.5367 35.4033 26.3467 35.7833L20.2667 46.2967C19.8867 46.1067 19.57 45.98 19.19 45.79L18.1133 45.1567C17.7333 44.9033 17.4167 44.7133 17.0367 44.46L23.1167 33.9467C23.37 33.5667 23.37 33.06 23.1167 32.68L22.1033 30.97C21.85 30.59 21.47 30.3367 21.0267 30.3367H8.93C8.93 29.9567 8.86667 29.5133 8.86667 29.1333V27.8667C8.86667 27.4867 8.93 27.0433 8.93 26.6633H21.09C21.5333 26.6633 21.9767 26.41 22.1667 26.03L23.18 24.32C23.4333 23.94 23.4333 23.4333 23.18 23.0533L17.1 12.4767C17.4167 12.2233 17.7967 11.97 18.1767 11.78L19.19 11.21C19.5067 11.02 19.8867 10.83 20.2667 10.7033L26.3467 21.28C26.5367 21.66 26.98 21.9133 27.4233 21.9133H29.45C29.8933 21.9133 30.3367 21.66 30.5267 21.28L36.6067 10.7033C36.9867 10.8933 37.3033 11.02 37.6833 11.21L38.6967 11.78C39.0767 12.0333 39.3933 12.2233 39.7733 12.4767L33.6933 23.0533C33.44 23.4333 33.44 23.94 33.6933 24.32L34.7067 26.03C34.96 26.41 35.34 26.6633 35.7833 26.6633H47.9433C48.0067 27.0433 48.0067 27.4867 48.0067 27.8667V29.1333C48.1333 29.5133 48.07 29.8933 48.07 30.3367Z"
        fill="#FF6F1E"
      />
    </svg>
  );
};

const WHEEL_TYPES = [
  {
    name: "26ʼʼ",
    value: "26",
    icon: <WheelIcon height="41" width="41" />,
  },
  {
    name: "28ʼʼ",
    value: "28",
    icon: <WheelIcon height="48" width="48" />,
  },
  {
    name: "29ʼʼ",
    value: "29",
    icon: <WheelIcon height="57" width="57" />,
  },
];

export const BikeSelection = () => {
  const breakpoint = useBreakpoint();
  const { scrollToTop } = useScrollToTop();
  const [bikeTypes, setBikeTypes] = useState<string[]>([]);
  const [wheelD, setWheelD] = useState<string[]>([]);
  const [userHeight, setUserHeight] = useState<number>(150);
  const navigate = useNavigate();

  const chooseBikeTypeHandler = (bikeType: string) => {
    if (!bikeTypes.includes(bikeType)) {
      setBikeTypes(prevItem => {
        return [...prevItem, bikeType];
      });
    } else {
      setBikeTypes(bikeTypes.filter(item => item !== bikeType));
    }
  };

  const chooseWheelHandler = (wheel: string) => {
    if (!wheelD.includes(wheel)) {
      setWheelD(prevItem => {
        return [...prevItem, wheel];
      });
    } else {
      setWheelD(wheelD.filter(item => item !== wheel));
    }
  };

  const catalogFiltersHandler = () => {
    const queryParams = new URLSearchParams();

    bikeTypes.forEach(type =>
      queryParams.append("bicycleType", type.toUpperCase()),
    );
    wheelD.forEach(wheel => queryParams.append("wheelSize", wheel));
    queryParams.set("userHeight", userHeight.toString());

    navigate(`/catalog?search_term=&${queryParams.toString()}`);
    scrollToTop();
  };

  const BikeTypeItems = BIKE_TYPES.map(item => (
    <li key={item.name}>
      <Elements.BikeItemWrapper>
        <div>
          <img src={item.icon} />
        </div>
        <DefaultButton
          style={{
            backgroundColor: bikeTypes.includes(item.value)
              ? theme.light.palette.lightBrown
              : "white",
            borderColor: bikeTypes.includes(item.value)
              ? theme.light.palette.lightBrown
              : "white",
            color: !bikeTypes.includes(item.value)
              ? theme.light.palette.lightBrown
              : "white",
          }}
          onClick={() => chooseBikeTypeHandler(item.value)}
        >
          {item.name}
        </DefaultButton>
      </Elements.BikeItemWrapper>
    </li>
  ));

  const WheelItems = WHEEL_TYPES.map(item => (
    <li key={item.name}>
      <Elements.WheelItemWrapper>
        <div>{item.icon}</div>
        <DefaultButton
          style={{
            backgroundColor: wheelD.includes(item.value)
              ? theme.light.palette.lightBrown
              : "white",
            borderColor: wheelD.includes(item.value)
              ? theme.light.palette.lightBrown
              : "white",
            color: !wheelD.includes(item.value)
              ? theme.light.palette.lightBrown
              : "white",
          }}
          onClick={() => chooseWheelHandler(item.value)}
        >
          {item.name}
        </DefaultButton>
      </Elements.WheelItemWrapper>
    </li>
  ));

  return (
    <Elements.SelectionWrapper>
      <Container>
        <H1>Підбір велосипеда</H1>
        <Elements.SelectionBox>
          <Elements.SelectionBikeImgBox>
            <img src={selectionBike} />
          </Elements.SelectionBikeImgBox>

          <Elements.SelectionForm>
            <Elements.BikeTypesBox>
              <H3>Тип велосипеда</H3>
              <Elements.BikeTypeItems>
                {breakpoint > 600 ? (
                  BikeTypeItems
                ) : (
                  <div style={{ width: "100%", padding: "0 20px" }}>
                    <SliderCarousel
                      dots={false}
                      infinite={true}
                      slidesToScroll={1}
                      slidesToShow={1}
                      centerMode={false}
                    >
                      {BikeTypeItems}
                    </SliderCarousel>
                  </div>
                )}
              </Elements.BikeTypeItems>
            </Elements.BikeTypesBox>

            <Elements.WheelTypesBox>
              <H3>Діаметр колес</H3>
              <Elements.WheelTypeItems>
                {breakpoint > 600 ? (
                  WheelItems
                ) : (
                  <div style={{ width: "100%", padding: "0 20px" }}>
                    <SliderCarousel
                      dots={false}
                      infinite={true}
                      slidesToScroll={1}
                      slidesToShow={1}
                      centerMode={false}
                    >
                      {WheelItems}
                    </SliderCarousel>
                  </div>
                )}
              </Elements.WheelTypeItems>
            </Elements.WheelTypesBox>

            <Elements.UserHeightBox style={{ marginTop: "30px" }}>
              <Elements.UserHeightTopBox>
                <div>
                  <H3>Який ваш зріст?</H3>
                  {breakpoint > theme.light.breakpoints.phone && (
                    <img src={userHeightIcon} />
                  )}
                </div>
                <div>
                  {breakpoint < theme.light.breakpoints.tablet && (
                    <img src={userHeightIcon} />
                  )}
                  <Input
                    value={userHeight}
                    onChange={event => {
                      setUserHeight(
                        event.target.value === ""
                          ? 150
                          : Number(event.target.value),
                      );
                    }}
                    type="number"
                    min={150}
                    max={200}
                  />
                  <P>см</P>
                </div>
              </Elements.UserHeightTopBox>

              <Stack
                spacing={2}
                direction="row"
                sx={{ mt: "30px", display: "flex", justifyContent: "center" }}
                alignItems="center"
              >
                <P>150</P>
                <Slider
                  min={150}
                  max={200}
                  aria-label="User height"
                  valueLabelDisplay="auto"
                  value={userHeight}
                  onChange={(_event: Event, newValue: number | number[]) =>
                    setUserHeight(newValue as number)
                  }
                  sx={{
                    width: "500px",
                    "& .MuiSlider-thumb": {
                      backgroundColor: theme.light.palette.orange,
                      height: 22,
                      "&:hover": {
                        boxShadow: "none",
                      },
                    },
                    "& .MuiSlider-track": {
                      border: "none",
                      height: 16,
                      backgroundColor: theme.light.palette.lightBrown,
                    },
                    "& .MuiSlider-rail": {
                      height: 15,
                      backgroundColor: theme.light.palette.white,
                      opacity: 1,
                    },
                    "@media screen and (max-width: 700px)": {
                      width: "100%",
                    },
                  }}
                />
                <P>200</P>
              </Stack>
            </Elements.UserHeightBox>

            <Elements.BottomButtonBox>
              <Button onClick={catalogFiltersHandler}>Підібрати</Button>
            </Elements.BottomButtonBox>
          </Elements.SelectionForm>
        </Elements.SelectionBox>
      </Container>
    </Elements.SelectionWrapper>
  );
};
