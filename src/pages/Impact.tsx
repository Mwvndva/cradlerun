import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import Footer from "@/components/Footer";

const Impact = () => {
  const [fundsRaised, setFundsRaised] = useState(0);
  const targetFunds = 1000000; // KSh 1M

  const fundsProgress = (fundsRaised / targetFunds) * 100;

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-32 bg-gradient-to-br from-purple-deep to-accent text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <NavLink to="/" className="inline-block">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </NavLink>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bebas mb-4">
              LIVE IMPACT TRACKER
            </h2>
            <p className="text-xl opacity-90">
              Every kilometer driven = KSh donated to charity support
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12 justify-center">
              {/* Funds Counter */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-5xl md:text-7xl font-bebas mb-2 animate-pulse-slow">
                    KSh {(fundsRaised / 1000000).toFixed(2)}M
                  </div>
                  <div className="text-sm uppercase tracking-wider opacity-80 mb-4">
                    Raised for Charity
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-secondary h-full rounded-full transition-all duration-500"
                      style={{ width: `${fundsProgress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs mt-2 opacity-70">
                    {fundsProgress.toFixed(1)}% of KSh 1M goal
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
                Every car that joins adds support to charitable initiatives across Kenya.
                Together, we're not just driving — we're driving change.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Impact;
