import Footer from "@components/Footer";
import ComposantLogin from "@components/ComposantLogin";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <ComposantLogin />
      <Footer />
    </div>
  );
}

export default App;
