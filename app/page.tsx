import Featured from "./components/Featured";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="px-5 md:px-0">
      <Hero />

      <Featured />
    </main>
  );
}
