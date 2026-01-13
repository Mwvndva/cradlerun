import { Card } from "@/components/ui/card";
import bomberImage from "@/assets/merch-bomber-black.png";
import tshirtImage from "@/assets/merch-tshirt-black.png";
import hatImage from "@/assets/merch-hat-black.png";
import bottleImage from "@/assets/merch-bottle-black.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const merchItems = [
  {
    name: "Purple Rally Bomber",
    description: "Premium MA-1 style bomber with bold back print",
    features: ["Water-resistant shell", "Orange lining", "Purple Mile back print"],
    image: bomberImage
  },
  {
    name: "Purple Mile Tee",
    description: "Heavyweight cotton tee with chest branding",
    features: ["100% Cotton", "Oversized fit", "Premium screen print"],
    image: tshirtImage
  },
  {
    name: "Purple Snapback Cap",
    description: "Premium purple cap with footprint logo and ribbon",
    features: ["Adjustable fit", "UV protection", "Breathable fabric"],
    image: hatImage
  },
  {
    name: "Purple Mile Water Bottle",
    description: "Stay hydrated and show your support",
    features: ["Insulated stainless steel", "Leak-proof cap", "Purple Mile branding"],
    image: bottleImage
  }
];

const PurpleMerch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % merchItems.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + merchItems.length) % merchItems.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % merchItems.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentItem = merchItems[currentIndex];

  return (
    <section className="py-12 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-foreground mb-4">
            PURPLE MERCH
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wear the cause. Every item tells a story of awareness and action.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto relative">

          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-none bg-transparent">
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-primary/20 max-w-2xl mx-auto">

              {/* Image Only */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h3 className="text-3xl md:text-4xl font-bebas text-white mb-2 leading-tight drop-shadow-md">
                    {currentItem.name}
                  </h3>
                </div>
              </div>

            </div>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group z-10"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-125 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group z-10"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-125 transition-transform" />
          </button>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {merchItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-primary to-secondary'
                  : 'w-3 h-3 bg-primary/20 hover:bg-primary/50'
                  }`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-muted-foreground text-sm uppercase tracking-widest">
              Collection Item {currentIndex + 1} / {merchItems.length}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PurpleMerch;
