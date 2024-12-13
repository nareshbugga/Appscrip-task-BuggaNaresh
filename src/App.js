import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./Components/Header";
import HomeProducts from "./Components/MainHomeCard";
import About from "./Components/AboutCard";
import Stories from "./Components/StoriesCard";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/products" element={<HomeProducts />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
