import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, fullWidthContent }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    
    {/* Render full-width content here if provided */}
    {fullWidthContent}

    {/* Render main constrained content */}
    <main className="min-h-screen flex flex-col">
      {children}
    </main>

    <Footer />
  </div>
);

export default Layout;
