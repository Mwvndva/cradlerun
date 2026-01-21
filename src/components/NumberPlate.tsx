const NumberPlate = () => {
    return (
        <div className="text-center py-20 px-5 bg-[#111] border-y border-[#1A1A1A]">
            <p className="text-[11px] tracking-[4px] text-[#888] mb-10 uppercase">Vehicle Number Plate</p>

            <div className="inline-block bg-black px-10 py-10 md:px-20 md:py-10 border-[3px] border-primary relative">
                {/* Corner Accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary"></div>

                <div className="font-bebas text-[80px] md:text-[120px] text-primary leading-none drop-shadow-[0_0_40px_rgba(255,215,0,0.3)]">
                    07
                </div>
                <div className="font-oswald text-[14px] tracking-[8px] text-white mt-3 uppercase">
                    CRADLE RUN
                </div>
            </div>
        </div>
    );
};

export default NumberPlate;
