import React, { useEffect, useRef, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Home from '../pages/Home.jsx';
import Products from '../pages/Products.jsx';
import ProductDetails from '../pages/ProductDetails.jsx';
import Contact from '../pages/Contact.jsx';

const DURATION = 420;

function PageRoutes({ location }) {
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default function AnimatedLayout({ children }) {
  const location = useLocation();

  const [displayed, setDisplayed] = useState(location);
  const [phase, setPhase] = useState('in');
  const timer = useRef(null);

  useEffect(() => {
    if (location.pathname === displayed.pathname) return;
    setPhase('out');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDisplayed(location);
      setPhase('in');
    }, DURATION);
    return () => clearTimeout(timer.current);
  }, [location, displayed]);

  const cls = phase === 'in' ? 'page-stage page-in' : 'page-stage page-out';

  return (
    <div className="app-shell">
      <Navbar />
      <div className={cls}>
        <PageRoutes location={displayed} />
      </div>
      <Footer />
    </div>
  );
}