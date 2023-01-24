import Router from "@components/Router/Router";
import CompanyManagement from "@pages/Companies/CompanyManagement";
import "./App.scss";
import Footer from "@components/Footer/Footer";
import Canditate_Management from "@pages/Companies/CandidateManagement";

function App() {
  return (
    <div className="App">
      
      <Canditate_Management />
    <Footer />
    </div>
  );
}

export default App;
