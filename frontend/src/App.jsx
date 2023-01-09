import Footer from "@components/Footer/Footer";
import Register from "./pages/Auth/Register";
import Header from "./components/Header/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
