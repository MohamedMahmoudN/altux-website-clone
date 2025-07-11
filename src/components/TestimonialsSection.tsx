"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Altux made our systems think. That changed everything. We went from manual chaos to intelligent flow.",
      name: "Tariq Y.",
      position: "Chief Product Officer",
      avatar: "bg-orange-500"
    },
    {
      quote: "Our competitors noticed the shift. Altux gave us an unfair edge. Suddenly, we weren't just competing we were leading.",
      name: "Reem D.",
      position: "Brand Strategist",
      avatar: "bg-purple-500"
    },
    {
      quote: "It's like running our business on autopilot, and it actually works. We move faster, with less effort, and more clarity.",
      name: "Mohammed A.",
      position: "Founder & CEO",
      avatar: "bg-blue-500"
    },
    {
      quote: "We scaled without hiring. That's the future and Altux delivers it. More revenue, less overhead, that's a no-brainer.",
      name: "Mark J.",
      position: "CEO",
      avatar: "bg-green-500"
    },
    {
      quote: "It's like we plugged a brain into our operations. Now every part of the business moves with intention.",
      name: "Ahmad E.",
      position: "Director of Operations",
      avatar: "bg-red-500"
    },
    {
      quote: "The AI feels custom built. Every insight feels like it was made for us. It's as if Altux understands our business better than we do.",
      name: "Abdallah M.",
      position: "Project Manager",
      avatar: "bg-indigo-500"
    },
    {
      quote: "Altux transformed how we handle leads and follow ups. It's like having a smart partner working 24/7.",
      name: "Yusuf N.",
      position: "Managing Director",
      avatar: "bg-pink-500"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-full mb-6">
            <span className="text-[#c7da3f] font-bold text-sm">Trusted by Leading Companies</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See What <span className="text-white">Our Users Are Saying</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from teams who have transformed
            their productivity with Altux.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6">
                {/* Quote */}
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 ${testimonial.avatar} rounded-full`}></div>
                  <div>
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.position}</div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#c7da3f] text-sm">★</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mt-16 flex justify-center items-center space-x-12 opacity-30">
          <div className="w-20 h-12 bg-gray-600 rounded"></div>
          <div className="w-20 h-12 bg-gray-600 rounded"></div>
          <div className="w-20 h-12 bg-gray-600 rounded"></div>
          <div className="w-20 h-12 bg-gray-600 rounded"></div>
        </div>
      </div>
    </section>
  );
}
