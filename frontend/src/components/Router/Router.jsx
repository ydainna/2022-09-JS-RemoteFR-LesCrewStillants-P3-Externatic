import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/Home";

import Register from "@pages/Auth/Register";
import Login from "@pages/Auth/Login";

import OfferList from "@pages/Offers/OfferList";
import Offer from "@pages/Offers/Offer";

import Company from "@pages/Companies/Company";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offers" element={<OfferList />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/companies:id" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}
