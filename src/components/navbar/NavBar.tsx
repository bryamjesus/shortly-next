import Link from 'next/link';

export const NavBar = () => {
  return (
    <>
      <nav className="bg-[#e0e0e0] w-[100%] h-15">
        <div className="container h-full flex items-center">
          <Link href="/">
            <h1 className="font-black text-xl md:text-2xl lg:text-3xl">
              Shortly
            </h1>
          </Link>
        </div>
      </nav>
    </>
  );
};
