import type { Metadata } from "next";
import NavBar from "@/app/_components/navbar"
import Layout from "@/app/layout"

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects done by Gnaneswar Kulindala",
};

export default function Projects() {
  return (
    <Layout>
      {/* Header */}
      <NavBar current="projects" />
      {/* Content */}
      <main className="flex-col items-center justify-center p-4 flex-grow">
        <div>Projects</div>
      </main>
    </Layout>
  )
}
