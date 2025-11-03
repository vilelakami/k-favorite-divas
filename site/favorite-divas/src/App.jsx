import React from 'react';
import './App.css'
import HeroHeader from './assets/components/hero-header'
import Cards from './assets/components/section-cards'
import Spotify from './assets/components/section-spotify'

function App() {
  return (
    <div className="App">
      <header>
        <HeroHeader/>
      </header>
      <main>
        <Cards/>
        <Spotify/>
      </main>
    </div>
  );
}
export default App
