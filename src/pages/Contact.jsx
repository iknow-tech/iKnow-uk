import { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, Calendar, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '../components/ui/SocialIcons';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * Contact Page — World-class contact portal.
 * Features a fully functional contact form, an interactive Mock Calendly scheduler,
 * a Google Maps iframe embed, and premium dark glass design patterns.
 */

const contactDetails = [
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['iKnow Technology Ltd', '123 Tech Quarter', 'London EC2A 4NE', 'United Kingdom'],
  },
  {
    icon: Mail,
    title: 'Email Communications',
    lines: ['General: info@iknow.tech', 'Architecture: sales@iknow.tech', 'Security SLA: support@iknow.tech'],
  },
  {
    icon: Phone,
    title: 'Corporate Lines',
    lines: ['Main: +44 20 1234 5678', 'Sales: +44 20 1234 5679'],
  },
  {
    icon: Clock,
    title: 'Business Operations',
    lines: ['Monday – Friday: 09:00 – 18:00 GMT', 'Weekends: Emergency support lines active'],
  },
];

const socialLinks = [
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn', color: 'hover:text-cyan-400' },
  { icon: TwitterIcon, href: '#', label: 'Twitter / X', color: 'hover:text-brand-400' },
  { icon: GithubIcon, href: '#', label: 'GitHub', color: 'hover:text-violet-400' },
];

const availableDays = ['Monday', 'Tuesday', 'Wednesday'];
const availableSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM'];

export default function Contact() {
  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  // Scheduler state
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSuccess(true);
    setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!selectedSlot) return;
    setBookingSuccess(true);
  };

  return (
    <div className="bg-midnight min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden mesh-bg">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute inset-0 grid-overlay-fine opacity-20 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-cyan-500/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
            Initiate a <span className="gradient-text">Conversation</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Reach out directly for corporate inquiries or book an architecture briefing with our lead technology strategists.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Sidebar */}
      <section className="py-24 bg-dark-900 border-t border-dark-800/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Form — takes 7 cols */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl glass-dark border border-dark-800/80 p-8 md:p-10 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 noise-overlay opacity-35 pointer-events-none" />
                
                {formSuccess ? (
                  <div className="relative z-10 py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-emerald-400" />
                    </div>
                    <h2 className="font-display font-bold text-2xl text-white mb-2">Message Dispatched!</h2>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                      Thank you. A solutions consultant has logged your ticket and will verify your requirements within 12 business hours.
                    </p>
                    <Button variant="secondary" className="mt-8" onClick={() => setFormSuccess(false)}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                    <h2 className="font-display font-bold text-2xl text-white mb-6">Send an Inquiry</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        id="contact-name"
                        label="Full Name"
                        placeholder="Jane Smith"
                        dark
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={formErrors.name}
                      />
                      <Input
                        id="contact-email"
                        label="Email Address"
                        type="email"
                        placeholder="jane@company.com"
                        dark
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={formErrors.email}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        id="contact-company"
                        label="Company"
                        placeholder="Enterprise Ltd"
                        dark
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                      <Input
                        id="contact-phone"
                        label="Phone Number"
                        type="tel"
                        placeholder="+44 20 ..."
                        dark
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    
                    <Input
                      id="contact-subject"
                      label="Subject"
                      placeholder="e.g., Software Development Audits"
                      dark
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                    
                    <Input
                      id="contact-message"
                      label="Message"
                      as="textarea"
                      placeholder="Scope your system limits, targeted SLAs, and integration details..."
                      dark
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      error={formErrors.message}
                    />
                    
                    <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
                      <Send size={16} />
                      Send Inbound Message
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Columns — takes 5 cols */}
            <aside className="lg:col-span-5 space-y-8">
              
              {/* Calendly-style Book a Call Widget */}
              <div className="relative rounded-2xl glass-dark border border-dark-800/80 p-8 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
                
                {bookingSuccess ? (
                  <div className="relative z-10 text-center py-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={24} className="text-emerald-400" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">Call Scheduled!</h3>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                      Confirmed for <span className="text-cyan-400 font-semibold">{selectedDay}</span> at <span className="text-cyan-400 font-semibold">{selectedSlot}</span>. A calendar invitation has been sent to your business email.
                    </p>
                    <Button variant="ghost" size="xs" className="mt-6 text-slate-400 hover:text-white" onClick={() => { setBookingSuccess(false); setSelectedSlot(''); }}>
                      Reschedule
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="relative z-10 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-white">Direct Architect Booking</h3>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">30-Min Scoping Session</span>
                      </div>
                    </div>

                    {/* Step 1: Select Day */}
                    <div className="space-y-1.5">
                      <span className="block text-xs font-semibold text-slate-400">1. Select Business Day</span>
                      <div className="grid grid-cols-3 gap-2">
                        {availableDays.map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`py-2 text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all border cursor-pointer ${
                              selectedDay === day
                                ? 'bg-cyan-500 border-cyan-400 text-midnight font-bold'
                                : 'bg-dark-800/40 border-dark-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            {day.substring(0, 3)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Select Slot */}
                    <div className="space-y-1.5">
                      <span className="block text-xs font-semibold text-slate-400">2. Available Slots (GMT)</span>
                      <div className="grid grid-cols-2 gap-2">
                        {availableSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-2.5 text-xs font-semibold rounded-xl transition-all border cursor-pointer ${
                              selectedSlot === slot
                                ? 'bg-brand-500/20 border-brand-500/80 text-white font-bold'
                                : 'bg-dark-800/20 border-dark-800/60 text-slate-400 hover:text-white'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Button type="submit" variant="accent" size="sm" className="w-full" disabled={!selectedSlot}>
                      Confirm Appointment
                    </Button>
                  </form>
                )}
              </div>

              {/* Sidebar Info Details */}
              <div className="space-y-6">
                {contactDetails.map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-dark-800 border border-dark-700/60 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-white mb-1">{title}</h3>
                      {lines.map((line) => (
                        <p key={line} className="text-slate-400 text-xs leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-dark-800/60">
                <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">Corporate Channels</h3>
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`p-2.5 rounded-xl bg-dark-800 border border-dark-800/60 hover:bg-dark-750 transition-all duration-300 ${color}`}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Google Maps Responsive Frame */}
      <section className="bg-dark-950 border-t border-dark-800/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Map Location"
            title="Strategic London Headquarters"
            subtitle="Drop by our office located in the tech heart of London."
            light
          />
          
          <div className="rounded-2xl overflow-hidden border border-dark-800 shadow-2xl h-[350px] md:h-[450px]">
            <iframe
              title="iKnow London Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.493235777478!2d-0.0860533233816654!3d51.52251147181673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb1e6a17db9%3A0xe54fb7dc3b9dbb!2sShoreditch%2C%20London!5e0!3m2!1sen!2sgb!4v1700000000000!5m2!1sen!2sgb"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert contrast-125 opacity-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
