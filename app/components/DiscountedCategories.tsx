import CategoryCard from "./common/CategoryCard";
import CategoryIcon from "../../public/icons/category-icon.svg";

const DiscountedCategories = () => {
  return (
    <section
      className="relative h-216.5 overflow-hidden bg-cover bg-center md:mt-30 py-9"
      style={{
        backgroundImage: "url('/images/categories-bg.svg')",
      }}
    >
      <p className="md:text-[32px] text-[#1E1E1E] text-center font-semibold md:font-bold">
        دسته بندی های پر تخفیف
      </p>
      <p className="mt-2 text-[12px] md:text-[16px] text-[#716E6E] text-center">
        تخفیف‌های ویژه رو بر اساس علاقه‌ات پیدا کن.
      </p>

      <CategoryCard
        discount="50"
        title="سلامت و سبک زندگی"
        image={CategoryIcon}
      />
    </section>
  );
};

export default DiscountedCategories;
