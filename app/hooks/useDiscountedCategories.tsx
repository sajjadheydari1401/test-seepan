import { useCategoryExperiences } from "@/app/hooks/useCategoryExperiences";

export const useDiscountedCategories = () => {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useCategoryExperiences();

  const categoryCards =
    categories?.map((category) => ({
      id: category.publicId,
      key: category.key,
      title: category.nameFa,
      discount: category.offer?.[0]?.value?.toString() || "0",
      image: category.iconMediaUrl || "",
    })) || [];

  return {
    categoryCards,
    isLoading,
    isError,
    error,
    hasCategories: categoryCards.length > 0,
  };
};
