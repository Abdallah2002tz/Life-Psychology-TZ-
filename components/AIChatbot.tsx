import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { getPsychologyResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Habari! Mimi ni msaidizi wako wa kisaikolojia. Nikusaidie nini leo kuhusu maisha, hisia, au tabia?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const replyText = await getPsychologyResponse(input);
    
    setMessages(prev => [...prev, { role: 'model', text: replyText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Chat"
      >
        <Bot className="h-6 w-6" />
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
        </span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-0 right-0 sm:bottom-24 sm:right-6 z-50 w-full sm:w-96 bg-white dark:bg-charcoal-800 shadow-2xl sm:rounded-2xl flex flex-col transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`} style={{ maxHeight: '600px', height: '100%' }}>
        
        {/* Header */}
        <div className="bg-emerald-900 text-white p-4 sm:rounded-t-2xl flex justify-between items-center shadow-md">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-700 p-1.5 rounded-lg">
                <Bot className="h-5 w-5 text-gold-400" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Msaidizi wa Kisaikolojia</h3>
              <p className="text-xs text-emerald-200">AI Powered</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-emerald-800 p-1 rounded transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-charcoal-900">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                msg.role === 'user' 
                  ? 'bg-emerald-600 text-white rounded-br-none' 
                  : 'bg-white dark:bg-charcoal-800 text-gray-800 dark:text-gray-200 shadow-sm border dark:border-charcoal-700 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
               <div className="bg-white dark:bg-charcoal-800 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                 <Loader2 className="h-4 w-4 animate-spin text-emerald-600" />
                 <span className="text-xs text-gray-500">Inafikiria...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white dark:bg-charcoal-800 border-t dark:border-charcoal-700">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Uliza swali la kisaikolojia..."
              className="flex-1 bg-gray-100 dark:bg-charcoal-900 text-gray-900 dark:text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatbot;