"use client"
import { useState } from "react"
import Button from "./Button";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center p-8 min-h-20 max-w-screen bg-black text-white">
            <div className="flex justify-evenly gap-5 items-center z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="currentColor" className="size-8">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
                <h1 className="bold font-extralight text-3xl">Valdo Imoveis</h1>
            </div>

            <button
                className="hidden max-[920px]:block z-50 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="space-y-2">
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
                </div>
            </button>
            <nav className={`
                /* Desktop: Comportamento Normal */

                min-[921px]:flex 
                min-[921px]:static 
                min-[921px]:translate-x-0 
                min-[921px]:bg-transparent 
                min-[921px]:flex-row
                min-[921px]:items-center
                min-[921px]:gap-15
                min-[921px]:mr-15


                /* Mobile: Gaveta Lateral */

                max-[920px]:fixed 
                max-[920px]:top-0 
                max-[920px]:right-0 
                max-[920px]:h-full 
                max-[920px]:w-62.5
                max-[920px]:bg-neutral-900
                max-[920px]:flex 
                max-[920px]:flex-col 
                max-[920px]:pt-32 
                max-[920px]:pl-10 
                max-[920px]:z-40 
                max-[920px]:transition-transform 
                max-[920px]:duration-300 
                max-[920px]:ease-in-out 
                max-[920px]:px-10 
                max-[920px]:items-stretch
                max-[920px]:gap-5
                
                
                /* Lógica da Gaveta: se fechado, joga 100% pra direita */
                ${isOpen ? "max-[920px]:translate-x-0" : "max-[920px]:translate-x-full"}
            `}>
                <Button><p>Campanha 1</p></Button>
                <Button><p>Campanha 2</p></Button>
                <Button><p>Campanha 3</p></Button>
                <Button><p>Campanha 4</p></Button>
            </nav>
        </header>
    )
}