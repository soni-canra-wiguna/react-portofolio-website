import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonial/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Testimonials />
      <Contact />
    </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App;


// https://www.youtube.com/watch?v=RtDwr_mdHLs&list=PL5gLq0nzeozvgdrykl2tI8SZBRiYoe54Q

// treejs tutorial