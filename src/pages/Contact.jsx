import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '../components/ui/SocialIcons';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * Contact Page — Full contact form, map placeholder, company details.
 */

const contactDetails = [
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['iKnow Technology Ltd', '123 Tech Quarter', 'London EC2A 4NE', 'United Kingdom'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['General: info@iknow.tech', 'Sales: sales@iknow.tech', 'Support: support@iknow.tech'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['Main: +44 20 1234 5678', 'Sales: +44 20 1234 5679'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday – Friday', '09:00 – 18:00 GMT', 'Weekend: Emergency only'],
  },
];

const socialLinks = [
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: TwitterIcon, href: '#', label: 'Twitter / X' },
  { icon: GithubIcon, href: '#', label: 'GitHub' },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-accent-cyan/8 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether it's a project enquiry, partnership opportunity, or just a question — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form — takes 3/5 */}
            <div className="lg:col-span-3">
              <h2 className="font-display font-bold text-2xl mb-6">Send Us a Message</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input id="contact-name" label="Full Name" placeholder="John Smith" />
                  <Input id="contact-email" label="Email Address" type="email" placeholder="john@company.com" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input id="contact-company" label="Company" placeholder="Acme Corp" />
                  <Input id="contact-phone" label="Phone Number" type="tel" placeholder="+44 20 ..." />
                </div>
                <Input id="contact-subject" label="Subject" placeholder="Project enquiry" />
                <Input
                  id="contact-message"
                  label="Message"
                  as="textarea"
                  placeholder="Tell us about your project, challenges, and timeline..."
                  className="min-h-[160px]"
                />
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Sidebar — takes 2/5 */}
            <aside className="lg:col-span-2 space-y-8">
              {/* Contact Cards */}
              {contactDetails.map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{title}</h3>
                    {lines.map((line) => (
                      <p key={line} className="text-text-muted text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-sm mb-3">Follow Us</h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-lg bg-surface-alt border border-border flex items-center justify-center text-text-muted hover:text-primary-600 hover:border-primary-200 transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeading
            label="Our Location"
            title="Find Us in London"
          />
          <div className="rounded-2xl overflow-hidden border border-border bg-slate-100 h-[350px] md:h-[450px] flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-primary-300 mx-auto mb-4" />
              <p className="text-text-muted font-medium">123 Tech Quarter, London EC2A 4NE</p>
              <p className="text-text-muted text-sm mt-1">51.5224° N, 0.0832° W</p>
              <p className="text-primary-500 text-sm mt-4 font-medium">
                Interactive map — embed your Google Maps iframe here
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
