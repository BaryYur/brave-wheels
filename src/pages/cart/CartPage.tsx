import { BreadcrumbsList, Container } from "../../components";
import { H1, DefaultLink } from "../../theme";

import * as Elements from "./Elements";

export const CartPage = () => {
  const breadcrumbs = [
    <DefaultLink key="1" to="/home">
      Головна
    </DefaultLink>,
    <DefaultLink key="2" to="/cart">
      Кошик
    </DefaultLink>,
  ];

  return (
    <>
      <Container>
        <Elements.CartWrapper>
          <BreadcrumbsList breadcrumbs={breadcrumbs} />

          <H1>Кошик</H1>
        </Elements.CartWrapper>
      </Container>

      content
    </>
  );
}