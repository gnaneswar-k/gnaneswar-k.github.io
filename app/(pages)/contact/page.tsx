import type { Metadata } from "next";
import NavBar from "@/app/_components/navbar"
import Layout from "@/app/layout"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details and socials of Gnaneswar Kulindala",
};

export default function Contact() {
  return (
    <Layout>
      {/* Header */}
      <NavBar current="contact" />
      {/* Content */}
      <main className="flex-col items-center justify-center p-4 flex-grow">
        <div>Contact</div>
      </main>
    </Layout>
  )
}
