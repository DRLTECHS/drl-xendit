import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { createClient } from '@metagptx/web-sdk';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Users,
  Zap,
  HeadphonesIcon,
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight,
  Send,
} from 'lucide-react';

const client = createClient();

export default function Index() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await client.entities.contact_submissions.create({
        data: {
          ...contactForm,
          status: 'pending',
          created_at: new Date().toISOString(),
        },
      });
      toast.success('Message sent successfully! We will get back to you soon.');
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/376327/2026-02-07/bf76f1f1-e7d8-4266-8444-ebc788b4953c.png',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/376327/2026-02-07/05547ee1-0f09-418f-95a4-7764ecbc4ad6.png',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment integration and inventory management.',
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/376327/2026-02-07/32f93dbc-cb21-4019-ba87-01218b750734.png',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team consists of experienced developers and designers.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'We deliver projects on time without compromising quality.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your technical needs.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive pricing with flexible payment options.',
    },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechStart',
      content: 'DRL-IT delivered an exceptional website that exceeded our expectations. Their team was professional and responsive throughout the project.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Founder, ShopEasy',
      content: 'The e-commerce platform they built for us has significantly increased our online sales. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      content: 'Their mobile app development expertise is top-notch. The app they created for us has received great reviews from our users.',
      rating: 5,
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '200+', label: 'Happy Clients' },
    { value: '50+', label: 'Team Members' },
    { value: '10+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-slate-950" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://mgx-backend-cdn.metadl.com/generate/images/376327/2026-02-07/663f574a-0b5a-44b5-bc1c-8ed6365133c1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Ideas Into{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              We are a leading software development company providing innovative solutions 
              for businesses worldwide. From websites to mobile apps, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Services
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We offer a comprehensive range of software development services to help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We are committed to delivering excellence in every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{testimonial.name}</div>
                      <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss your ideas and turn them into reality. Get a free consultation today!
          </p>
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-slate-100 px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-slate-400 mb-8">
                Have a project in mind? Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Free Consultation</div>
                    <div className="text-slate-400 text-sm">Get expert advice at no cost</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Quick Response</div>
                    <div className="text-slate-400 text-sm">We respond within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Custom Solutions</div>
                    <div className="text-slate-400 text-sm">Tailored to your specific needs</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="text-slate-300 text-sm mb-1 block">Full Name</label>
                    <Input
                      placeholder="John Doe"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 text-sm mb-1 block">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 text-sm mb-1 block">Phone Number</label>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 text-sm mb-1 block">Message</label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                      rows={4}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}