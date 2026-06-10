import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiX } from 'react-icons/hi';

const campaigns = [
  { id: 1, title: 'boAt × Tech Creators', platform: 'YouTube', views: '4.2M', size: 'large', src: '/WhatsApp Video 2026-06-10 at 10.39.13.mp4' },
  { id: 2, title: 'Nykaa × Beauty', platform: 'Instagram', views: '3.8M', size: 'large', src: '/WhatsApp Video 2026-06-10 at 10.39.13 (1).mp4' },
  { id: 3, title: 'Zomato × Food Vloggers', platform: 'Reels', views: '2.1M', size: 'large', src: '/WhatsApp Video 2026-06-10 at 10.39.14.mp4' },
  { id: 4, title: 'Mamaearth × Lifestyle', platform: 'Reels', views: '1.9M', size: 'small', src: '/WhatsApp Video 2026-06-10 at 10.39.14 (1).mp4' },
  { id: 5, title: 'Meesho × Fashion', platform: 'Instagram', views: '5.1M', size: 'small', src: '/WhatsApp Video 2026-06-10 at 10.39.14 (2).mp4' },
  { id: 6, title: 'boAt Rockerz × Music', platform: 'YouTube', views: '2.7M', size: 'small', src: '/WhatsApp Video 2026-06-10 at 10.39.16.mp4' },
  { id: 7, title: 'Urban Company', platform: 'Reels', views: '1.2M', size: 'small', src: '/WhatsApp Video 2026-06-10 at 10.39.16 (1).mp4' },
];

const platformColors = {
  YouTube: 'bg-red-500/10 text-red-600 border-red-200',
  Instagram: 'bg-purple-500/10 text-purple-600 border-purple-200',
  Reels: 'bg-pink-500/10 text-pink-600 border-pink-200',
};

/* ─── Fullscreen Video Viewer Modal ─── */
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
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Close viewer"
      >
        <HiX size={20} />
      </button>

      {/* Title */}
      <div className="absolute top-5 left-5 z-10">
        <p className="text-white text-[14px] font-medium">{title}</p>
      </div>

      {/* Video */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="w-full h-full max-h-[85vh] object-contain bg-black rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

/* ─── Video Card ─── */
const VideoCard = ({ campaign, isPortrait = false, onView }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.4 });

  const setRefs = (node) => {
    videoRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
        isPortrait ? 'aspect-[9/16]' : 'aspect-video'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onView(campaign)}
    >
      <video
        ref={setRefs}
        src={campaign.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* LIVE badge */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm px-2.5 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="font-label text-[9px] text-white tracking-wider">LIVE</span>
      </div>

      {/* Hover Play Button */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.9)] flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-[#141414] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
        <div>
          <p className="text-[14px] font-medium text-white mb-1.5">{campaign.title}</p>
          <span className={`inline-block font-label text-[10px] px-2 py-0.5 rounded-full border ${platformColors[campaign.platform] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
            {campaign.platform}
          </span>
        </div>
        <span className="font-label text-[12px] text-white/80">{campaign.views}</span>
      </div>
    </motion.div>
  );
};

/* ─── VideoReel Section ─── */
const VideoReel = () => {
  const largeVideos = campaigns.filter((c) => c.size === 'large');
  const smallVideos = campaigns.filter((c) => c.size === 'small');
  const [viewing, setViewing] = useState(null);

  return (
    <>
      <section id="campaigns" className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-label text-[12px] gold-text tracking-[0.15em] mb-4 block"
            >
              CAMPAIGN REELS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[36px] sm:text-[48px] font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#1a1a1a] to-[#888] mb-4"
            >
              See Real Campaigns
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[15px] text-[#666] font-normal tracking-wide"
            >
              Real brands. Real creators. Real results.
            </motion.p>
          </div>

          {/* Row 1: 3 Landscape Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {largeVideos.map((c) => (
              <VideoCard key={c.id} campaign={c} onView={setViewing} />
            ))}
          </div>

          {/* Row 2: 4 Portrait Videos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {smallVideos.map((c) => (
              <VideoCard key={c.id} campaign={c} isPortrait onView={setViewing} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Viewer Modal */}
      <AnimatePresence>
        {viewing && (
          <VideoViewer
            src={viewing.src}
            title={viewing.title}
            onClose={() => setViewing(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoReel;
