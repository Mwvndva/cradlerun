import { Card } from "@/components/ui/card";
import { MapPin, Utensils, PartyPopper, Shirt, Award, FileCheck } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "7-Day Rally Passport",
    description: "Coming Soon"
  },
  {
    icon: Utensils,
    title: "14 Meal Vouchers",
    description: "Coming Soon"
  },
  {
    icon: PartyPopper,
    title: "3 Purple Parties",
    description: "Coming Soon"
  },
  {
    icon: Shirt,
    title: "Purple Merch Pack",
    description: "Coming Soon"
  },
  {
    icon: Award,
    title: "Purple Ribbon Finisher Medal",
    description: "Coming Soon"
  },
  {
    icon: FileCheck,
    title: "GBV Awareness Certificate",
    description: "Coming Soon"
  }
];

const PurplePass = () => {
  return (
    <section className="py-20 md:py-32 bg-background ribbon-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-foreground mb-4">
            PURPLE PASS
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            KSh 30,000 • 2 pax + 1 car
          </p>
          <div className="inline-block bg-gradient-to-r from-purple-light to-purple-medium text-white px-8 py-3 rounded-full font-semibold text-lg">
            All-Inclusive Rally Experience
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-purple-medium group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-light to-purple-medium flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bebas text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PurplePass;
