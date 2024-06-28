import React, { useState, useEffect } from 'react';
import './Home.css';
import duas from '../../Data/Duas'; 
const getRandomDua = () => {
  const randomIndex = Math.floor(Math.random() * duas.length);
  return duas[randomIndex];
};

const Home = () => {
  const [dua, setDua] = useState(null);

  useEffect(() => {
    const randomDua = getRandomDua();
    setDua(randomDua);
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Deen</h1>
        <p>Your guide to Islamic practices and spirituality</p>
      </header>
      <main className="home-main-content">
        <section className="home-section dua">
          <h2>Dua of the Day</h2>
          {dua ? (
            <div>
              <h3>{dua.duaTitle}</h3>
              <p><strong>Arabic:</strong> {dua.duaArabic}</p>
              <p><strong>Transliteration:</strong> {dua.duaTransliteration}</p>
              <p><strong>Translation:</strong> {dua.duaTranslation}</p>
              <p><strong>Citation:</strong> {dua.duaCitation}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
    </div>
  );
};


export default Home;
