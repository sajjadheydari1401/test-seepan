export interface Role {
  id?: string;
  key: string;
  nameEn?: string;
  nameFa?: string;
  isActive?: boolean;
  roleType?: number;
}

export interface UserInfo {
  email: string | null;
  roles: Role[];
  gender?: string;
  fkUserId: number;
  isActive?: boolean;
  avatarUrl: string | null;
  birthDate?: string | null;
  createdAt?: string;
  displayName: string;
  phoneNumber?: string;
}

export interface CoverMediaSeo {
  alt: string;
  title: string;
}

export interface Event {
  publicId: string;
  title: string;
  coverMediaUrl: string;
  coverMediaSeo: CoverMediaSeo;
  userInfo: UserInfo;
}

export interface HeroCarouselResponse {
  succeeded: boolean;
  data: Event[];
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

export interface Category {
  image: string;
  title: string;
  discount: string;
}
