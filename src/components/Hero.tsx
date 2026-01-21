import nairobiSkyline from "@/assets/nairobi-skyline.png";

const Hero = () => {

  return (
    <>
      <section className="bg-black min-h-screen flex flex-col items-center justify-center px-10 text-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={nairobiSkyline}
            alt="Nairobi Skyline"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        </div>

        {/* Background Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,215,0,0.15)_0%,transparent_70%)] pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <div className="font-bebas text-[100px] md:text-[150px] lg:text-[200px] tracking-[12px] text-gold-gradient mb-6 leading-[0.9]">
            CRADLE RUN
          </div>

          {/* Tagline */}
          <div className="font-oswald text-lg md:text-2xl tracking-[10px] text-[#888] mb-[50px] uppercase max-w-4xl px-4">
            KENYA'S MOST EXCLUSIVE EXOTIC CAR RALLY
          </div>

          {/* Urgency */}
          <div className="mt-[30px] text-primary text-sm font-semibold tracking-[3px] uppercase">
          </div>
        </div>

      </section>

      {/* Stats Section - Separated but part of the Hero experience */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-[80px] p-[50px] bg-black border-t border-primary">
        <div className="text-center">
          <div className="font-bebas text-[60px] md:text-[80px] text-primary leading-none">560</div>
          <div className="text-sm tracking-[4px] text-[#888] mt-2 uppercase">KILOMETERS</div>
        </div>
        <div className="text-center">
          <div className="font-bebas text-[60px] md:text-[80px] text-primary leading-none">30</div>
          <div className="text-sm tracking-[4px] text-[#888] mt-2 uppercase">SUPERCARS</div>
        </div>
        <div className="text-center">
          <div className="font-bebas text-[60px] md:text-[80px] text-primary leading-none">4</div>
          <div className="text-sm tracking-[4px] text-[#888] mt-2 uppercase">DAYS</div>
        </div>
        <div className="text-center">
          <div className="font-bebas text-[60px] md:text-[80px] text-primary leading-none">5★</div>
          <div className="text-sm tracking-[4px] text-[#888] mt-2 uppercase">RESORTS</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
