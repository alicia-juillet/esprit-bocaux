import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import AboutUs from "./pages/AboutUs/AboutUs";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cannery from "./pages/Cannery/Cannery";
import Contact from "./pages/Contact/Contact";
import Prestations from "./pages/Prestations/Prestations";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <main className="page">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/cannery" element={<Cannery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prestations" element={<Prestations />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
