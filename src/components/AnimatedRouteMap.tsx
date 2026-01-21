import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import wilsonRover from "@/assets/wilson-rover.png";
import africanHeritage from "@/assets/african-heritage.jpg";
import kilaguniSerena from "@/assets/kilaguni-serena.jpg";
import vipingoRidge from "@/assets/vipingo-ridge.png";
import billionaireResort from "@/assets/billionaire-resort.png";

const AnimatedRouteMap = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

    // Trigger animation when component mounts/is in view
    useEffect(() => {
        setStartAnimation(true);
    }, []);

    const handleLocationInteraction = (location: string | null) => {
        setHoveredLocation(prev => prev === location ? null : location);
    };

    // SVG ViewBox: 0 0 800 500
    // Wilson Airport (Nairobi): 100, 100
    // African Heritage House: 140, 130
    // Kilaguni Serena (Tsavo): 380, 280
    // Vipingo Ridge: 620, 420
    // Billionaire Resort (Malindi): 680, 280

    const pathVariants: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 6, ease: "easeInOut", delay: 0.5 },
        },
    };

    const labelVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 10 },
        visible: (delay: number) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: delay, duration: 0.5 },
        }),
    };

    const circleVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (delay: number) => ({
            scale: 1,
            opacity: 1,
            transition: { delay: delay, duration: 0.3, type: "spring" },
        }),
    };

    return (
        <section className="bg-black py-12 md:py-24 px-3 md:px-5 max-w-7xl mx-auto text-center">
            <div className="text-xs md:text-sm tracking-[5px] text-primary uppercase mb-2 md:mb-4">THE JOURNEY</div>
            <h2 className="font-bebas text-[36px] md:text-[90px] tracking-[3px] md:tracking-[6px] mb-8 md:mb-12 text-white leading-none">
                NAIROBI TO MALINDI
            </h2>

            <div className="relative rounded-2xl overflow-hidden border border-[#222] shadow-2xl shadow-primary/5 bg-[#0A0A0A] aspect-[4/3] md:aspect-[16/10]">
                {/* Map Background / Grid */}
                <div
                    className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px]"
                    onClick={() => setHoveredLocation(null)}
                ></div>

                <AnimatePresence>
                    {hoveredLocation === "wilson" && (
                        <motion.div
                            key="wilson"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute z-20 pointer-events-none 
                                     left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[280px]
                                     md:left-[10%] md:top-[0%] md:translate-x-0 md:translate-y-0 md:w-[300px] md:max-w-none"
                        >
                            <motion.div
                                initial={{ scale: 0.8, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-lg overflow-hidden border-2 border-primary shadow-[0_0_30px_rgba(255,215,0,0.3)] bg-black"
                            >
                                <img src={wilsonRover} alt="Wilson Airport" className="w-full h-auto object-cover max-h-[160px] md:max-h-[200px]" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-left">
                                    <div className="font-bebas text-lg text-white">WILSON AIRPORT</div>
                                    <div className="text-[10px] text-primary uppercase tracking-widest leading-none">STARTING POINT</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                    {hoveredLocation === "heritage" && (
                        <motion.div
                            key="heritage"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute z-20 pointer-events-none 
                                     left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[280px]
                                     md:left-[15%] md:top-[10%] md:translate-x-0 md:translate-y-0 md:w-[300px] md:max-w-none"
                        >
                            <motion.div
                                initial={{ scale: 0.8, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-lg overflow-hidden border-2 border-primary shadow-[0_0_30px_rgba(255,215,0,0.3)] bg-black"
                            >
                                <img src={africanHeritage} alt="African Heritage House" className="w-full h-auto object-cover max-h-[160px] md:max-h-[200px]" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-left">
                                    <div className="font-bebas text-lg text-white">AFRICAN HERITAGE</div>
                                    <div className="text-[10px] text-primary uppercase tracking-widest leading-none">ATHI RIVER</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                    {hoveredLocation === "kilaguni" && (
                        <motion.div
                            key="kilaguni"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute z-20 pointer-events-none 
                                     left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[280px]
                                     md:left-[35%] md:top-[25%] md:translate-x-0 md:translate-y-0 md:w-[300px] md:max-w-none"
                        >
                            <motion.div
                                initial={{ scale: 0.8, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-lg overflow-hidden border-2 border-primary shadow-[0_0_30px_rgba(255,215,0,0.3)] bg-black"
                            >
                                <img src={kilaguniSerena} alt="Kilaguni Serena" className="w-full h-auto object-cover max-h-[160px] md:max-h-[200px]" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-left">
                                    <div className="font-bebas text-lg text-white">KILAGUNI SERENA</div>
                                    <div className="text-[10px] text-primary uppercase tracking-widest leading-none">TSAVO WEST</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                    {hoveredLocation === "vipingo" && (
                        <motion.div
                            key="vipingo"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute z-20 pointer-events-none 
                                     left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[280px]
                                     md:left-[50%] md:top-[60%] md:translate-x-0 md:translate-y-0 md:w-[300px] md:max-w-none"
                        >
                            <motion.div
                                initial={{ scale: 0.8, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-lg overflow-hidden border-2 border-primary shadow-[0_0_30px_rgba(255,215,0,0.3)] bg-black"
                            >
                                <img src={vipingoRidge} alt="Vipingo Ridge" className="w-full h-auto object-cover max-h-[160px] md:max-h-[200px]" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-left">
                                    <div className="font-bebas text-lg text-white">VIPINGO RIDGE</div>
                                    <div className="text-[10px] text-primary uppercase tracking-widest leading-none">KILIFI</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                    {hoveredLocation === "billionaire" && (
                        <motion.div
                            key="billionaire"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute z-20 pointer-events-none 
                                     left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[280px]
                                     md:left-[60%] md:top-[30%] md:translate-x-0 md:translate-y-0 md:w-[300px] md:max-w-none"
                        >
                            <motion.div
                                initial={{ scale: 0.8, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-lg overflow-hidden border-2 border-primary shadow-[0_0_30px_rgba(255,215,0,0.3)] bg-black"
                            >
                                <img src={billionaireResort} alt="Billionaire Resort" className="w-full h-auto object-cover max-h-[160px] md:max-h-[200px]" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-left">
                                    <div className="font-bebas text-lg text-white">BILLIONAIRE RESORT</div>
                                    <div className="text-[10px] text-primary uppercase tracking-widest leading-none">MALINDI</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <svg
                    viewBox="0 0 800 500"
                    className="w-full h-full absolute inset-0 pointer-events-none"
                >
                    {/* Routes */}
                    <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#B8860B" />
                            <stop offset="100%" stopColor="#FFD700" />
                        </linearGradient>
                    </defs>

                    {/* Base Route Line (Faint) */}
                    <path
                        d="M100 100 Q120 105 140 130 Q260 200 380 280 Q500 350 620 420 Q670 380 680 280"
                        fill="none"
                        stroke="#222"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                    {/* Animated Gold Route Line */}
                    <motion.path
                        d="M100 100 Q120 105 140 130 Q260 200 380 280 Q500 350 620 420 Q670 380 680 280"
                        fill="none"
                        stroke="url(#goldGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial="hidden"
                        animate={startAnimation ? "visible" : "hidden"}
                        variants={pathVariants}
                    />

                    {/* Waypoints Circles */}
                    {/* Wilson */}
                    <motion.circle
                        cx="100" cy="100" r="5" fill="#FFF" stroke="#FFD700" strokeWidth="2"
                        custom={0.5} initial="hidden" animate={startAnimation ? "visible" : "hidden"} variants={circleVariants}
                        className="pointer-events-auto cursor-pointer hover:r-7 transition-all duration-300"
                        onMouseEnter={() => setHoveredLocation("wilson")}
                        onClick={(e) => { e.stopPropagation(); handleLocationInteraction("wilson"); }}
                    />

                    {/* African Heritage */}
                    <motion.circle
                        cx="140" cy="130" r="5" fill="#FFF" stroke="#FFD700" strokeWidth="2"
                        custom={1.0} initial="hidden" animate={startAnimation ? "visible" : "hidden"} variants={circleVariants}
                        className="pointer-events-auto cursor-pointer hover:r-7 transition-all duration-300"
                        onMouseEnter={() => setHoveredLocation("heritage")}
                        onClick={(e) => { e.stopPropagation(); handleLocationInteraction("heritage"); }}
                    />

                    {/* Kilaguni */}
                    <motion.circle
                        cx="380" cy="280" r="5" fill="#FFF" stroke="#FFD700" strokeWidth="2"
                        custom={3.0} initial="hidden" animate={startAnimation ? "visible" : "hidden"} variants={circleVariants}
                        className="pointer-events-auto cursor-pointer hover:r-7 transition-all duration-300"
                        onMouseEnter={() => setHoveredLocation("kilaguni")}
                        onClick={(e) => { e.stopPropagation(); handleLocationInteraction("kilaguni"); }}
                    />

                    {/* Vipingo */}
                    <motion.circle
                        cx="620" cy="420" r="5" fill="#FFF" stroke="#FFD700" strokeWidth="2"
                        custom={5.0} initial="hidden" animate={startAnimation ? "visible" : "hidden"} variants={circleVariants}
                        className="pointer-events-auto cursor-pointer hover:r-7 transition-all duration-300"
                        onMouseEnter={() => setHoveredLocation("vipingo")}
                        onClick={(e) => { e.stopPropagation(); handleLocationInteraction("vipingo"); }}
                    />

                    {/* Billionaire */}
                    <motion.circle
                        cx="680" cy="280" r="8" fill="#FFD700" stroke="rgba(255,255,255,0.5)" strokeWidth="4"
                        custom={6.0} initial="hidden" animate={startAnimation ? "visible" : "hidden"} variants={circleVariants}
                        className="pointer-events-auto cursor-pointer hover:r-10 transition-all duration-300"
                        onMouseEnter={() => setHoveredLocation("billionaire")}
                        onClick={(e) => { e.stopPropagation(); handleLocationInteraction("billionaire"); }}
                    />
                </svg>

                {/* LABELS */}

                {/* Wilson Airport */}
                <motion.div
                    className="absolute left-[12.5%] top-[14%] flex flex-col items-start cursor-pointer pointer-events-auto"
                    custom={0.5}
                    initial="hidden"
                    animate={startAnimation ? "visible" : "hidden"}
                    variants={labelVariants}
                    onMouseEnter={() => setHoveredLocation("wilson")}
                    onClick={(e) => { e.stopPropagation(); handleLocationInteraction("wilson"); }}
                >
                    <span className="font-oswald text-[10px] md:text-sm text-white tracking-wider bg-black/60 px-1.5 md:px-2 py-0.5 md:py-1 rounded border border-primary/30 group-hover:bg-primary/20 transition-colors">WILSON AIRPORT</span>
                    <span className="hidden md:block text-[10px] text-primary uppercase tracking-widest mt-1 ml-1">NAIROBI</span>
                </motion.div>

                {/* African Heritage */}
                <motion.div
                    className="absolute left-[18%] top-[20%] flex flex-col items-start cursor-pointer pointer-events-auto"
                    custom={1.0}
                    initial="hidden"
                    animate={startAnimation ? "visible" : "hidden"}
                    variants={labelVariants}
                    onMouseEnter={() => setHoveredLocation("heritage")}
                    onClick={(e) => { e.stopPropagation(); handleLocationInteraction("heritage"); }}
                >
                    <span className="font-oswald text-[10px] md:text-sm text-white tracking-wider bg-black/60 px-1.5 md:px-2 py-0.5 md:py-1 rounded border border-primary/30 group-hover:bg-primary/20 transition-colors">AFRICAN HERITAGE</span>
                    <span className="hidden md:block text-[10px] text-primary uppercase tracking-widest mt-1 ml-1">ATHI RIVER</span>
                </motion.div>

                {/* Kilaguni */}
                <motion.div
                    className="absolute left-[48%] top-[48%] transform -translate-x-1/2 flex flex-col items-center cursor-pointer pointer-events-auto"
                    custom={3.0}
                    initial="hidden"
                    animate={startAnimation ? "visible" : "hidden"}
                    variants={labelVariants}
                    onMouseEnter={() => setHoveredLocation("kilaguni")}
                    onClick={(e) => { e.stopPropagation(); handleLocationInteraction("kilaguni"); }}
                >
                    <span className="font-oswald text-[10px] md:text-sm text-white tracking-wider bg-black/60 px-1.5 md:px-2 py-0.5 md:py-1 rounded border border-primary/30 group-hover:bg-primary/20 transition-colors">KILAGUNI SERENA</span>
                    <span className="hidden md:block text-[10px] text-primary uppercase tracking-widest mt-1">TSAVO WEST</span>
                </motion.div>

                {/* Vipingo */}
                <motion.div
                    className="absolute left-[70.5%] top-[80%] transform -translate-x-1/2 flex flex-col items-center cursor-pointer pointer-events-auto"
                    custom={5.0}
                    initial="hidden"
                    animate={startAnimation ? "visible" : "hidden"}
                    variants={labelVariants}
                    onMouseEnter={() => setHoveredLocation("vipingo")}
                    onClick={(e) => { e.stopPropagation(); handleLocationInteraction("vipingo"); }}
                >
                    <span className="font-oswald text-[10px] md:text-sm text-white tracking-wider bg-black/60 px-1.5 md:px-2 py-0.5 md:py-1 rounded border border-primary/30 group-hover:bg-primary/20 transition-colors">VIPINGO RIDGE</span>
                    <span className="hidden md:block text-[10px] text-primary uppercase tracking-widest mt-1">KILIFI</span>
                </motion.div>

                {/* Billionaire Resort */}
                <motion.div
                    className="absolute left-[85%] top-[57%] transform -translate-x-1/2 flex flex-col items-center cursor-pointer pointer-events-auto"
                    custom={6.0}
                    initial="hidden"
                    animate={startAnimation ? "visible" : "hidden"}
                    variants={labelVariants}
                    onMouseEnter={() => setHoveredLocation("billionaire")}
                    onClick={(e) => { e.stopPropagation(); handleLocationInteraction("billionaire"); }}
                >
                    <span className="font-oswald text-[10px] md:text-sm text-white tracking-wider bg-black/60 px-1.5 md:px-2 py-0.5 md:py-1 rounded border border-primary/30 group-hover:bg-primary/20 transition-colors">BILLIONAIRE RESORT</span>
                    <span className="hidden md:block text-[10px] text-primary uppercase tracking-widest mt-1">MALINDI</span>
                </motion.div>

            </div>
        </section>
    );
};

export default AnimatedRouteMap;
