import { SUPPORT_ITEMS } from "../data";

import { Button, Input, P, H4 } from "../../../theme";
import * as Elements from "./Elements";

export const SupportItem = () => {
  return (
    <Elements.SupportItem>
      <Elements.SupportItemInfoItems>
        {SUPPORT_ITEMS.map(item => (
          <Elements.SupportItemInfo key={Math.random()}>
            <H4>{item.number}</H4>
            <P>{item.title}</P>
            <P>{item.time}</P>
          </Elements.SupportItemInfo>
        ))}

        <Elements.SupportForm>
          <P>або</P>
          <H4>Замовити дзвінок</H4>
          <Input style={{ padding: "20px 10px" }} />
          <Button>Замовити</Button>
        </Elements.SupportForm>
      </Elements.SupportItemInfoItems>
    </Elements.SupportItem>
  );
};
