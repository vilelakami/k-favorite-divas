import React from 'react';
import './App.css'
import HeroHeader from './assets/components/hero-header'
import Cards from './assets/components/section-cards'

function App() {
  return (
    <div className="App">
      <header>
        <HeroHeader/>
      </header>
      <main>
        <Cards/>
      </main>
    </div>
  );
}
export default App
