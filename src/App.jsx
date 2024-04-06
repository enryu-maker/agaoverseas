import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screen/Home';
import Header from './components/Header';
import About from './Screen/About';
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

function App() {
  return (
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
          path='/about'
          element={<About />}
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
  );
}

export default App;
