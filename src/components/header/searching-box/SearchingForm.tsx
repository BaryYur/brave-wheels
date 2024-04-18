import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { useScrollToTop } from "../../../hooks";

import BikeContext from "../../../context/bike-context";

import * as Elements from "./Elements";

import { Button, Input, Modal } from "../../../theme";

export const SearchingForm = ({ setSearchIsOpen } : { setSearchIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate();
  const { searchBikeItems } = useContext(BikeContext);
  const { scrollToTop } = useScrollToTop();
  const searching = "";
  const [searchingText, setSearchingText] = useState(searching);

  const submitSearchingHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    searchBikeItems(searchingText);
    navigate(`/catalog?search=${searchingText}`);
    setSearchIsOpen(false);
    scrollToTop();
  }

  return (
    <Elements.SearchingBoxModal onClick={(event) => event.stopPropagation()}>
      <Modal>
        <Elements.SearchingForm onSubmit={submitSearchingHandler}>
          <Input
            placeholder="Введіть ваш запит..."
            value={searchingText}
            onChange={(event) => setSearchingText(event.target.value)}
          />
          <Button type="submit">Знайти</Button>
        </Elements.SearchingForm>
      </Modal>
    </Elements.SearchingBoxModal>
  );
}