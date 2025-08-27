import React from 'react'
import Topnav from './components/Topnav';
import Carousel from './components/Carousel';
import About from './components/About';
import Slider from './components/Slider';
import Testimonial from './components/Testimonial';
import Quote from './components/Quote';
import Form from './components/Quoteform';
import Services from './components/Services';
function App() {
  return (
    <div>
      <main className='main'>
      <Topnav />
      <Carousel />
    </main>
      <About />
      <Slider />
      <Testimonial />
      <Quote />
      <Form />
      <Services />


  </div>
  );
}

export default App
