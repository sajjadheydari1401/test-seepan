import Hero from "./components/Hero";
import Featured from "./components/Featured";
import DiscountedCategories from "./components/DiscountedCategories";

export default function Home() {
  return (
    <main className="px-5 md:px-0">
      <Hero />

      <Featured />

      <DiscountedCategories />
    </main>
  );
}
