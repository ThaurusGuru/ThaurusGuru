import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AffiliatePage } from "./pages/Affiliate";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
