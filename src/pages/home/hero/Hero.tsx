import { useBreakpoint } from "../../../hooks";

import { Container } from "../../../components";
import { Button, H1, H3, theme } from "../../../theme";

import * as Elements from "./Elements";

import { bike, halfBike } from "../../../assets";

export const Hero = () => {
  const breakpoint = useBreakpoint();

  const scrollToSelection = () => {
    window.scrollTo({
      top: window.scrollY + 900,
      behavior: "smooth",
    });
  };

  return (
    <Elements.HeroWrapper>
      <Container>
        <Elements.HeroContainer>
          <Elements.HeroInfo>
            <H1>Розкрий свій шлях.</H1>
            <H3>Підбери велосипед, створенний для твоїх досягнень!</H3>
            <Button onClick={scrollToSelection}>Підібрати</Button>
          </Elements.HeroInfo>

          <Elements.OrangeBox />

          <div>
            {breakpoint > theme.light.breakpoints.laptop ? (
              <img src={bike} alt="bike" />
            ) : (
              <img src={halfBike} alt="bike" />
            )}
          </div>
        </Elements.HeroContainer>
      </Container>
    </Elements.HeroWrapper>
  );
};
