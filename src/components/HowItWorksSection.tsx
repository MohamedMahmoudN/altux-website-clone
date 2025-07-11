"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HowItWorksSection() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-full mb-6">
            <span className="text-[#c7da3f] font-bold text-sm">Get Started in Few Days</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How <span className="text-white">Altux</span> <span className="text-gray-400">Works</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            From setup to success in three simple steps. Here's how you can start maximizing
            productivity right away.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 relative">
                {/* Progress Indicators */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#c7da3f] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full">
                      <div className="w-full h-full bg-[#c7da3f] rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full">
                      <div className="w-1/3 h-full bg-gray-600 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                    </div>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 bg-[#c7da3f] text-black text-sm font-bold rounded-full mb-4">
                Step 1
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Schedule & Strategize
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We start with a dedicated meeting to understand your vision, set clear goals, and map out a winning plan.
              </p>
              <Button
                asChild
                className="bg-[#c7da3f] hover:bg-[#b5c739] text-black font-semibold px-6 py-2 rounded-full"
              >
                <Link href="https://wa.me/+963956612812" target="_blank">
                  Take The First Step
                </Link>
              </Button>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-[#c7da3f] text-black text-sm font-bold rounded-full mb-4">
                Step 2
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                We Build & Integrate
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Leave the heavy lifting to us — we develop and seamlessly integrate the smart system into your business.
              </p>
              <Button
                asChild
                className="bg-[#c7da3f] hover:bg-[#b5c739] text-black font-semibold px-6 py-2 rounded-full"
              >
                <Link href="https://wa.me/+963956612812" target="_blank">
                  Take The First Step
                </Link>
              </Button>
            </div>

            <div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 relative">
                {/* Puzzle Visual */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gray-700 rounded-lg opacity-50"></div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#c7da3f] rounded-lg transform rotate-12 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 relative">
                {/* Success Visual */}
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#c7da3f] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6"/>
                      </svg>
                    </div>
                    <div className="text-[#c7da3f] text-2xl font-bold">Success!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 bg-[#c7da3f] text-black text-sm font-bold rounded-full mb-4">
                Step 3
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Relax & Elevate
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Sit back and watch your business level up, fueled by continuous improvement and sustainable growth.
              </p>
              <Button
                asChild
                className="bg-[#c7da3f] hover:bg-[#b5c739] text-black font-semibold px-6 py-2 rounded-full"
              >
                <Link href="https://wa.me/+963956612812" target="_blank">
                  Take The First Step
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
