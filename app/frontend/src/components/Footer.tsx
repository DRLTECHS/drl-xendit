import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DRL-IT</span>
            </Link>
            <p className="text-slate-400 text-sm">
              We are a leading software development company providing innovative solutions for businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-400 text-sm">Website Development</span>
              </li>
              <li>
                <span className="text-slate-400 text-sm">Mobile App Development</span>
              </li>
              <li>
                <span className="text-slate-400 text-sm">E-commerce Solutions</span>
              </li>
              <li>
                <span className="text-slate-400 text-sm">Custom Software</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contact@drl-it.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} DRL-IT. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}