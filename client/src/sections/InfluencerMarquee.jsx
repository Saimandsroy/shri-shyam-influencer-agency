import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCheck, FiPlus, FiBriefcase, FiArrowRight, FiX } from 'react-icons/fi';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const categories = [
  { id: 'all', name: 'All Niche Categories', emoji: '🌟' },
  { id: 'beauty', name: 'Beauty & Fashion', emoji: '💄' },
  { id: 'tech', name: 'Tech & Gadgets', emoji: '📱' },
  { id: 'finance', name: 'Finance & Fintech', emoji: '💰' },
  { id: 'gaming', name: 'Gaming & Esport', emoji: '🎮' },
  { id: 'food', name: 'Food & Travel', emoji: '🍕' }
];

const tiers = [
  { id: 'all', name: 'All Tiers' },
  { id: 'micro', name: 'Micro (10K-100K)' },
  { id: 'mid', name: 'Mid-Tier (100K-500K)' },
  { id: 'mega', name: 'Mega (500K+)' }
];

const creatorsDb = [
  { name: 'Kavya Singhania', niche: 'beauty', platform: 'Instagram', followers: '840K', engagement: '5.8%', tier: 'mega', reach: '450K', image: '/WhatsApp Image 2026-06-10 at 10.39.18.jpeg', handle: '@kavya.styles' },
  { name: 'Megha Goel', niche: 'beauty', platform: 'Instagram', followers: '620K', engagement: '6.2%', tier: 'mega', reach: '380K', image: '/WhatsApp Image 2026-06-10 at 10.39.18 (1).jpeg', handle: '@meghagoel_tales' },
  { name: 'Rohan Verma', niche: 'beauty', platform: 'YouTube', followers: '1.2M', engagement: '4.9%', tier: 'mega', reach: '680K', image: '/WhatsApp Image 2026-06-10 at 10.39.18 (2).jpeg', handle: 'Rohan Style Vlogs' },
  { name: 'Ananya Sen', niche: 'beauty', platform: 'Instagram', followers: '85K', engagement: '8.4%', tier: 'micro', reach: '60K', image: '', handle: '@ananya_sensations' },
  { name: 'Ishaan Kapoor', niche: 'beauty', platform: 'Instagram', followers: '240K', engagement: '7.1%', tier: 'mid', reach: '180K', image: '', handle: '@ishaan.threads' },

  { name: 'Shlok Srivastava', niche: 'tech', platform: 'YouTube', followers: '3.4M', engagement: '6.5%', tier: 'mega', reach: '1.8M', image: '/WhatsApp Image 2026-06-10 at 10.39.19.jpeg', handle: 'Tech Burner' },
  { name: 'Amit Kumar', niche: 'tech', platform: 'YouTube', followers: '1.8M', engagement: '5.2%', tier: 'mega', reach: '950K', image: '/WhatsApp Image 2026-06-10 at 10.39.19 (1).jpeg', handle: 'Amit Unboxes' },
  { name: 'Sanjana Tech', niche: 'tech', platform: 'Twitter', followers: '250K', engagement: '8.1%', tier: 'mid', reach: '150K', image: '', handle: '@sanjana_bytes' },
  { name: 'Harish Nair', niche: 'tech', platform: 'YouTube', followers: '95K', engagement: '9.2%', tier: 'micro', reach: '75K', image: '', handle: 'Harish Code Lab' },

  { name: 'Fin Wealth (Raj)', niche: 'finance', platform: 'YouTube', followers: '2.1M', engagement: '4.8%', tier: 'mega', reach: '1.2M', image: '/WhatsApp Image 2026-06-10 at 10.39.19 (2).jpeg', handle: 'Fin Wealth' },
  { name: 'CA Rohan', niche: 'finance', platform: 'LinkedIn', followers: '400K', engagement: '9.5%', tier: 'mid', reach: '280K', image: '', handle: 'in/ca-rohan-sharma' },
  { name: 'Priya Stocks', niche: 'finance', platform: 'Instagram', followers: '580K', engagement: '5.9%', tier: 'mega', reach: '320K', image: '', handle: '@invest_with_priya' },
  { name: 'Akshat Jain', niche: 'finance', platform: 'YouTube', followers: '78K', engagement: '7.3%', tier: 'micro', reach: '45K', image: '', handle: 'Finance With Akshat' },

  { name: 'Alpha Gamer', niche: 'gaming', platform: 'YouTube', followers: '6.2M', engagement: '8.2%', tier: 'mega', reach: '4.5M', image: '/WhatsApp Image 2026-06-10 at 10.39.20.jpeg', handle: 'Alpha Gaming Live' },
  { name: 'Streamer Girl', niche: 'gaming', platform: 'YouTube', followers: '2.4M', engagement: '7.8%', tier: 'mega', reach: '1.5M', image: '', handle: 'Nisha Streams' },
  { name: 'Esport Pro', niche: 'gaming', platform: 'YouTube', followers: '1.5M', engagement: '6.1%', tier: 'mega', reach: '900K', image: '', handle: 'Viper Esports' },
  { name: 'Vikas Plays', niche: 'gaming', platform: 'YouTube', followers: '450K', engagement: '9.8%', tier: 'mid', reach: '350K', image: '', handle: 'Vikas Plays' },

  { name: 'Foodie Explorer', niche: 'food', platform: 'Instagram', followers: '980K', engagement: '6.8%', tier: 'mega', reach: '520K', image: '', handle: '@delhifoodie_explorer' },
  { name: 'Nomad Traveler', niche: 'food', platform: 'YouTube', followers: '1.1M', engagement: '5.4%', tier: 'mega', reach: '620K', image: '', handle: 'Kabir Vlogs' },
  { name: 'Chef Sanjeev', niche: 'food', platform: 'Instagram', followers: '450K', engagement: '7.3%', tier: 'mid', reach: '310K', image: '', handle: '@chef_sanjeev_recipes' },
  { name: 'Tanya Vlogs', niche: 'food', platform: 'Instagram', followers: '62K', engagement: '11.2%', tier: 'micro', reach: '50K', image: '', handle: '@tanya_nomadic' }
];

