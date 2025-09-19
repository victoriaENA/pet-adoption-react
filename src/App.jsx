import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import NavBar from './components/NavBar'
import Slogan from './components/Slogan'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <NavBar />
      <Slogan />

      <main className="flex-grow">
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App
