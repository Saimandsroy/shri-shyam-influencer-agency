import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity, FiEye, FiArrowUpRight, FiPieChart, FiTrendingUp, FiShoppingBag } from 'react-icons/fi';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const dashboardCampaigns = [
  {
    id: 'boat',
    name: 'boAt Lifestyle — Rockerz Launch',
    period: 'Active: Last 30 Days',
    metrics: {
      views: '12.4M',
      conversions: '42.8K',
      ctr: '4.8%',
      spent: '₹14.2L',
      salesGained: '₹56.8L'
    },
    chartPath: 'M 0 100 Q 50 80 100 130 T 200 70 T 300 120 T 400 30 T 500 10 T 600 50',
    chartDots: [
      { x: 100, y: 130, value: '2.1M' },
      { x: 300, y: 120, value: '4.8M' },
      { x: 500, y: 10, value: '10.5M' },
      { x: 600, y: 50, value: '12.4M' }
    ],
    creatorsList: [
      { name: 'Kavya Singhania', platform: 'Instagram', views: '2.4M', spent: '₹1.5L', ROI: '4.8x' },
      { name: 'Megha Goel', platform: 'Instagram', views: '1.8M', spent: '₹1.2L', ROI: '4.2x' },
      { name: 'Alpha Gamer', platform: 'YouTube', views: '5.2M', spent: '₹6.5L', ROI: '4.1x' },
      { name: 'Rohan Verma', platform: 'YouTube', views: '3.0M', spent: '₹5.0L', ROI: '3.9x' }
    ],
    demographics: [
      { label: '18-24 Yrs (Gen Z)', pct: 64, color: 'bg-[#de0d40]' },
      { label: '25-34 Yrs (Millennials)', pct: 28, color: 'bg-[#504ed8]' },
      { label: 'Other', pct: 8, color: 'bg-gray-600' }
    ]
  },
  {
    id: 'nykaa',
    name: 'Nykaa — Festive Sale 2024',
    period: 'Active: Last 30 Days',
    metrics: {
      views: '28.1M',
      conversions: '89.2K',
      ctr: '6.2%',
      spent: '₹35.0L',
      salesGained: '₹1.48Cr'
    },
    chartPath: 'M 0 120 Q 50 110 100 90 T 200 110 T 300 80 T 400 40 T 500 35 T 600 5',
    chartDots: [
      { x: 100, y: 90, value: '4.2M' },
      { x: 300, y: 80, value: '12.1M' },
      { x: 500, y: 35, value: '22.0M' },
      { x: 600, y: 5, value: '28.1M' }
    ],
    creatorsList: [
      { name: 'Megha Goel', platform: 'Instagram', views: '6.4M', spent: '₹4.5L', ROI: '5.2x' },
      { name: 'Kavya Singhania', platform: 'Instagram', views: '4.1M', spent: '₹3.2L', ROI: '4.9x' },
      { name: 'Ananya Sen', platform: 'Instagram', followers: '85K', views: '950K', spent: '₹80K', ROI: '6.8x' },
      { name: 'Rohan Verma', platform: 'YouTube', views: '16.6M', spent: '₹26.5L', ROI: '3.8x' }
    ],
    demographics: [
      { label: '18-24 Yrs (Gen Z)', pct: 45, color: 'bg-[#de0d40]' },
      { label: '25-34 Yrs (Millennials)', pct: 48, color: 'bg-[#504ed8]' },
      { label: 'Other', pct: 7, color: 'bg-gray-600' }
    ]
  },
  {
    id: 'mamaearth',
    name: 'Mamaearth — Onion Care Campaign',
    period: 'Active: Last 30 Days',
    metrics: {
      views: '45.3M',
      conversions: '142.1K',
      ctr: '5.1%',
      spent: '₹48.0L',
      salesGained: '₹2.12Cr'
    },
    chartPath: 'M 0 130 Q 50 130 100 110 T 200 90 T 300 60 T 400 50 T 500 20 T 600 15',
    chartDots: [
      { x: 100, y: 110, value: '8.4M' },
      { x: 300, y: 60, value: '21.0M' },
      { x: 500, y: 20, value: '38.5M' },
      { x: 600, y: 15, value: '45.3M' }
    ],
    creatorsList: [
      { name: 'Nomad Traveler', platform: 'YouTube', views: '18.4M', spent: '₹18.0L', ROI: '4.8x' },
      { name: 'Kavya Singhania', platform: 'Instagram', views: '12.1M', spent: '₹11.0L', ROI: '4.6x' },
      { name: 'Foodie Explorer', platform: 'Instagram', views: '9.8M', spent: '₹9.0L', ROI: '4.4x' },
      { name: 'Tanya Vlogs', platform: 'Instagram', views: '5.0M', spent: '₹10.0L', ROI: '3.8x' }
    ],
    demographics: [
      { label: '18-24 Yrs (Gen Z)', pct: 32, color: 'bg-[#de0d40]' },
      { label: '25-34 Yrs (Millennials)', pct: 55, color: 'bg-[#504ed8]' },
      { label: 'Other', pct: 13, color: 'bg-gray-600' }
    ]
  }
];

