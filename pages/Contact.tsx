import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-8">
             <h1 className="text-4xl font-bold text-emerald-900 dark:text-white">Wasiliana Nasi</h1>
             <p className="text-lg text-gray-600 dark:text-gray-300">
               Tuna furaha kusikia kutoka kwako. Kama una swali kuhusu kozi, vitabu, au unahitaji ushauri, 
               tafadhali jaza fomu au tumia njia zetu za mawasiliano hapa chini.
             </p>

             <div className="space-y-6 pt-4">
               <div className="flex items-start space-x-4">
                 <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                   <Phone className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-900 dark:text-white">Simu / WhatsApp</h3>
                   <p className="text-gray-600 dark:text-gray-400">0626 638 337</p>
                   <p className="text-xs text-emerald-600 font-medium">Inapatikana 24/7</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-4">
                 <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                   <Mail className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-900 dark:text-white">Barua Pepe</h3>
                   <p className="text-gray-600 dark:text-gray-400">info@lifepsychologytz.com</p>
                 </div>
               </div>

               <div className="flex items-start space-x-4">
                 <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                   <MapPin className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-900 dark:text-white">Mahali</h3>
                   <p className="text-gray-600 dark:text-gray-400">Dar es Salaam, Tanzania</p>
                 </div>
               </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 dark:bg-charcoal-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-charcoal-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tuma Ujumbe</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Jina Kamili</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-charcoal-900 border border-gray-300 dark:border-charcoal-600 focus:ring-2 focus:ring-emerald-500 outline-none transition" placeholder="Jina lako" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Barua Pepe</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-charcoal-900 border border-gray-300 dark:border-charcoal-600 focus:ring-2 focus:ring-emerald-500 outline-none transition" placeholder="barua@mfano.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ujumbe</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white dark:bg-charcoal-900 border border-gray-300 dark:border-charcoal-600 focus:ring-2 focus:ring-emerald-500 outline-none transition" placeholder="Andika ujumbe wako hapa..."></textarea>
              </div>

              <button type="button" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
                <Send className="h-4 w-4" /> Tuma Ujumbe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;