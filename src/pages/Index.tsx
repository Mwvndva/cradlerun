import Hero from "@/components/Hero";
import PurplePass from "@/components/PurplePass";
import PurpleMerch from "@/components/PurpleMerch";
import RouteMap from "@/components/RouteMap";
import Partners from "@/components/Partners";
import PurpleParties from "@/components/PurpleParties";
import SeasonalTheme from "@/components/SeasonalTheme";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-luxury.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Layer */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Content Layer - Scrolls over background */}
      <div className="relative z-10">
        <Hero />
        <PurplePass />
        <PurpleMerch />
        <RouteMap />
        <Partners />
        <PurpleParties />
        <SeasonalTheme />
        <FAQ />
      </div>

      {/* Footer outside background */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
