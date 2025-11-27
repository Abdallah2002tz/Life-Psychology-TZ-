import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import { Course, PaymentMethod } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface CourseCardProps {
  course: Course;
  onJoin: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onJoin }) => {
  return (
    <div className="bg-white dark:bg-charcoal-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 dark:border-charcoal-700 hover:-translate-y-2 group">
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition z-10"></div>
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 right-4 bg-gold-500 text-charcoal-900 font-bold px-4 py-1.5 rounded-full text-sm z-20 shadow-md">
          Tsh {course.price.toLocaleString()}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">{course.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">{course.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 space-x-2 bg-gray-50 dark:bg-charcoal-900 p-2 rounded-lg w-fit">
          <Clock className="h-4 w-4" />
          <span>Muda: {course.duration}</span>
        </div>

        <div className="space-y-3 mt-auto">
          <button 
            onClick={() => onJoin(course)}
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-medium py-2.5 rounded-lg transition shadow hover:shadow-lg"
          >
            Lipia Sasa
          </button>
          
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Habari, nahitaji kujiunga na kozi ya ${course.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center gap-2 border border-emerald-600 text-emerald-700 dark:text-emerald-400 dark:border-emerald-400 font-medium py-2.5 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition"
          >
            <span className="text-lg">📱</span> Jiunge WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;