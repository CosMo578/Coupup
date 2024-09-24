import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FifthSection from './components/FifthSection';
import FourthSection from './components/FourthSection';
import ThirdSection from './components/ThirdSection';
import SecondSection from './components/SecondSection';
import FirstSection from './components/FirstSection';
import Hero from './components/Hero';

function App() {
  return (
    <section className='parent bg-[#010314] min-h-screen max-w-[100vw] overflow-x-hidden text-white'>
      <Header />
      <Hero/>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </section>
  );
}

export default App;
