import image_grid from "../../public/imagem_imovel_grid.jpg"
import Image from "next/image"
import PropertyGrid from "../../components/common/PropertyGrid"

export default function LaunchGrid() {
    return (
        <section className="flex justify-center bg-orange-950/30 p-15" >
            <div className="flex justify-center items-center rounded-2xl bg-orange-200/80 w-7xl p-5">
                {/* Componente do Imovel */}
                <div className="grid grid-cols-4 gap-5 w-5xl ">
                    
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