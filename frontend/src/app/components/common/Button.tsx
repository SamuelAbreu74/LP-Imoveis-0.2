export default function Button({children} : {children: React.ReactNode}) {
    return (
        <button className="
            cursor-pointer 
            hover:text-orange-200 
            w-fit
            // Mobile: Botões
            max-[920px]:border 
            max-[920px]:border-l-4
            max-[920px]:border-orange-200
            max-[920px]:rounded-md
            max-[920px]:bg-neutral-800
            max-[920px]:hover:bg-neutral-700 
            max-[920px]:w-full
            max-[920px]:p-3 
            max-[920px]:flex 
            max-[920px]:justify-center 
            max-[920px]:shadow-lg
            max-[920px]:transition-colors
            ">
            {children}
        </button>
    )
}