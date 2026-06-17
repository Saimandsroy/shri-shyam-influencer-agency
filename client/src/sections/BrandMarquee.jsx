import { motion } from 'framer-motion';

/* Each brand has its real brand color + a matching symbol */
const row1Brands = [
  { name: 'Flipkart',       color: '#F7C300', symbol: '⚡' },
  { name: 'Plum',           color: '#6b2fa0', symbol: '🌿' },
  { name: 'Santoor',        color: '#e67e22', symbol: '🌸' },
  { name: 'Tira',           color: '#e91e8c', symbol: '✨' },
  { name: 'Kapiva',         color: '#2e7d32', symbol: '🌱' },
  { name: 'Dot & Key',      color: '#003399', symbol: '✦' },
  { name: 'Kurkure',        color: '#e53935', symbol: '🌶️' },
  { name: 'Google Gemini',  color: '#4285F4', symbol: '✦' },
];

const row2Brands = [
  { name: 'Joy',                  color: '#e53935', symbol: '😊' },
  { name: 'Maggi',                color: '#cc0000', symbol: '🍜' },
  { name: 'India Gate',           color: '#8d1c1c', symbol: '🏛️' },
  { name: 'Paytm',                color: '#00BAF2', symbol: '💳' },
  { name: 'Foxtale',              color: '#c96a10', symbol: '🦊' },
  { name: 'Swiss Beauty',         color: '#8e24aa', symbol: '💄' },
  { name: 'Pilgrim',              color: '#1b5e20', symbol: '🧴' },
  { name: 'Bambu Lab 3D Printer', color: '#1565c0', symbol: '🖨️' },
];

const BrandMarquee = () => {
  return (
    <section className="bg-[#f6faff] py-14 lg:py-20 overflow-hidden relative border-t border-b border-[rgba(9,19,55,0.06)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(80,78,216,0.04),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(222,13,64,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 mb-10 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-label text-[10px] text-[#504ed8] tracking-[0.2em] font-bold mb-3 block"
        >
          BRAND COLLABORATIONS
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[20px] sm:text-[26px] font-semibold text-[#091337] tracking-tight"
        >
          Trusted by India's Top Brands for Strategic Campaigns
        </motion.h3>
      </div>

      {/* Row 1 — Left to Right */}
      <div
        className="flex overflow-hidden py-3 select-none w-full mb-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent, white 12%, white 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, white 12%, white 88%, transparent)',
        }}
      >
        <div className="flex gap-5 animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...row1Brands, ...row1Brands, ...row1Brands].map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white border border-[rgba(9,19,55,0.08)] rounded-2xl px-7 py-4 min-w-[170px] flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(9,19,55,0.04)] hover:shadow-[0_8px_25px_rgba(9,19,55,0.10)] hover:-translate-y-0.5 transition-all duration-300 group"
              style={{ '--brand-color': brand.color }}
            >
              <span className="text-[16px] leading-none">{brand.symbol}</span>
              <span
                className="text-[14px] font-bold tracking-wide whitespace-nowrap"
                style={{ color: brand.color }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Right to Left */}
      <div
        className="flex overflow-hidden py-3 select-none w-full"
        style={{
          maskImage: 'linear-gradient(to right, transparent, white 12%, white 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, white 12%, white 88%, transparent)',
        }}
      >
        <div className="flex gap-5 animate-marquee-reverse whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...row2Brands, ...row2Brands, ...row2Brands].map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white border border-[rgba(9,19,55,0.08)] rounded-2xl px-7 py-4 min-w-[170px] flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(9,19,55,0.04)] hover:shadow-[0_8px_25px_rgba(9,19,55,0.10)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-[16px] leading-none">{brand.symbol}</span>
              <span
                className="text-[14px] font-bold tracking-wide whitespace-nowrap"
                style={{ color: brand.color }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
