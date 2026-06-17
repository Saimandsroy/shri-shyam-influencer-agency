import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const clientBrands = ['ONEPLUS', 'GROWW', 'MEESHO', 'AMAZON', 'PAYTM', 'BOAT', 'NYKAA', 'ZOMATO', 'MAMAEARTH', 'MYNTRA', 'FLIPKART'];

const col1Media = [
  { id: 'c1-1', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.13 (1).mp4', brand: 'Kurkure' },
  { id: 'c1-2', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.16 (2).mp4', brand: 'Santoor' },
  { id: 'c1-3', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.14 (1).mp4', brand: 'Paytm' },
  { id: 'c1-4', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.14 (2).mp4', brand: 'India Gate' },
];

const col2Media = [
  { id: 'c1-5', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.17.mp4', brand: 'Joy' },
  { id: 'c2-1', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.13.mp4', brand: 'Tira' },
  { id: 'c2-2', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.14.mp4', brand: 'Maggi' },
];

const col3Media = [
  { id: 'c2-3', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.16.mp4', brand: 'Google Gemini' },
  { id: 'c2-4', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.16 (1).mp4', brand: 'Flipkart Minutes' },
  { id: 'c2-5', type: 'video', src: '/WhatsApp Video 2026-06-10 at 22.39.24.mp4', brand: 'boAt' },
];

const stats = [
  { number: '30,000+', label: 'Verified Creators' },
  { number: '500+', label: 'Brands Scaled' },
  { number: '₹25Cr+', label: 'Campaign Budget Executed' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
});

const FloatingSocialIcon = ({ Icon, color, className, delay, yRange = [10, -10] }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: [0, 0.9, 0.9],
      scale: 1,
      y: yRange,
      rotate: [-5, 5, -5],
    }}
    transition={{
      y: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      },
      rotate: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      },
      opacity: { duration: 1, delay: 0.5 },
      scale: { duration: 1, delay: 0.5 }
    }}
    className={`absolute w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl backdrop-blur-md bg-white/5 pointer-events-none z-0 ${className}`}
    style={{
      boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 20px ${color}1b`,
    }}
  >
    <Icon className="text-[24px]" style={{ color }} />
  </motion.div>
);

const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    const strength = 15;
    x.set((distanceX / (width / 2)) * strength);
    y.set((distanceY / (height / 2)) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const rotatingWords = ["Sales", "Trust", "ROI", "Growth"];


/* ─── Animated Word Component ─── */
const WordRotate = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block w-[120px] sm:w-[160px] lg:w-[220px] text-left align-bottom h-[1.15em] overflow-visible">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -50, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc201] to-[#ffd447] drop-shadow-sm font-bold"
          style={{ transformOrigin: 'center center' }}
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

/* ─── Brand Logo SVG Renderer ─── */
const BrandLogo = ({ brand }) => {
  switch (brand?.toLowerCase()) {
    case 'kurkure':
      return (
        <svg viewBox="0 0 100 100" className="w-[36px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wave ribbon background */}
          <path 
            d="M 8 58 C 8 38, 25 28, 50 43 C 75 58, 92 38, 92 23 C 92 43, 75 73, 50 63 C 25 53, 8 78, 8 58 Z" 
            fill="#0d3896" 
            stroke="#f57c00" 
            strokeWidth="2.5" 
            strokeLinejoin="round"
          />
          {/* Kurkure Text */}
          <text 
            x="50" 
            y="53" 
            fontFamily="'Arial Black', 'Impact', sans-serif" 
            fontWeight="900" 
            fontSize="20" 
            fill="#ffffff" 
            stroke="#d32f2f" 
            strokeWidth="2.5" 
            paintOrder="stroke fill"
            textAnchor="middle"
            transform="rotate(-7, 50, 53)"
          >
            Kurkure
          </text>
        </svg>
      );
    case 'santoor':
      return (
        <svg viewBox="0 0 100 85" className="w-[36px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Lotus flower at the top */}
          <g fill="#f57c00">
            <path d="M 50 10 C 53 16 57 20 50 30 C 43 20 47 16 50 10 Z" />
            <path d="M 50 30 C 42 27 38 18 43 14 C 45 18 47 24 50 30 Z" />
            <path d="M 50 30 C 35 32 30 25 38 21 C 41 23 44 27 50 30 Z" />
            <path d="M 50 30 C 58 27 62 18 57 14 C 55 18 53 24 50 30 Z" />
            <path d="M 50 30 C 65 32 70 25 62 21 C 59 23 56 27 50 30 Z" />
          </g>
          {/* Stylized SANTOOR text in red */}
          <text 
            x="50" 
            y="51" 
            fontFamily="'Playfair Display', 'Times New Roman', 'Georgia', serif" 
            fontWeight="900" 
            fontStyle="italic"
            fontSize="18" 
            fill="#d32f2f" 
            textAnchor="middle"
            letterSpacing="-0.6"
          >
            SANTOOR
          </text>
          {/* Orange crescent swoosh underneath */}
          <path 
            d="M 12 40 C 6 60, 40 76, 92 50 C 84 68, 38 68, 12 40 Z" 
            fill="#f57c00" 
          />
        </svg>
      );
    case 'paytm':
      return (
        <svg viewBox="0 0 100 100" className="w-[35px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blue circle outline */}
          <circle cx="50" cy="50" r="43" stroke="#002970" strokeWidth="5.5" fill="none" />
          {/* paytm text */}
          <text 
            x="50" 
            y="56" 
            fontFamily="'Inter', 'Arial Black', sans-serif" 
            fontWeight="900" 
            fontSize="19.5" 
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            <tspan fill="#002970">pay</tspan>
            <tspan fill="#00baf2">tm</tspan>
          </text>
        </svg>
      );
    case 'india gate':
    case 'india-gate':
    case 'indiagate':
      return (
        <svg viewBox="0 0 100 88" className="w-[35px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* WORLD'S NO.1 text */}
          <text 
            x="50" 
            y="7" 
            fontFamily="'Inter', sans-serif" 
            fontWeight="800" 
            fontSize="4.5" 
            fill="#5d251d" 
            textAnchor="middle" 
            letterSpacing="0.5"
          >
            WORLD&apos;S NO.1
          </text>
          
          {/* India Gate monument structure */}
          <g fill="#5d251d">
            <rect x="36" y="22" width="6" height="23" />
            <rect x="58" y="22" width="6" height="23" />
            <rect x="42" y="22" width="16" height="6" />
            <path d="M 42 28 L 42 32 Q 50 28 58 32 L 58 28 Z" />
            
            <rect x="34" y="19" width="32" height="3" />
            <rect x="36" y="16" width="28" height="3" />
            <rect x="39" y="13" width="22" height="3" />
            <rect x="44" y="10" width="12" height="3" />
          </g>

          {/* Brown text box */}
          <rect x="15" y="47" width="70" height="26" fill="#5d251d" rx="2" />
          <rect x="17" y="49" width="66" height="22" fill="none" stroke="#ffffff" strokeWidth="0.8" rx="1" />
          
          <text 
            x="50" 
            y="59" 
            fontFamily="'Montserrat', 'Arial Black', sans-serif" 
            fontWeight="900" 
            fontSize="9.5" 
            fill="#ffffff" 
            textAnchor="middle" 
            letterSpacing="0.8"
          >
            INDIA
          </text>
          <text 
            x="50" 
            y="68" 
            fontFamily="'Montserrat', 'Arial Black', sans-serif" 
            fontWeight="900" 
            fontSize="9.5" 
            fill="#ffffff" 
            textAnchor="middle" 
            letterSpacing="1"
          >
            GATE
          </text>
          
          {/* PURE BASMATI RICE text */}
          <text 
            x="50" 
            y="82" 
            fontFamily="'Inter', sans-serif" 
            fontWeight="700" 
            fontSize="4.8" 
            fill="#5d251d" 
            textAnchor="middle" 
            letterSpacing="0.8"
          >
            PURE BASMATI RICE
          </text>
        </svg>
      );
    case 'joy':
      return (
        <svg viewBox="0 0 100 100" className="w-[36px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Green leaf shape representing Joy brand */}
          <path 
            d="M 12 52 C 12 28, 35 14, 88 14 C 88 38, 65 52, 12 52 Z" 
            fill="#0b7537" 
          />
          {/* Subtle curve outline beneath leaf */}
          <path 
            d="M 12 52 C 20 57, 45 57, 88 38" 
            stroke="#b0bec5" 
            strokeWidth="2.5" 
            strokeLinecap="round"
          />
          {/* Elegant serif JOY text inside the leaf */}
          <text
            x="50"
            y="41"
            fontFamily="'Cinzel', 'Times New Roman', 'Georgia', serif"
            fontWeight="700"
            fontSize="19"
            fill="#ffffff"
            textAnchor="middle"
            letterSpacing="1"
          >
            JOY
          </text>
          {/* Slogan "beautiful by nature" below leaf */}
          <text
            x="50"
            y="70"
            fontFamily="'Playfair Display', 'Georgia', serif"
            fontStyle="italic"
            fontWeight="600"
            fontSize="8.5"
            fill="#0b7537"
            textAnchor="middle"
            letterSpacing="0.2"
          >
            beautiful by nature
          </text>
        </svg>
      );
    case 'tira':
      return (
        <svg viewBox="0 0 100 100" className="w-[36px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Peach circular background */}
          <circle cx="50" cy="50" r="48" fill="#FADCD5" />
          {/* lowercase "tira" text in red */}
          <text
            x="50"
            y="58"
            fontFamily="'Comfortaa', 'Fredoka', 'Quicksand', 'Inter', sans-serif"
            fontWeight="700"
            fontSize="29"
            fill="#E31C23"
            textAnchor="middle"
            letterSpacing="-0.8"
          >
            tira
          </text>
        </svg>
      );
    case 'maggi':
      return (
        <svg viewBox="0 0 100 100" className="w-[36px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Yellow rounded rectangle block */}
          <rect x="5" y="12" width="90" height="76" rx="14" fill="#FFD200" />
          {/* Red shield/heart-like shape */}
          <path 
            d="M 15 48 C 15 32, 32 24, 50 24 C 68 24, 85 32, 85 48 C 85 58, 68 64, 50 74 C 32 64, 15 58, 15 48 Z" 
            fill="#d32f2f" 
          />
          {/* "Maggi" text in yellow */}
          <text
            x="50"
            y="54"
            fontFamily="'Arial Black', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="17.5"
            fill="#FFD200"
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            Maggi
          </text>
        </svg>
      );
    case 'google gemini':
    case 'googlegemini':
    case 'gemini':
      return (
        <svg viewBox="0 0 100 100" className="w-[32px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gemini-grad" x1="15%" y1="15%" x2="85%" y2="85%">
              <stop offset="0%" stopColor="#ff4e50" />
              <stop offset="35%" stopColor="#fbc02d" />
              <stop offset="70%" stopColor="#4caf50" />
              <stop offset="100%" stopColor="#2196f3" />
            </linearGradient>
          </defs>
          <path 
            d="M 50 12 C 50 36, 64 50, 88 50 C 64 50, 50 64, 50 88 C 50 64, 36 50, 12 50 C 36 50, 50 36, 50 12 Z" 
            fill="url(#gemini-grad)" 
          />
        </svg>
      );
    case 'flipkart minutes':
    case 'flipkart-minutes':
    case 'flipkartminutes':
    case 'flipkart min':
    case 'flipkartmin':
      return (
        <svg viewBox="0 0 100 100" className="w-[35px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Crimson circle background matching Flipkart Minutes */}
          <circle cx="50" cy="50" r="48" fill="#95143a" />
          {/* White bold italic "Flipkart" text */}
          <text
            x="50"
            y="41"
            fontFamily="'Inter', 'Arial', sans-serif"
            fontWeight="800"
            fontStyle="italic"
            fontSize="12.5"
            fill="#ffffff"
            textAnchor="middle"
            letterSpacing="-0.2"
          >
            Flipkart
          </text>
          {/* Yellow ultra-bold italic "MINUTES" text */}
          <text
            x="50"
            y="64"
            fontFamily="'Impact', 'Arial Black', sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="16.5"
            fill="#FFE300"
            textAnchor="middle"
            letterSpacing="-0.4"
          >
            MINUTES
          </text>
        </svg>
      );
    case 'boat':
      return (
        <svg viewBox="0 0 100 40" className="w-10 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50" y="26" fontFamily="'Inter', Arial, sans-serif" fontWeight="900" fontSize="19" fill="#e53935" textAnchor="middle" letterSpacing="0.5">boAt</text>
        </svg>
      );
    default:
      return <span className="font-display text-[9px] font-extrabold tracking-wider text-[#091337] uppercase">{brand}</span>;
  }
};

/* ─── Premium Sleek Media Card with Floating Brand Logo Badge ─── */
const MediaCard = ({ item }) => (
  <div className="relative w-full aspect-[4/5] mb-8 group cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-3">
    {/* Inner Rounded Media Card */}
    <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#091337] shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.06)] group-hover:shadow-[0_40px_60px_rgba(222,13,64,0.25)] transition-shadow duration-700">
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />

      {/* Subtle Inner Shadow overlay */}
      <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-[24px] pointer-events-none" />

      {/* Minimal Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
        <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500 ease-out">
          <svg className="w-6 h-6 text-[#111] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>
    </div>

    {/* Floating Brand Logo Badge overlapping borders */}
    {item.brand && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border border-gray-200/10 shadow-[0_4px_15px_rgba(0,0,0,0.15)] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        <BrandLogo brand={item.brand} />
      </div>
    )}
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#0f1634] text-white overflow-hidden">

      {/* ─── Animated Premium Background ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Glowing Animated Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-red-950/20 rounded-full mix-blend-screen filter blur-[140px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-purple-950/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
        {/* Cinematic Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 pt-32 pb-16 lg:pt-40 lg:pb-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-12 min-h-screen relative z-10">

        {/* ─── LEFT COLUMN (48%) ─── */}
        <div className="w-full lg:w-[48%] flex flex-col justify-center relative z-20">

          {/* Floating Glassmorphic Social Icons */}
          <FloatingSocialIcon Icon={FaInstagram} color="#e1306c" className="-top-10 -left-10 lg:-left-20" delay={0} />
          <FloatingSocialIcon Icon={FaYoutube} color="#ff0000" className="top-1/4 -right-10 lg:-right-20" delay={2} yRange={[-12, 12]} />
          <FloatingSocialIcon Icon={FaLinkedinIn} color="#0077b5" className="bottom-0 left-10" delay={4} yRange={[8, -8]} />

          <motion.div {...fadeUp(0.1)} className="mb-6 z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/5 border border-white/10 shadow-[0_2px_15px_rgba(0,0,0,0.2)] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#de0d40] animate-pulse" />
              <span className="font-label text-[10px] text-gray-300 tracking-[0.15em] font-semibold uppercase">
                India&apos;s Top Influencer Marketing Agency
              </span>
            </div>
          </motion.div>

          {/* Stark, Clean, Massive Headline */}
          <motion.h1 {...fadeUp(0.3)} className="mb-8 z-10">
            <span className="block text-[44px] sm:text-[60px] lg:text-[72px] xl:text-[80px] font-bold tracking-tighter leading-[1.05]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Drive <WordRotate />
            </span>
            <span className="block text-[36px] sm:text-[48px] lg:text-[60px] xl:text-[68px] font-semibold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mt-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              With Vetted Creators.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.5)}
            className="text-[17px] sm:text-[19px] text-gray-300 font-normal leading-[1.65] max-w-[540px] mb-12 z-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A smart and strategic company uncovering hidden opportunities for creators and connecting brands with exceptional talent✨🎀
          </motion.p>

          <motion.div {...fadeUp(0.7)} className="flex flex-wrap items-center gap-4 mb-16 z-10">
            <MagneticButton>
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#de0d40] to-[#ff2a5f] text-white text-[13px] font-semibold tracking-widest uppercase px-10 py-4.5 rounded-full overflow-hidden hover:shadow-[0_12px_30px_rgba(222,13,64,0.35)] transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>
                  Start a Campaign
                  <span className="text-[16px] font-light ml-2 group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
                </span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#services"
                className="btn-gradient inline-flex items-center justify-center gap-2 px-10 py-4.5 rounded-full text-[13px] font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>Our Services</span>
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div {...fadeUp(0.9)} className="flex items-center gap-0 max-w-max z-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="text-left pr-8 first:pl-0">
                  <span className="block text-[32px] sm:text-[36px] font-bold text-white tracking-tighter mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {stat.number}
                  </span>
                  <span className="font-label text-[10px] text-gray-400 tracking-[0.1em] font-semibold">
                    {stat.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-[1px] h-12 bg-white/10 mx-4" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── RIGHT COLUMN (52%) ─── */}
        <div className="hidden lg:block w-full lg:w-[52%] h-[850px] relative">

          {/* Vertical Fades */}
          <div className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #0f1634 0%, transparent 12%, transparent 88%, #0f1634 100%)'
            }}
          />

          <div className="relative w-full h-full overflow-hidden flex gap-4 z-10 px-2">

            {/* Column 1 */}
            <div className="w-1/3 overflow-hidden relative">
              <div className="flex flex-col animate-marquee-vertical hover:[animation-play-state:paused]">
                {[...col1Media, ...col1Media, ...col1Media].map((item, i) => (
                  <MediaCard key={`col1-${i}`} item={item} />
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="w-1/3 overflow-hidden relative pt-20">
              <div className="flex flex-col animate-marquee-vertical-reverse hover:[animation-play-state:paused]">
                {[...col2Media, ...col2Media, ...col2Media, ...col2Media].map((item, i) => (
                  <MediaCard key={`col2-${i}`} item={item} />
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="w-1/3 overflow-hidden relative pt-10">
              <div className="flex flex-col animate-marquee-vertical hover:[animation-play-state:paused]">
                {[...col3Media, ...col3Media, ...col3Media, ...col3Media].map((item, i) => (
                  <MediaCard key={`col3-${i}`} item={item} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-6 overflow-hidden bg-[#091337]/80 backdrop-blur-lg z-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clientBrands, ...clientBrands, ...clientBrands].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="font-label text-[11px] text-gray-400 tracking-[0.25em] font-semibold mx-12 hover:text-[#de0d40] transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
