import React, { useState } from 'react';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import PromoBanners from './components/PromoBanners';
import QuickActions from './components/QuickActions';
import TestCategories from './components/TestCategories';
import PopularPackages from './components/PopularPackages';
import HealthCheckups from './components/HealthCheckups';
import TopBookedTests from './components/TopBookedTests';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import LabPartners from './components/LabPartners';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(i => i.id !== itemId));
  };

  const isInCart = (itemId) => {
    return cartItems.some(i => i.id === itemId);
  };

  return (
    <div className="App">
      <Header
        cartCount={cartItems.length}
        onCartClick={() => setShowCart(true)}
      />
      <main>
        <HeroSearch />
        <PromoBanners />
        <QuickActions />
        <TestCategories />
        <PopularPackages addToCart={addToCart} isInCart={isInCart} />
        <HealthCheckups addToCart={addToCart} isInCart={isInCart} />
        <TopBookedTests addToCart={addToCart} isInCart={isInCart} />
        <WhyChooseUs />
        <HowItWorks />
        <LabPartners />
      </main>
      <Footer />

      {showCart && (
        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
