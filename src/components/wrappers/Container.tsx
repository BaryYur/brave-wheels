import React from "react";

import * as Elements from "./Elements";

export const Container = ({ children } : { children: React.ReactNode }) => {
  return (
    <Elements.Container>{children}</Elements.Container>
  );
}