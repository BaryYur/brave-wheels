import { useBreakpoint, useScrollToTop } from "../../hooks";

import { Link } from "react-router-dom";

import { Accordion } from "./accordion/Accordion";
import { P, H4 } from "../../theme";

import { BIKES_INFO, CLIENTS_INFO, INFORMATION, TELEPHONE_CONTACT } from "./data";

import * as Elements from "./Elements";

export const Footer = () => {
  const { scrollToTop } = useScrollToTop();
  const breakpoint = useBreakpoint();

  return (
    <Elements.Footer>
      <Elements.FooterContainer>
        {breakpoint > 700 ? (
          <div style={{ display: "flex", gap: "100px" }}>
            <div>
              <H4 style={{ fontWeight: "600", color: "white" }}>Велосипеди</H4>
              <Elements.LinksList>
                {BIKES_INFO.map(item => (
                  <li key={Math.random()} onClick={scrollToTop}>
                    <Link to={item.path}>
                      <P>{item.title}</P>
                    </Link>
                  </li>
                ))}
              </Elements.LinksList>
            </div>

            <div>
              <H4 style={{ fontWeight: "600", color: "white" }}>Інформація</H4>
              <Elements.LinksList>
                {INFORMATION.map(item => (
                  <li key={Math.random()}>
                    <Link to={item.path}>
                      <P>{item.title}</P>
                    </Link>
                  </li>
                ))}
              </Elements.LinksList>
            </div>

            <div>
              <H4 style={{fontWeight: "600", color: "white"}}>Клієнтам</H4>
              <Elements.LinksList>
                {CLIENTS_INFO.map(item => (
                  <li key={Math.random()}>
                    <Link to={item.path}>
                      <P>{item.title}</P>
                    </Link>
                  </li>
                ))}
              </Elements.LinksList>
            </div>
          </div>
        ) : (
          <div>
            <Accordion title="Велосипеди" items={BIKES_INFO} />
            <Accordion title="Інформація" items={BIKES_INFO} />
            <Accordion title="Клієнтам" items={BIKES_INFO} />
          </div>
        )}

        <Elements.ContactBox>
          <div>
            <H4 style={{color: "white"}}>{TELEPHONE_CONTACT}</H4>
            <P style={{color: "white", marginTop: "20px"}}>Оформлення замовлення:</P>
            <P style={{color: "white" }}>9:00 - 21:00</P>
          </div>
          <div>
            <H4 style={{color: "white"}}>{TELEPHONE_CONTACT}</H4>
            <P style={{color: "white", marginTop: "20px"}}>Служба підтримки:</P>
            <P style={{color: "white" }}>9:00 - 21:00</P>
          </div>
        </Elements.ContactBox>
      </Elements.FooterContainer>

      <Elements.FooterContainer>
        <P style={{color: "white"}}>©BraveWheel 2023</P>
      </Elements.FooterContainer>
    </Elements.Footer>
  );
}