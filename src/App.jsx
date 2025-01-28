

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Categories from "./Components/Categories/Categories";
import Carousal from "./Components/Carousal/Carousal";

export default function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Categories/>
      <Carousal/>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
       
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
