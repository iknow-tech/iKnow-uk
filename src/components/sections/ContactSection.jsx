import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import SectionHeading from '../ui/SectionHeading';

/**
 * Embedded Contact Section for the Home page.
 * 2-column layout: contact info + compact form.
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
    sub: 'We respond within 24 hours',
    href: 'mailto:info@iknow.tech',
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+44 20 1234 5678',
    sub: 'Enterprise support line',
    href: 'tel:+442012345678',
  },
];

export default function ContactSection() {
  return (
    <section className="bg-surface-alt py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get in Touch"
          title="Let's Build Something Extraordinary"
          subtitle="Have a project in mind? Reach out and we'll explore how iKnow can accelerate your digital transformation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-text-muted leading-relaxed">
              Whether you need strategic IT consultancy, bespoke software development, or AI-driven automation, our London-based team is ready to help you scale with confidence.
            </p>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, detail, sub, href }) => (
                <div key={title} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                    <Icon size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text text-sm">{title}</h4>
                    {href ? (
                      <a href={href} className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                        {detail}
                      </a>
                    ) : (
                      <p className="text-text font-medium">{detail}</p>
                    )}
                    <p className="text-text-muted text-sm mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface rounded-2xl border border-border p-8 shadow-sm">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  id="home-name"
                  label="Your Name"
                  placeholder="John Smith"
                />
                <Input
                  id="home-email"
                  label="Email Address"
                  type="email"
                  placeholder="john@company.com"
                />
              </div>

              <Input
                id="home-subject"
                label="Subject"
                placeholder="How can we help?"
              />

              <Input
                id="home-message"
                label="Message"
                as="textarea"
                placeholder="Tell us about your project..."
              />

              <Button type="submit" className="w-full" size="lg">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
