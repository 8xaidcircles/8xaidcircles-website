import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/Home/components/About"; 
import News from "./pages/Home/components/News";
import Brand from "./pages/Home/components/Brand";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/brand" element={<Brand />} />
    </Routes>
  );
}

export default App;

