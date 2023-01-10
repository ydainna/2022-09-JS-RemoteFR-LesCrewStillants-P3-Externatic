import Footer from "@components/Footer/Footer";
// import Home from "./pages/Home";
// import Profile from "@pages/Users/Profile";
import SubNavSpecialUsers from "@components/ManagementsPages/subNavUsers/SubNavSpecialUsers";
import Header from "./components/Header/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <SubNavSpecialUsers />
      <Footer />
    </div>
  );
}

export default App;
