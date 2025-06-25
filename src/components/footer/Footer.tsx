import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="bg-(--primary) text-(--light) flex w-full justify-center text-xs py-3">
      <Link href="/">
        <span className={`antialiased font-bold`}>Shortly </span>
        <span>| Link </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        Privacidad & Legal
      </Link>
    </div>
  );
};
