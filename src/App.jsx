import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import NavBar from './components/navBar'
import Slogan from './components/Slogan'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import FilterBar from './components/FilterBar'

function App() {
  return (
    <div className="App scroll-smooth"> 
      <NavBar />
      <Slogan />
      <FilterBar />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App
