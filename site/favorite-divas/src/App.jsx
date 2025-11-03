import React from 'react';
import './App.css'
import HeroHeader from './assets/components/hero-header'
import Cards from './assets/components/section-cards'
import Spotify from './assets/components/section-spotify'
import Footer from './assets/components/footer'

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
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
export default App
