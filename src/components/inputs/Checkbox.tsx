import React from "react";

import * as Elements from "./Elements";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <Elements.CheckboxWrapper>
      <Elements.Checkbox
        {...props}
        type="checkbox"
      />
      <label />
    </Elements.CheckboxWrapper>
  );
}