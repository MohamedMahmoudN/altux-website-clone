"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-full mb-8">
            <span className="text-[#c7da3f] font-bold text-sm">Take the First Step Toward Efficiency</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready For The Next Level?
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Meet Al-Mlli now and see the difference
            Altux can make for your business.
          </p>

          {/* CTA Button */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
