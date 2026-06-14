import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import VideoReel from './sections/VideoReel';
import Services from './sections/Services';
import InfluencerMarquee from './sections/InfluencerMarquee';
import CaseStudies from './sections/CaseStudies';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import WhyChooseUs from './sections/WhyChooseUs';
import PlatformMarketing from './sections/PlatformMarketing';
import RoiCalculator from './sections/RoiCalculator';
import CampaignDashboard from './sections/CampaignDashboard';

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
      className="fixed inset-0 z-[200] bg-[#091337] flex flex-col items-center justify-center"
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-[32px] font-bold text-[#ffc201] tracking-tight"
      >
        SSCA
      </motion.span>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 48 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
        className="h-[2px] bg-[#ffc201] mt-3 rounded-full"
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
          className="fixed bottom-24 right-8 z-50 w-12 h-12 rounded-full bg-[#091337] text-white flex items-center justify-center shadow-lg hover:bg-[#de0d40] border border-white/10 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <HiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

/* ─── Floating WhatsApp Button ─── */
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919060293631?text=Hi!%20I%20am%20interested%20in%20launching%20an%20influencer%20campaign%20with%20SSCA."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-3 bg-[#25d366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-105 group border border-white/10"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={22} className="animate-pulse" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out font-display text-[13px] font-bold tracking-wide whitespace-nowrap">
        Chat with us
      </span>
    </a>
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
          <WhyChooseUs />
          <PlatformMarketing />
          <InfluencerMarquee />
          <RoiCalculator />
          <CampaignDashboard />
          <CaseStudies />
          <Testimonials />
          <Contact />
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
        </motion.div>
      )}
    </>
  );
}

export default App;
