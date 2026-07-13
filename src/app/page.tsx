import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Scene2 from "@/components/Scene2";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <Scene2 />
    </main>
  );
}