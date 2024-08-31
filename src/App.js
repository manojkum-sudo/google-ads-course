import logo from "./logo.svg";
import "./App.css";
import Parents from "./components/Parents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermCondition from "./components/TermCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import Disclaimer from "./components/Disclaimer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Parents />} />
          <Route path="/term" element={<TermCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
