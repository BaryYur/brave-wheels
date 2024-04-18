import { Routes, Route, Navigate } from "react-router-dom";

import {
  CartPage,
  HomePage,
  CatalogPage,
  BikePage,
  ErrorPage,
  AdminPage
} from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="catalog/*" element={<CatalogPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/home/bike/:id" element={<BikePage />} />
      <Route path="/admin" element={<AdminPage />}/>
    </Routes>
  );
}
