type ErrorDisplayProps = {
  message: string;
  className?: string;
};

export const ErrorDisplay = ({
  message,
  className = "",
}: ErrorDisplayProps) => {
  return (
    <div className={`text-center text-red-500 py-8 ${className}`}>
      <p>{message}</p>
    </div>
  );
};
