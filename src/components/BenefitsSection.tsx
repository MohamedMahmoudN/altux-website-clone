"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <div className="w-16 h-16 altux-gradient rounded-xl flex items-center justify-center">
          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
          </svg>
        </div>
      ),
      title: "Make More Money",
      description: "Smarter systems mean smarter profits. Altux helps you increase revenue with less effort."
    },
    {
      icon: (
        <div className="w-16 h-16 altux-gradient rounded-xl flex items-center justify-center">
          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15,1H9V3H15M19,8H17V21A2,2 0 0,1 15,23H9A2,2 0 0,1 7,21V8H5V6H19M9,8V21H15V8"/>
          </svg>
        </div>
      ),
      title: "Save More Time",
      description: "Your time is too valuable to waste on busywork. Automate the operations, reclaim your focus, and move at AI speed."
    },
    {
      icon: (
        <div className="w-16 h-16 altux-gradient rounded-xl flex items-center justify-center">
          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6"/>
          </svg>
        </div>
      ),
      title: "Elevate Your Status",
      description: "Stand out in your market. When your business runs on intelligence, you become the market authority in the eyes of both your customers and competitors."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-full mb-6">
            <span className="text-[#c7da3f] font-bold text-sm">Why Choose Altux?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Key Benefits <span className="text-gray-400">of Using</span> Altux
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Our AI tackles your biggest challenges.
            Discover why Altux is essential for modern companies.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
