interface Props {
  title: string;
  className?: string;
}

export const Title = ({ title, className }: Props) => {
  return (
    <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-8xl ${className}`}>
      {title}
    </h1>
  );
};
