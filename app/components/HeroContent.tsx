import Image from "next/image";

export default function HeroContent() {
  return (
    <div className="lg:mt-32 mt-8 flex h-full items-start justify-center">
      <div className="relative w-[320px] md:w-139">
        <Image
          src="/images/hero-center-group.png"
          alt=""
          width={556}
          height={433}
          className="h-auto w-full"
        />

        <div className="absolute inset-0 lg:bottom-8 lg:left-10 left-3 flex flex-col items-center justify-center">
          <h1 className="lg:mt-40 mt-30 font-rokh text-3xl text-[#1e1e1e] md:text-5xl">
            رویـــــداد های
          </h1>

          <h2 className="lg:mt-6 font-rokh text-3xl text-[#ff383c] md:text-5xl">
            تخفیفــــــــ دار
          </h2>
        </div>
      </div>
    </div>
  );
}
