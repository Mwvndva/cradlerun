import { Heart, Home, Plane, Shield, Shirt, Video, Zap, FileCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const benefits = [
  {
    icon: Heart,
    title: "Medical Impact",
    description: "10% Direct donation to Usikimye charity to pay for critical medical expenses for those in need. 'Cradle Run Impact Board.' During the Mayungu Sandbar Gala, we present a specific 'Medical Case File' (anonymized for dignity) showing exactly what the KSh 58,050 per team is solving."
  },
  {
    icon: Home,
    title: "Accommodation",
    description: "3 nights full board in elite lodges and resorts"
  },
  {
    icon: Plane,
    title: "Travel & Logistics",
    description: "Return participant flights and flatbed car freight"
  },
  {
    icon: Shield,
    title: "Elite Asset Integrity & Concierge Operations",
    description: "Advanced Route Clearing & Pace Logistics Performance Engineering Pit Crew Dedicated Tactical Medical Suite Precision Navigators & Lifestyle Concierge"
  },
  {
    icon: Shirt,
    title: "Merch & Branding",
    description: "Custom Jackets, decals, and adventure badges"
  },
  {
    icon: Video,
    title: "Media Production",
    description: "4K reels, drone footage, and finale highlights"
  },
  {
    icon: Zap,
    title: "Adrenaline & VIP",
    description: "Vipingo Airstrip drag race, fastest launch off the line and Finale VIP access"
  },
  {
    icon: FileCheck,
    title: "A Special Motorsports liability wrap",
    description: "This policy should provide secondary coverage that specifically covers 'organized speed events' on private strips."
  }
];

const PurplePass = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentBenefit = benefits[currentIndex];
  const Icon = currentBenefit.icon;

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-white mb-4">
            INVESTMENT & PERKS (PER TEAM OF 2)
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-6">
            1 Car + 1 Driver + 1 Co-driver
          </p>
          <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold text-lg shadow-purple-lg">
            Entry Fee: $4,500
          </div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-primary/30 shadow-2xl shadow-primary/20 min-h-[400px]">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>

            {/* Content */}
            <div className="relative p-12 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-8">
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl shadow-primary/50 animate-pulse-slow">
                  <Icon className="w-14 h-14 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                {currentBenefit.title}
              </h3>

              {/* Description */}
              <p className="text-base text-white/80 leading-relaxed max-w-2xl">
                {currentBenefit.description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl shadow-primary/40 group"
            aria-label="Previous perk"
          >
            <ChevronLeft className="w-7 h-7 text-white group-hover:scale-125 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl shadow-primary/40 group"
            aria-label="Next perk"
          >
            <ChevronRight className="w-7 h-7 text-white group-hover:scale-125 transition-transform" />
          </button>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-primary to-secondary'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to perk ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-white/60 text-sm">
              {currentIndex + 1} / {benefits.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurplePass;
