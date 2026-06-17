import PropertyGrid from "../../components/common/PropertyGrid"

export default function LaunchGrid() {
    return (
        <section id="lancamentos" className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-8 bg-linear-to-b from-amber-950/20 to-emerald-950/40 backdrop-blur-[2px]">
            
            <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="font-serif font-extralight text-4xl md:text-6xl text-white tracking-wide text-shadow-black text-shadow-sm">
                    Nossos <span className="font-medium text-orange-300">Lançamentos</span>
                </h2>
                <div className="w-24 h-0.5 bg-orange-200/60 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="w-full max-w-7xl mx-auto p-6 md:p-8 rounded-3xl bg-emerald-950/40 border border-orange-200/10 shadow-2xl backdrop-blur-md">
                
                {/* Grid Responsivo Inteligente */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
                    <PropertyGrid />
                    <PropertyGrid />
                    <PropertyGrid />
                    <PropertyGrid />
                    <PropertyGrid />
                    <PropertyGrid />
                    <PropertyGrid />
                    <PropertyGrid />
                </div>
                
            </div>
        </section>
    )
}