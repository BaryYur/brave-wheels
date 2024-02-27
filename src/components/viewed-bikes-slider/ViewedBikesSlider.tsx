import { Container, SliderCarousel, BikeCard } from "../../components";
import { H2, theme } from "../../theme";
import * as Elements from "./Elements";

import sliderImage from "../../assets/images/slider-bike.svg";

const VIEWED_ITEMS= [
  {
    id: "id1",
    name: "Шосейний велосипед BraveWheel BT 28 inch",
    price: 13600,
    image: sliderImage,
  },
  {
    id: "id2",
    name: "Шосейний велосипед BraveWheel BT 28 inch",
    price: 13600,
    image: sliderImage,
  },
  {
    id: "id3",
    name: "Шосейний велосипед BraveWheel BT 28 inch",
    price: 13600,
    image: sliderImage,
  },
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

export const ViewedBikesSlider = () => {
  const viewedItemsList = <Elements.ViewdItemsList>
    {VIEWED_ITEMS.map(item => (
      <Elements.SiderCardWrapper key={item.id}>
        <BikeCard
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          bikeMainPath="/home"
        />
      </Elements.SiderCardWrapper>
    ))}
  </Elements.ViewdItemsList>;

  return (
    <Container>
      <H2 style={{ textAlign: "center", color: theme.light.palette.brown, marginTop: "50px" }}>Нещодавно переглянуті</H2>
      {VIEWED_ITEMS.length < 5 ? viewedItemsList :
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
                }
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 3,
                  arrows: false,
                }
              },
              {
                breakpoint: 890,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                }
              },
              {
                breakpoint: 660,
                settings: {
                  slidesToShow: 1,
                  centerMode: false,
                  arrows: false,
                }
              },
            ]}
          >
            {VIEWED_ITEMS.map(item => (
              <BikeCard
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                bikeMainPath="/home"
                inCarousel
              />
            ))}
          </SliderCarousel>
        </div>
      }
    </Container>
  );
}