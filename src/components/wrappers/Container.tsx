import React from "react";

import * as Elements from "./Elements";

export const Container = ({ children, styles } : { children: React.ReactNode, styles?: React.CSSProperties; }) => {
  return (
    <Elements.Container style={{ ...styles }}>{children}</Elements.Container>
  );
}