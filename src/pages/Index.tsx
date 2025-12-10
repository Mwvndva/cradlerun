import Hero from "@/components/Hero";
import PurplePass from "@/components/PurplePass";
import PurpleMerch from "@/components/PurpleMerch";
import RouteMap from "@/components/RouteMap";
import Partners from "@/components/Partners";
import PurpleParties from "@/components/PurpleParties";
import SeasonalTheme from "@/components/SeasonalTheme";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PurplePass />
      <PurpleMerch />
      <RouteMap />
      <Partners />
      <PurpleParties />
      <SeasonalTheme />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
