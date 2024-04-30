import React, { useState } from "react";

import { Link } from "react-router-dom";

import { H4, P } from "../../../theme";

import * as Elements from "./Elements.ts";

type AccordionProps = {
  title: string;
  items: { path: string; title: string; }[];
}

export const Accordion: React.FC<AccordionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Elements.AccordionWrapper>
      <Elements.AccordionHead onClick={() => setIsOpen(active => !active)}>
        <H4 style={{ fontWeight: "600", color: "white" }}>{title}</H4>
        {isOpen ? (
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 11.8896L21.87 14L12 4.22081L2.13 14L0 11.8896L12 0L24 11.8896Z" fill="white"/>
          </svg>
          ) : (
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2.1104L2.13 0L12 9.77919L21.87 0L24 2.1104L12 14L0 2.1104Z" fill="white"/>
          </svg>
        )}
      </Elements.AccordionHead>
      <Elements.AccordionInfoBox style={{gridTemplateRows: isOpen ? "1fr" : "0fr"}}>
        <ul>
          {items.map(item => (
            <li key={Math.random()}>
              <Link to={item.path}>
                <P style={{ color: "white" }}>{item.title}</P>
              </Link>
            </li>
          ))}
        </ul>
      </Elements.AccordionInfoBox>
    </Elements.AccordionWrapper>
  );
}