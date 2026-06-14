import { motion } from 'framer-motion';
import { FiInstagram, FiYoutube, FiLinkedin, FiSmile, FiTrendingUp, FiCpu } from 'react-icons/fi';

const services = [
  {
    icon: FiInstagram,
    title: 'Instagram Campaigns & Reels',
    desc: 'Hyper-targeted influencer campaigns, product seedings, and video reels designed to trend and convert views into buyers.',
    stat: '3.8x Avg engagement lift',
    theme: 'group-hover:bg-gradient-to-tr group-hover:from-[#833ab4] group-hover:via-[#fd1d1d] group-hover:to-[#fcb045] group-hover:text-white',
    iconColor: 'text-[#e1306c]',
    pillBg: 'bg-pink-100 text-pink-700 border-pink-200'
  },
  {
    icon: FiYoutube,
    title: 'YouTube Creator Integrations',
    desc: 'Long-form dedicated reviews, product integrations, and storytelling with top-tier Indian tech, gaming, and lifestyle creators.',
    stat: '100M+ Campaign reach',
    theme: 'group-hover:bg-[#ff0000] group-hover:text-white',
    iconColor: 'text-[#ff0000]',
    pillBg: 'bg-red-100 text-red-700 border-red-200'
  },
  {
    icon: FiLinkedin,
    title: 'LinkedIn Thought Leadership',
    desc: 'Connect B2B brands and fintech SaaS with verified industry experts, startup founders, and corporate influencers.',
    stat: 'High-quality B2B leads',
    theme: 'group-hover:bg-[#0077b5] group-hover:text-white',
    iconColor: 'text-[#0077b5]',
    pillBg: 'bg-blue-100 text-blue-700 border-blue-200'
  },
  {
    icon: FiSmile,
    title: 'Meme Marketing & Amplification',
    desc: 'Viral meme pages orchestration, cultural hijacking, and micro-content coordination to drive buzz and massive search query spikes.',
    stat: '3x Average virality rate',
    theme: 'group-hover:bg-[#ffc201] group-hover:text-[#091337]',
    iconColor: 'text-[#b8860b]',
    pillBg: 'bg-amber-100 text-amber-700 border-amber-200'
  },
  {
    icon: FiTrendingUp,
    title: 'Celebrity Endorsements',
    desc: 'End-to-end celebrity tie-ups, negotiations, media rights, and mega scale branding campaigns with stars and athletes.',
    stat: '200+ Deals closed',
    theme: 'group-hover:bg-[#504ed8] group-hover:text-white',
    iconColor: 'text-[#504ed8]',
    pillBg: 'bg-indigo-100 text-indigo-700 border-indigo-200'
  },
  {
    icon: FiCpu,
    title: 'AI Dashboard & Matchmaking',
    desc: 'Real-time campaign reporting tracking ROAS, demographics analysis, and smart influencer matches with no manual overhead.',
    stat: '100% Transparent logs',
    theme: 'group-hover:bg-[#091337] group-hover:text-white',
    iconColor: 'text-gray-600',
    pillBg: 'bg-gray-100 text-gray-700 border-gray-200'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-[#f6faff] py-20 lg:py-28 text-[#091337]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-label text-[12px] text-[#de0d40] tracking-[0.15em] mb-4 block"
          >
            OUR PLATFORMS & SERVICES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold tracking-tight leading-[1.1] text-[#091337] mb-6"
          >
            Data-Driven Marketing Across <span className="underline-brand">Every Channel.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-gray-600"
          >
            We deploy targeted campaigns across premium platforms, connecting your brand with the creators your customers follow every single day.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-white border border-[rgba(9,19,55,0.06)] rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(9,19,55,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className={`w-[52px] h-[52px] rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 transition-all duration-300 ${service.theme}`}>
                  <service.icon size={22} className={`transition-colors duration-300 ${service.iconColor} group-hover:text-white`} />
                </div>

                {/* Title */}
                <h3 className="text-[19px] font-semibold tracking-tight text-[#091337] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-gray-500 leading-[1.7] mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Stat Pill */}
              <div>
                <span className={`inline-block font-label text-[10px] px-3.5 py-1 rounded-full font-semibold border ${service.pillBg}`}>
                  {service.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
