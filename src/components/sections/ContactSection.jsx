import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import SectionHeading from '../ui/SectionHeading';

/**
 * Premium ContactSection.
 * Features full glassmorphism form, dark mode styling, and local state validation.
 */

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: 'London, United Kingdom',
    sub: 'Mon – Fri, 9:00 – 18:00 GMT',
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'info@iknow.tech',
    sub: 'Quick support SLA responses',
    href: 'mailto:info@iknow.tech',
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+44 20 1234 5678',
    sub: 'Direct line for corporate inquiries',
    href: 'tel:+442012345678',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="bg-dark-900 border-t border-dark-800/60 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact Us"
          title="Build Something Impactful Together"
          subtitle="Ready to transform your IT architecture or deploy enterprise AI solutions? Drop us a line."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-slate-400 leading-relaxed text-base">
              Whether you need strategic systems advice, full-cycle custom software, or cloud migration services, our London-based consulting group will help you execute flawlessly.
            </p>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, detail, sub, href }) => (
                <div key={title} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-700/60 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 group-hover:bg-dark-750 transition-all duration-300">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm tracking-wide">{title}</h4>
                    {href ? (
                      <a href={href} className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm mt-0.5 inline-block">
                        {detail}
                      </a>
                    ) : (
                      <p className="text-slate-300 font-medium text-sm mt-0.5">{detail}</p>
                    )}
                    <p className="text-slate-500 text-xs mt-1 font-medium">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl glass-dark border border-dark-800/80 p-8 md:p-10 shadow-2xl overflow-hidden">
              {/* Noise overlay */}
              <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

              {success ? (
                <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-400 text-sm max-w-sm">
                    Thank you for reaching out. One of our technology consultants will respond to your request shortly.
                  </p>
                  <Button variant="secondary" className="mt-8" onClick={() => setSuccess(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      id="home-name"
                      label="Your Name"
                      placeholder="Jane Doe"
                      dark
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      error={errors.name}
                    />
                    <Input
                      id="home-email"
                      label="Email Address"
                      type="email"
                      placeholder="jane@company.com"
                      dark
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      error={errors.email}
                    />
                  </div>

                  <Input
                    id="home-subject"
                    label="Subject"
                    placeholder="Describe your inquiry"
                    dark
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />

                  <Input
                    id="home-message"
                    label="Message"
                    as="textarea"
                    placeholder="Tell us details about your project or service needs..."
                    dark
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    error={errors.message}
                  />

                  <Button type="submit" variant="accent" className="w-full" size="lg">
                    <Send size={16} />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
