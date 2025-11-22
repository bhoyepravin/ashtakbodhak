import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Componants/Navbar/Navbar";
import Footer from "../Componants/Footer/Footer";
import ScrollToTop from "../Componants/ScrollToTop/ScrollToTop";

function Layout() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
