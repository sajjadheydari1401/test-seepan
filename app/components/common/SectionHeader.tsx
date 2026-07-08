type FeaturedHeaderProps = {
  title?: string;
  subtitle?: string;
};

export const SectionHeader = ({
  title = "انتخاب کاربران",
  subtitle = "تجربه‌هایی که حرف ندارن",
}: FeaturedHeaderProps) => {
  return (
    <>
      <p className="md:text-[32px] text-[#1E1E1E] text-center font-semibold md:font-bold">
        {title}
      </p>
      <p className="mt-2 text-[12px] md:text-[16px] text-[#716E6E] text-center">
        {subtitle}
      </p>
    </>
  );
};
