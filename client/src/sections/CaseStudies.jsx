import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiX } from 'react-icons/hi';

const caseStudies = [
  {
    brand: 'boAt Lifestyle',
    campaign: 'RockerZ 255 Pro Launch',
    video: '/WhatsApp Video 2026-06-10 at 10.39.16 (2).mp4',
    poster: '/WhatsApp Image 2026-06-10 at 10.39.19 (1).jpeg',
    metrics: [
      { value: '12M+', label: 'Reach' },
      { value: '8.4%', label: 'Engagement' },
      { value: '340%', label: 'Sales Lift' },
    ],
    platforms: ['YouTube', 'Instagram'],
    influencers: 48,
    days: 30,
  },
  {
    brand: 'Nykaa',
    campaign: 'Festive Sale 2024',
    video: '/WhatsApp Video 2026-06-10 at 10.39.17.mp4',
    poster: '/WhatsApp Image 2026-06-10 at 10.39.19 (2).jpeg',
    metrics: [
      { value: '28M+', label: 'Reach' },
      { value: '6.2%', label: 'Engagement' },
      { value: '₹4.2Cr', label: 'Revenue' },
    ],
    platforms: ['Reels', 'YouTube'],
    influencers: 120,
    days: 45,
  },
  {
    brand: 'Mamaearth',
    campaign: 'Onion Hair Care Series',
    video: '/WhatsApp Video 2026-06-10 at 10.39.13.mp4',
    poster: '/WhatsApp Image 2026-06-10 at 10.39.20.jpeg',
    metrics: [
      { value: '45M+', label: 'Reach' },
      { value: '3m 24s', label: 'Watch Time' },
      { value: '18,000+', label: 'New Customers' },
    ],
    platforms: ['YouTube', 'Facebook'],
    influencers: 85,
    days: 60,
  },
];

/* ─── Fullscreen Video Viewer ─── */
const VideoViewer = ({ src, title, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Close">
        <HiX size={20} />
      </button>
      <div className="absolute top-5 left-5 z-10">
        <p className="text-white text-[14px] font-medium">{title}</p>
      </div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <video src={src} controls autoPlay playsInline className="w-full h-full max-h-[85vh] object-contain bg-black rounded-2xl" />
      </motion.div>
    </motion.div>
  );
};

/* ─── Case Study Video Panel ─── */
const CaseStudyVideo = ({ src, poster, inViewport, onView }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inViewport) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inViewport]);

  return (
    <div
      className="relative w-full rounded-[20px] overflow-hidden bg-[#EDE8DF] cursor-pointer group"
      style={{ aspectRatio: '16/9' }}
      onClick={onView}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Hover play overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
        <div className="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.9)] flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-[#141414] ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

/* ─── Case Study Item ─── */
const CaseStudyItem = ({ study, index, onView }) => {
  const isEven = index % 2 === 1;
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  const textPanel = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-center"
    >
      <span className="font-label text-[11px] text-[#B8860B] tracking-[0.12em] mb-3">
        {study.brand.toUpperCase()}
      </span>

      <h3 className="text-[26px] sm:text-[32px] font-semibold text-[#141414] tracking-tight mb-6 leading-tight">
        {study.campaign}
      </h3>

      <div className="flex gap-6 mb-6">
        {study.metrics.map((m) => (
          <div key={m.label}>
            <span className="block text-[28px] sm:text-[36px] font-semibold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#B8860B] to-[#8B6508]">
              {m.value}
            </span>
            <span className="font-label text-[10px] text-[#999] mt-1 block">
              {m.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        {study.platforms.map((p) => (
          <span key={p} className="font-label text-[10px] text-[#555] bg-[#F5F0E8] border border-[rgba(0,0,0,0.08)] rounded-full px-3 py-1">
            {p}
          </span>
        ))}
        <span className="font-label text-[10px] text-[#999]">
          · {study.influencers} Influencers · {study.days} Days
        </span>
      </div>

      <button
        onClick={() => onView(study)}
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-[#B8860B] hover:underline transition-all cursor-pointer"
      >
        View Full Case Study
        <span>→</span>
      </button>
    </motion.div>
  );

  const videoPanel = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <CaseStudyVideo src={study.video} poster={study.poster} inViewport={inView} onView={() => onView(study)} />
    </motion.div>
  );

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${index > 0 ? 'mt-20 lg:mt-28' : ''}`}>
      {isEven ? (
        <>
          {textPanel}
          {videoPanel}
        </>
      ) : (
        <>
          {videoPanel}
          {textPanel}
        </>
      )}
    </div>
  );
};

/* ─── Case Studies Section ─── */
const CaseStudies = () => {
  const [viewing, setViewing] = useState(null);

  return (
    <>
      <section id="about" className="bg-[#FAF8F4] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6">

          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-label text-[12px] gold-text tracking-[0.15em] mb-4 block"
            >
              CASE STUDIES
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold tracking-tight leading-[1.1]"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#1a1a1a] to-[#888]">
                Campaigns That Delivered
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#B8860B] to-[#8B6508]">
                Real Results
              </span>
            </motion.h2>
          </div>

          {caseStudies.map((study, i) => (
            <CaseStudyItem key={study.brand} study={study} index={i} onView={setViewing} />
          ))}
        </div>
      </section>

      {/* Video Viewer Modal */}
      <AnimatePresence>
        {viewing && (
          <VideoViewer
            src={viewing.video}
            title={`${viewing.brand} — ${viewing.campaign}`}
            onClose={() => setViewing(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CaseStudies;
