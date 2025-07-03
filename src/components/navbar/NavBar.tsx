import Link from 'next/link';
import { Container } from '../ui/container/Container';
import { LinkIcon } from '../ui/icons/LinkIcon';

export const NavBar = () => {
  return (
    <>
      <nav className="border-b border-general text-(--dark) w-[100%] h-14">
        <Container className="h-full flex items-center">
          <Link href="/" className="flex items-center gap-0.5">
            <LinkIcon className="w-8 h-8" color="#1f2937" />
            <h1 className="font-black text-xl text-(--black) dark:text-(--white)">
              Shortly
            </h1>
          </Link>
        </Container>
      </nav>
    </>
  );
};
