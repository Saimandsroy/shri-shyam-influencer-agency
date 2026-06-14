import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const clientBrands = ['ONEPLUS', 'GROWW', 'MEESHO', 'AMAZON', 'PAYTM', 'BOAT', 'NYKAA', 'ZOMATO', 'MAMAEARTH', 'MYNTRA', 'FLIPKART'];

const col1Media = [
  { id: 'c1-1', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.13 (1).mp4', brand: 'Sony' },
  { id: 'c1-2', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.16 (2).mp4', brand: 'Casio' },
  { id: 'c1-3', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.14 (1).mp4', brand: 'Re\'equil' },
  { id: 'c1-4', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.14 (2).mp4', brand: 'Beyoung' },
  { id: 'c1-5', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.17.mp4', brand: 'Ajmal' },
];

const col2Media = [
  { id: 'c2-1', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.13.mp4', brand: 'Saffola' },
  { id: 'c2-2', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.14.mp4', brand: 'Yamaha' },
  { id: 'c2-3', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.16.mp4', brand: 'Kapiva' },
  { id: 'c2-4', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.16 (1).mp4', brand: 'Ikonic' },
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
    case 'sony':
      return (
        <svg viewBox="0 0 100 35" className="w-10 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50" y="25" fontFamily="'Georgia', 'Times New Roman', serif" fontWeight="bold" fontSize="22" fill="#091337" textAnchor="middle" letterSpacing="1.5">SONY</text>
        </svg>
      );
    case 'casio':
      return (
        <svg viewBox="0 0 100 35" className="w-10 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50" y="25" fontFamily="'Inter', Arial, sans-serif" fontWeight="900" fontSize="18" fill="#0f2b5c" textAnchor="middle" letterSpacing="0.8">CASIO</text>
        </svg>
      );
    case 're\'equil':
    case 'reequil':
      return (
        <svg viewBox="0 0 100 45" className="w-[42px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50" y="22" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="11.5" fill="#083835" textAnchor="middle" letterSpacing="0.5">Re&apos;equil</text>
          <line x1="15" y1="28" x2="85" y2="28" stroke="#083835" strokeWidth="1.2" />
        </svg>
      );
    case 'beyoung':
      return (
        <svg viewBox="0 0 100 80" className="w-9 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="28" r="16" fill="#ffc201" />
          <path d="M43,24 Q50,15 57,24 Q50,26 43,24 Z" fill="#000" />
          <path d="M41,29 Q50,37 59,29 Q50,31 41,29 Z" fill="#000" />
          <text x="50" y="65" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="9" fill="#000" textAnchor="middle" letterSpacing="0.2">BEYOUNG</text>
        </svg>
      );
    case 'ajmal':
      return (
        <svg viewBox="0 0 100 80" className="w-10 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#b8860b">
            <path d="M50,8 L52,28 L48,28 Z" />
            <path d="M50,8 L55,28 L53,29 Z" />
            <path d="M50,8 L45,28 L47,29 Z" />
            <path d="M50,8 L58,28 L56,30 Z" />
            <path d="M50,8 L42,28 L44,30 Z" />
            <path d="M50,8 L61,29 L59,31 Z" />
            <path d="M50,8 L39,29 L41,31 Z" />
            <path d="M50,8 L64,30 L62,32 Z" />
            <path d="M50,8 L36,30 L38,32 Z" />
            <path d="M30,32 Q50,38 70,32 L70,35 Q50,41 30,35 Z" />
          </g>
          <rect x="22" y="42" width="56" height="15" fill="none" stroke="#b8860b" strokeWidth="1.5" rx="1.5" />
          <text x="50" y="53" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="9" fill="#b8860b" textAnchor="middle" letterSpacing="0.8">AJMAL</text>
        </svg>
      );
    case 'saffola':
      return (
        <svg viewBox="0 0 100 80" className="w-10 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,20 C42,8 24,11 24,28 C24,44 50,63 50,63 C50,63 76,44 76,28 C76,11 58,8 50,20 Z" fill="#ffeb3b" stroke="#d32f2f" strokeWidth="2.5" />
          <text x="50" y="36" fontFamily="'Inter', sans-serif" fontWeight="950" fontSize="10.5" fill="#d32f2f" textAnchor="middle">Saffola</text>
        </svg>
      );
    case 'yamaha':
      return (
        <svg viewBox="0 0 100 80" className="w-10 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="28" r="16" fill="none" stroke="#000" strokeWidth="2" />
          <g stroke="#000" strokeWidth="2.5" fill="none">
            <line x1="50" y1="28" x2="50" y2="42" />
            <path d="M46,34 Q50,30 54,34" />
            <line x1="50" y1="28" x2="62" y2="21" />
            <path d="M54,21 Q57,24 55,27" />
            <line x1="50" y1="28" x2="38" y2="21" />
            <path d="M46,21 Q43,24 45,27" />
          </g>
          <text x="50" y="64" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="9.5" fill="#000" textAnchor="middle" letterSpacing="0.5">YAMAHA</text>
        </svg>
      );
    case 'kapiva':
      return (
        <svg viewBox="0 0 100 40" className="w-10 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="20" rx="3" fill="#151515" />
          <text x="50" y="24" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="11.5" fill="#fff" textAnchor="middle" letterSpacing="1.2">KAPIVA</text>
        </svg>
      );
    case 'ikonic':
      return (
        <svg viewBox="0 0 100 80" className="w-10 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="38,20 40,24 44,24 41,26 42,30 38,28 34,30 35,26 32,24 36,24" fill="#de0d40" />
          <polygon points="50,15 52,19 56,19 53,21 54,25 50,23 46,25 47,21 44,19 48,19" fill="#de0d40" />
          <polygon points="62,20 64,24 68,24 65,26 66,30 62,28 58,30 59,26 56,24 60,24" fill="#de0d40" />
          <text x="50" y="52" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="12" fill="#091337" textAnchor="middle" letterSpacing="0.8">IKONIC</text>
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

        {/* ─── LEFT COLUMN (55%) ─── */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center relative z-20">

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
            We align brands with strategic social media influencers to drive authentic reach, hyper-targeted brand visibility, and direct campaign conversion.
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

        {/* ─── RIGHT COLUMN (45%) ─── */}
        <div className="hidden lg:block w-full lg:w-[45%] h-[850px] relative">

          {/* Vertical Fades */}
          <div className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #0f1634 0%, transparent 12%, transparent 88%, #0f1634 100%)'
            }}
          />

          <div className="relative w-full h-full overflow-hidden flex gap-6 z-10 px-2">

            <div className="w-1/2 overflow-hidden relative">
              <div className="flex flex-col animate-marquee-vertical hover:[animation-play-state:paused]">
                {[...col1Media, ...col1Media, ...col1Media].map((item, i) => (
                  <MediaCard key={`col1-${i}`} item={item} />
                ))}
              </div>
            </div>

            <div className="w-1/2 overflow-hidden relative pt-16">
              <div className="flex flex-col animate-marquee-vertical-reverse hover:[animation-play-state:paused]">
                {[...col2Media, ...col2Media, ...col2Media].map((item, i) => (
                  <MediaCard key={`col2-${i}`} item={item} />
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
