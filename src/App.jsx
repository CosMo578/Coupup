import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FifthSection from './components/FifthSection';
import FourthSection from './components/FourthSection';
import ThirdSection from './components/ThirdSection';
import SecondSection from './components/SecondSection';
import FirstSection from './components/FirstSection';
import Hero from './components/Hero';
import { useState } from 'react';
import MobileNav from './components/MobileNav';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='parent bg-[#010314] overflow-hidden text-white'>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileNav isOpen={isOpen} />

      <div className='relative'>
        <Hero />
        <FirstSection />

        <img
          className='absolute right-8 lg:top-[30%] max-md:hidden'
          src='/images/Gradient-2.svg'
          alt=''
        />
      </div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </section>
  );
}

export default App;
