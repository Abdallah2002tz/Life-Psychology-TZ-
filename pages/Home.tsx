import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, User, Star, CheckCircle, Brain, Heart, Lightbulb, Camera } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518991243276-857edd00050e?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <div className="relative bg-emerald-900 text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Animated Background Image */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-emerald-800/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center z-10 py-20">
          <div className="mb-4 animate-fade-in-up">
             <Brain className="h-16 w-16 text-gold-500 animate-float" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight animate-fade-in-up delay-100">
            Life Psychology TZ <br/>
            <span className="text-gold-500 text-2xl md:text-5xl block mt-2">Unlocking the Power of the Mind</span>
          </h1>
          <p className="text-lg md:text-2xl text-emerald-100 max-w-3xl mb-10 font-light animate-fade-in-up delay-200 leading-relaxed">
            Mafunzo, ushauri na maarifa ya kisaikolojia kwa maendeleo ya maisha, tabia, mahusiano na mafanikio ya kudumu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <Link to="/blog" className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-emerald-950 font-bold rounded-full transition shadow-lg hover:shadow-xl hover:scale-105 transform duration-300 flex items-center justify-center gap-2">
              <BookOpen className="h-5 w-5" />
              Soma Makala
            </Link>
            <Link to="/training" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white font-semibold rounded-full transition flex items-center justify-center gap-2 hover:scale-105 transform duration-300">
              <User className="h-5 w-5" />
              Jiunge na Mafunzo
            </Link>
             <Link to="/books" className="px-8 py-4 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold rounded-full transition flex items-center justify-center gap-2 shadow-lg hover:scale-105 transform duration-300">
              Nunua Vitabu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-white dark:bg-charcoal-900 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 dark:bg-emerald-900/10 rounded-bl-full -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Karibu Life Psychology TZ</h2>
            <div className="w-24 h-1.5 bg-gold-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Life Psychology TZ ni jukwaa la kipekee la kujifunza mbinu za zamani na za kisasa za kisaikolojia. 
              Lengo letu ni kukusaidia kuboresha maisha yako, kujenga tabia njema, kuimarisha mahusiano, 
              na kufikia kilele cha mafanikio katika kazi na biashara.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Gallery / Psychology Aspects */}
      <section className="py-20 bg-emerald-50 dark:bg-charcoal-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
             <h2 className="text-3xl font-bold text-emerald-900 dark:text-white">Nyanja Zetu</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-3xl shadow-lg h-80 animate-fade-in-left delay-100">
               <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop" alt="Mind" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent flex flex-col justify-end p-8 text-white">
                 <Brain className="h-10 w-10 mb-2 text-gold-400 animate-bounce" />
                 <h3 className="text-2xl font-bold mb-1">Mental Clarity</h3>
                 <p className="text-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Jenga utulivu wa akili na maamuzi sahihi.</p>
               </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl shadow-lg h-80 animate-fade-in-up delay-200">
               <img src="https://images.unsplash.com/photo-1516575972614-1a278923a317?q=80&w=800&auto=format&fit=crop" alt="Relationships" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent flex flex-col justify-end p-8 text-white">
                 <Heart className="h-10 w-10 mb-2 text-gold-400 animate-pulse" />
                 <h3 className="text-2xl font-bold mb-1">Relationships</h3>
                 <p className="text-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Boresha mahusiano yako na wengine.</p>
               </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl shadow-lg h-80 animate-fade-in-right delay-300">
               <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop" alt="Growth" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent flex flex-col justify-end p-8 text-white">
                 <Lightbulb className="h-10 w-10 mb-2 text-gold-400" />
                 <h3 className="text-2xl font-bold mb-1">Personal Growth</h3>
                 <p className="text-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Fikia malengo yako kwa mbinu za kisaikolojia.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Gallery Section */}
      <section className="py-20 bg-white dark:bg-charcoal-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 animate-fade-in-up">
               <div>
                  <h2 className="text-3xl font-bold text-emerald-900 dark:text-white flex items-center gap-2">
                    <Camera className="h-8 w-8 text-gold-500" />
                    Galari ya Maisha
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Picha zinazoakisi utulivu, nguvu ya akili na asili.</p>
               </div>
               <Link to="/blog" className="hidden md:flex text-emerald-700 dark:text-emerald-400 font-bold hover:underline">Tazama Zaidi &rarr;</Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {galleryImages.map((img, idx) => (
                  <div key={idx} className={`rounded-xl overflow-hidden h-48 md:h-64 shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 cursor-pointer animate-zoom-in`} style={{ animationDelay: `${idx * 150}ms` }}>
                     <img src={img} alt="Psychology Gallery" className="w-full h-full object-cover hover:scale-110 transition duration-700" />
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Features/Stats */}
      <section className="bg-emerald-50 dark:bg-charcoal-800 py-12 border-y border-emerald-100 dark:border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Psychological Secrets", desc: "Mbinu zilizofichika za mafanikio." },
             { title: "Behavior Change", desc: "Badilisha tabia, badilisha maisha." },
             { title: "Emotional IQ", desc: "Akili ya hisia kwa uongozi bora." }
           ].map((item, idx) => (
             <div key={idx} className="flex items-start space-x-4 p-6 bg-white dark:bg-charcoal-900 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 duration-300 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
               <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full">
                 <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                 <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Shuhuda za Waliofanikiwa</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-emerald-200 mt-4 text-lg">Wanafunzi wetu wanasemaje kuhusu mabadiliko waliyopata?</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t, idx) => (
               <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl relative shadow-xl hover:bg-white/15 transition duration-300 animate-zoom-in border border-emerald-500/30" style={{ animationDelay: `${idx * 150}ms` }}>
                 <div className="text-gold-400 mb-6 flex">
                   {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                 </div>
                 <p className="text-emerald-50 italic mb-6 leading-relaxed">"{t.text}"</p>
                 <div className="flex items-center space-x-4">
                   <div className="h-12 w-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-emerald-900 font-bold text-xl shadow-lg">
                     {t.name.charAt(0)}
                   </div>
                   <div>
                     <p className="font-bold text-white text-lg">{t.name}</p>
                     <p className="text-sm text-emerald-300">{t.role}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white dark:bg-charcoal-900 py-24 text-center px-4 relative">
        <div className="absolute left-10 top-20 opacity-10 animate-float delay-700 hidden md:block">
           <Brain className="h-24 w-24 text-emerald-900 dark:text-white" />
        </div>
        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-charcoal-800 p-8 md:p-16 rounded-[2rem] shadow-2xl animate-fade-in-up border border-gray-100 dark:border-charcoal-700">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-white mb-4">Jiunge na Jarida Letu</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">Pata dondoo za kisaikolojia, makala mpya, na ofa maalum za vitabu moja kwa moja kwenye email yako.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Weka barua pepe yako" 
              className="flex-1 px-6 py-4 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-inner"
              required
            />
            <button type="submit" className="px-8 py-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Jiunge Sasa
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;