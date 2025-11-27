import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { BOOKS } from '../constants';
import { Book, PaymentMethod } from '../types';
import { X, Phone } from 'lucide-react';

const Bookstore: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-white mb-4">Duka la Vitabu</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Jipatie vitabu bora vya kisaikolojia vilivyoandikwa kwa ustadi ili kukuongezea maarifa. 
            Tuma pesa na upokee kitabu chako (Softcopy/Hardcopy).
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {BOOKS.map((book, index) => (
            <div key={book.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <BookCard 
                  book={book} 
                  onBuy={(b) => setSelectedBook(b)}
                />
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal Reuse */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white dark:bg-charcoal-800 rounded-2xl max-w-md w-full p-6 relative animate-fade-in-up shadow-2xl">
            <button 
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-xl font-bold text-emerald-900 dark:text-white mb-1">Nunua Kitabu</h3>
            <p className="text-sm text-gray-500 mb-6">Unanunua: <span className="font-semibold text-gold-600">{selectedBook.title}</span></p>

            <div className="space-y-3 mb-6">
              {[PaymentMethod.MPESA, PaymentMethod.TIGOPESA, PaymentMethod.AIRTELMONEY].map(method => (
                <button key={method} className="w-full flex items-center justify-between p-4 border border-gray-200 dark:border-charcoal-600 rounded-xl hover:bg-gray-50 dark:hover:bg-charcoal-700 transition transform active:scale-95">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="font-medium dark:text-gray-200">{method}</span>
                  </div>
                  <span className="text-gray-400 text-sm">Lipa {selectedBook.price.toLocaleString()}/=</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookstore;