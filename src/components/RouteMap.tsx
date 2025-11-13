import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const routeStops = [
  { day: 0, location: "COMING SOON" },
  { day: 1, location: "COMING SOON" },
  { day: 2, location: "COMING SOON" },
  { day: 3, location: "COMING SOON" },
  { day: 4, location: "COMING SOON" },
  { day: 5, location: "COMING SOON" },
  { day: 6, location: "COMING SOON" },
  { day: 7, location: "COMING SOON" }
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
                      <div className="text-sm text-muted-foreground">COMING SOON</div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-bebas text-foreground mb-2">{stop.location}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Meal:</strong> COMING SOON
                      </p>
                      <p className="text-sm text-foreground">
                        <strong className="text-accent">Purple Pit-Stop Talk:</strong> COMING SOON
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
