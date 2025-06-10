import Link from 'next/link';

export const NavBar = () => {
  return (
    <>
      <nav className="bg-[#cecece] w-[100%]">
        <div className=" w-[90%] max-w-7xl my-0 mx-auto py-3 px-0">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black">
              Shortly
            </h1>
          </Link>
        </div>
      </nav>
    </>
  );
};
