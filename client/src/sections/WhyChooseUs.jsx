import { motion } from 'framer-motion';
import { FiTrendingUp, FiCpu, FiUsers, FiAward, FiShield, FiSmile } from 'react-icons/fi';

const features = [
  {
    icon: FiCpu,
    title: 'AI-Driven Platform & Dashboard',
    desc: 'Real-time campaign performance analytics, predictive engagement scoring, and automated creator matchmaking tools.',
    accent: 'from-[#504ed8] to-[#6d6af0]'
  },
  {
    icon: FiTrendingUp,
    title: 'Verified Sales & ROAS Focus',
    desc: 'We look beyond vanity metrics. Our strategies focus on authentic brand integrations that drive actual sales lift and conversions.',
    accent: 'from-[#de0d40] to-[#ff2a5f]'
  },
  {
    icon: FiUsers,
    title: 'Vetted Demographic Matchmaking',
    desc: 'Smart matchmaking based on audience demographics, age, location, and interests to reach the exact buyer profile.',
    accent: 'from-[#ffc201] to-[#ffd447]'
  },
  {
    icon: FiAward,
    title: '8+ Years Campaign Experience',
    desc: 'Dedicated team of brand managers and execution experts who have structured thousands of high-converting campaigns.',
    accent: 'from-[#504ed8] to-[#de0d40]'
  },
  {
    icon: FiShield,
    title: 'Transparent Reporting & Vetting',
    desc: 'Zero fake followers. Fully audited influencer profiles, contract guarantees, and clear pricing models.',
    accent: 'from-[#ffc201] to-[#ff2a5f]'
  },
  {
    icon: FiSmile,
    title: 'Enduring Partnerships',
    desc: 'Dedicated support managers and full-service campaign support from brief writing to final creator output.',
    accent: 'from-[#6d6af0] to-[#ffd447]'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-[#091337] text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(80,78,216,0.18),transparent_60%)] pointer-events-none" />
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 bg-[#de0d40]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-label text-[12px] text-[#ffc201] tracking-[0.15em] mb-4 block"
          >
            WHY BRANDS PARTNER WITH US
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold tracking-tight leading-[1.1] mb-6"
          >
            We Don&apos;t Just Book Creators.<br className="hidden sm:block" /> We{' '}
            <span className="text-[#ffc201]">Scale Brands.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[16px] text-gray-300 font-normal leading-[1.6]"
          >
            Sri Shyam Campaigning Agency bridges the gap between creative storytelling and hard analytical ROI. Here is why India&apos;s fastest-growing businesses choose us:
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative bg-[#0f1634]/60 border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 hover:border-[rgba(255,194,1,0.25)] hover:bg-[#16224f] transition-all duration-400"
            >
              {/* Dynamic Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#504ed8] to-[#de0d40] opacity-0 group-hover:opacity-5 transition-opacity duration-400 pointer-events-none" />

              {/* Icon Container */}
              <div className={`w-[52px] h-[52px] rounded-xl bg-gradient-to-br ${item.accent} p-[1px] mb-6 flex items-center justify-center`}>
                <div className="w-full h-full bg-[#0f1634] rounded-[11px] flex items-center justify-center text-white group-hover:scale-95 transition-transform duration-300">
                  <item.icon size={22} className="text-[#ffc201]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold text-white tracking-tight mb-3 group-hover:text-[#ffc201] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-400 leading-[1.7] group-hover:text-gray-300 transition-colors duration-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
