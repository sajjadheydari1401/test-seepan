import Image from "next/image";
import leftArrow from "../../../public/icons/left-icon.svg";
import rightArrow from "../../../public/icons/right-icon.svg";
import { RefObject } from "react";

type NavigationButtonsProps = {
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
};

export const NavigationButtons = ({
  prevRef,
  nextRef,
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-center gap-4 mt-4 md:mt-18 max-md:pl-4">
      <button
        ref={prevRef}
        className="cursor-pointer flex w-6 h-6 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded border border-white bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.1)_100%)]"
        aria-label="Previous"
      >
        <Image src={leftArrow} alt="Previous" width={24} height={24} />
      </button>

      <button
        ref={nextRef}
        className="cursor-pointer flex w-6 h-6 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded bg-transparent border border-white bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.1)_100%)]"
        aria-label="Next"
      >
        <Image src={rightArrow} alt="Next" width={24} height={24} />
      </button>
    </div>
  );
};
