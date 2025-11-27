import React from 'react';
import { Book as BookIcon } from 'lucide-react';
import { Book } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface BookCardProps {
  book: Book;
  onBuy: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onBuy }) => {
  return (
    <div className="bg-white dark:bg-charcoal-800 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 dark:border-charcoal-700 hover:-translate-y-1 group flex flex-col h-full">
      <div className="aspect-[2/3] w-full bg-gray-200 rounded-md mb-4 overflow-hidden relative shadow-inner">
         <img src={book.image} alt={book.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 mb-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">{book.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3 h-10">{book.description}</p>
      
      <div className="flex items-center justify-between mb-4 mt-auto">
        <span className="text-lg font-bold text-emerald-700 dark:text-emerald-400">Tsh {book.price.toLocaleString()}</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button 
          onClick={() => onBuy(book)}
          className="bg-gold-500 hover:bg-gold-600 text-emerald-900 font-bold py-2 px-3 rounded text-xs transition shadow-md"
        >
          Nunua
        </button>
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Habari, nahitaji kitabu cha ${book.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-charcoal-700 hover:bg-gray-200 dark:hover:bg-charcoal-600 text-gray-800 dark:text-white font-medium py-2 px-3 rounded text-xs transition flex items-center justify-center border border-transparent hover:border-gray-300 dark:hover:border-charcoal-500"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default BookCard;