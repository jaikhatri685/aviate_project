import Article from "./Components/Article";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Data from "./Components/Data/Data";
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
        <Route exact path='/aviate_project/visualizer' element={<Data/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
