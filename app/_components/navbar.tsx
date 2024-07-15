import Link from "next/link"
import Image from "next/image"
import profile from "@/public/GK.svg"

const pages = ["projects", "contact"]

/**
 * Navigation Bar element with links to all pages.
 * @returns Navigation Bar Element.
 */
export default function NavBar({ current }: { current?: string }) {
  return (
    <header
      className="flex sticky top-0 justify-evenly items-center w-full p-4 bg-white/75 border-b-2 border-solid border-gray-600 backdrop-blur-xl"
      id="nav-bar"
    >
      {/* Home Link */}
      <Link href={"/"} className="flex text-xl items-center" id="nav-home">
        <Image
          src={profile}
          alt="Artistic Image of Gnaneswar Kulindala"
          width={50}
          height={50}
          className="rounded-2xl border-black/75 border-2"
        />
        <div className="max-sm:hidden sm:px-2"><span className="font-bold">Gnaneswar</span> Kulindala</div>
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
                "px-2 sm:px-4 transition ease-in-out duration-400 rounded-md border-b-4"
                + ((current === value) ? " border-black/75" : " border-black/10 hover:border-0 hover:ring-black/30 hover:ring-2")
              }
            >
              {value}
            </Link>
          )
        })}
      </div>
    </header>
  )
}