import Image from "next/image";

interface Props {
  image: string;
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  currency: string;
  className?: string;
}

export default function GlassyEventCard({
  image,
  title,
  price,
  oldPrice,
  discount,
  currency,
  className = "",
}: Props) {
  return (
    <div className={`w-65 h-65 relative rounded-2x1! ${className}`}>
      <Image
        src={image}
        alt={title}
        fill
        className="w-full h-full object-cover rounded-2x1!"
      />

      <div
        className="absolute
          left-1/2
          -translate-x-1/2
          md:-bottom-15
          -bottom-7
          z-50
          md:w-5/6
          w-1.2
          rounded-[20px]
          border border-white
          bg-white/15
          md:p-2.5
          px-5
          backdrop-blur-md"
      >
        <h3 className="font-bold text-center">{title}</h3>

        <div className="flex items-center justify-center gap-2.5">
          <div className="bg-red-500 text-white pl-1 pr-3 pb-1 pt-0.5 max-h-max text-center text-[12px] [clip-path:polygon(0_23%,0_80%,59%_81%,88%_54%,60%_24%)]">
            {discount}
          </div>
          <div className="flex items-center md:gap-2 md:mt-3 flex-col">
            <div dir="ltr" className="flex items-center gap-1 text-[#1D60A4]">
              <span>{currency}</span>
              <span>{price}</span>
            </div>
            <div
              dir="ltr"
              className="flex items-center gap-1 text-[#1E1E1E] text-[14px] line-through font-light!"
            >
              <span>{currency}</span>
              <p>{oldPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
