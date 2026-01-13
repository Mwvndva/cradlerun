import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import ribbonIcon from "@/assets/purple-ribbon.png";
import { RegistrationForm } from "./RegistrationForm";
import { NavLink } from "./NavLink";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo/Subtitle */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30">

              <span className="text-white font-semibold tracking-widest text-sm md:text-base">
                SEASON 1 • 2026
              </span>
            </div>
          </div>

          {/* Main Heading with Purple Accent Bar */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bebas text-white mb-4 leading-none tracking-tight">
              CRADLE RUN
              <br />
              <span className="text-primary text-purple">2026</span>
            </h1>
            {/* Purple Accent Bars */}
            <div className="flex justify-center gap-3 mt-6">
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary"></div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-4 font-light tracking-wide flex items-center justify-center gap-3">
            <span className="text-primary"></span>
            A LUXURY CAR SAFARI. A NETWORK. A LEGACY.
          </p>

          {/* Mission Statement */}
          <p className="text-base md:text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            To establish a premier yearly supercar safari that delivers adrenaline-pumping experiences
            and high-end networking for luxury vehicle enthusiasts.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bebas text-primary">4</div>
              <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bebas text-primary">700+</div>
              <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Kilometers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bebas text-primary">1</div>
              <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Mission</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg md:text-2xl px-8 md:px-16 py-3 md:py-8 h-auto font-bebas tracking-wider shadow-purple-lg transition-all hover:shadow-purple-glow hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              Become a Member
            </Button>

            <NavLink
              to="/impact"
              className="inline-block w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-sm md:text-lg px-6 md:px-10 py-3 md:py-7 h-auto bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3 font-semibold tracking-wide"
              >
                <Circle className="w-3 h-3 fill-primary animate-pulse" />
                Live Impact Tracker
              </Button>
            </NavLink>
          </div>

          <RegistrationForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
