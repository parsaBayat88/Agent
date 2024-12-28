import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Real Estate Broker",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "The AI automation tools have transformed how we handle leads. Our response time has improved dramatically.",
    metric: "80% faster lead response time"
  },
  {
    name: "Michael Chen",
    title: "Property Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    quote: "The automated showing scheduling system has saved us countless hours and improved client satisfaction.",
    metric: "300% increase in showings"
  },
  {
    name: "Emily Rodriguez",
    title: "Real Estate Agent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "The predictive analytics have helped us target the right properties for our clients with incredible accuracy.",
    metric: "45% higher closing rate"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8200fb]/5 to-cyan-500/5" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#8200fb]"
                        />
                        <div className="ml-4">
                          <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 italic mb-6 text-lg">{testimonial.quote}</p>
                      <p className="text-[#8200fb] font-semibold">{testimonial.metric}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full border border-white/10 hover:border-[#8200fb] transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full border border-white/10 hover:border-[#8200fb] transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#8200fb]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}