import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@components/Header/Header";

import Home from "@pages/Home";

import Register from "@pages/Auth/Register";
import Login from "@pages/Auth/Login";

import Profile from "@pages/Users/Profile";
import FavoriteOffers from "@pages/Users/FavoriteOffers";
import Candidatures from "@pages/Users/Candidatures";

import OfferList from "@pages/Offers/OfferList";
import Offer from "@pages/Offers/Offer";
import OfferRegister from "@pages/Offers/OfferRegister";

import Company from "@pages/Companies/Company";

import Footer from "@components/Footer/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/offerlist" element={<OfferList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorite-offers" element={<FavoriteOffers />} />
        <Route path="/candidatures" element={<Candidatures />} />

        <Route path="/offers" element={<OfferList />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/offerRegister" element={<OfferRegister />} />
        <Route path="/companies/:id" element={<Company />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
