import { motion } from 'framer-motion';

const services = [
  { icon: '📱', title: 'Instagram Campaigns', desc: 'Hyper-targeted campaigns with verified nano, micro and macro influencers for authentic engagement.', stat: '60% avg. engagement lift' },
  { icon: '▶️', title: 'YouTube Integrations', desc: 'Long-form brand storytelling and product integrations with India\'s top YouTube creators.', stat: '10M+ total reach delivered' },
  { icon: '🎬', title: 'Reels & Short Video', desc: 'Viral short-form content strategies for Instagram Reels and YouTube Shorts.', stat: '3x average virality rate' },
  { icon: '⭐', title: 'Celebrity Brand Deals', desc: 'End-to-end celebrity endorsement deals, negotiations and campaign execution.', stat: '200+ deals closed' },
  { icon: '📊', title: 'Campaign Analytics', desc: 'Real-time reporting on reach, engagement, conversions and ROI across every platform.', stat: 'Full transparency' },
  { icon: '🤝', title: 'Influencer Matchmaking', desc: 'Smart matching based on audience demographics, brand values and campaign goals.', stat: '500+ vetted creators' },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#FAF8F4] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-label text-[12px] gold-text tracking-[0.15em] mb-4 block"
          >
            WHAT WE DO
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold tracking-tight leading-[1.1]"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#1a1a1a] to-[#888]">
              Full-Spectrum Influence
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#B8860B] to-[#8B6508]">
              Marketing Services
            </span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white border border-[rgba(0,0,0,0.07)] rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1 hover:border-[rgba(184,134,11,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            >
              {/* Icon */}
              <div className="w-[52px] h-[52px] rounded-full bg-[#F5EDD0] flex items-center justify-center mb-5">
                <span className="text-[24px]">{service.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold text-[#141414] tracking-tight mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#666] leading-[1.7] mb-5">
                {service.desc}
              </p>

              {/* Stat Pill */}
              <span className="inline-block font-label text-[10px] text-[#B8860B] bg-[#F5EDD0] border border-[#D4A017] px-3 py-1 rounded-full">
                {service.stat}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
