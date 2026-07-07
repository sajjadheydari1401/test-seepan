import Image from "next/image";
import FeaturedBg from "../../public/images/featured-section-bg.svg";
import FeaturedEventCard from "./common/FeaturedEventCard";
const Featured = () => {
  return (
    <>
      <p className="text-[32px] text-[#1E1E1E] text-center font-bold">انتخاب کاربران</p>
      <p className="mt-2 text-[#716E6E] text-center">تجربه ‌هایی که حرف ندارن</p>
      <div className="relative max-w-360 max-h-218.25 mx-auto mt-8">
        <FeaturedEventCard
          image="/images/slide-pic-1.png"
          title="رستوران سدروس"
          price="۲,۸۰۰,۰۰۰"
          currency="تومان"
          className="absolute top-0 right-0 max-w-94 max-h-112.75"
          imageClassName="max-h-86"
        />
        <Image
          src={FeaturedBg}
          alt={"ft"}
          width={1440}
          height={873}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 gap-8 w-full max-w-234.25 h-89.5 flex">
          <FeaturedEventCard
            image="/images/slide-pic-1.png"
            title="برج میلاد"
            price="۲,۸۰۰,۰۰۰"
            currency="تومان"
            className="max-h-89.5 max-w-360"
            imageClassName="max-h-64.75"
          />
          <FeaturedEventCard
            image="/images/slide-pic-1.png"
            title="برج میلاد"
            price="۲,۸۰۰,۰۰۰"
            currency="تومان"
            className="max-h-89.5 max-w-360"
            imageClassName="max-h-64.75"
          />
          <FeaturedEventCard
            image="/images/slide-pic-1.png"
            title="برج میلاد"
            price="۲,۸۰۰,۰۰۰"
            currency="تومان"
            className="max-h-89.5 max-w-360"
            imageClassName="max-h-64.75"
          />
        </div>
      </div>
    </>
  );
};

export default Featured;
