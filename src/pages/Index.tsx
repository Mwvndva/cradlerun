import Hero from "@/components/Hero";
import AnimatedRouteMap from "@/components/AnimatedRouteMap";
import NumberPlate from "@/components/NumberPlate";
import ParticipantKit from "@/components/ParticipantKit";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Hero />
      <AnimatedRouteMap />
      <NumberPlate />
      <ParticipantKit />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
