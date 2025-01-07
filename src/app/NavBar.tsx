"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", src: "/" },
    { name: "Something", src: "/something" },
    { name: "My Lethargy", src: "/" },
  ];
  const background =
    pathname === "/something"
      ? "bg-[hsl(0,0,6%)] w-full opacity-90"
      : "bg-transparent";
  return (
    <header>
      <nav className={`fixed z-50 ${background}`}>
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
