export interface Course {
  id: string;
  title: string;
  price: number;
  description: string;
  duration: string;
  image: string;
}

export interface Book {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
}

export enum PaymentMethod {
  MPESA = 'M-Pesa',
  TIGOPESA = 'Tigo Pesa',
  AIRTELMONEY = 'Airtel Money'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}