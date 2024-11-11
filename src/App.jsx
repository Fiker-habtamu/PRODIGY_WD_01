import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landignpage from "./Components/Home/Landignpage";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Shared from "./Shared/Shared";
function App() {

  return (
    <>
      {/* <Router /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shared />}>
            <Route index element={<Landignpage />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
