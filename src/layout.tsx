import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isSignUpPage = location.pathname === '/signup';

  return (
    <div>
      {!isSignUpPage && <Navbar />}
      <main>{children}</main>
      {!isSignUpPage && <Footer />}
    </div>
  );
};

export default Layout;
