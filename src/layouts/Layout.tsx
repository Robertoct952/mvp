import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout: React.FC = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === '/signup';

  return (
    <div>
      {!isSignUpPage && <Navbar />}
      <main>
        <Outlet /> {/* Renders the child route components */}
      </main>
      {!isSignUpPage && <Footer />}
    </div>
  );
};

export default Layout;