"use client";

import Link from "next/link";
import Image from "next/image";
import profile from "@/public/images/GK.svg";
import { usePathname } from "next/navigation";

/**
 * Navigation Bar element with links to all pages.
 * @returns Navigation Bar Element.
 */
const NavBar: React.FC = () => {
  const pages = ["projects", "contact"];
  const pathname = usePathname();
  return (
    <>
      <nav
        className="flex sticky top-0 justify-evenly items-center w-full p-4 bg-white/75 border-b-2 border-solid border-b-gray-500 backdrop-blur-xl"
        id="nav-bar"
      >
        {/* Home Link */}
        <Link href={"/"} className="flex text-xl items-center group" id="nav-home">
          <Image
            src={profile}
            alt="Artistic Image of Gnaneswar Kulindala"
            width={50}
            height={50}
            className="rounded-2xl border-gray-500 group-hover:border-black/75 group-active:border-black border-2 mx-2"
          />
          <div className="max-sm:hidden sm:px-2 transition ease-in-out duration-300 rounded-md border-y-2 border-transparent group-hover:border-b-black/10 group-active:border-b-black/50">
            <span className="font-bold">Gnaneswar</span> Kulindala
          </div>
        </Link>
        {/* Menu */}
        <div className="flex justify-evenly items-center capitalize text-lg font-semibold">
          {pages.map((
            value: string,
            index: number
          ) => {
            return (
              <Link
                href={`/${value}`}
                key={`nav-item-${index}`}
                className={
                  "px-2 sm:px-4 mx-1 transition ease-in-out duration-300 rounded-md border-b-2"
                  + ((pathname === `/${value}`) ? " border-black/70" : " border-black/15 hover:ring-1 hover:ring-black/30 active:bg-black/5")
                }
              >
                {value}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
