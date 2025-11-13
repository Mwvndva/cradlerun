import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";

const seasons = [
  {
    year: 2026,
    name: "PURPLE MILE",
    cause: "End Gender-Based Violence",
    color: "Purple",
    status: "active",
    partners: ["Byblos"]
  },
  {
    year: 2027,
    name: "GREEN HEART",
    cause: "Mental Health Awareness",
    color: "Green",
    status: "coming",
    partners: ["TBA"]
  },
  {
    year: 2028,
    name: "BLUE TIDE",
    cause: "Ocean Conservation",
    color: "Blue",
    status: "coming",
    partners: ["TBA"]
  }
];

const SeasonalTheme = () => {
  return (
    <section className="py-20 md:py-32 bg-background ribbon-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-foreground mb-4">
            SEASONAL THEME ENGINE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every season, a new fight. Same road. Each year brings a new cause and color palette.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {seasons.map((season, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden ${
                season.status === 'active' 
                  ? 'border-4 border-purple-medium shadow-purple' 
                  : 'opacity-70'
              }`}
            >
              {/* Status Badge */}
              {season.status === 'active' && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-medium to-accent text-white px-4 py-2 rounded-full text-xs font-bold uppercase z-10">
                  Active Season
                </div>
              )}
              
              {season.status === 'coming' && (
                <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-4 py-2 rounded-full text-xs font-bold uppercase flex items-center gap-2 z-10">
                  <Lock className="w-3 h-3" />
                  Coming Soon
                </div>
              )}
              
              {/* Color Indicator */}
              <div 
                className={`h-32 ${
                  season.color === 'Purple' 
                    ? 'bg-gradient-to-br from-purple-light to-purple-deep' 
                    : season.color === 'Green'
                    ? 'bg-gradient-to-br from-green-400 to-green-700'
                    : 'bg-gradient-to-br from-blue-400 to-blue-700'
                } flex items-center justify-center`}
              >
                <div className="text-white text-5xl font-bebas">{season.year}</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bebas text-foreground mb-2">
                  {season.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {season.cause}
                </p>
                
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase">Color Theme</div>
                  <div className="flex items-center gap-2">
                    <div 
                      className={`w-6 h-6 rounded-full ${
                        season.color === 'Purple' 
                          ? 'bg-purple-medium' 
                          : season.color === 'Green'
                          ? 'bg-green-500'
                          : 'bg-blue-500'
                      }`}
                    ></div>
                    <span className="font-semibold">{season.color}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground uppercase mb-2">Partners</div>
                  <div className="flex flex-wrap gap-2">
                    {season.partners.map((partner, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-muted px-2 py-1 rounded"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-accent font-semibold">
            Every season, we rally for a different cause. Stay tuned for announcements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeasonalTheme;
