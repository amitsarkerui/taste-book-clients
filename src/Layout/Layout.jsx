import React from "react";
import Nav from "../shared/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

const Layout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
