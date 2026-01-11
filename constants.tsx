
import { Product, Testimonial, BlogPost, FAQItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'প্রতিদিনের ফ্রাইপ্যান (The Everyday Skillet)',
    // Fix: Replaced Bengali numerals with standard Arabic numerals for numeric values
    price: 1250,
    description: '১০০% প্রাকৃতিক মাটি দিয়ে তৈরি, যা প্রতিদিনের ভাজাভুজির জন্য আদর্শ।',
    image: 'https://picsum.photos/seed/skillet/600/600',
    category: 'Skillet'
  },
  {
    id: '2',
    name: 'গভীর কারি পট (The Deep Curry Pot)',
    // Fix: Replaced Bengali numerals with standard Arabic numerals for numeric values
    price: 1800,
    description: 'ধীর গতিতে রান্নার জন্য চমৎকার, যা খাবারের পুষ্টিগুণ ধরে রাখে।',
    image: 'https://picsum.photos/seed/currypot/600/600',
    category: 'Pot'
  },
  {
    id: '3',
    name: 'আর্টিসান ডাচ ওভেন (The Artisan Dutch Oven)',
    // Fix: Replaced Bengali numerals with standard Arabic numerals for numeric values
    price: 2500,
    description: 'ঐতিহ্যবাহী নকশা ও আধুনিক স্থায়িত্বের এক অনন্য সংমিশ্রণ।',
    image: 'https://picsum.photos/seed/dutchoven/600/600',
    category: 'Premium'
  },
  {
    id: '4',
    name: 'ট্যাজিন স্টাইল কুকার (The Tagine Pot)',
    // Fix: Replaced Bengali numerals with standard Arabic numerals for numeric values
    price: 2100,
    description: 'মাংস ও সবজি রান্নার জন্য বিশেষ এক মাটির পাত্র।',
    image: 'https://picsum.photos/seed/tagine/600/600',
    category: 'Specialty'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'আপনার মাটির পাত্রের প্রথম যত্ন বা সিজনিং কীভাবে করবেন?',
    excerpt: 'মাটির হাঁড়িতে প্রথমবার রান্নার আগে সিজনিং করা অত্যন্ত জরুরি। জেনে নিন সহজ ধাপগুলো...',
    image: 'https://picsum.photos/seed/seasoning/800/500',
    date: '১০ মার্চ, ২০২৪'
  },
  {
    id: 'b2',
    title: 'ফার-ইনফ্রারেড কুকিং: মাটির পাত্রে রান্নার বিজ্ঞান',
    excerpt: 'কেন মাটির পাত্রে রান্না করা খাবার বেশি সুস্বাদু হয়? এর পেছনের বৈজ্ঞানিক কারণগুলো জানুন।',
    image: 'https://picsum.photos/seed/science/800/500',
    date: '১৫ মার্চ, ২০২৪'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'সামিনা সুলতানা',
    text: 'অল্প তেল দিয়ে মাটির পাত্রে রান্না করা যায় এবং খাবারের স্বাদ একদম অন্যরকম হয়। আমি খুবই খুশি!',
    rating: 5
  },
  {
    id: 't2',
    author: 'আরিফ আহমেদ',
    text: 'আমার গ্যাস্ট্রিকের সমস্যা অনেক কমেছে মাটির পাত্রে রান্না খাবার খেয়ে। ধন্যবাদ মৃৎশিল্পকে।',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'মাটির হাঁড়ি ফেটে যাওয়া কীভাবে রোধ করব?',
    answer: 'রান্না শুরু করার আগে হাঁড়িটি কিছুক্ষণ পানিতে ভিজিয়ে রাখুন। সরাসরি উচ্চ তাপে বসাবেন না, ধীর আঁচে রান্না শুরু করুন।'
  },
  {
    question: 'ইনডাকশন স্টোভে কি মাটির পাত্র ব্যবহার করা যায়?',
    answer: 'সরাসরি ব্যবহার করা যায় না। তবে ইন্ডাকশন কনভার্টার প্লেট ব্যবহার করে আপনি আপনার পছন্দের মাটির পাত্রটি ব্যবহার করতে পারেন।'
  },
  {
    question: 'মাটির হাঁড়ি ধোয়ার সঠিক উপায় কী?',
    answer: 'রাসায়নিক সাবান ব্যবহার না করাই ভালো। হালকা গরম পানি এবং পাতিলেবুর রস বা বেকিং সোডা ব্যবহার করে পরিষ্কার করুন।'
  }
];
