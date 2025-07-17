import React from 'react';
import Home from './pages/home/Home';
import './App.css'; // Assuming you have some global styles
import Navbar from './components/layouts/navbar/Navbar';
// import Testimonials from './pages/testimonials/Testimonials'; // Importing the Navbar component


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

export default App