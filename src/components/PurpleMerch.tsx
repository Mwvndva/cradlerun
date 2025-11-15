import { Card } from "@/components/ui/card";
import jacketImage from "@/assets/merch-jacket.jpg";
import hatImage from "@/assets/merch-hat.jpg";
import keyholderImage from "@/assets/merch-keyholder.jpg";
import bottleImage from "@/assets/merch-bottle.jpg";

const merchItems = [
  {
    name: "Purple Rally Jacket",
    description: "Denim jacket with purple ribbon design",
    features: ["END GBV back print", "Kenyan flag sleeve patch", "Premium denim"],
    image: jacketImage
  },
  {
    name: "Purple Snapback Cap",
    description: "Premium purple cap with footprint logo and ribbon",
    features: ["Adjustable fit", "UV protection", "Breathable fabric"],
    image: hatImage
  },
  {
    name: "NFC Keyholder",
    description: "Purple anodized footprint with tech functionality",
    features: ["Links to GBV hotline 1195", "Durable construction", "Compact design"],
    image: keyholderImage
  },
  {
    name: "Purple Mile Water Bottle",
    description: "Stay hydrated and show your support",
    features: ["Insulated stainless steel", "Leak-proof cap", "#EndGBV branding"],
    image: bottleImage
  }
];

const PurpleMerch = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-foreground mb-4">
            PURPLE MERCH
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wear the cause. Every item tells a story of awareness and action.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {merchItems.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-80 relative overflow-hidden bg-muted">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bebas text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-medium mr-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurpleMerch;
