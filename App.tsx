import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import Bookstore from './pages/Bookstore';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import AIChatbot from './components/AIChatbot';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-charcoal-900 transition-colors duration-300 font-sans">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/training" element={<Training />} />
            <Route path="/books" element={<Bookstore />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
          title="Chat WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>

        {/* AI Chatbot - Positioned slightly above WA or handled via state to avoid overlap logic, 
            but in this design, we put the chatbot button above the WA button or left side. 
            The AIChatbot component handles its own positioning (bottom-24 right-6). */}
        <AIChatbot />

      </div>
    </Router>
  );
};

export default App;