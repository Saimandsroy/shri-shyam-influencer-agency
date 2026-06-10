import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import VideoReel from './sections/VideoReel';
import Services from './sections/Services';
import InfluencerMarquee from './sections/InfluencerMarquee';
import CaseStudies from './sections/CaseStudies';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

/* ─── Page Loader ─── */
const Loader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[200] bg-[#FAF8F4] flex flex-col items-center justify-center"
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-[32px] font-bold text-[#B8860B] tracking-tight"
      >
        SSCA
      </motion.span>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 48 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
        className="h-[2px] bg-[#B8860B] mt-3 rounded-full"
      />
    </motion.div>
  );
};

/* ─── Scroll-to-Top Button ─── */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#141414] text-white flex items-center justify-center shadow-lg hover:bg-[#B8860B] transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <HiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

/* ─── App ─── */
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          <Navbar />
          <Hero />
          <VideoReel />
          <Services />
          <InfluencerMarquee />
          <CaseStudies />
          <Testimonials />
          <Contact />
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
}

export default App;
