"use client";

import { useQuery } from "@tanstack/react-query";
import {
  fetchCategoryWithExperiences,
  transformExperienceToCardProps,
} from "../services/category";

export function useCategoryExperiences() {
  return useQuery({
    queryKey: ["category-experiences"],
    queryFn: async () => {
      const response = await fetchCategoryWithExperiences();
      return response.data.map((category) => ({
        ...category,
        experiences: category.experiences.map(transformExperienceToCardProps),
      }));
    },
  });
}

export function useCategoryByKey(key: string) {
  const { data: categories, ...rest } = useCategoryExperiences();

  const category = categories?.find((cat) => cat.key === key);

  return {
    category,
    experiences: category?.experiences || [],
    ...rest,
  };
}
