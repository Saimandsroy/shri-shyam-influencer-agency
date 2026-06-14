import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const PlatformMarketing = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#f6faff] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 space-y-16">

        {/* ─── YOUTUBE SECTION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#0d0220] rounded-[32px] p-8 lg:p-14 text-white overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Subtle glow background */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-transparent border-2 border-white/25 rounded-full">
                <FaYoutube className="text-[#ff0000] w-6 h-6 flex-shrink-0" />
                <span className="font-display text-[16px] sm:text-[20px] font-bold tracking-tight text-white">
                  YouTube Influencer Marketing
                </span>
              </div>

              {/* Subheading */}
              <p className="text-[15px] sm:text-[17px] text-gray-300 font-normal leading-relaxed">
                Influence your potential customers on YouTube through top Youtubers
              </p>

              {/* Hire Button */}
              <div>
                <a
                  href="#contact"
                  className="inline-block bg-white text-[#ff0000] font-display text-[15px] font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                >
                  Hire Top Youtubers
                </a>
              </div>

              {/* Bullets grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-4 border-t border-white/10">
                {[
                  'Unboxing Videos',
                  'Vlogs',
                  'Product Videos',
                  'Community Posts',
                  'Long & Short Format',
                  'Memes',
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0" />
                    <span className="text-[14px] sm:text-[15px] text-gray-300 font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              {/* Mockup decoration dots */}
              <div className="absolute -top-6 left-6 flex gap-1 font-mono text-[5px] text-white/30 tracking-widest uppercase">
                . . . . . . . . . . .
              </div>

              {/* YouTube Video Mockup Frame */}
              <div className="relative w-full max-w-[440px] aspect-[16/10] bg-white rounded-xl p-2.5 shadow-2xl border border-white/10">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-black aspect-video">
                  <video
                    src="/WhatsApp Video 2026-06-10 at 10.39.13.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Mockup UI at the bottom */}
                <div className="flex justify-between items-center mt-2 px-1">
                  <div className="w-4 h-4 rounded-full bg-gray-300" />
                  <div className="flex gap-2.5 flex-1 mx-3">
                    <div className="h-2 w-14 bg-gray-300 rounded-full" />
                    <div className="h-2 w-8 bg-gray-200 rounded-full" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-2 bg-gray-300 rounded-full" />
                    <div className="w-6 h-2 bg-gray-200 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Small detail triangle decorator at the bottom */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/20 select-none text-[20px] font-light">
                ▽
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── INSTAGRAM SECTION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-[#833ab4] via-[#de0d40] to-[#fcb045] rounded-[32px] p-8 lg:p-14 text-white overflow-hidden shadow-2xl border border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-transparent border-2 border-white/25 rounded-full">
                <FaInstagram className="text-white w-6 h-6 flex-shrink-0" />
                <span className="font-display text-[16px] sm:text-[20px] font-bold tracking-tight text-white">
                  Instagram Influencer Marketing
                </span>
              </div>

              {/* Subheading */}
              <p className="text-[15px] sm:text-[17px] text-gray-200 font-normal leading-relaxed">
                Inspire your prospects on Instagram through top Instagrammers in India.
              </p>

              {/* Hire Button */}
              <div>
                <a
                  href="#contact"
                  className="inline-block bg-white text-[#833ab4] font-display text-[15px] font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                >
                  Hire Top Instagramers
                </a>
              </div>

              {/* Bullets grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-4 border-t border-white/10">
                {[
                  'Posts',
                  'UGC',
                  'Stories',
                  'Reviews',
                  'Reels',
                  'Memes',
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0" />
                    <span className="text-[14px] sm:text-[15px] text-white/95 font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Media Column - Three Overlapping Phones */}
            <div className="lg:col-span-5 flex justify-center items-center h-[280px] sm:h-[350px] relative">
              <div className="relative w-full max-w-[320px] h-full flex justify-center items-center">

                {/* Left tilted phone */}
                <div className="absolute left-[-10px] sm:left-[-20px] top-[40px] w-[110px] sm:w-[140px] aspect-[9/19] bg-white rounded-[24px] p-1 shadow-2xl border border-white/20 transform -rotate-12 overflow-hidden z-10 transition-transform hover:scale-105 duration-300">
                  <div className="w-full h-full rounded-[21px] overflow-hidden bg-black">
                    <video
                      src="/WhatsApp Video 2026-06-10 at 10.39.13 (1).mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Center front phone */}
                <div className="absolute w-[125px] sm:w-[155px] aspect-[9/19] bg-white rounded-[28px] p-[5px] shadow-2xl border-2 border-white/40 overflow-hidden z-25 transition-transform hover:scale-105 duration-300">
                  <div className="w-full h-full rounded-[24px] overflow-hidden bg-black relative">
                    <video
                      src="/WhatsApp Video 2026-06-10 at 10.39.14 (1).mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    {/* Small user label mockup overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-[7px] sm:text-[9px] text-white/80 font-medium pointer-events-none drop-shadow-sm bg-black/10 px-1 py-0.5 rounded">
                      Dandruff Routine
                    </div>
                  </div>
                </div>

                {/* Right tilted phone */}
                <div className="absolute right-[-10px] sm:right-[-20px] top-[40px] w-[110px] sm:w-[140px] aspect-[9/19] bg-white rounded-[24px] p-1 shadow-2xl border border-white/20 transform rotate-12 overflow-hidden z-10 transition-transform hover:scale-105 duration-300">
                  <div className="w-full h-full rounded-[21px] overflow-hidden bg-black relative">
                    <video
                      src="/WhatsApp Video 2026-06-10 at 10.39.14 (2).mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-2 text-[6px] sm:text-[8px] text-white/70">
                      ASMR night time routine
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── LINKEDIN SECTION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#0d5bbb] rounded-[32px] p-8 lg:p-14 text-white overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Subtle glow background */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-transparent border-2 border-white/25 rounded-full">
                <FaLinkedinIn className="text-white w-5 h-5 flex-shrink-0" />
                <span className="font-display text-[16px] sm:text-[20px] font-bold tracking-tight text-white">
                  LinkedIn Influencer Marketing
                </span>
              </div>

              {/* Subheading */}
              <p className="text-[15px] sm:text-[17px] text-gray-200 font-normal leading-relaxed">
                Influence leading professionals on Linkedin through our services
              </p>

              {/* Hire Button */}
              <div>
                <a
                  href="#contact"
                  className="inline-block bg-white text-[#0d5bbb] font-display text-[15px] font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                >
                  Hire Linkedin Influencers
                </a>
              </div>

              {/* Bullets grid (Grynow bullet options) */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-4 border-t border-white/10">
                {[
                  'Brand Awareness',
                  'Sign-Up Driven Launches',
                  'TVC Amplification',
                  'Targeted Talent Acquisition',
                  'Linkedin Page Growth',
                  'Visibility Boost',
                  'Hiring Campaigns',
                  'Credibility Boost',
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0" />
                    <span className="text-[14px] sm:text-[15px] text-gray-300 font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Media Column - Three Overlapping LinkedIn Phones */}
            <div className="lg:col-span-5 flex justify-center items-center h-[280px] sm:h-[350px] relative">
              <div className="relative w-full max-w-[320px] h-full flex justify-center items-center">

                {/* Left tilted phone */}
                <div className="absolute left-[-15px] sm:left-[-25px] top-[40px] w-[105px] sm:w-[135px] aspect-[9/19] bg-white rounded-[24px] p-1 shadow-2xl border border-white/20 transform -rotate-12 overflow-hidden z-10 transition-transform hover:scale-105 duration-300">
                  <div className="w-full h-full rounded-[21px] overflow-hidden bg-black">
                    <video
                      src="/WhatsApp Video 2026-06-10 at 10.39.16.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Center front phone */}
                <div className="absolute w-[120px] sm:w-[150px] aspect-[9/19] bg-white rounded-[28px] p-[5px] shadow-2xl border-2 border-white/40 overflow-hidden z-25 transition-transform hover:scale-105 duration-300">
                  <div className="w-full h-full rounded-[24px] overflow-hidden bg-black">
                    <video
                      src="/WhatsApp Video 2026-06-10 at 10.39.16 (1).mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right tilted phone */}
                <div className="absolute right-[-15px] sm:right-[-25px] top-[40px] w-[105px] sm:w-[135px] aspect-[9/19] bg-white rounded-[24px] p-1 shadow-2xl border border-white/20 transform rotate-12 overflow-hidden z-10 transition-transform hover:scale-105 duration-300">
                  <div className="w-full h-full rounded-[21px] overflow-hidden bg-black">
                    <video
                      src="/WhatsApp Video 2026-06-10 at 10.39.16 (2).mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PlatformMarketing;
