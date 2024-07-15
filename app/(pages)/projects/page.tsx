import NavBar from "@/app/_components/navbar"
import Layout from "@/app/layout"

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
