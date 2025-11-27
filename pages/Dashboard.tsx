import React from 'react';
import { BookOpen, Award, BarChart, Settings } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-charcoal-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
           <div>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Yangu</h1>
             <p className="text-gray-500 dark:text-gray-400">Karibu tena, Mwanafunzi.</p>
           </div>
           <div className="bg-white dark:bg-charcoal-800 p-2 rounded-lg shadow-sm text-sm text-gray-600 dark:text-gray-300 mt-4 md:mt-0">
             Leo ni: {new Date().toLocaleDateString('sw-TZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
           </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-charcoal-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-charcoal-700 flex items-center gap-4">
             <div className="bg-blue-100 p-3 rounded-full text-blue-600">
               <BookOpen className="h-6 w-6" />
             </div>
             <div>
               <p className="text-sm text-gray-500 dark:text-gray-400">Kozi Zinazoendelea</p>
               <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
             </div>
          </div>
          <div className="bg-white dark:bg-charcoal-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-charcoal-700 flex items-center gap-4">
             <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
               <Award className="h-6 w-6" />
             </div>
             <div>
               <p className="text-sm text-gray-500 dark:text-gray-400">Vyeti</p>
               <p className="text-2xl font-bold text-gray-900 dark:text-white">1</p>
             </div>
          </div>
          <div className="bg-white dark:bg-charcoal-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-charcoal-700 flex items-center gap-4">
             <div className="bg-gold-100 p-3 rounded-full text-gold-600">
               <BarChart className="h-6 w-6" />
             </div>
             <div>
               <p className="text-sm text-gray-500 dark:text-gray-400">Maendeleo</p>
               <p className="text-2xl font-bold text-gray-900 dark:text-white">65%</p>
             </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Active Courses */}
          <div className="lg:col-span-2 bg-white dark:bg-charcoal-800 rounded-2xl shadow-sm border border-gray-100 dark:border-charcoal-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Kozi Zako</h2>
            <div className="space-y-6">
              {[
                { title: 'Emotional Intelligence Mastery', progress: 75, next: 'Module 4: Social Skills' },
                { title: 'Self-Discipline & Habit Building', progress: 30, next: 'Module 2: The Loop' }
              ].map((c, i) => (
                <div key={i} className="border-b border-gray-100 dark:border-charcoal-700 last:border-0 pb-4 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{c.title}</h3>
                    <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded">{c.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-charcoal-600 rounded-full h-2 mb-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${c.progress}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Inafuata: {c.next}</p>
                  <button className="mt-3 text-sm font-medium text-gold-600 hover:text-gold-700">Endelea Kusoma &rarr;</button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions / Profile */}
          <div className="bg-white dark:bg-charcoal-800 rounded-2xl shadow-sm border border-gray-100 dark:border-charcoal-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Wasifu</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://picsum.photos/id/1005/200/200" alt="User" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Juma Hamisi</p>
                <p className="text-sm text-gray-500">Mwanachama Hai</p>
              </div>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-charcoal-900 rounded-lg cursor-pointer transition">
                <span className="text-gray-600 dark:text-gray-300">Hariri Wasifu</span>
                <Settings className="h-4 w-4 text-gray-400" />
              </li>
              <li className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-charcoal-900 rounded-lg cursor-pointer transition">
                 <span className="text-gray-600 dark:text-gray-300">Historia ya Malipo</span>
                 <Settings className="h-4 w-4 text-gray-400" />
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;