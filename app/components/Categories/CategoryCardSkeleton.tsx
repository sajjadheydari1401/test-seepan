type SkeletonProps = {
  className?: string;
};

export const CategoryCardSkeleton = ({ className = "" }: SkeletonProps) => {
  return (
    <div
      className={`md:w-242 h-auto md:h-142.75 overflow-hidden rounded-4xl bg-white p-3 md:pt-7.5 md:pr-12 md:pb-13.25 md:pl-8 ${className}`}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="relative shrink-0">
          <div className="w-13 h-13 md:w-20 md:h-20 bg-gray-200 rounded-full animate-pulse" />
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>
      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-40 h-56 bg-gray-200 rounded-xl animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};
