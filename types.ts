
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
