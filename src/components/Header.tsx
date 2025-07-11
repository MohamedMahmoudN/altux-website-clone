"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-white text-2xl font-bold tracking-tight">
            ALTUX
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#benefits"
            className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
          >
            <span>Benefits</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link
            href="#about"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            FAQ
          </Link>
        </nav>

        {/* CTA Button */}
        <Button
          asChild
          className="bg-[#c7da3f] hover:bg-[#b5c739] text-black font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
        >
          <Link href="https://wa.me/+963956612812" target="_blank">
            Take The First Step
          </Link>
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
