import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const routeStops = [
  { day: 0, location: "Nairobi - KICC", km: 0, meal: "Welcome Dinner", talk: "Rally Briefing & GBV Statistics" },
  { day: 1, location: "Nairobi to Nakuru", km: 160, meal: "Lunch - Java", talk: "Recognizing Signs of GBV" },
  { day: 2, location: "Nakuru to Eldoret", km: 240, meal: "Dinner - KFC", talk: "Support Systems & Resources" },
  { day: 3, location: "Eldoret", km: 0, meal: "Purple Rave", talk: "Survivor Stories" },
  { day: 4, location: "Eldoret to Kisumu", km: 300, meal: "Lunch - Pizza Inn", talk: "Community Action Steps" },
  { day: 5, location: "Kisumu to Nairobi", km: 350, meal: "Dinner - Java", talk: "Legal Protection & Rights" },
  { day: 6, location: "Nairobi to Mombasa", km: 480, meal: "Lunch - KFC", talk: "Hotline 1195 & Emergency Response" },
  { day: 7, location: "Mombasa", km: 0, meal: "Purple Finale", talk: "Our Commitment Moving Forward" }
];

const RouteMap = () => {
  return (
    <section className="py-20 md:py-32 bg-background ribbon-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-foreground mb-4">
            THE ROUTE
          </h2>
          <p className="text-xl text-accent font-semibold">
            Every KM = 1 voice against violence
          </p>
        </div>
        
        {/* Route Visual */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-light via-purple-medium to-purple-deep hidden md:block"></div>
            
            {/* Stops */}
            <div className="space-y-8">
              {routeStops.map((stop, index) => (
                <Card 
                  key={index}
                  className="relative p-6 ml-0 md:ml-20 hover:shadow-lg transition-all duration-300 border-l-4 border-purple-medium"
                >
                  {/* Pin Icon */}
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-light to-purple-deep flex items-center justify-center hidden md:flex">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-3xl font-bebas text-purple-deep">Day {stop.day}</div>
                      <div className="text-sm text-muted-foreground">{stop.km} KM</div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-bebas text-foreground mb-2">{stop.location}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Meal:</strong> {stop.meal}
                      </p>
                      <p className="text-sm text-foreground">
                        <strong className="text-accent">Purple Pit-Stop Talk:</strong> {stop.talk}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Total Distance */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-deep to-accent text-white px-12 py-6 rounded-2xl">
            <div className="text-5xl font-bebas mb-2">3,000+ KM</div>
            <div className="text-sm uppercase tracking-wider">Total Journey Distance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteMap;
