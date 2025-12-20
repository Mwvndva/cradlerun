import { Card } from "@/components/ui/card";

const partners = [
  {
    name: "Usikimye",
    logo: "/logos/usikimye.png",
    description: "Empowering communities and fighting gender-based violence"
  },
  {
    name: "creasanaa",
    logo: "/logos/creasanaa-logo.png",
    description: "Creative solutions for sustainable development"
  }
];

const Partners = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-foreground mb-4">
            PARTNERS
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Organizations supporting our cause
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {partners.map((partner, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-purple-medium group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bebas text-foreground mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {partner.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
