import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = ['Home', 'Services', 'Campaigns', 'Influencers', 'About', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          backgroundColor: scrolled ? 'rgba(250,248,244,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col">
            <span className="font-display text-[22px] font-bold text-[#141414] leading-none tracking-tight">
              SSCA
            </span>
            <span className="font-label text-[9px] text-[#999] tracking-[0.15em] mt-0.5">
              Sri Shyam Campaigning Agency
            </span>
          </a>

          {/* Center Links — Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="group relative font-label text-[12px] tracking-[0.08em] text-[#555] hover:text-[#141414] transition-colors duration-300"
              >
                {link}
                <span className="absolute bottom-[-4px] left-0 h-[1.5px] w-0 bg-[#141414] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-block bg-[#141414] text-white font-body text-[12px] font-medium px-[22px] py-[10px] rounded-md hover:bg-[#B8860B] transition-colors duration-300"
            >
              Get Free Proposal
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-[#141414]"
              aria-label="Open menu"
            >
              <HiOutlineMenuAlt3 size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-between items-center px-6 py-4">
              <span className="font-display text-[22px] font-bold text-[#141414]">SSCA</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[#141414]"
                aria-label="Close menu"
              >
                <HiX size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="font-display text-3xl font-semibold text-[#141414] hover:text-[#B8860B] transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="px-6 pb-8">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#141414] text-white font-body text-[13px] font-medium py-4 rounded-md hover:bg-[#B8860B] transition-colors"
              >
                Get Free Proposal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
