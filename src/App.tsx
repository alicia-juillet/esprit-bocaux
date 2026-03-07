import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import canneryImg from './assets/cannery.jpg';
import store from './assets/homepage.jpg';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import Cannery from './pages/Cannery/Cannery';
import Contact from './pages/Contact/Contact';
import Prestations from './pages/Prestations/Prestations';
import Product from './pages/Product/Product';

function App() {
  const location = useLocation();

  const images: Record<string, string> = {
    '/': store,
    '/cannery': canneryImg,
  };
  const currentImage = images[location.pathname];

  return (
    <>
      <Header />
      <div className="main-container">
        {currentImage && (
          <img
            src={currentImage}
            alt="Conserverie artisanale"
            className="picture-store"
          />
        )}
        <main>
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/cannery" element={<Cannery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
