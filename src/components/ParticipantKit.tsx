const ParticipantKit = () => {
    return (
        <section className="py-24 px-5 max-w-7xl mx-auto">
            <div className="text-[11px] tracking-[5px] text-primary uppercase mb-4">Merchandise</div>
            <h2 className="font-bebas text-[48px] md:text-[90px] tracking-[6px] mb-16 text-white leading-none">
                PARTICIPANT KIT
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Racing Cap */}
                <div className="bg-[#111] rounded-2xl overflow-hidden border border-[#1A1A1A] transition-all duration-300 hover:border-primary hover:-translate-y-1">
                    <div className="h-[220px] flex items-center justify-center bg-black">
                        <div className="font-bebas text-[48px] text-primary">CR</div>
                    </div>
                    <div className="p-7">
                        <div className="font-oswald text-[18px] tracking-[3px] mb-1.5 text-white">RACING CAP</div>
                        <div className="text-[13px] text-[#888]">Black with Gold Embroidery</div>
                    </div>
                </div>

                {/* Rally Jacket */}
                <div className="bg-[#111] rounded-2xl overflow-hidden border border-[#1A1A1A] transition-all duration-300 hover:border-primary hover:-translate-y-1">
                    <div className="h-[220px] flex items-center justify-center bg-black">
                        <div className="w-[90px] h-[100px] bg-[#111] border-2 border-primary flex items-start justify-center pt-5">
                            <span className="text-primary text-[9px] tracking-[2px]">CRADLE RUN</span>
                        </div>
                    </div>
                    <div className="p-7">
                        <div className="font-oswald text-[18px] tracking-[3px] mb-1.5 text-white">RALLY JACKET</div>
                        <div className="text-[13px] text-[#888]">Premium Black with Gold Details</div>
                    </div>
                </div>

                {/* Vehicle Decals */}
                <div className="bg-[#111] rounded-2xl overflow-hidden border border-[#1A1A1A] transition-all duration-300 hover:border-primary hover:-translate-y-1">
                    <div className="h-[220px] flex items-center justify-center bg-black">
                        <div className="border-2 border-primary px-7 py-3.5">
                            <span className="font-bebas text-primary text-[20px] tracking-[4px]">CRADLE RUN</span>
                        </div>
                    </div>
                    <div className="p-7">
                        <div className="font-oswald text-[18px] tracking-[3px] mb-1.5 text-white">VEHICLE DECALS</div>
                        <div className="text-[13px] text-[#888]">Gold on Black / Gold on Clear</div>
                    </div>
                </div>

                {/* Content Package */}
                <div className="bg-[#111] rounded-2xl overflow-hidden border border-[#1A1A1A] transition-all duration-300 hover:border-primary hover:-translate-y-1">
                    <div className="h-[220px] flex items-center justify-center bg-black">
                        <div className="text-center">
                            <div className="text-primary font-bebas text-[32px]">4K</div>
                            <div className="text-[10px] tracking-[3px] text-[#888] mt-2">MEDIA PACKAGE</div>
                        </div>
                    </div>
                    <div className="p-7">
                        <div className="font-oswald text-[18px] tracking-[3px] mb-1.5 text-white">CONTENT PACKAGE</div>
                        <div className="text-[13px] text-[#888]">Personal Reel + Photos + Raw Footage</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParticipantKit;
