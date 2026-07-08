import { SectionHeader } from "../common/SectionHeader";

export const DiscountedCategoriesSkeleton = () => {
  return (
    <section
      className="relative md:h-216 overflow-hidden bg-cover bg-center md:mt-30 md:py-9 pt-5 pb-8 max-md:bottom-25 max-md:pr-4"
      style={{
        backgroundImage: "url('/images/categories-bg.svg')",
      }}
    >
      <SectionHeader
        title="دسته بندی های پر تخفیف"
        subtitle="تخفیف‌های ویژه رو بر اساس علاقه‌ات پیدا کن"
      />
      <div className="flex justify-center gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="md:w-242 h-auto md:h-142.75 overflow-hidden rounded-4xl bg-white p-3 md:pt-7.5 md:pr-12 md:pb-13.25 md:pl-8 max-md:h-86.25 max-md:rounded-l-none! max-md:rounded-r-2xl! max-md:w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="relative shrink-0">
                <div className="w-13 h-13 md:w-20 md:h-20 bg-gray-200 rounded-full animate-pulse" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>
            <div className="flex gap-4">
              {[1, 2, 3].map((j) => (
                <div
                  key={j}
                  className="w-40 h-56 bg-gray-200 rounded-xl animate-pulse"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
