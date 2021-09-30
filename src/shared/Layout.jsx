import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

export default Layout;      