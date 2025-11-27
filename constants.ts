import { Course, Book, Article } from './types';

export const WHATSAPP_NUMBER = "255626638337";

// Images selected for psychological/calm/study themes
export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Emotional Intelligence Mastery',
    price: 40000,
    description: 'Jifunze kudhibiti hisia zako na kuelewa hisia za wengine kwa mafanikio.',
    duration: 'Wiki 4',
    image: 'https://images.unsplash.com/photo-1571217622283-c28fa48f3b14?q=80&w=800&auto=format&fit=crop' // Focus/Mind
  },
  {
    id: 'c2',
    title: 'Breaking Mental Barriers',
    price: 35000,
    description: 'Vunja vizuizi vya akili vinavyokuzuia kufikia malengo yako makubwa.',
    duration: 'Wiki 3',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop' // Breaking free/Nature
  },
  {
    id: 'c3',
    title: 'Ancient Psychology Secrets',
    price: 45000,
    description: 'Gundua siri za kale za kisaikolojia zilizotumiwa na wakuu wa zamani.',
    duration: 'Wiki 5',
    image: 'https://images.unsplash.com/photo-1518991243276-857edd00050e?q=80&w=800&auto=format&fit=crop' // Ancient/Statue
  },
  {
    id: 'c4',
    title: 'Self-Discipline & Habit Building',
    price: 30000,
    description: 'Jenga nidhamu binafsi na tabia zinazodumu kwa ajili ya mafanikio.',
    duration: 'Wiki 3',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop' // Writing/Planning
  },
  {
    id: 'c5',
    title: 'Mindset Reprogramming Intensive',
    price: 50000,
    description: 'Badilisha mtazamo wako wa kifikra ili uweze kuvutia utajiri na furaha.',
    duration: 'Wiki 6',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop' // Meditation/Yoga
  }
];

export const BOOKS: Book[] = [
  { id: 'b1', title: 'Think Like a Psychologist', price: 12000, description: 'Mwongozo wa kufikiri kitaalamu.', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=300&auto=format&fit=crop' },
  { id: 'b2', title: 'Mind Power & Subconscious', price: 15000, description: 'Nguvu ya akili na utambuzi wa ndani.', image: 'https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?q=80&w=300&auto=format&fit=crop' },
  { id: 'b3', title: 'Emotional Healing Guide', price: 10000, description: 'Uponyaji wa hisia na maumivu ya moyo.', image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=300&auto=format&fit=crop' },
  { id: 'b4', title: 'Ancient Mental Strength', price: 18000, description: 'Siri za kale za uimara wa akili.', image: 'https://images.unsplash.com/photo-1594189745308-468202534f59?q=80&w=300&auto=format&fit=crop' },
  { id: 'b5', title: 'Psychology of Success', price: 14000, description: 'Saikolojia nyuma ya watu waliofanikiwa.', image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?q=80&w=300&auto=format&fit=crop' },
  { id: 'b6', title: 'Human Behavior Codes', price: 17000, description: 'Kuelewa tabia za wanadamu kwa kina.', image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=300&auto=format&fit=crop' },
  { id: 'b7', title: 'Confidence Workbook', price: 12000, description: 'Kitabu kazi cha kujenga kujiamini.', image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=300&auto=format&fit=crop' },
  { id: 'b8', title: 'The Art of Calm Mind', price: 10000, description: 'Sanaa ya kuwa na akili tulivu.', image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=300&auto=format&fit=crop' },
];

export const ARTICLES: Article[] = [
  { id: 'a1', title: 'Jinsi ya Kudhibiti Hasira', category: 'Psychology Tips', excerpt: 'Mbinu 5 za haraka za kudhibiti hasira kabla haijakuletea madhara.', image: 'https://images.unsplash.com/photo-1525164966971-06a928499256?q=80&w=800&auto=format&fit=crop', date: 'Oktoba 12, 2023' },
  { id: 'a2', title: 'Siri ya Mahusiano Imara', category: 'Relationship Psychology', excerpt: 'Mambo matatu ambayo kila uhusiano unahitaji ili kudumu.', image: 'https://images.unsplash.com/photo-1516575972614-1a278923a317?q=80&w=800&auto=format&fit=crop', date: 'Novemba 5, 2023' },
  { id: 'a3', title: 'Kujenga Nidhamu Binafsi', category: 'Motivation', excerpt: 'Jifunze jinsi ya kufanya mambo hata kama hujisikii kufanya.', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop', date: 'Januari 15, 2024' },
  { id: 'a4', title: 'Akili ya Kale vs Kisasa', category: 'Ancient Secrets', excerpt: 'Tunachoweza kujifunza kutoka kwa stoicism.', image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop', date: 'Februari 2, 2024' },
];

export const TESTIMONIALS = [
  { name: "Juma H.", role: "Mwanafunzi", text: "Kozi ya Emotional Intelligence imebadilisha sana maisha yangu na familia yangu." },
  { name: "Aisha M.", role: "Mfanyabiashara", text: "Vitabu vya Life Psychology TZ ni hazina. Nimejifunza mengi kuhusu biashara na saikolojia." },
  { name: "Baraka J.", role: "Mjasiriamali", text: "Ushauri niliopata hapa umenisaidia kuvuka kipindi kigumu sana cha msongo wa mawazo." }
];