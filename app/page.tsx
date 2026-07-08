import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import DiscountedCategories from "./components/Categories/DiscountedCategories";

export default function Home() {
  return (
    <main>
      <Hero />

      <Featured />

      <DiscountedCategories />
    </main>
  );
}
