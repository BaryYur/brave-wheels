import { useContext, useEffect } from "react";

import BikeContext from "../../context/bike-context";

import { Container, SliderCarousel, BikeCard } from "../../components";
import { H2 } from "../../theme";
import * as Elements from "./Elements";

export const ViewedBikesSlider = () => {
  const { viewedBikes, getRecentlyViewedBikes } = useContext(BikeContext);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("viewed-items-store") ||  "[]");

    getRecentlyViewedBikes(ids);
  }, []);

  const viewedItemsList = <Elements.ViewdItemsList>
    {viewedBikes.map(item => (
      <Elements.SiderCardWrapper key={item.id} style={{ display: "flex" }}>
        <BikeCard
          id={item.id ?? ""}
          name={item.name}
          image={item.images[0]}
          price={item.price}
          bikeMainPath="/home"
          styles={{ width: "240px" }}
        />
      </Elements.SiderCardWrapper>
    ))}
  </Elements.ViewdItemsList>;

  return (
    <>
      {viewedBikes.length > 0 &&
        <Container>
          <H2 style={{ textAlign: "center", marginTop: "50px" }}>Нещодавно переглянуті</H2>
          {viewedBikes.length < 5 ? viewedItemsList :
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
                {viewedBikes.map(item => (
                  <BikeCard
                    id={item.id ?? ""}
                    name={item.name}
                    image={item.images[0]}
                    price={item.price}
                    bikeMainPath="/home"
                    inCarousel
                    styles={{ maxWidth: "240px" }}
                  />
                ))}
              </SliderCarousel>
            </div>
          }
        </Container>
      }
    </>
  );
}