import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { useScrollToTop } from "../../../hooks";

import BikeContext from "../../../context/bike-context";

import { Button, Input, Modal, P } from "../../../theme";

import * as Elements from "./Elements";

export const SearchingForm = ({ setSearchIsOpen } : { setSearchIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate();
  const { searchBikeItems } = useContext(BikeContext);
  const { scrollToTop } = useScrollToTop();
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const searching = params.get("search") || "";
  const [searchingText, setSearchingText] = useState(searching);
  const [searchingHistory, setSearchingHistory] = useState<string[]>(
    JSON.parse(localStorage.getItem("searching-history") || "[]")
  );

  const addToLocalSearchingHistory = (isItemNew: boolean) => {
    let searchingHistory: string[] = JSON.parse(localStorage.getItem("searching-history") || "[]");

    if (!isItemNew) {
      searchingHistory.unshift(searchingText.trim());
      localStorage.setItem("searching-history", JSON.stringify(searchingHistory));
      setSearchingHistory(prevItem => {
        return [searchingText, ...prevItem];
      });
    } else {
      searchingHistory = searchingHistory.filter(item => item !== searchingText);
      searchingHistory.unshift(searchingText.trim());
      localStorage.setItem("searching-history", JSON.stringify(searchingHistory));
    }
  }

  const chooseHistoryItemHandler = (text: string) => {
    let searchingHistory: string[] = JSON.parse(localStorage.getItem("searching-history") || "[]");

    searchingHistory = searchingHistory.filter(item => item !== text);
    searchingHistory.unshift(text.trim());
    localStorage.setItem("searching-history", JSON.stringify(searchingHistory));
    navigate(`/catalog?search=${text.trim()}`);
    setSearchIsOpen(false);
    scrollToTop();
  }

  const deleteHistoryItem = (text: string) => {
    const localHistory: string[] = JSON.parse(localStorage.getItem("searching-history") || "[]");

    setSearchingHistory(searchingHistory.filter(item => item !== text));
    localStorage.setItem("searching-history", JSON.stringify(localHistory.filter(item => item !== text)));
  }

  const submitSearchingHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (searchingText === "") return;

    searchBikeItems(searchingText);
    navigate(`/catalog?search=${searchingText.trim()}`);
    setSearchIsOpen(false);
    scrollToTop();

    if (!searchingHistory.includes(searchingText)) {
      addToLocalSearchingHistory(false);
    } else {
      addToLocalSearchingHistory(true);
    }
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
        <P style={{ fontWeight: "600", marginTop: "8px" }}>Історія пошуку</P>
        {searchingHistory.length === 0 && <P style={{ fontSize: "14px" }}>Поки що нічого немає</P>}
        <ul
          style={{
            height: searchingHistory.length > 9 ? "200px" : "auto",
            overflowY: searchingHistory.length > 9 ? "auto" : "hidden",
          }}
        >
          {searchingHistory.map(item => (
            <li key={Math.random()} onClick={() => chooseHistoryItemHandler(item)}>
              <P>{item}</P>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  deleteHistoryItem(item);
                }}
              >
                &#10005;
              </button>
            </li>
          ))}
        </ul>
      </Modal>
    </Elements.SearchingBoxModal>
  );
}