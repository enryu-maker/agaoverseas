import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screen/Home';
import Header from './components/Header';
import Blog from './Screen/Blog';
import Faq from './Screen/Faq';
import Contact from './Screen/Contact';
import Service from './Screen/Service';
import CastorOil from './Screen/Products/CastorOil';
import CommercialGrade from './Screen/Products/CommercialGrade';
import RefinedGrade from './Screen/Products/RefinedGrade';
import ColdPressed from './Screen/Products/ColdPressed';
import Footer from './components/Footer';
import Product from './Screen/Products/Product';
import AboutOverview from './Screen/about/AboutOverview';
import OurVision from './Screen/about/OurVision';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <div>
      {loading && <LoadingScreen />}
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
        <Routes>
          <Route
            path='/about/overview'
            element={<AboutOverview />}
          />
        </Routes>
        <Routes>
          <Route
            path='/about/our-vision'
            element={<OurVision />}
          />
        </Routes>
        <Routes>
          <Route
            path='/products'
            element={<Product />}
          />
        </Routes>
        <Routes>
          <Route
            path='/blog'
            element={<Blog />}
          />
        </Routes>
        <Routes>
          <Route
            path='/faq'
            element={<Faq />}
          />
        </Routes>
        <Routes>
          <Route
            path='/contact'
            element={<Contact />}
          />
        </Routes>
        <Routes>
          <Route
            path='/services'
            element={<Service />}
          />
        </Routes>
        <Routes>
          <Route
            path='/products/castor'
            element={<CastorOil />}
          />
        </Routes>
        <Routes>
          <Route
            path='/products/commercial'
            element={<CommercialGrade />}
          />
        </Routes>
        <Routes>
          <Route
            path='/products/refined'
            element={<RefinedGrade />}
          />
        </Routes>
        <Routes>
          <Route
            path='/products/coldpressed'
            element={<ColdPressed />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
