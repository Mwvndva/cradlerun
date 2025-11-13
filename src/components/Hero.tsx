import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cradle-run.jpg";
import ribbonIcon from "@/assets/purple-ribbon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-deep/80 via-purple-medium/70 to-purple-deep/90"></div>
      </div>
      
      {/* Floating Ribbon Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src={ribbonIcon} alt="" className="absolute top-20 left-10 w-12 h-12 opacity-30 animate-float" />
        <img src={ribbonIcon} alt="" className="absolute top-40 right-20 w-16 h-16 opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <img src={ribbonIcon} alt="" className="absolute bottom-32 left-1/4 w-10 h-10 opacity-25 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Subtitle */}
          <div className="mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <img src={ribbonIcon} alt="Purple Ribbon" className="w-8 h-8" />
              <span className="text-white font-semibold tracking-wider text-sm md:text-base">
                SEASON 1 • 2026
              </span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas text-white mb-6 text-stroke-purple leading-tight">
            CRADLE RUN 2026
            <br />
            <span className="text-secondary">PURPLE MILE</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-light">
            3,000 km to break the silence on GBV.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bebas text-secondary">7</div>
              <div className="text-sm text-white/80 uppercase tracking-wide">Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bebas text-secondary">3,000</div>
              <div className="text-sm text-white/80 uppercase tracking-wide">Kilometers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bebas text-secondary">1</div>
              <div className="text-sm text-white/80 uppercase tracking-wide">Mission</div>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 h-auto"
            onClick={() => window.open('https://cradlerun.co.ke/pay-purple', '_blank')}
          >
            COMING SOON
          </Button>
          
          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/70 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
