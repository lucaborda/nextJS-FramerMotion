import Link from "next/link";

const NavBar = () => {
  const navLinks = [
    { name: "Home", src: "/" },
    { name: "Something", src: "/something" },
    { name: "My Lethargy", src: "/" },
  ];
  return (
    <header>
      <nav className="fixed z-20">
        <ul className="flex flex-row w-full p-[2rem] text-[2rem]">
          {navLinks.map((item, i) => {
            return (
              <li key={i} className="mr-[2rem]">
                <Link href={item.src}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
