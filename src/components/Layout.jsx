import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children, fullWidthContent }) => (
  <div className="min-h-screen flex flex-col font-sans relative overflow-hidden">
    <ScrollToTop />

    {/* Dynamic gradient background */}
    <div className="fixed inset-0 w-full h-full animated-gradient" aria-hidden="true" />

    {/* Foreground content */}
    <div className="relative z-10 flex flex-col flex-grow">
      <Header />

      {/* Render full-width content here if provided */}
      {fullWidthContent}

      {/* Render main constrained content */}
      <main className="min-h-screen flex flex-col">
        {children}
      </main>

      <Footer />
    </div>
  </div>
);

export default Layout;
