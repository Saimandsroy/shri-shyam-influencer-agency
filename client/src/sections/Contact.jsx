import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('brands');
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    country: 'IN',
    message: '',
    marketingConsent: false,
    recaptchaChecked: false
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = activeTab === 'brands' ? 'Brand Name is required' : 'Creator Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    }
    if (!formData.recaptchaChecked) {
      errs.recaptcha = 'Please verify that you are not a robot';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, success: false, error: '' });
    try {
      const payload = {
        name: formData.name,
        brand: formData.brand,
        email: formData.email,
        phone: `${formData.country} ${formData.phone}`,
        service: activeTab === 'brands' ? 'Brand Campaign' : 'Creator Partnership',
        budget: 'Not Specified',
        message: formData.message,
      };
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus({ loading: false, success: true, error: '' });
      setFormData({
        name: '',
        brand: '',
        email: '',
        phone: '',
        country: 'IN',
        message: '',
        marketingConsent: false,
        recaptchaChecked: false
      });
    } catch {
      setStatus({ loading: false, success: false, error: 'Something went wrong. Please try again.' });
    }
  };

  const inputClasses = (field) =>
    `w-full bg-[#f6faff] border ${errors[field] ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-3 font-body text-[14px] text-[#091337] placeholder-gray-400 focus:border-[#504ed8] focus:outline-none transition-colors`;

  return (
    <section id="contact" className="bg-[#0f1634] text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(80,78,216,0.12),transparent_50%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold tracking-tight text-white"
          >
            Contact The Hidden Fox Co.
          </motion.h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* COLUMN 1: Contact Info Boxes (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col"
          >
            {/* Box 1: India */}
            <div className="bg-[#091337] border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col text-left h-full">
              {/* Photo */}
              <div className="relative w-full h-[340px] overflow-hidden flex-shrink-0">
                <img
                  src="/contact_photo.jpg"
                  alt="The Hidden Fox Co. Founder"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay fading into card */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#091337]" />
              </div>
              {/* Text Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                {/* Founder Info */}
                <div>
                  <h4 className="text-[11px] text-[#ffc201] font-bold tracking-wider uppercase mb-3">Founder</h4>
                  <ul className="space-y-2.5 text-[13px] text-gray-300 leading-relaxed list-none pl-0">
                    <li className="flex items-start gap-2">
                      <span className="text-[#de0d40] mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#de0d40]" />
                      <span>Founded and scaled an influencer marketing agency.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#de0d40] mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#de0d40]" />
                      <span>Built a growing network of creators across All over world.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#de0d40] mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#de0d40]" />
                      <span>Managed creator onboarding and collaboration opportunities.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#de0d40] mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#de0d40]" />
                      <span>Supported brands with influencer discovery and campaign execution.</span>
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-white/10 my-6" />

                {/* Agency & Address Info */}
                <div>
                  <h3 className="text-[15px] font-bold text-white tracking-tight uppercase">THE HIDDEN FOX CO.</h3>
                  <span className="text-[12px] text-gray-400 font-medium block mt-1 mb-4">Content Creator & Founder</span>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[16px] flex-shrink-0">📍</span>
                      <span className="text-[13px] text-gray-300">Patna, Bihar, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[16px] flex-shrink-0">📞</span>
                      <a href="tel:+919060293631" className="text-[13px] text-white hover:text-[#de0d40] transition-colors">
                        +91 90602 93631
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[16px] flex-shrink-0">✉️</span>
                      <a href="mailto:partnerships@thehiddenfoxco.com" className="text-[13px] text-gray-300 hover:text-white transition-colors">
                        partnerships@thehiddenfoxco.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Form Links (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#091337] border border-white/5 rounded-2xl p-6 shadow-2xl flex flex-col gap-5 text-left">
              {/* Header */}
              <div>
                <h3 className="text-[18px] font-bold text-white tracking-tight">Get In Touch</h3>
                <p className="text-[13px] text-gray-400 mt-1.5 leading-relaxed">Choose the right form below to connect with us. Each link opens a dedicated Google Form tailored for you.</p>
              </div>

              {/* Form Links */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://forms.gle/4n6Fokv6zaYuiSik9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#de0d40] hover:bg-[#ff2a5f] text-white rounded-xl px-5 py-4 transition-all duration-300 group shadow-lg shadow-[#de0d40]/20"
                >
                  <div>
                    <p className="text-[13px] font-bold">Brand Campaign Form</p>
                    <p className="text-[11px] text-white/70 mt-0.5">For brands looking to run influencer campaigns</p>
                  </div>
                  <span className="text-[18px] group-hover:translate-x-1 transition-transform duration-200">↗</span>
                </a>

                <a
                  href="https://forms.gle/Zr5DsQnwhCDivK1m8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl px-5 py-4 transition-all duration-300 group"
                >
                  <div>
                    <p className="text-[13px] font-bold">Creator Collaboration Form</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">For creators wanting to join our network</p>
                  </div>
                  <span className="text-[18px] group-hover:translate-x-1 transition-transform duration-200">↗</span>
                </a>

                <a
                  href="https://forms.gle/7E1kSLdcofJZ63zY6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl px-5 py-4 transition-all duration-300 group"
                >
                  <div>
                    <p className="text-[13px] font-bold">Work With Us</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Partnerships, collaborations & opportunities</p>
                  </div>
                  <span className="text-[18px] group-hover:translate-x-1 transition-transform duration-200">↗</span>
                </a>
              </div>

              {/* Why Choose section */}
              <div className="border-t border-white/10 pt-5">
                <p className="text-[11px] text-[#ffc201] font-bold tracking-wider uppercase mb-3">Why Choose The Hidden Fox Co.?</p>
                <ul className="space-y-2">
                  {[
                    'Trusted Creator Network',
                    'End-to-End Campaign Management',
                    'Brand & Creator Partnerships',
                    'Performance-Driven Marketing',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#de0d40]/15 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-[#de0d40]" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                        </svg>
                      </span>
                      <span className="text-[12px] text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 3: Map (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="w-full h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative">
              <iframe
                title="The Hidden Fox Co. Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14390.875704386766!2d85.12056024921601!3d25.614231267601676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x83c1c04d0c173f40!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', height: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
