import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
