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
    <div className="min-h-screen">
      {/* Background Image Container - From Hero to FAQ */}
      <div
        className="relative bg-cover bg-center bg-scroll md:bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/85"></div>

        {/* Content */}
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
      </div>

      {/* Footer outside background */}
      <Footer />
    </div>
  );
};

export default Index;