const rowNiches = [
  { emoji: '🍕', name: 'Food', count: '85+ creators' },
  { emoji: '💄', name: 'Beauty', count: '120+ creators' },
  { emoji: '💪', name: 'Fitness', count: '60+ creators' },
  { emoji: '✈️', name: 'Travel', count: '45+ creators' },
  { emoji: '🎮', name: 'Gaming', count: '35+ creators' },
  { emoji: '👗', name: 'Fashion', count: '90+ creators' },
  { emoji: '💰', name: 'Finance', count: '30+ creators' },
  { emoji: '🎬', name: 'Entertainment', count: '75+ creators' },
  { emoji: '🧘', name: 'Wellness', count: '50+ creators' },
];

const PlatformIcon = ({ platform }) => {
  switch (platform?.toLowerCase()) {
    case 'instagram':
      return <FaInstagram className="text-[#e1306c]" />;
    case 'youtube':
      return <FaYoutube className="text-[#ff0000]" />;
    case 'linkedin':
      return <FaLinkedinIn className="text-[#0077b5]" />;
    case 'twitter':
      return <FaTwitter className="text-[#1da1f2]" />;
    default:
      return null;
  }
};

const getInitials = (name) => {
  return name.split(' ').map((w) => w[0]).join('');
};

const InfluencerMarquee = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTier, setActiveTier] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [draftedCreators, setDraftedCreators] = useState([]);

  const filteredCreators = useMemo(() => {
    return creatorsDb.filter((creator) => {
      const matchesCategory = activeCategory === 'all' || creator.niche === activeCategory;
      const matchesTier = activeTier === 'all' || creator.tier === activeTier;
      const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            creator.handle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesTier && matchesSearch;
    });
  }, [activeCategory, activeTier, searchQuery]);

  const toggleDraft = (creator) => {
    setDraftedCreators((prev) => {
      const isAlreadyDrafted = prev.some((c) => c.name === creator.name);
      if (isAlreadyDrafted) {
        return prev.filter((c) => c.name !== creator.name);
      } else {
        return [...prev, creator];
      }
    });
  };

  const handleRequestProposal = () => {
    const names = draftedCreators.map((c) => `${c.name} (${c.handle})`).join(', ');
    const contactMessage = document.querySelector('textarea[name="message"]');
    if (contactMessage) {
      contactMessage.value = `Hi! I am interested in building a campaign with the following creators: ${names}. Please suggest proposals.`;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="influencers" className="bg-white py-20 lg:py-28 overflow-hidden text-[#091337] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-label text-[12px] text-[#de0d40] tracking-[0.15em] mb-4 block"
          >
            CREATOR NETWORK DIRECTORY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-center"
          >
            30,000+ Vetted Creators at Your Fingertips
          </motion.h2>
          <p className="text-[15px] text-gray-500 max-w-2xl mx-auto mt-4">
            Search, filter, and draft your dream campaign squad. Add creators to your list and directly request a campaign proposal with them.
          </p>
        </div>

        {/* Filter Toolbar Card */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 lg:p-8 mb-10 shadow-[0_10px_40px_rgba(9,19,55,0.03)] space-y-6">
          
          {/* Top Row: Search & Tier selector */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <FiSearch size={18} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search creator name or handle..."
                className="w-full bg-white border border-gray-200/80 rounded-full pl-11 pr-5 py-3 text-[14px] text-[#091337] placeholder-gray-400 focus:border-[#504ed8] focus:outline-none transition-colors shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <FiX size={16} />
                </button>
              )}
            </div>

            {/* Tier filter pill buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <span className="font-label text-[10px] text-gray-400 font-bold mr-2 whitespace-nowrap">TIERS:</span>
              {tiers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTier(t.id)}
                  className={`px-4 py-2 rounded-full font-label text-[10px] font-semibold transition-all border whitespace-nowrap ${
                    activeTier === t.id
                      ? 'bg-[#504ed8] text-white border-[#504ed8] shadow-sm'
                      : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Row: Niche Categories tabs */}
          <div className="border-t border-gray-200/50 pt-5">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-label text-[11px] font-semibold border transition-all duration-300 flex-shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-[#091337] text-[#ffc201] border-[#091337] shadow-md'
                      : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Creator Catalog Grid */}
        <div className="min-h-[400px] relative">
          {filteredCreators.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <span className="text-[40px] mb-4">🔍</span>
              <h3 className="text-[18px] font-semibold text-[#091337]">No creators found</h3>
              <p className="text-[14px] text-gray-400 mt-1">Try resetting your filters or adjusting your search term.</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredCreators.map((creator) => {
                  const isDrafted = draftedCreators.some((c) => c.name === creator.name);
                  return (
                    <motion.div
                      key={creator.name}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`group bg-white border rounded-2xl p-5 hover:shadow-[0_15px_30px_rgba(9,19,55,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                        isDrafted ? 'border-[#504ed8] ring-1 ring-[#504ed8]/30 shadow-sm' : 'border-gray-200/70'
                      }`}
                    >
                      <div>
                        {/* Profile Image / Initials Block */}
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#0f1634] to-[#091337] flex items-center justify-center">
                          {creator.image ? (
                            <img
                              src={creator.image}
                              alt={creator.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <span className="text-[28px] font-bold text-white tracking-widest uppercase">
                              {getInitials(creator.name)}
                            </span>
                          )}

                          {/* Platform pill badge */}
                          <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                            <PlatformIcon platform={creator.platform} />
                          </div>

                          {/* Tier tag bottom left */}
                          <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white font-label text-[8px] font-bold tracking-wider uppercase">
                            {creator.tier}
                          </div>
                        </div>

                        {/* Creator Info */}
                        <h4 className="text-[16px] font-bold text-[#091337] group-hover:text-[#de0d40] transition-colors">
                          {creator.name}
                        </h4>
                        <p className="text-[12px] text-gray-400 mt-0.5 mb-4">{creator.handle}</p>

                        {/* Mini statistics list */}
                        <div className="grid grid-cols-2 gap-2 border-t border-b border-gray-100 py-3 mb-5">
                          <div>
                            <span className="font-label text-[8px] text-gray-400 block tracking-wider uppercase">Followers</span>
                            <span className="text-[15px] font-bold text-[#091337]">{creator.followers}</span>
                          </div>
                          <div>
                            <span className="font-label text-[8px] text-gray-400 block tracking-wider uppercase">Engagement</span>
                            <span className="text-[15px] font-bold text-[#de0d40]">{creator.engagement}</span>
                          </div>
                        </div>
                      </div>

                      {/* Add to campaign draft CTA */}
                      <button
                        onClick={() => toggleDraft(creator)}
                        className={`w-full py-2.5 rounded-xl text-[12px] font-semibold flex items-center justify-center gap-1.5 transition-all border ${
                          isDrafted
                            ? 'bg-[#504ed8] text-white border-[#504ed8] hover:bg-[#4341c2]'
                            : 'bg-gray-50 text-gray-600 border-gray-200/80 hover:bg-gray-100 hover:text-[#091337]'
                        }`}
                      >
                        {isDrafted ? (
                          <>
                            <FiCheck size={14} className="stroke-[3]" />
                            <span>Drafted</span>
                          </>
                        ) : (
                          <>
                            <FiPlus size={14} className="stroke-[2.5]" />
                            <span>Draft Campaign</span>
                          </>
                        )}
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

      </div>

      {/* Infinite scrolling niche marquee at bottom */}
      <div className="border-t border-b border-gray-100 py-6 overflow-hidden bg-gray-50/50 mt-20">
        <div className="flex gap-4 animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...rowNiches, ...rowNiches].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white border border-gray-200/80 rounded-full px-6 py-3 min-w-[170px] flex items-center gap-3 shadow-sm"
            >
              <span className="text-[20px]">{item.emoji}</span>
              <div>
                <p className="text-[13px] font-bold text-[#091337] leading-none">{item.name}</p>
                <p className="font-label text-[9px] text-gray-400 mt-0.5">{item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Float Campaign Cart Bar */}
      <AnimatePresence>
        {draftedCreators.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[550px] bg-[#091337] text-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 px-5 py-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#de0d40] to-[#ffc201] flex items-center justify-center text-white">
                <FiBriefcase size={18} />
              </div>
              <div>
                <p className="text-[14px] font-bold tracking-tight">Campaign Squad Drafted</p>
                <p className="text-[11px] text-gray-400 font-medium">
                  {draftedCreators.length} creator{draftedCreators.length > 1 ? 's' : ''} ready for proposal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDraftedCreators([])}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Clear selected creators"
              >
                <FiX size={16} />
              </button>
              <button
                onClick={handleRequestProposal}
                className="bg-gradient-to-r from-[#de0d40] to-[#ff2a5f] hover:shadow-[0_4px_15px_rgba(222,13,64,0.3)] text-white font-label text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-all"
              >
                <span>Get Proposal</span>
                <FiArrowRight size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InfluencerMarquee;
