import React from 'react';
import { ARTICLES } from '../constants';
import { Calendar, Tag, ArrowRight, Share2 } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-emerald-900 dark:text-white mb-12 text-center animate-fade-in-up">Makala ya Kisaikolojia</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {ARTICLES.map((article, index) => (
            <article key={article.id} className="bg-white dark:bg-charcoal-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 flex flex-col group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="h-72 overflow-hidden img-zoom-container">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center space-x-4 text-xs font-semibold text-gold-600 uppercase tracking-wide mb-3">
                  <span className="flex items-center gap-1"><Tag className="h-3 w-3" /> {article.category}</span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center gap-1 text-gray-400"><Calendar className="h-3 w-3" /> {article.date}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition cursor-pointer">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-charcoal-700 mt-auto">
                   <button className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold hover:gap-3 transition-all">
                     Soma Zaidi <ArrowRight className="h-4 w-4" />
                   </button>
                   <button className="text-gray-400 hover:text-blue-500 transition hover:scale-110 p-2">
                     <Share2 className="h-5 w-5" />
                   </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;