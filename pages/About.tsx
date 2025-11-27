import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-charcoal-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-charcoal-800 rounded-2xl shadow-xl overflow-hidden animate-zoom-in">
          
          <div className="h-72 bg-emerald-900 relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40 animate-pulse-slow"></div>
             <div className="absolute inset-0 flex items-center justify-center">
               <h1 className="text-5xl font-bold text-white tracking-wide animate-fade-in-up delay-200 drop-shadow-lg">Kuhusu Sisi</h1>
             </div>
          </div>
          
          <div className="p-8 md:p-16 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-2xl font-light text-emerald-800 dark:text-emerald-400 animate-fade-in-up delay-300">
              Karibu <span className="font-semibold">Life Psychology TZ</span>, nyumbani kwa mabadiliko ya kweli ya kifikra.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="prose dark:prose-invert animate-fade-in-left delay-500">
                    <p>
                    Tunakuletea elimu ya kina kuhusu <span className="font-bold text-emerald-700 dark:text-emerald-400">psychology</span>, 
                    <span className="font-bold text-emerald-700 dark:text-emerald-400"> behavior change</span>, 
                    <span className="font-bold text-emerald-700 dark:text-emerald-400"> ancient psychological secrets</span>, 
                    <span className="font-bold text-emerald-700 dark:text-emerald-400"> motivation</span>, 
                    na <span className="font-bold text-emerald-700 dark:text-emerald-400">emotional intelligence</span>.
                    </p>
                    <p className="mt-4">
                    Dhumuni letu kuu ni kuijenga akili yenye nguvu dhidi ya changamoto za maisha. Tunaamini kuwa mafanikio ya nje 
                    yanaanzia ndani. Kwa kubadili namna unavyofikiri, unabadili namna unavyoishi.
                    </p>
                </div>
                <div className="relative h-72 rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition duration-700 animate-fade-in-right delay-500">
                    <img src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=600&auto=format&fit=crop" alt="Group discussion" className="w-full h-full object-cover transform hover:scale-110 transition duration-700" />
                </div>
            </div>

            <div className="mt-8 border-l-4 border-gold-500 pl-6 italic text-xl text-gray-600 dark:text-gray-400 animate-fade-in-up delay-700">
              "Psychology sio tu somo la darasani, ni nyenzo ya kila siku ya kuishi kwa furaha, utulivu, na mafanikio."
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up delay-500">
              <div className="bg-emerald-50 dark:bg-charcoal-900 p-8 rounded-xl border border-emerald-100 dark:border-charcoal-700 hover:shadow-lg transition hover:-translate-y-1">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-500 mb-3">Maono Yetu</h3>
                <p className="text-sm">Kuwa kituo namba moja Afrika Mashariki kwa elimu ya kisaikolojia inayotumika (Applied Psychology).</p>
              </div>
              <div className="bg-emerald-50 dark:bg-charcoal-900 p-8 rounded-xl border border-emerald-100 dark:border-charcoal-700 hover:shadow-lg transition hover:-translate-y-1">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-500 mb-3">Dhamira Yetu</h3>
                <p className="text-sm">Kutoa maarifa yaliyo rahisi kueleweka na kutekelezeka ili kuboresha afya ya akili na ustawi wa jamii.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;