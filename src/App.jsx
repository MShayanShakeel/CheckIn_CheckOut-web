import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner2 from "./Component/Banner2/Banner2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
