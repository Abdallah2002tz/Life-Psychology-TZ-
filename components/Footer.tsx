import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MessageCircle, Brain } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-gray-300 pt-16 pb-8 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <Brain className="h-8 w-8 text-gold-500" />
               <span className="text-xl font-bold text-white">Life Psychology TZ</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Jukwaa la kisaikolojia linalolenga kuboresha maisha, tabia, mahusiano, na mafanikio kupitia elimu na ushauri.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gold-500 font-semibold uppercase tracking-wider mb-4">Viungo vya Haraka</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400 transition">Kuhusu Sisi</Link></li>
              <li><Link to="/training" className="hover:text-emerald-400 transition">Mafunzo</Link></li>
              <li><Link to="/books" className="hover:text-emerald-400 transition">Duka la Vitabu</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-400 transition">Makala</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h3 className="text-gold-500 font-semibold uppercase tracking-wider mb-4">Mawasiliano</h3>
             <ul className="space-y-3 text-sm">
               <li className="flex items-center space-x-2">
                 <MessageCircle className="h-4 w-4 text-emerald-500" />
                 <span>+255 626 638 337</span>
               </li>
               <li className="flex items-center space-x-2">
                 <span>📍 Tanzania</span>
               </li>
               <li className="flex items-center space-x-2">
                 <span>📧 info@lifepsychologytz.com</span>
               </li>
             </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-gold-500 font-semibold uppercase tracking-wider mb-4">Mitandao ya Kijamii</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-charcoal-800 p-2 rounded-full hover:bg-emerald-800 transition"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="bg-charcoal-800 p-2 rounded-full hover:bg-emerald-800 transition"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="bg-charcoal-800 p-2 rounded-full hover:bg-emerald-800 transition"><Twitter className="h-5 w-5" /></a>
            </div>
            <div className="mt-6">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Life Psychology TZ. Haki zote zimehifadhiwa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;