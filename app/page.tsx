import Hero from "./components/Hero";
import Featured from "./components/Featured";
import DiscountedCategories from "./components/DiscountedCategories";

export default function Home() {
  return (
    <main>
      <Hero />

      <Featured />

      <DiscountedCategories />
    </main>
  );
}
