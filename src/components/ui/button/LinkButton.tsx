import Link from 'next/link';

interface Props {
  text: string;
  href?: string;
  className?: string;
}

export const LinkButton = ({ text, href = '/', className }: Props) => {
  return (
    <>
      <Link
        className={`inline-block btn-primary my-10 text-sm/6 font-medium ${className}`}
        href={href}>
        {text}
      </Link>
    </>
  );
};
