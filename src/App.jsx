import './index.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from 'react';


function App() {

  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Exemple : si on a scrollé plus de 100px, cacher la flèche
      if (window.scrollY > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='max-w-7xl px-4 m-auto text-white h-screen snap-y snap-mandatory scroll-smooth'>
      <section className=''>
        <Header/>
      </section>
      <section className=''>
        <Hero/>
        <FaChevronDown className='ml-[48%] p-2 mt-50 text-[#DADADA] w-12 h-12 bg-[#050a30] rounded-[50px] animate-bounce cursor-pointer' onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        />
      </section>
      
      <section className=''>
        <Skills/>
      </section>
      
    </div>
  )
}

export default App
