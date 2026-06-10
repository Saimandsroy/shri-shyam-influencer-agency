import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiYoutube, FiLinkedin, FiTwitter, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const serviceOptions = ['Instagram Campaigns', 'YouTube Integrations', 'Reels & Short Video', 'Celebrity Deals', 'Full Campaign', 'Other'];
const budgetOptions = ['₹50K–1L', '₹1L–5L', '₹5L–20L', '₹20L+', "Let's Discuss"];

const socialLinks = [
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiYoutube, href: '#', label: 'YouTube' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', brand: '', email: '', phone: '', service: '', budget: '', message: '',
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, success: false, error: '' });
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', brand: '', email: '', phone: '', service: '', budget: '', message: '' });
    } catch {
      setStatus({ loading: false, success: false, error: 'Something went wrong. Please try again.' });
    }
  };

  const inputClasses = (field) =>
    `w-full bg-[#FAF8F4] border ${errors[field] ? 'border-red-400' : 'border-[rgba(0,0,0,0.1)]'} rounded-lg px-4 py-3 font-body text-[14px] text-[#141414] placeholder-[#999] focus:border-[#B8860B] focus:outline-none transition-colors`;

  return (
    <section id="contact" className="bg-[#FAF8F4] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="font-label text-[12px] gold-text tracking-[0.15em] mb-3 block">
              GET STARTED
            </span>

            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-semibold tracking-tight text-[#141414] leading-[1.1] mb-6">
              Ready to Grow With<br /> Real Influence?
            </h2>

            <p className="font-body text-[15px] text-[#666] leading-[1.8] mb-8 max-w-[440px]">
              Whether you&apos;re launching a product, building brand awareness, or driving sales — our team crafts influencer campaigns that deliver measurable impact across every platform.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <FiMapPin className="text-[#B8860B] w-4 h-4 flex-shrink-0" />
                <span className="font-body text-[14px] text-[#555]">Patna, Bihar, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-[#B8860B] w-4 h-4 flex-shrink-0" />
                <span className="font-body text-[14px] text-[#555]">hello@srisyamcampaign.in</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-[#B8860B] w-4 h-4 flex-shrink-0" />
                <span className="font-body text-[14px] text-[#555]">+91 XXXXX XXXXX</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[#555] hover:border-[#B8860B] hover:text-[#B8860B] transition-all duration-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[20px] p-8 border border-[rgba(0,0,0,0.08)] shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" className={inputClasses('name')} />
                  {errors.name && <p className="text-red-500 text-[11px] mt-1 font-body">{errors.name}</p>}
                </div>
                <div>
                  <input name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand / Company Name" className={inputClasses('brand')} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" className={inputClasses('email')} />
                  {errors.email && <p className="text-red-500 text-[11px] mt-1 font-body">{errors.email}</p>}
                </div>
                <div>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClasses('phone')} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <select name="service" value={formData.service} onChange={handleChange} className={inputClasses('service')}>
                  <option value="">Select Service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <select name="budget" value={formData.budget} onChange={handleChange} className={inputClasses('budget')}>
                  <option value="">Select Budget</option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your campaign goals... *"
                  rows={4}
                  className={inputClasses('message') + ' resize-none'}
                />
                {errors.message && <p className="text-red-500 text-[11px] mt-1 font-body">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-[#141414] text-white font-body text-[13px] font-medium py-4 rounded-lg hover:bg-[#B8860B] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>

              {status.success && (
                <p className="mt-4 text-center font-body text-[14px] text-green-600">
                  ✓ Message sent successfully! We&apos;ll be in touch shortly.
                </p>
              )}
              {status.error && (
                <p className="mt-4 text-center font-body text-[14px] text-red-500">
                  {status.error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
