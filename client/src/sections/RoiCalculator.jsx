import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiTarget, FiDollarSign, FiUsers, FiArrowRight } from 'react-icons/fi';

const platformOptions = [
  { id: 'mix', name: 'Omnichannel Mix', icon: '⚡' },
  { id: 'instagram', name: 'Instagram Reels & Stories', icon: '📸' },
  { id: 'youtube', name: 'YouTube Integrations & Shorts', icon: '🎥' },
  { id: 'linkedin', name: 'LinkedIn B2B Leadership', icon: '💼' }
];

const nicheOptions = [
  { id: 'beauty', name: 'Beauty & Fashion', cpv: 0.45, ctr: 0.024, conversion: 0.035 },
  { id: 'tech', name: 'Tech & Gadgets', cpv: 0.85, ctr: 0.032, conversion: 0.022 },
  { id: 'finance', name: 'Finance & Fintech', cpv: 1.40, ctr: 0.045, conversion: 0.040 },
  { id: 'gaming', name: 'Gaming & Esports', cpv: 0.35, ctr: 0.018, conversion: 0.015 },
  { id: 'food', name: 'Food, Travel & Lifestyle', cpv: 0.55, ctr: 0.028, conversion: 0.030 }
];

const formatCurrency = (value) => {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(1)}Cr`;
  }
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(1)}L`;
  }
  return `₹${value.toLocaleString('en-IN')}`;
};

