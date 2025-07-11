"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-700 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-700 rounded-lg -rotate-6"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-gray-700 rounded-lg rotate-45"></div>
      </div>

      {/* Floating Testimonials */}
      <div className="absolute top-32 left-8 hidden lg:block">
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 max-w-xs transform -rotate-6 hover:rotate-0 transition-all duration-300">
          <p className="text-white text-sm mb-3">
            "Altux made our systems think. That changed everything. We went from manual chaos to intelligent flow."
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
            <div>
              <div className="text-white text-xs font-semibold">Tariq Y.</div>
              <div className="text-gray-400 text-xs">Chief Product Officer</div>
            </div>
          </div>
          <div className="flex space-x-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#c7da3f] text-xs">★</span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-48 right-8 hidden lg:block">
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 max-w-xs transform rotate-6 hover:rotate-0 transition-all duration-300">
          <p className="text-white text-sm mb-3">
            "Our competitors noticed the shift. Altux gave us an unfair edge. We weren't just competing, we were leading."
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
            <div>
              <div className="text-white text-xs font-semibold">Reem D.</div>
              <div className="text-gray-400 text-xs">Brand Strategist</div>
            </div>
          </div>
          <div className="flex space-x-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#c7da3f] text-xs">★</span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 right-16 hidden lg:block">
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 max-w-xs transform rotate-3 hover:rotate-0 transition-all duration-300">
          <p className="text-white text-sm mb-3">
            "It's like running our business on autopilot, and it actually works. We move faster, with less effort, and more clarity."
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div>
              <div className="text-white text-xs font-semibold">Mohammed A.</div>
              <div className="text-gray-400 text-xs">Founder & CEO</div>
            </div>
          </div>
          <div className="flex space-x-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#c7da3f] text-xs">★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-full mb-8">
          <span className="text-[#c7da3f] font-bold text-sm">#1 AI Service in MENA</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your <span className="text-gray-400">Business</span> on{" "}
          <span className="text-white">Autopilot</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
          Altux embeds AI at the core of your business, unlocking its next level. We
          boost your profits, free your time, and position you as a market pioneer.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center space-y-4">
          <Button
            asChild
            className="bg-[#c7da3f] hover:bg-[#b5c739] text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2"
          >
            <Link href="https://wa.me/+963956612812" target="_blank">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10h5l-6 6-6-6h5z"/>
              </svg>
              <span>Contact The Leader</span>
            </Link>
          </Button>
          <p className="text-gray-400 text-sm">Exclusive Meeting with Omar Al-Mlli</p>

          {/* Rating */}
          <div className="flex items-center space-x-2 mt-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#c7da3f] text-lg">★</span>
              ))}
            </div>
            <span className="text-gray-300 text-sm">50+ ratings from our customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
