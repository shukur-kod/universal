import React, { useState } from 'react';

const ArticleSection = ({article}) => {
  const articles = [
    {
      title: "Exploring Samarkand",
      description: "Samarkand is one of the oldest inhabited cities in Central Asia.",
      image:"https://avatars.mds.yandex.net/i?id=cb4f81a6a8fae0303c70c9eb05a0436bb21bcf2e-10811575-images-thumbs&n=13",
     
      
    },
    {
      title: "Discover Bukhara science center.",
     
      description: "Bukhara is famous for its well-preserved medieval architecture. In addition, Bukhara is also a major cultural center. Bukhara is a small mecca for Muslims all over the world. Among them are Imam-Al-Bukhari, Abu-Ali-Ibn Sina, who grew up in Bukhara. Many rulers' mausoleums are also located in Bukhara.",
      image: "https://avatars.mds.yandex.net/i?id=3d3a60c7df47c1c88e4c8b48d681b8370ddebd33-9834801-images-thumbs&n=13", // O'zingizga kerakli rasm URL'sini qo'ying
    },
    {
      title: "Visiting Khiva",
      description: "Khiva is a UNESCO World Heritage site with stunning historical monuments.",
      image: "https://avatars.mds.yandex.net/i?id=5c4677dc22a20041dba8f14961c87ca94168acad-10414746-images-thumbs&n=13", // O'zingizga kerakli rasm URL'sini qo'ying
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <section className="article-section">
      <div className="article-content">
        <h2 className="article-title">{articles[currentIndex].title}</h2>
        <p className="article-description">{articles[currentIndex].description}</p>
        <img src={articles[currentIndex].image} alt={articles[currentIndex].title} className="article-image" />
      </div>
      <div className="article-controls">
        <button onClick={handlePrev} className="control-btn">Previous</button>
        <button onClick={handleNext} className="control-btn">Next</button>
      </div>
    </section>
  );
};

export default ArticleSection;