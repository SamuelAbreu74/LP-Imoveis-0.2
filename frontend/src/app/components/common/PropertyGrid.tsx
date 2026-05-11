import image_grid from "../../public/imagem_imovel_grid.jpg"
import Image from "next/image"

export default function PropertyGrid() {
    return (
        <div className="flex flex-col bg-emerald-950 rounded-2xl h-70 w-fit justify-start items-start">
            <Image
                src={image_grid}
                className="opacity-100 object-cover rounded-2xl"
                alt="grid_photo"
                placeholder="blur"
                priority
            />
            <div className="px-2">
                <h1 className="text-xl font-bold">Nome do Imóvel</h1>
                <p>Local: <i>Rua Exemplo</i></p>
                <p>Campanha: <i>Campanha 3</i></p>
                <p>Valor: <i>R$740.000</i></p>
            </div>
        </div>
    );
}