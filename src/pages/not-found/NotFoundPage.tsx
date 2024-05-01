import { Link } from "react-router-dom";

import { Container } from "../../components";
import { H1, H4, Button } from "../../theme";
import * as Elements from "./Elements";

import { errorBike } from "../../assets";

export const NotFoundPage = () => {
  return (
    <Elements.ErrorWrapper>
      <Container>
        <Elements.ErrorContainer>
          <Elements.ErrorInfo>
            <H1>
              Упс... <br /> Щось пішло не так.
            </H1>
            <H4>
              Вибачте, цієї сторінки не існує! Будь-ласка скористайтесь
              навігацією або пошуком, щоб знайти, те що вас цікавить.
            </H4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link to="/home">
                <Button>На головну</Button>
              </Link>
            </div>
          </Elements.ErrorInfo>
          <Elements.ErrorPicture>
            <img src={errorBike} alt="error bike" />
          </Elements.ErrorPicture>
        </Elements.ErrorContainer>
      </Container>
    </Elements.ErrorWrapper>
  );
};
