import { motion } from 'framer-motion';

const row1 = [
  { emoji: '🍕', name: 'Food', count: '85+ creators' },
  { emoji: '💄', name: 'Beauty', count: '120+ creators' },
  { emoji: '💪', name: 'Fitness', count: '60+ creators' },
  { emoji: '✈️', name: 'Travel', count: '45+ creators' },
  { emoji: '🎮', name: 'Gaming', count: '35+ creators' },
  { emoji: '👗', name: 'Fashion', count: '90+ creators' },
  { emoji: '🏠', name: 'Home Decor', count: '25+ creators' },
  { emoji: '📚', name: 'Education', count: '40+ creators' },
];

const row2 = [
  { emoji: '💰', name: 'Finance', count: '30+ creators' },
  { emoji: '🎬', name: 'Entertainment', count: '75+ creators' },
  { emoji: '🧘', name: 'Wellness', count: '50+ creators' },
  { emoji: '🌱', name: 'Sustainability', count: '20+ creators' },
  { emoji: '🐾', name: 'Pets', count: '28+ creators' },
  { emoji: '🚗', name: 'Auto', count: '22+ creators' },
  { emoji: '👶', name: 'Parenting', count: '35+ creators' },
  { emoji: '🎵', name: 'Music', count: '55+ creators' },
];

const platforms = [
  'Instagram', 'YouTube', 'Facebook', 'Reels', 'Snapchat', 'LinkedIn', 'Moj', 'Josh', 'ShareChat',
];

const MarqueeCard = ({ emoji, name, count }) => (
  <div className="flex-shrink-0 bg-white border border-[rgba(0,0,0,0.07)] rounded-xl px-5 py-4 min-w-[180px] flex items-center gap-3 hover:border-[rgba(184,134,11,0.25)] transition-colors duration-300">
    <span className="text-[28px]">{emoji}</span>
    <div>
      <p className="text-[14px] font-medium text-[#141414]">{name}</p>
      <p className="font-label text-[11px] text-[#999]">{count}</p>
    </div>
  </div>
);

const InfluencerMarquee = () => {
  return (
    <section id="influencers" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-[#1a1a1a] to-[#888]"
        >
          500+ Influencers Across Every Niche
        </motion.h2>
      </div>

      {/* Row 1 — scrolls LEFT */}
      <div className="mb-4 overflow-hidden">
        <div className="flex gap-4 animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...row1, ...row1].map((item, i) => (
            <MarqueeCard key={`r1-${i}`} {...item} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls RIGHT */}
      <div className="mb-14 overflow-hidden">
        <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...row2, ...row2].map((item, i) => (
            <MarqueeCard key={`r2-${i}`} {...item} />
          ))}
        </div>
      </div>

      {/* Platform Pills */}
      <div className="flex flex-wrap justify-center gap-3 max-w-[1200px] mx-auto px-6">
        {platforms.map((p) => (
          <span
            key={p}
            className="font-label text-[11px] text-[#555] bg-[#F5F0E8] border border-[rgba(0,0,0,0.08)] rounded-full px-4 py-1.5"
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  );
};

export default InfluencerMarquee;
