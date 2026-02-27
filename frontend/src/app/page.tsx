import Hero from "./features/hero/Hero";
import Listings from "./features/listings/Listings";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full min-w-full justify-center bg-zinc-50 font-sans dark:bg-black">

      <main className="flex flex-col">
        {/* Componente da Sessao Inicial */}
        <Hero/>
        <Listings/>
      </main>
    </div>
  );
}
