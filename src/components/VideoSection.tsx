"use client";

export default function VideoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Green Gradient Background */}
      <div className="absolute inset-0 altux-video-bg"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Video Player */}
          <div className="relative aspect-video bg-black/20 rounded-2xl backdrop-blur-sm border border-black/10 flex items-center justify-center group cursor-pointer hover:scale-105 transition-all duration-300">
            {/* Play Button */}
            <div className="w-20 h-20 bg-black/80 rounded-full flex items-center justify-center group-hover:bg-black/90 transition-all duration-200">
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>

            {/* Video Overlay Text */}
            <div className="absolute bottom-6 left-6">
              <h3 className="text-black text-2xl font-bold">
                Introducing Altux
              </h3>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-black/80 text-lg font-medium">
              See how we transform businesses through intelligent automation
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-black/10 rounded-lg rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-black/10 rounded-lg -rotate-6"></div>
    </section>
  );
}
