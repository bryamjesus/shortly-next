import Link from 'next/link';
import { LinkIcon } from '../icons/LinkIcon';

export const NavBar = () => {
  return (
    <>
      <nav className="border-b border-black/5 dark:border-white/10 text-(--dark) w-[100%] h-14">
        <div className="container h-full flex items-center">
          <Link href="/" className="flex items-center gap-0.5">
            <LinkIcon className="text-white w-8 h-8" color="#1f2937" />
            <h1 className="font-black text-xl ">Shortly</h1>
          </Link>
        </div>
      </nav>
    </>
  );
};
