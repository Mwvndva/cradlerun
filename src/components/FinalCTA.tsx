const FinalCTA = () => {
    return (
        <section className="relative bg-black py-40 px-5 text-center">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

            <h2 className="font-bebas text-[48px] md:text-[110px] tracking-[8px] mb-6 leading-[1.1]">
                <span className="text-white-gradient block">STOP WATCHING.</span>
                <span className="text-white-gradient block">START DRIVING.</span>
            </h2>

            <p className="text-[16px] text-[#888] mb-16 max-w-[600px] mx-auto leading-relaxed tracking-wide">
                30 exotic cars. 4 days. 560 kilometers. Nairobi to Malindi. The only question is whether you're in or you're out.
            </p>

        </section>
    );
};

export default FinalCTA;
