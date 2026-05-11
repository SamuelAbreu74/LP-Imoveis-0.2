import image_grid from "../../public/imagem_imovel_grid.jpg"
import Image from "next/image"

export default function LaunchGrid() {
    return (
        <section className="flex justify-center bg-orange-950/30 p-15" >
            <div className="flex justify-center items-center rounded-2xl bg-orange-200/80 w-7xl p-5">
                <div className="grid grid-cols-4 gap-5 w-5xl ">
                    {/* Componente do Imovel */}
                    <div className="flex flex-col bg-emerald-950 rounded-2xl h-70 justify-start items-start">
                        <Image
                            src={image_grid}
                            className="opacity-100 object-cover rounded-2xl"
                            alt="grid_photo"
                            placeholder="blur"
                            priority
                        />
                        <div className="px-2">
                            <h1 className="text-xl font-extralight">Nome do Imóvel</h1>
                            <p>Local: <i>Rua Exemplo</i></p>
                            <p>Campanha: <i>Campanha 3</i></p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-emerald-950 rounded-2xl h-70 justify-start items-start">
                        <Image
                            src={image_grid}
                            className="opacity-100 object-cover rounded-2xl"
                            alt="grid_photo"
                            placeholder="blur"
                            priority
                        />
                        <div className="px-2">
                            <h1 className="text-xl font-extralight">Nome do Imóvel</h1>
                            <p>Local: <i>Rua Exemplo</i></p>
                            <p>Campanha: <i>Campanha 1</i></p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-emerald-950 rounded-2xl h-70 justify-start items-start">
                        <Image
                            src={image_grid}
                            className="opacity-100 object-cover rounded-2xl"
                            alt="grid_photo"
                            placeholder="blur"
                            priority
                        />
                        <div className="px-2">
                            <h1 className="text-xl font-extralight">Nome do Imóvel</h1>
                            <p>Local: <i>Rua Exemplo</i></p>
                            <p>Campanha: <i>Campanha 1</i></p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-emerald-950 rounded-2xl h-70 justify-start items-start">
                        <Image
                            src={image_grid}
                            className="opacity-100 object-cover rounded-2xl"
                            alt="grid_photo"
                            placeholder="blur"
                            priority
                        />
                        <div className="px-2">
                            <h1 className="text-xl font-extralight">Nome do Imóvel</h1>
                            <p>Local: <i>Rua Exemplo</i></p>
                            <p>Campanha: <i>Campanha 3</i></p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-emerald-950 rounded-2xl h-70 justify-start items-start">
                        <Image
                            src={image_grid}
                            className="opacity-100 object-cover rounded-2xl"
                            alt="grid_photo"
                            placeholder="blur"
                            priority
                        />
                        <div className="px-2">
                            <h1 className="text-xl font-extralight">Nome do Imóvel</h1>
                            <p>Local: <i>Rua Exemplo</i></p>
                            <p>Campanha: <i>Campanha 2</i></p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-emerald-950 rounded-2xl h-70 justify-start items-start">
                        <Image
                            src={image_grid}
                            className="opacity-100 object-cover rounded-2xl"
                            alt="grid_photo"
                            placeholder="blur"
                            priority
                        />
                        <div className="px-2">
                            <h1 className="text-xl font-extralight">Nome do Imóvel</h1>
                            <p>Local: <i>Rua Exemplo</i></p>
                            <p>Campanha: <i>Campanha 4</i></p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-emerald-950 rounded-2xl h-70 justify-start items-start">
                        <Image
                            src={image_grid}
                            className="opacity-100 object-cover rounded-2xl"
                            alt="grid_photo"
                            placeholder="blur"
                            priority
                        />
                        <div className="px-2">
                            <h1 className="text-xl font-extralight">Nome do Imóvel</h1>
                            <p>Local: <i>Rua Exemplo</i></p>
                            <p>Campanha: <i>Campanha 6</i></p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-emerald-950 rounded-2xl h-70 justify-start items-start">
                        <Image
                            src={image_grid}
                            className="opacity-100 object-cover rounded-2xl"
                            alt="grid_photo"
                            placeholder="blur"
                            priority
                        />
                        <div className="px-2">
                            <h1 className="text-xl font-extralight">Nome do Imóvel</h1>
                            <p>Local: <i>Rua Exemplo</i></p>
                            <p>Campanha: <i>Campanha 1</i></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}