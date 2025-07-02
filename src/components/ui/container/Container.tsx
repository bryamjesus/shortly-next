interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: Props) => {
  return (
    <div className={`w-[90%] max-w-7xl mx-auto px-0 ${className}`}>
      {children}
    </div>
  );
};
