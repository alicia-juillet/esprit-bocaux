import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import AboutUs from "./pages/AboutUs/AboutUs";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cannery from "./pages/Cannery/Cannery";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/cannery" element={<Cannery />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
