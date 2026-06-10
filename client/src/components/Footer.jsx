import { FiInstagram, FiYoutube, FiLinkedin, FiTwitter } from 'react-icons/fi';

const serviceLinks = ['Instagram', 'YouTube', 'Reels', 'Celebrity Deals', 'Analytics', 'Matchmaking'];
const companyLinks = ['About', 'Influencers', 'Case Studies', 'Blog', 'Careers', 'Contact'];

const socialLinks = [
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiYoutube, href: '#', label: 'YouTube' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-20">

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">

          {/* Col 1: Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display text-[22px] font-bold text-white leading-none">SSCA</span>
              <p className="font-label text-[9px] text-[#666] tracking-[0.15em] mt-1">
                Sri Shyam Campaigning Agency
              </p>
            </div>
            <p className="font-body text-[13px] text-[#888] leading-[1.7] mb-5">
              India&apos;s premier influencer marketing agency connecting brands with creators who move audiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#888] hover:border-[#B8860B] hover:text-[#B8860B] transition-all duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-label text-[11px] text-[#666] tracking-[0.12em] mb-5">SERVICES</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="font-body text-[13px] text-[#888] hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-label text-[11px] text-[#666] tracking-[0.12em] mb-5">COMPANY</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="font-body text-[13px] text-[#888] hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 className="font-label text-[11px] text-[#666] tracking-[0.12em] mb-5">CONNECT</h4>
            <div className="space-y-3 mb-6">
              <p className="font-body text-[13px] text-[#888]">Patna, Bihar, India</p>
              <p className="font-body text-[13px] text-[#888]">hello@srisyamcampaign.in</p>
              <p className="font-body text-[13px] text-[#888]">+91 XXXXX XXXXX</p>
            </div>
            <a
              href="#contact"
              className="inline-block font-body text-[12px] font-medium text-[#141414] bg-[#B8860B] px-5 py-2.5 rounded-md hover:bg-[#D4A017] transition-colors duration-300"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-label text-[11px] text-[#555]">
            © 2025 Sri Shyam Campaigning Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-label text-[11px] text-[#555] hover:text-[#888] transition-colors">Privacy Policy</a>
            <a href="#" className="font-label text-[11px] text-[#555] hover:text-[#888] transition-colors">Terms</a>
            <a href="#" className="font-label text-[11px] text-[#555] hover:text-[#888] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
