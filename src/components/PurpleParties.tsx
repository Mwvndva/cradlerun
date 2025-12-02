import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Music } from "lucide-react";

const parties = [
  {
    day: "Day 5",
    name: "FINAL BASH",
    location: "COMING SOON",
    description: "COMING SOON",
    icon: "🕯️",
    time: "COMING SOON"
  }
];

const PurpleParties = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-purple-deep/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-foreground mb-4">
            PURPLE PARTIES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The grand finale celebration
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {parties.map((party, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              {/* Purple Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-light/20 to-purple-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                {/* Day Badge */}
                <div className="inline-block bg-gradient-to-r from-purple-medium to-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {party.day}
                </div>
                
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {party.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bebas text-foreground mb-3">
                  {party.name}
                </h3>
                
                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-purple-medium" />
                    {party.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-purple-medium" />
                    {party.time}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-sm text-foreground leading-relaxed">
                  {party.description}
                </p>
                
                {/* Purple Light Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-light via-purple-medium to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurpleParties;
