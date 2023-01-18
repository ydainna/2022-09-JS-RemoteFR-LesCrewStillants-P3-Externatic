import Footer from "@components/Footer";
import ComposantLogin from "@components/ComposantLogin";
import Router from "@components/Router/Router";
import Header from "./components/Header/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <ComposantLogin />
      <Footer />

      <Router />
    </div>
  );
}

export default App;
