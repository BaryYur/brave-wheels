import React from "react";

import { Modal } from "../../../theme";

import * as Elements from "./Elements";

type SupportItemModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

export const SupportItemModal: React.FC<SupportItemModalProps> = ({
  children,
  isOpen,
}) => {
  return (
    <>
      {isOpen && (
        <Elements.SupportItemModal onClick={event => event.stopPropagation()}>
          <Modal>{children}</Modal>
        </Elements.SupportItemModal>
      )}
    </>
  );
};
