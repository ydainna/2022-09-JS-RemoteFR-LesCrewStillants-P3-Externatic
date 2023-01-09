import Footer from "@components/Footer/Footer";
import OfferRegister from "./pages/Offers/OfferRegister";
import Header from "./components/Header/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <OfferRegister />
      <Footer />
    </div>
  );
}

export default App;
