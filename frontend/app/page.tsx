import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="flex justify-between items-center p-10 border min-h-20 max-w-screen">
        <h1 className="bold font-extralight text-3xl">Valdo Imoveis</h1>
        <nav className="flex gap-20 mr-15">
          <div className="cursor-pointer"><p>Campanha 1</p></div>
          <div className="cursor-pointer"><p>Campanha 2</p></div>
          <div className="cursor-pointer"><p>Campanha 3</p></div>
          <div className="cursor-pointer"><p>Campanha 4</p></div>
        </nav>
      </header>

      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
      </main>
    </div>
  );
}
