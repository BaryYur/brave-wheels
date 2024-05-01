import { Bike } from "../../types";

import { Container, SliderCarousel, BikeCard } from "../../components";
import { H2, P, theme } from "../../theme";
import * as Elements from "./Elements";

// import sliderImage from "../../assets/images/slider-bike.svg";

const RECCOMENDETION_ITEMS: Bike[] = [
  // {
  //   id: "id1",
  //   name: "Шосейний велосипед BraveWheel BT 28 inch",
  //   price: 13600,
  //   image: sliderImage,
  // },
  // {
  //   id: "id2",
  //   name: "Шосейний велосипед BraveWheel BT 28 inch",
  //   price: 13600,
  //   image: sliderImage,
  // },
  // {
  //   id: "id3",
  //   name: "Шосейний велосипед BraveWheel BT 28 inch",
  //   price: 13600,
  //   image: sliderImage,
  // },
  // {
  //   id: "id4",
  //   name: "Шосейний велосипед BraveWheel BT 28 inch",
  //   price: 13600,
  //   image: sliderImage,
  // },
  // {
  //   id: "id5",
  //   name: "Шосейний велосипед BraveWheel BT 28 inch",
  //   price: 13600,
  //   image: sliderImage,
  // },
  // {
  //   id: "id6",
  //   name: "Шосейний велосипед BraveWheel BT 28 inch",
  //   price: 13600,
  //   image: sliderImage,
  // },
];

export const RecommendationsSlider = () => {
  const reccomendationsList = (
    <Elements.RecommendationsList>
      {RECCOMENDETION_ITEMS.map(item => (
        <Elements.SiderCardWrapper key={item.id}>
          <BikeCard
            id={item.id}
            name={item.name}
            image={item.images[0]}
            price={item.price}
            bikeMainPath="/home"
          />
        </Elements.SiderCardWrapper>
      ))}
    </Elements.RecommendationsList>
  );

  return (
    <Container>
      <H2
        style={{
          textAlign: "center",
          color: theme.light.palette.brown,
          marginTop: "50px",
        }}
      >
        Рекомендації
      </H2>
      {RECCOMENDETION_ITEMS.length < 5 ? (
        reccomendationsList
      ) : (
        <div style={{ width: "96%", margin: "50px auto" }}>
          <SliderCarousel
            dots={true}
            infinite={true}
            slidesToScroll={1}
            slidesToShow={4}
            centerMode={true}
            responsive={[
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 3,
                  arrows: false,
                },
              },
              {
                breakpoint: 890,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                },
              },
              {
                breakpoint: 660,
                settings: {
                  slidesToShow: 1,
                  centerMode: false,
                  arrows: false,
                },
              },
            ]}
          >
            {RECCOMENDETION_ITEMS.map(item => (
              <BikeCard
                id={item.id}
                name={item.name}
                image={item.images[0]}
                price={item.price}
                bikeMainPath="/home"
                inCarousel
              />
            ))}
          </SliderCarousel>
        </div>
      )}
      {RECCOMENDETION_ITEMS.length === 0 && (
        <P style={{ textAlign: "center", margin: "50px 0" }}>
          Нічого не знайдено
        </P>
      )}
    </Container>
  );
};
