import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../constants';
import { Course, PaymentMethod } from '../types';
import { X, CreditCard, Phone, Youtube, PlayCircle } from 'lucide-react';

const Training: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-emerald-900 dark:text-white mb-6">Mafunzo ya Kisaikolojia</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Chagua kozi inayokufaa na anza safari ya kubadilisha maisha yako leo. 
            Mafunzo yote hutolewa mtandaoni kwa njia rahisi na ya kisasa.
          </p>
        </div>

        {/* Featured Video Section */}
        <div className="max-w-5xl mx-auto mb-20 animate-zoom-in delay-200">
           <div className="bg-white dark:bg-charcoal-800 rounded-2xl shadow-xl overflow-hidden border border-emerald-100 dark:border-charcoal-700">
              <div className="p-4 bg-emerald-900 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                   <Youtube className="h-6 w-6 text-red-500" />
                   Video Maalum ya Mafunzo
                </h2>
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">LIVE</span>
              </div>
              <div className="aspect-video w-full bg-black">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Z0F3hcYGOKU" 
                  title="Life Psychology TZ Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-white mb-2">Siri za Saikolojia katika Maisha</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tazama video hii fupi kujifunza jinsi saikolojia inavyoweza kubadilisha mtazamo wako wa maisha na kukusaidia kufikia malengo yako.
                </p>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <div key={course.id} className="animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                <CourseCard 
                  course={course} 
                  onJoin={(c) => setSelectedCourse(c)}
                />
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal (Mockup) */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white dark:bg-charcoal-800 rounded-2xl max-w-md w-full p-6 relative animate-zoom-in">
            <button 
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-xl font-bold text-emerald-900 dark:text-white mb-1">Malipo</h3>
            <p className="text-sm text-gray-500 mb-6">Unakaribia kulipia: <span className="font-semibold text-gold-600">{selectedCourse.title}</span></p>

            <div className="space-y-3 mb-6">
              {[PaymentMethod.MPESA, PaymentMethod.TIGOPESA, PaymentMethod.AIRTELMONEY].map(method => (
                <button key={method} className="w-full flex items-center justify-between p-4 border border-gray-200 dark:border-charcoal-600 rounded-xl hover:bg-gray-50 dark:hover:bg-charcoal-700 transition transform active:scale-95">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="font-medium dark:text-gray-200">{method}</span>
                  </div>
                  <span className="text-gray-400 text-sm">Lipa</span>
                </button>
              ))}
            </div>
            
            <p className="text-xs text-center text-gray-400">
              Ukishindwa kulipa mtandaoni, tafadhali wasiliana nasi WhatsApp kwa msaada zaidi.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Training;