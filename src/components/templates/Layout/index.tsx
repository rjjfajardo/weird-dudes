import React from "react";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
