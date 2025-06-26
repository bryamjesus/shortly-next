import Link from 'next/link';
import { LinkIcon } from '../icons/LinkIcon';

export const NavBar = () => {
  return (
    <>
      <nav className="bg-(--primary) text-(--light) w-[100%] h-14">
        <div className="container h-full flex items-center">
          <Link href="/" className="flex items-center gap-0.5">
            <LinkIcon className="text-white w-8 h-8" color="#f9fafb" />
            <h1 className="font-black text-xl ">Shortly</h1>
          </Link>
        </div>
      </nav>
    </>
  );
};
