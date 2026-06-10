import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const clientBrands = ['BOAT', 'NYKAA', 'ZOMATO', 'MAMAEARTH', 'MEESHO', 'URBAN COMPANY', 'MYNTRA', 'FLIPKART'];

const col1Media = [
  { id: 'c1-1', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.13 (1).mp4' },
  { id: 'c1-2', type: 'photo', src: '/WhatsApp Image 2026-06-10 at 10.39.18.jpeg' },
  { id: 'c1-3', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.14 (1).mp4' },
  { id: 'c1-4', type: 'photo', src: '/WhatsApp Image 2026-06-10 at 10.39.18 (1).jpeg' },
  { id: 'c1-5', type: 'photo', src: '/WhatsApp Image 2026-06-10 at 10.39.19 (1).jpeg' },
];

const col2Media = [
  { id: 'c2-1', type: 'photo', src: '/WhatsApp Image 2026-06-10 at 10.39.18 (2).jpeg' },
  { id: 'c2-2', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.14 (2).mp4' },
  { id: 'c2-3', type: 'photo', src: '/WhatsApp Image 2026-06-10 at 10.39.19 (2).jpeg' },
  { id: 'c2-4', type: 'video', src: '/WhatsApp Video 2026-06-10 at 10.39.16 (1).mp4' },
  { id: 'c2-5', type: 'photo', src: '/WhatsApp Image 2026-06-10 at 10.39.19.jpeg' },
];

const stats = [
  { number: '500+', label: 'Influencers' },
  { number: '200+', label: 'Brand Clients' },
  { number: '₹10Cr+', label: 'Campaign Value' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
});

const rotatingWords = ["Sales", "Trust", "Reach", "Growth"];

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
    <span className="relative inline-block w-[180px] sm:w-[220px] lg:w-[280px] text-left align-bottom h-[1.1em] overflow-visible">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -50, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#D4A017] drop-shadow-sm"
          style={{ transformOrigin: 'center center' }}
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

/* ─── Ultra-Premium Sleek Media Card ─── */
const MediaCard = ({ item }) => (
  <div className="relative w-full aspect-[4/5] mb-6 rounded-[24px] overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.04)] group transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-3 hover:shadow-[0_40px_60px_rgba(184,134,11,0.15)] cursor-pointer">
    {/* Inner Media */}
    {item.type === 'video' ? (
      <video src={item.src} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
    ) : (
      <img src={item.src} alt="Campaign" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
    )}
    
    {/* Subtle Inner Shadow overlay */}
    <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] rounded-[24px] pointer-events-none" />
    
    {/* Minimal Play Button */}
    {item.type === 'video' && (
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/5 backdrop-blur-[2px]">
        <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500 ease-out">
          <svg className="w-6 h-6 text-[#111] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>
    )}
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#FFFFFF] overflow-hidden">
      
      {/* ─── Animated Premium Background ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Glowing Animated Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-200/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-yellow-100/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
        
        {/* Cinematic Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 pt-32 pb-16 lg:pt-40 lg:pb-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-12 min-h-screen relative z-10">

        {/* ─── LEFT COLUMN (55%) ─── */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center relative z-20">

          <motion.div {...fadeUp(0.1)} className="mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white border border-[rgba(0,0,0,0.06)] shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse-gold shadow-[0_0_8px_rgba(184,134,11,0.6)]" />
              <span className="font-label text-[10px] text-[#444] tracking-[0.15em] font-medium uppercase">
                Top Influencer Marketing Agency in India
              </span>
            </div>
          </motion.div>

          {/* Stark, Clean, Massive Headline */}
          <motion.h1 {...fadeUp(0.3)} className="mb-8">
            <span className="block text-[52px] sm:text-[68px] lg:text-[84px] xl:text-[96px] font-semibold tracking-tighter leading-[1.02] text-[#111]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Drive <WordRotate />
            </span>
            <span className="block text-[44px] sm:text-[56px] lg:text-[72px] xl:text-[80px] font-medium tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-[#555] to-[#999] mt-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              With Real Creators.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.5)}
            className="text-[18px] sm:text-[20px] text-[#555] font-normal leading-[1.6] tracking-wide max-w-[540px] mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Stop paying for vanity metrics and fake reach. We connect brands with vetted creators who deliver authentic engagement, actual conversions, and measurable ROI.
          </motion.p>

          <motion.div {...fadeUp(0.7)} className="flex flex-wrap items-center gap-5 mb-16">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-[#111] text-white text-[13px] font-medium tracking-widest uppercase px-10 py-4.5 rounded-full overflow-hidden hover:shadow-[0_12px_30px_rgba(184,134,11,0.25)] transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Start a Campaign
                <span className="text-[16px] font-light group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.9)} className="flex items-center gap-0 max-w-max">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="text-left pr-8 first:pl-0">
                  <span className="block text-[32px] sm:text-[36px] font-semibold text-[#111] tracking-tighter mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {stat.number}
                  </span>
                  <span className="font-label text-[10px] text-[#888] tracking-[0.1em] font-medium">
                    {stat.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-[1px] h-12 bg-[rgba(0,0,0,0.08)] mx-4" />
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
              background: 'linear-gradient(to bottom, #FFFFFF 0%, transparent 12%, transparent 88%, #FFFFFF 100%)'
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

      <div className="absolute bottom-0 left-0 right-0 border-t border-[rgba(0,0,0,0.04)] py-6 overflow-hidden bg-white/50 backdrop-blur-lg z-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clientBrands, ...clientBrands, ...clientBrands, ...clientBrands, ...clientBrands].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="font-label text-[11px] text-[#777] tracking-[0.25em] font-semibold mx-12"
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
