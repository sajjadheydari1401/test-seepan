import Image from "next/image";

interface Props {
  image: string;
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  currency: string;
}

export default function EventCard({
  image,
  title,
  price,
  oldPrice,
  discount,
  currency,
}: Props) {
  return (
    <div className="w-65 h-65 relative rounded-2xl">
      <Image
        src={image}
        alt={title}
        width={260}
        height={260}
        className="w-full h-full object-cover"
      />

      <div
        className="absolute
          left-1/2
          -translate-x-1/2
          -bottom-15
          z-50
          w-5/6
          rounded-[20px]
          border border-white
          bg-white/15
          p-2.5
          backdrop-blur-md"
      >
        <h3 className="font-bold text-center">{title}</h3>

        <div className="flex items-center justify-center gap-2.5">
          <div className="bg-red-500 text-white pl-1 pr-3 pb-1 pt-0.5 max-h-max text-center text-[12px] [clip-path:polygon(0_23%,0_80%,59%_81%,88%_54%,60%_24%)]">
            {discount}
          </div>
          <div className="flex items-center gap-2 mt-3 flex-col">
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
