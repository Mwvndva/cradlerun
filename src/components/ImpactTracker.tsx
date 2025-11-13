import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const ImpactTracker = () => {
  const [kmDriven, setKmDriven] = useState(0);
  const [fundsRaised, setFundsRaised] = useState(0);
  const targetKm = 3000;
  const targetFunds = 3000000; // KSh 3M
  
  // Simulated counter animation on mount
  useEffect(() => {
    const kmInterval = setInterval(() => {
      setKmDriven(prev => {
        const next = prev + 50;
        return next >= 1250 ? 1250 : next; // Demo value
      });
    }, 50);
    
    const fundsInterval = setInterval(() => {
      setFundsRaised(prev => {
        const next = prev + 25000;
        return next >= 1250000 ? 1250000 : next; // Demo value
      });
    }, 50);
    
    return () => {
      clearInterval(kmInterval);
      clearInterval(fundsInterval);
    };
  }, []);
  
  const kmProgress = (kmDriven / targetKm) * 100;
  const fundsProgress = (fundsRaised / targetFunds) * 100;
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-purple-deep to-accent text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas mb-4">
            LIVE IMPACT TRACKER
          </h2>
          <p className="text-xl opacity-90">
            Every kilometer driven = KSh donated to GBV shelters
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* KM Counter */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8">
              <div className="text-center">
                <div className="text-5xl md:text-7xl font-bebas mb-2 animate-pulse-slow">
                  {kmDriven.toLocaleString()}
                </div>
                <div className="text-sm uppercase tracking-wider opacity-80 mb-4">
                  Kilometers Driven
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-secondary h-full rounded-full transition-all duration-500"
                    style={{ width: `${kmProgress}%` }}
                  ></div>
                </div>
                <div className="text-xs mt-2 opacity-70">
                  {kmProgress.toFixed(1)}% of {targetKm.toLocaleString()} KM goal
                </div>
              </div>
            </Card>
            
            {/* Funds Counter */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8">
              <div className="text-center">
                <div className="text-5xl md:text-7xl font-bebas mb-2 animate-pulse-slow">
                  KSh {(fundsRaised / 1000000).toFixed(2)}M
                </div>
                <div className="text-sm uppercase tracking-wider opacity-80 mb-4">
                  Raised for GBV Shelters
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-secondary h-full rounded-full transition-all duration-500"
                    style={{ width: `${fundsProgress}%` }}
                  ></div>
                </div>
                <div className="text-xs mt-2 opacity-70">
                  {fundsProgress.toFixed(1)}% of KSh 3M goal
                </div>
              </div>
            </Card>
          </div>
          
          {/* Impact Statement */}
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <p className="text-2xl md:text-3xl font-bebas mb-4">
              YOUR JOURNEY CREATES IMPACT
            </p>
            <p className="text-lg opacity-90">
              Every car that joins adds KSh 1,000 to support GBV shelters across Kenya. 
              Together, we're not just driving — we're driving change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactTracker;
