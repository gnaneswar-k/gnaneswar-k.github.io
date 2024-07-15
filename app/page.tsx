import type { Metadata } from "next";
import NavBar from "@/app/_components/navbar"
import Layout from "@/app/layout"
import Image from "next/image"
import portrait from "@/public/cutout-bw.png"

export const metadata: Metadata = {
  title: "Gnaneswar Kulindala",
  description: "Gnaneswar Kulindala's Homepage",
};

export default function Homepage() {
  return (
    <Layout>
      {/* Header */}
      <NavBar />
      {/* Content */}
      <main className="flex flex-col items-stretch justify-center">
        <div className="flex flex-grow items-center justify-center bg-white/75 rounded-lg shadow-md md:shadow-lg m-6">
          <div className="flex flex-col md:flex-row items-center justify-evenly w-full p-4 space-y-4">
            <Image
              src={portrait}
              className="flex w-2/3 md:w-1/3 lg:w-1/4 self-center rounded-full border-2 border-gray-700 bg-white md:order-2"
              alt="Picture of Gnaneswar Kulindala wearing a light-blue shirt with white drawings of miscellaneous items."
            />
            <div className="flex-col justify-center items-center p-2 space-y-4 md:order-1">
              <div className="flex justify-center text-center text-2xl md:text-3xl font-semibold font-sans">Hey There!</div>
              <div className="flex justify-center text-center text-lg md:text-xl text-pretty">
                I&apos;m Gnaneswar Kulindala. Take a look around to get to know more about me!
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
