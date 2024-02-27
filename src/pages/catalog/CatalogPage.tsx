import { Container, BreadcrumbsList, ViewedBikesSlider } from "../../components";
import { DefaultLink, H2 } from "../../theme";
import { Filters } from "./filters/Filters";

import * as Elements from "./Elements";

// const data = [];

export const CatalogPage = () => {
  const breadcrumbs = [
    <DefaultLink key="1" to="/home">
      Головна
    </DefaultLink>,
    <DefaultLink key="2" to="/catalog">
      Каталог
    </DefaultLink>,
  ];

  return (
    <Elements.CatalogWrapper>
      <Container>
        <BreadcrumbsList breadcrumbs={breadcrumbs} />
        <H2>Каталог</H2>

        <div>
          <Filters />
        </div>
      </Container>

      <ViewedBikesSlider />
    </Elements.CatalogWrapper>
  );
}