import { UserInfo, CoverMediaSeo } from "./event";

export interface Offer {
  ruleType: string;
  minimumQuantity: number | null;
  type: string;
  value: number;
  maxAmount: number;
}

export interface PopularEvent {
  publicId: string;
  title: string;
  coverMediaUrl: string;
  coverMediaSeo: CoverMediaSeo;
  userInfo: UserInfo;
  averageRating: number;
  ratingCount: number;
  offer: Offer[] | null;
}

export interface PopularEventsResponse {
  succeeded: boolean;
  data: PopularEvent[];
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

export interface PopularEventCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  currency: string;
  discount?: string;
  oldPrice?: string;
  providerPhoto: string;
  className?: string;
  imageClassName?: string;
}
