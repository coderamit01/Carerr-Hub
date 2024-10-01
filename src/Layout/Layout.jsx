import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;