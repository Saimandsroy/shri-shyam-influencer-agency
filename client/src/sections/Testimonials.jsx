import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'Sri Shyam agency delivered 10x ROI on our Diwali campaign. Their influencer matching is unmatched in India.', name: 'Rohit Sharma', role: 'CMO, StyleBazaar', rating: 5 },
  { quote: 'The team understood our brand voice and found creators who genuinely loved our product. Sales doubled in 3 weeks.', name: 'Priya Mehta', role: 'Founder, GlowUp Cosmetics', rating: 5 },
  { quote: 'Transparent reporting, strong creator relationships, and results that exceeded every KPI. Will work again!', name: 'Aakash Gupta', role: 'Marketing Head, TechGadgetsIN', rating: 5 },
  { quote: 'From nano to celebrity — they have it all. Our reach went from 1M to 15M in a single month.', name: 'Sneha Kapoor', role: 'Brand Manager, FoodieFirst', rating: 5 },
  { quote: 'Best influencer marketing team I\'ve worked with. Creative, data-driven and always on deadline.', name: 'Vivek Nair', role: 'CEO, FitLife India', rating: 5 },
];

const getInitials = (name) => {
  return name.split(' ').map((w) => w[0]).join('');
};

const TestimonialCard = ({ t, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white border border-[rgba(9,19,56,0.06)] shadow-[0_10px_30px_rgba(9,19,55,0.02)] rounded-2xl p-6 mb-4 break-inside-avoid"
  >
    {/* Stars */}
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: t.rating }).map((_, i) => (
        <span key={i} className="text-[#ffc201] text-[16px]">★</span>
      ))}
    </div>

    {/* Quote */}
    <p className="text-[15px] italic text-[#4a5568] leading-[1.8] mb-5">
      &ldquo;{t.quote}&rdquo;
    </p>

    {/* Divider */}
    <div className="w-full h-px bg-[rgba(9,19,56,0.06)] mb-4" />

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
        <span className="text-[13px] font-semibold text-[#de0d40]">
          {getInitials(t.name)}
        </span>
      </div>
      <div>
        <p className="text-[14px] font-bold text-[#091337]">{t.name}</p>
        <p className="font-label text-[12px] text-gray-400">{t.role}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-label text-[12px] text-[#de0d40] tracking-[0.15em] mb-4 block"
          >
            CLIENT LOVE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[36px] sm:text-[44px] lg:text-[48px] font-semibold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-[#091337] to-[#4a5568]"
          >
            Trusted by India&apos;s Fastest<br className="hidden sm:block" /> Growing Brands
          </motion.h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
