import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Register from "@pages/Register";
import Login from "@pages/Login";
import Offers from "@pages/Offers";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </BrowserRouter>
  );
}
