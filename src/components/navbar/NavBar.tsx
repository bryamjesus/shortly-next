import Link from 'next/link';
import { LinkIcon } from '../icons/LinkIcon';
import { Container } from '../ui/container/Container';

export const NavBar = () => {
  return (
    <>
      <nav className="border-b border-general text-(--dark) w-[100%] h-14">
        <Container className="h-full flex items-center">
          <Link href="/" className="flex items-center gap-0.5">
            <LinkIcon className="w-8 h-8" color="#1f2937" />
            <h1 className="font-black text-xl ">Shortly</h1>
          </Link>
        </Container>
      </nav>
    </>
  );
};