const CampaignDashboard = () => {
  const [activeTab, setActiveTab] = useState('boat');
  const campaign = dashboardCampaigns.find((c) => c.id === activeTab) || dashboardCampaigns[0];

  return (
    <section className="bg-[#f6faff] py-20 lg:py-28 text-[#091337]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-label text-[12px] text-[#de0d40] tracking-[0.15em] mb-4 block font-bold"
          >
            PROPRIETARY MARKETING TECH
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] sm:text-[44px] lg:text-[48px] font-semibold tracking-tight leading-[1.1] mb-6"
          >
            Real-Time Campaign Tracking Dashboard
          </motion.h2>
          <p className="text-[15px] text-gray-500 max-w-xl mx-auto">
            We provide our brand partners with full transparency. Track impressions, sales conversions, and creator ROI indexes as they register live.
          </p>
        </div>

        {/* Dashboard Tabs Selector */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {dashboardCampaigns.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-5 py-3 rounded-full font-label text-[11px] font-semibold border transition-all duration-300 flex-shrink-0 ${
                activeTab === c.id
                  ? 'bg-[#091337] text-white border-[#091337] shadow-md'
                  : 'bg-white text-gray-500 border-gray-200/80 hover:bg-gray-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2 animate-pulse" />
              {c.name.split(' — ')[0]}
            </button>
          ))}
        </div>

        {/* High-Fidelity Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#091337] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl relative"
        >
          {/* Dashboard Header Bar */}
          <div className="bg-[#0f1634] px-6 sm:px-8 py-5 border-b border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h3 className="font-display text-[15px] font-bold text-white tracking-tight">{campaign.name}</h3>
              </div>
              <p className="text-[11px] text-gray-400 mt-0.5">{campaign.period}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="font-label text-[9px] bg-white/5 border border-white/10 text-white rounded-lg px-3 py-1 font-bold">
                SSCA CAMPAIGN ID: {campaign.id.toUpperCase()}-2024
              </span>
              <div className="flex items-center gap-1 text-[11px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                <FiActivity size={12} className="animate-pulse" /> Live Tracking
              </div>
            </div>
          </div>

          {/* Quick Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 border-b border-white/5 divide-x divide-y md:divide-y-0 divide-white/5 bg-[#091337]">
            
            {/* Stat 1: Total views */}
            <div className="p-6">
              <span className="font-label text-[8px] text-gray-400 block tracking-wider uppercase mb-1">TOTAL CAMPAIGN VIEWS</span>
              <div className="flex items-center gap-2">
                <FiEye className="text-[#ffc201] w-4 h-4" />
                <span className="text-[20px] font-bold text-white tracking-tight">{campaign.metrics.views}</span>
              </div>
            </div>

            {/* Stat 2: Conversions */}
            <div className="p-6">
              <span className="font-label text-[8px] text-gray-400 block tracking-wider uppercase mb-1">SALES CONVERSIONS</span>
              <div className="flex items-center gap-2">
                <FiShoppingBag className="text-[#de0d40] w-4 h-4" />
                <span className="text-[20px] font-bold text-white tracking-tight">{campaign.metrics.conversions}</span>
              </div>
            </div>

            {/* Stat 3: Avg CTR */}
            <div className="p-6">
              <span className="font-label text-[8px] text-gray-400 block tracking-wider uppercase mb-1">CAMPAIGN AVG CTR</span>
              <div className="flex items-center gap-2">
                <FiPieChart className="text-[#504ed8] w-4 h-4" />
                <span className="text-[20px] font-bold text-white tracking-tight">{campaign.metrics.ctr}</span>
              </div>
            </div>

            {/* Stat 4: Budget Spent */}
            <div className="p-6">
              <span className="font-label text-[8px] text-gray-400 block tracking-wider uppercase mb-1">BUDGET EXECUTED</span>
              <span className="text-[20px] font-bold text-white block tracking-tight">{campaign.metrics.spent}</span>
            </div>

            {/* Stat 5: Sales Revenue Generated */}
            <div className="p-6 bg-gradient-to-tr from-[#de0d40]/10 to-[#504ed8]/10 col-span-2 md:col-span-1">
              <span className="font-label text-[8px] text-[#ffc201] block tracking-wider uppercase mb-1 font-bold">ESTIMATED REVENUE</span>
              <div className="flex items-center gap-1.5 text-green-400">
                <FiTrendingUp className="w-4 h-4" />
                <span className="text-[20px] font-bold text-white tracking-tight">{campaign.metrics.salesGained}</span>
              </div>
            </div>

          </div>

          {/* Charts & Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/5 bg-[#0b1230]/60">
            
            {/* Left Box: SVG Line Chart (8 cols) */}
            <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
              <div className="flex justify-between items-center">
                <h4 className="font-label text-[10px] text-gray-400 font-bold tracking-wider">VIEWS ACCUMULATION INDEX (30 DAYS)</h4>
                <div className="flex gap-4 text-[10px] text-gray-400 font-mono">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#ffc201]" /> Target Projection</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#de0d40]" /> Actual Live</span>
                </div>
              </div>

              {/* Chart Graphics */}
              <div className="relative w-full aspect-[22/10] border-l border-b border-white/5 pt-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 600 150">
                  {/* Grid Lines */}
                  <line x1="0" y1="37.5" x2="600" y2="37.5" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="75" x2="600" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="112.5" x2="600" y2="112.5" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  
                  {/* Main Line path */}
                  <AnimatePresence mode="wait">
                    <motion.path
                      key={activeTab}
                      d={campaign.chartPath}
                      fill="none"
                      stroke="url(#chart-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </AnimatePresence>

                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id="chart-gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#504ed8" />
                      <stop offset="50%" stopColor="#de0d40" />
                      <stop offset="100%" stopColor="#ffc201" />
                    </linearGradient>
                  </defs>

                  {/* Chart Dots & Values */}
                  {campaign.chartDots.map((dot, idx) => (
                    <g key={idx}>
                      <motion.circle
                        cx={dot.x}
                        cy={dot.y}
                        r="6"
                        fill="#091337"
                        stroke="#ffc201"
                        strokeWidth="3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 + idx * 0.15 }}
                      />
                      <motion.text
                        x={dot.x}
                        y={dot.y - 12}
                        fill="#fff"
                        fontSize="9"
                        fontWeight="bold"
                        fontFamily="monospace"
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 + idx * 0.15 }}
                      >
                        {dot.value}
                      </motion.text>
                    </g>
                  ))}
                </svg>

                {/* X Axis Labels */}
                <div className="flex justify-between text-[9px] text-gray-400 font-mono mt-3">
                  <span>Day 1</span>
                  <span>Day 7</span>
                  <span>Day 15</span>
                  <span>Day 22</span>
                  <span>Day 30 (Today)</span>
                </div>
              </div>
            </div>

            {/* Right Box: Creators Contributions / Demographics (4 cols) */}
            <div className="lg:col-span-4 p-6 sm:p-8 space-y-6">
              
              {/* Creator Table tracking contribution */}
              <div className="space-y-4">
                <h4 className="font-label text-[10px] text-gray-400 font-bold tracking-wider">CREATOR CONTRIBUTION INDEX</h4>
                <div className="space-y-3">
                  {campaign.creatorsList.map((c, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-[12px] font-bold text-white leading-none">{c.name}</p>
                          {c.platform.toLowerCase() === 'instagram' ? (
                            <FaInstagram className="text-[#e1306c] w-3 h-3" />
                          ) : (
                            <FaYoutube className="text-[#ff0000] w-3 h-3" />
                          )}
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1">ROI: <span className="text-[#ffc201] font-bold">{c.ROI}</span></p>
                      </div>
                      <div className="text-right">
                        <span className="text-[13px] font-bold text-white block">{c.views} views</span>
                        <span className="text-[9px] text-gray-400 font-mono">Cost: {c.spent}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience Demographics */}
              <div className="space-y-4 border-t border-white/5 pt-5">
                <h4 className="font-label text-[10px] text-gray-400 font-bold tracking-wider">AUDIENCE DEMOGRAPHICS SHIFT</h4>
                <div className="space-y-3">
                  {campaign.demographics.map((demo, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-gray-300 font-medium">{demo.label}</span>
                        <span className="text-white font-bold">{demo.pct}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${demo.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className={`h-full rounded-full ${demo.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CampaignDashboard;
