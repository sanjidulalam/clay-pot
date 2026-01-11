
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, CheckCircle, Leaf, ShieldCheck, ArrowRight, Star, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import { PRODUCTS, BLOG_POSTS, TESTIMONIALS, FAQS } from './constants';
import { Product } from './types';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-terracotta p-2 rounded-full">
            <Leaf className="text-white w-5 h-5" />
          </div>
          <span className="text-2xl font-bold text-charcoal tracking-tight">মৃৎশিল্প</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" className="hover:text-terracotta transition-colors">হোম</a>
          <a href="#shop" className="hover:text-terracotta transition-colors">শপ</a>
          <a href="#why-clay" className="hover:text-terracotta transition-colors">কেন মাটি?</a>
          <a href="#blog" className="hover:text-terracotta transition-colors">শিখুন</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-charcoal hover:text-terracotta transition-colors">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">০</span>
          </button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top duration-300">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2 border-b">হোম</a>
          <a href="#shop" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2 border-b">শপ</a>
          <a href="#why-clay" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2 border-b">কেন মাটি?</a>
          <a href="#blog" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2">শিখুন</a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/potteryhero/1920/1080" 
          alt="Clay Pottery" 
          className="w-full h-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl text-white">
          <span className="inline-block px-4 py-1 rounded-full bg-terracotta text-sm font-semibold mb-4 animate-bounce">
            ১০০% ন্যাচারাল ও লিড-ফ্রি
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            বিষমুক্ত রান্না হোক <br /> 
            <span className="text-terracotta">মাটির পাত্রে</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            টেফলন এবং ক্ষতিকারক কেমিক্যাল কোটিং-কে বিদায় জানান। 
            মৃৎশিল্পের খাঁটি মাটির পাত্রে রান্না করুন এবং আপনার পরিবারকে রাখুন সুস্থ।
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#shop" className="bg-terracotta hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105">
              এখনই কিনুন <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#why-clay" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all">
              কেন মাটির পাত্র?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyClay = () => {
  const benefits = [
    { title: "খাবারের পুষ্টি ধরে রাখে", desc: "মাটির পাত্রে রান্নার ফলে খাবারের প্রাকৃতিক পুষ্টি উপাদানগুলো অক্ষুণ্ণ থাকে।", icon: <Leaf className="w-10 h-10 text-sage" /> },
    { title: "ক্ষতিকারক কেমিক্যাল মুক্ত", desc: "কোনো প্রকার লিড বা পিএফএএস (PFAS) নেই, যা স্বাস্থ্যের জন্য নিরাপদ।", icon: <ShieldCheck className="w-10 h-10 text-terracotta" /> },
    { title: "পিএইচ (pH) ব্যালেন্স", desc: "মাটি ক্ষারীয় হওয়ায় এটি খাবারের অ্যাসিডের মাত্রা নিয়ন্ত্রণ করে স্বাদ বাড়ায়।", icon: <CheckCircle className="w-10 h-10 text-sage" /> },
  ];

  return (
    <section id="why-clay" className="py-24 bg-[#F7F3EE]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">কেন আধুনিক রান্নাঘরেও মাটি সেরা?</h2>
          <p className="text-lg text-gray-600">আমরা আমাদের ঐতিহ্যে ফিরে যাচ্ছি কারণ স্বাস্থ্যই সকল সুখের মূল।</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{b.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
              <p className="text-gray-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-charcoal text-white">
                <th className="p-6 text-left">বৈশিষ্ট্য</th>
                <th className="p-6 text-center">মৃৎশিল্প (মাটির পাত্র)</th>
                <th className="p-6 text-center">সাধারণ নন-স্টিক (টেফলন)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-6 font-bold">কেমিক্যাল কোটিং</td>
                <td className="p-6 text-center text-sage font-bold">নেই (১০০% প্রাকৃতিক)</td>
                <td className="p-6 text-center text-red-500">আছে (PFAS, PFOA)</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">খাবারের স্বাদ</td>
                <td className="p-6 text-center">প্রাকৃতিক ও মাটির সুগন্ধযুক্ত</td>
                <td className="p-6 text-center">মেটালিক বা সাধারণ</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">স্থায়িত্ব</td>
                <td className="p-6 text-center">সঠিক যত্নে বছরখানেক</td>
                <td className="p-6 text-center">কোটিং উঠে গেলে বিষাক্ত</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const ProductGallery = () => {
  return (
    <section id="shop" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">আমাদের সংগ্রহ</h2>
            <p className="text-gray-600">প্রতিটি পাত্র দক্ষ কারিগর দ্বারা হাতের ছোঁয়ায় তৈরি।</p>
          </div>
          <button className="text-terracotta font-bold flex items-center gap-2 hover:underline">
            সব পণ্য দেখুন <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {p.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 group-hover:text-terracotta transition-colors">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{p.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-xl font-bold text-charcoal">৳{p.price}</span>
                  <button className="bg-charcoal text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-terracotta transition-colors">
                    অর্ডার দিন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="blog" className="py-24 bg-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">গবেষণা ও শিক্ষা</h2>
          <p className="text-gray-400">মাটির পাত্রে রান্নার সঠিক পদ্ধতি ও এর উপকারিতা সম্পর্কে জানুন।</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <span className="text-terracotta text-sm font-bold uppercase tracking-wider">{post.date}</span>
                <h3 className="text-2xl font-bold group-hover:text-terracotta transition-colors">{post.title}</h3>
                <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
                <button className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                  পুরোটা পড়ুন <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-16">আমাদের খুশি গ্রাহকরা</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#FDFBF7] p-8 rounded-2xl border border-gray-100 flex flex-col gap-4">
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />
                ))}
              </div>
              <p className="text-lg italic text-gray-700">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center text-white font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="font-bold">{t.author}</h4>
                  <p className="text-sm text-gray-500">যাচাইকৃত ক্রেতা</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F7F3EE]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button 
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-24 bg-sage relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="bg-terracotta/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-terracotta" />
            </div>
            <h2 className="text-3xl font-bold mb-4">আমাদের নিউজলেটারে যোগ দিন</h2>
            <p className="text-gray-600 text-lg">
              আমাদের "সুস্থ রান্নার গাইড" এবং নতুন পণ্যের আপডেট পেতে ইমেইল সাবস্ক্রাইব করুন।
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="আপনার ইমেইল ঠিকানা লিখুন" 
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
              />
              <button className="w-full bg-terracotta text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all transform hover:-translate-y-1">
                সাবস্ক্রাইব করুন
              </button>
              <p className="text-xs text-center text-gray-400">আমরা স্প্যাম পছন্দ করি না। যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-terracotta p-1.5 rounded-full">
                <Leaf className="text-white w-4 h-4" />
              </div>
              <span className="text-2xl font-bold tracking-tight">মৃৎশিল্প</span>
            </div>
            <p className="text-gray-400">
              রান্নার সঠিক স্বাদ এবং পুষ্টি বজায় রাখার অঙ্গীকার নিয়ে আমরা আপনার ঘরে পৌঁছে দিচ্ছি খাঁটি মাটির হাঁড়ি।
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">লিংকসমূহ</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">হোম</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">শপ</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">ব্লগ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">আইনি তথ্য</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">গোপনীয়তা নীতি</a></li>
              <li><a href="#" className="hover:text-white transition-colors">শর্তাবলী</a></li>
              <li><a href="#" className="hover:text-white transition-colors">রিফান্ড পলিসি</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">যোগাযোগ</h4>
            <ul className="space-y-4 text-gray-400">
              <li>ঢাকা, বাংলাদেশ</li>
              <li>ফোন: ০১৭০০-০০০০০০</li>
              <li>ইমেইল: info@mritshilpo.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© ২০২৪ মৃৎশিল্প। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

const TrustSignals = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-sage" />
            <span className="font-bold">লিড-ফ্রি সার্টিফিকেট</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-sage" />
            <span className="font-bold">বিএসটিআই অনুমোদিত</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-sage" />
            <span className="font-bold">ইকো-ফ্রেন্ডলি প্যাকিং</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-sage" />
            <span className="font-bold">শতভাগ ন্যাচারাল</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustSignals />
      <WhyClay />
      <ProductGallery />
      <Education />
      <Testimonials />
      <FAQSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
