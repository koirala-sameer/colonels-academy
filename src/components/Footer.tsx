// src/components/Footer.tsx
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-army-500 to-army-700">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-gray-900">
                  Colonel's Academy
                </div>
                <div className="text-sm text-gray-600">Staff College Prep</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Elite preparation programs for Nepal's defense forces officers.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-gray-900 mb-4">Programs</h3>
            <ul className="space-y-2">
              {['Army Staff College', 'Police Staff College', 'APF Staff College'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-army-700 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Blog', 'Success Stories', 'Free Resources', 'Career Guidance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-army-700 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+977-1-XXXXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@colonelsacademy.edu.np</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 The Colonel's Academy. All rights reserved.</p>
          <p className="mt-2">Staff College Preparation Programs for Nepal Defense Forces</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;