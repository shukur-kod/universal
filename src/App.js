import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import NewsSection from './Components/sections/NewsSection';
import OpinionSection from './Components/sections/OpinionSection';
import ScienceSection from './Components/sections/ScienceSection';
import LifeSection from './Components/sections/LifeSection';
import TravelSection from './Components/sections/TravelSection';
import MoneySection from './Components/sections/MoneySection';
import ArtDesignSection from './Components/sections/ArtDesignSection';
import SportsSection from './Components/sections/SportsSection';
import Footer from './Components/Footer/Footer'
import Section from './Components/Section/Section';
import HealthSection from './Components/sections/HealthSection';
import EducationSection from './Components/sections/EducationSection';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/news" element={<NewsSection />} />
          <Route path="/opinion" element={<OpinionSection />} />
          <Route path="/science" element={<ScienceSection />} />
          <Route path="/life" element={<LifeSection />} />
          <Route path="/travel" element={<TravelSection />} />
          <Route path="/money" element={<MoneySection />} />
          <Route path="/art-design" element={<ArtDesignSection />} />
          <Route path="/sports" element={<SportsSection />} />
          <Route path="/health" element={<HealthSection />} />
          <Route path="/education" element={<EducationSection />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;