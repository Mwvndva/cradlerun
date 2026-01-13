import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import routeMapImage from "@/assets/route-map.png";

const routeStops = [
  {
    day: 1,
    location: "NAIROBI → TSAVO",
    title: "The Elite Induction & Identity Branding",
    highlights: [
      "06:30 AM: Inner Circle Briefing (Wilson Airport Hangar)",
      "07:30 AM: Official Flag-off (A109 Highway)",
      "09:30 AM: Cinematic Asset Session - 4K Production",
      "11:45 AM: Legacy Architecture Masterclass (African Heritage House)",
      "02:00 PM: Gourmet Decompression (Hunter's Lodge)",
      "07:00 PM: Evening social with footage screening"
    ]
  },
  {
    day: 2,
    location: "COAST → VIPINGO",
    title: "The Performance Benchmark & Trust Acceleration",
    highlights: [
      "08:30 AM: Precision Convoy toward the Coast",
      "11:00 AM: Vipingo Airstrip Showdown - Head-to-head battles",
      "01:00 PM: Reaction Time Challenge",
      "02:00 PM: Arrival at Salt Lick Safari Lodge",
      "08:00 PM: Impact & Strategy Bonfire under the stars"
    ]
  },
  {
    day: 3,
    location: "MALINDI → SANDBAR",
    title: "The Strategic Transition & Sandbar Summit",
    highlights: [
      "09:00 AM: High-Stakes Co-Pilot Rotation",
      "11:00 AM: Golden Sands Visual Asset Run (Casuarina Road)",
      "12:00 PM: Elite Asset Handover & White-Glove Return Freight",
      "03:00 PM: Mayungu Sandbar Inner Circle Gala (All-White)",
      "08:00 PM: Legacy Awards & Impact Keynote"
    ]
  },
  {
    day: 4,
    location: "NAIROBI FINALE",
    title: "The Prestige Re-Entry & Glass-Box Finale",
    highlights: [
      "09:00 AM: Legacy Content Review - Personalized 4K reels",
      "02:00 PM: Elite Tactical Return via chartered flight",
      "06:00 PM: Two-Tier Public Showcase at Garden City",
      "VIP Glass-Box Suite - Elevated finale event"
    ]
  }
];

const RouteMap = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-white mb-4">
            THE ROUTE
          </h2>
          <p className="text-xl text-primary font-semibold">
            4 Days of Elite Performance & Prestige
          </p>
        </div>

        {/* Route Visual */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block"></div>

            {/* Stops */}
            <div className="space-y-8">
              {routeStops.map((stop, index) => (
                <Card
                  key={index}
                  className="relative p-6 ml-0 md:ml-20 hover:shadow-purple-lg transition-all duration-300 border-l-4 border-primary bg-card"
                >
                  {/* Pin Icon */}
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center hidden md:flex shadow-purple">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-3xl font-bebas text-primary">Day {stop.day}</div>
                        <h3 className="text-2xl font-bebas text-white mt-1">{stop.location}</h3>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-3">{stop.title}</h4>
                      <ul className="space-y-2">
                        {stop.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-white/70 flex items-start gap-2">
                            <span className="text-primary mt-1">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Route Map */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card border border-primary/30 rounded-xl overflow-hidden shadow-purple-lg">
            <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/30">
              <h3 className="text-2xl font-bebas text-white text-center">JOURNEY MAP</h3>
              <p className="text-center text-white/70 text-sm mt-1">Nairobi → Kibwezi → Taita Hills → Malindi</p>
            </div>
            <div className="p-4">
              <img
                src={routeMapImage}
                alt="Cradle Run Route Map: Nairobi to Malindi via Kibwezi and Taita Hills"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Total Info */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-12 py-6 rounded-2xl shadow-purple-lg">
            <div className="text-5xl font-bebas mb-2">4 DAYS</div>
            <div className="text-sm uppercase tracking-wider">Elite Prestige Edition</div>
          </div>
          <div className="inline-block bg-gradient-to-r from-secondary to-primary text-white px-12 py-6 rounded-2xl shadow-purple-lg">
            <div className="text-5xl font-bebas mb-2">700+ KM</div>
            <div className="text-sm uppercase tracking-wider">Total Distance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteMap;
