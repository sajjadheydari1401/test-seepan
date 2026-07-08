import { CoverMediaSeo } from "./event";

export interface Category {
  id: number;
  publicId: string;
  title: string;
  shortDescription: string;
  categoryPublicId: string;
  categoryKey: string;
  categoryNameFa: string;
  cityPublicId: string;
  cityNameFa: string;
  cityCode: string;
  basePrice: number;
  minPrice: number;
  maxPrice: number;
  currency: string;
  baseCapacity: number;
  hasSessions: boolean;
  isFeatured: boolean;
  isBookingEnabled: boolean;
  publishedAt: string;
  averageRating: number;
  ratingCount: number;
  totalViewCount: number;
  uniqueViewCount: number;
  coverMediaUrl: string;
  coverMediaSeo: CoverMediaSeo | null;
  offer: Offer | null;
}

export interface Offer {
  ruleType: string;
  minimumQuantity: number | null;
  type: string;
  value: number;
  maxAmount: number;
}

export interface CategoryWithExperiences {
  publicId: string;
  key: string;
  nameFa: string;
  nameEn: string;
  description: string;
  publishedExperienceCount: number;
  soldQuantity: number;
  totalRevenueSnapshot: number;
  totalViewCount: number;
  uniqueViewCount: number;
  coverMediaUrl: string | null;
  coverMediaSeo: CoverMediaSeo | null;
  iconMediaUrl: string | null;
  iconMediaSeo: CoverMediaSeo | null;
  offer: Offer[] | null;
  experiences: Category[];
}

export interface CategoryWithExperiencesResponse {
  succeeded: boolean;
  data: CategoryWithExperiences[];
  message: {
    code: string;
    messageFa: string;
    messageEn: string;
  };
  error: string | null;
  correlation_id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta: any | null;
}

export interface CategoryEventCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  currency: string;
  discount?: string;
  oldPrice?: string;
  className?: string;
  imageClassName?: string;
  priceClassName?: string;
}
