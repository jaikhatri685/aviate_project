import Article from "./Components/Article";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import CurrencyCalculator from "./Components/CurrencyConvertor/CurrencyCalculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="relative">
        <NavBar />
        
        <Routes>
        <Route exact path='/aviate_project' element={[<Banner />,<Article/>]} />
        <Route exact path='/aviate_project/calculator' element={<CurrencyCalculator/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