const formatNumber = (value) => {
  if (value >= 10000000) {
    return `${(value / 10000000).toFixed(2)}Cr`;
  }
  if (value >= 100000) {
    return `${(value / 100000).toFixed(1)}L`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toFixed(0);
};

const RoiCalculator = () => {
  const [budget, setBudget] = useState(200000); // Default 2 Lakhs
  const [selectedPlatform, setSelectedPlatform] = useState('mix');
  const [selectedNiche, setSelectedNiche] = useState('beauty');
  const [metrics, setMetrics] = useState({
    views: 0,
    clicks: 0,
    conversions: 0,
    roi: 0,
    roiMultiplier: 0
  });
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setIsUpdating(true);
    const timer = setTimeout(() => setIsUpdating(false), 150);

    // Calculate metrics
    const nicheConfig = nicheOptions.find((n) => n.id === selectedNiche) || nicheOptions[0];
    
    // Adjust CPV based on platform choice
    let platformMultiplier = 1.0;
    if (selectedPlatform === 'instagram') platformMultiplier = 0.85;
    if (selectedPlatform === 'youtube') platformMultiplier = 1.25;
    if (selectedPlatform === 'linkedin') platformMultiplier = 2.40;

    const baseCpv = nicheConfig.cpv * platformMultiplier;
    const estimatedViews = Math.round(budget / baseCpv);
    
    const ctr = nicheConfig.ctr;
    const estimatedClicks = Math.round(estimatedViews * ctr);
    
    const cr = nicheConfig.conversion;
    const estimatedConversions = Math.round(estimatedClicks * cr);

    // ROI estimation model (Financial lift factor: 3.5x to 6.2x)
    let roiFactor = 4.2;
    if (selectedNiche === 'finance') roiFactor = 5.8;
    if (selectedNiche === 'beauty') roiFactor = 4.6;
    if (selectedPlatform === 'mix') roiFactor += 0.5; // Mix platform gets omnichannel bonus

    const expectedRevenue = budget * roiFactor;

    setMetrics({
      views: estimatedViews,
      clicks: estimatedClicks,
      conversions: estimatedConversions,
      roi: expectedRevenue,
      roiMultiplier: roiFactor
    });

    return () => clearTimeout(timer);
  }, [budget, selectedPlatform, selectedNiche]);

  const handleApplyToContact = () => {
    // Select correct budget tier in Contact form
    let contactBudgetVal = '';
    if (budget < 100000) contactBudgetVal = '₹50K–1L';
    else if (budget < 500000) contactBudgetVal = '₹1L–5L';
    else if (budget < 2000000) contactBudgetVal = '₹5L–20L';
    else contactBudgetVal = '₹20L+';

    const contactBudgetSelect = document.querySelector('select[name="budget"]');
    if (contactBudgetSelect) {
      contactBudgetSelect.value = contactBudgetVal;
    }

    // Select service option in Contact form
    let contactServiceVal = 'Full Campaign';
    if (selectedPlatform === 'instagram') contactServiceVal = 'Instagram Campaigns';
    if (selectedPlatform === 'youtube') contactServiceVal = 'YouTube Integrations';
    
    const contactServiceSelect = document.querySelector('select[name="service"]');
    if (contactServiceSelect) {
      contactServiceSelect.value = contactServiceVal;
    }

    // Pre-fill message
    const contactMessageTextarea = document.querySelector('textarea[name="message"]');
    const nicheName = nicheOptions.find((n) => n.id === selectedNiche)?.name || 'General';
    if (contactMessageTextarea) {
      contactMessageTextarea.value = `Hi The Hidden Fox Co. team! I estimated a campaign ROI proposal using your calculator: Niche: ${nicheName}, Platform Focus: ${selectedPlatform.toUpperCase()}, Budget: ${formatCurrency(budget)}. Let's build a customized pitch!`;
    }

    // Scroll to contact form
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="roi-calculator" className="bg-[#0f1634] text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background radial elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(222,13,64,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(80,78,216,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-label text-[12px] text-[#ffc201] tracking-[0.15em] mb-4 block font-bold"
          >
            PERFORMANCE MARKETING
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] sm:text-[44px] lg:text-[48px] font-semibold tracking-tight leading-[1.15] mb-6"
          >
            Calculate Your Campaign <span className="text-[#ffc201]">ROI & Reach</span>
          </motion.h2>
          <p className="text-[15px] text-gray-300 max-w-xl mx-auto">
            Input your budget and marketing goals to see real-time forecasts of views, engagement, and conversion revenue based on historical The Hidden Fox Co. campaign indexes.
          </p>
        </div>

        {/* Calculator Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Inputs Panel (7 cols) */}
          <div className="lg:col-span-7 bg-[#091337]/50 border border-white/5 rounded-3xl p-6 sm:p-10 flex flex-col justify-between space-y-8">
            
            {/* Input 1: Niche selector */}
            <div className="space-y-4">
              <label className="font-label text-[10px] text-gray-400 font-bold tracking-wider block">1. SELECT BRAND INDUSTRY NICHE</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {nicheOptions.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => setSelectedNiche(n.id)}
                    className={`py-3 px-4 rounded-xl text-[12px] font-semibold text-center border transition-all ${
                      selectedNiche === n.id
                        ? 'bg-[#de0d40] border-[#de0d40] text-white shadow-md shadow-[#de0d40]/25'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {n.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Platform focus */}
            <div className="space-y-4">
              <label className="font-label text-[10px] text-gray-400 font-bold tracking-wider block">2. CHOOSE PRIMARY PLATFORM CHANNEL</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platformOptions.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlatform(p.id)}
                    className={`flex items-center gap-3 py-3.5 px-4 rounded-xl text-[13px] font-semibold border transition-all text-left ${
                      selectedPlatform === p.id
                        ? 'bg-[#504ed8] border-[#504ed8] text-white shadow-md shadow-[#504ed8]/25'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-[18px]">{p.icon}</span>
                    <span>{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Budget Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="font-label text-[10px] text-gray-400 font-bold tracking-wider">3. SET CAMPAIGN BUDGET</label>
                <span className="text-[26px] font-bold text-[#ffc201] tracking-tight leading-none">
                  {formatCurrency(budget)}
                </span>
              </div>
              
              <div className="pt-2">
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="roi-slider"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-2 font-mono">
                  <span>₹50K</span>
                  <span>₹10L</span>
                  <span>₹25L</span>
                  <span>₹50L+</span>
                </div>
              </div>
            </div>
            
          </div>

          {/* RIGHT: Results Display (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="glass-premium rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full border border-white/10 relative overflow-hidden glow-purple">
              {/* Decorative side color bars */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#504ed8]/10 blur-[40px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#de0d40]/10 blur-[40px] rounded-full" />

              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                  <FiTrendingUp className="text-[#ffc201] w-5 h-5" />
                  <h3 className="text-[18px] font-bold tracking-tight">Estimated Campaign ROI</h3>
                </div>

                {/* Stat 1: Expected Reach */}
                <div className="space-y-1">
                  <span className="font-label text-[9px] text-gray-400 tracking-wider flex items-center gap-1.5 font-bold">
                    <FiUsers size={12} className="text-[#ffc201]" /> ESTIMATED IMPRESSIONS / VIEWS
                  </span>
                  <div className="flex items-baseline gap-2">
                    <motion.span
                      animate={{ scale: isUpdating ? 0.95 : 1 }}
                      transition={{ duration: 0.15 }}
                      className="text-4xl font-extrabold tracking-tight text-white block"
                    >
                      {formatNumber(metrics.views)}
                    </motion.span>
                  </div>
                </div>

                {/* Stat 2: Click Estimates */}
                <div className="space-y-1">
                  <span className="font-label text-[9px] text-gray-400 tracking-wider flex items-center gap-1.5 font-bold">
                    <FiTarget size={12} className="text-[#504ed8]" /> ESTIMATED CLICKS & INTERACTION
                  </span>
                  <div>
                    <motion.span
                      animate={{ scale: isUpdating ? 0.95 : 1 }}
                      transition={{ duration: 0.15 }}
                      className="text-3xl font-bold tracking-tight text-white block"
                    >
                      {formatNumber(metrics.clicks)}
                    </motion.span>
                  </div>
                </div>

                {/* Stat 3: Conversion sales lift */}
                <div className="space-y-1">
                  <span className="font-label text-[9px] text-gray-400 tracking-wider flex items-center gap-1.5 font-bold">
                    <FiDollarSign size={12} className="text-[#de0d40]" /> CONVERSIONS / ORDERS DRIVEN
                  </span>
                  <div>
                    <motion.span
                      animate={{ scale: isUpdating ? 0.95 : 1 }}
                      transition={{ duration: 0.15 }}
                      className="text-3xl font-bold tracking-tight text-white block"
                    >
                      {formatNumber(metrics.conversions)}+
                    </motion.span>
                  </div>
                </div>

                {/* ROI Output Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mt-4 flex items-center justify-between">
                  <div>
                    <span className="font-label text-[8px] text-gray-400 block tracking-wider uppercase font-bold">Estimated Conversion Value</span>
                    <motion.span
                      animate={{ scale: isUpdating ? 0.95 : 1 }}
                      className="text-2xl font-bold text-[#ffc201]"
                    >
                      {formatCurrency(metrics.roi)}
                    </motion.span>
                  </div>
                  <div className="bg-[#ffc201]/10 px-3 py-1.5 rounded-lg border border-[#ffc201]/20 text-center">
                    <span className="font-label text-[9px] text-[#ffc201] block font-bold leading-none mb-1">ROI INDEX</span>
                    <span className="text-[14px] font-extrabold text-[#ffc201]">{metrics.roiMultiplier.toFixed(1)}x</span>
                  </div>
                </div>
              </div>

              {/* Submit to Proposal button */}
              <div className="pt-8 relative z-10">
                <button
                  onClick={handleApplyToContact}
                  className="w-full bg-gradient-to-r from-[#de0d40] to-[#ff2a5f] hover:shadow-[0_10px_25px_rgba(222,13,64,0.35)] text-white text-[12px] font-semibold tracking-wider uppercase py-4 rounded-xl flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Lock Budget & Request Pitch</span>
                  <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RoiCalculator;
