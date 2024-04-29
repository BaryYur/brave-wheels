import { useScrollToTop } from "../../hooks";

import { Link } from "react-router-dom";

import { Container } from "../../components";
import { P, H4 } from "../../theme";

import { BIKES_INFO, CLIENTS_INFO, INFORMATION, TELEPHONE_CONTACT } from "./data";

import * as Elements from "./Elements";

export const Footer = () => {
  const { scrollToTop } = useScrollToTop();

  return (
    <Elements.Footer>
      <Container styles={{ display: "flex", justifyContent: "space-between", padding: "15px 0" }}>
        <div style={{display: "flex", gap: "100px"}}>
          <div>
            <H4 style={{fontWeight: "600", color: "white"}}>Велосипеди</H4>
            <ul>
              {BIKES_INFO.map(item => (
                <li key={Math.random()} onClick={scrollToTop}>
                  <Link to={item.path}>
                    <P>{item.title}</P>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <H4 style={{fontWeight: "600", color: "white"}}>Інформація</H4>
            <ul>
              {INFORMATION.map(item => (
                <li key={Math.random()}>
                  <Link to={item.path}>
                    <P>{item.title}</P>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <H4 style={{fontWeight: "600", color: "white"}}>Клієнтам</H4>
            <ul>
              {CLIENTS_INFO.map(item => (
                <li key={Math.random()}>
                  <Link to={item.path}>
                    <P>{item.title}</P>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div>
            <H4 style={{color: "white"}}>{TELEPHONE_CONTACT}</H4>
            <P style={{color: "white", marginTop: "20px"}}>Оформлення замовлення:</P>
            <P style={{color: "white" }}>9:00 - 21:00</P>
          </div>
          <div style={{ marginTop: "50px" }}>
            <H4 style={{color: "white"}}>{TELEPHONE_CONTACT}</H4>
            <P style={{color: "white", marginTop: "20px"}}>Служба підтримки:</P>
            <P style={{color: "white" }}>9:00 - 21:00</P>
          </div>
        </div>
      </Container>
    </Elements.Footer>
  );
}