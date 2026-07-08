type Props = {
  message: string;
  className?: string;
};

export const EmptyState = ({ message, className = "" }: Props) => {
  return (
    <div className={`text-center py-8 ${className}`}>
      <p>{message}</p>
    </div>
  );
};
