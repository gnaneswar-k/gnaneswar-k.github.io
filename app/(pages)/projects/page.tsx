import type { Metadata } from "next";
import Navigation from "@/app/_components/navigation/navigation";
import Layout from "@/app/layout";

export const metadata: Metadata = {
  title: "Projects | Gnaneswar Kulindala",
  description: "Projects done by Gnaneswar Kulindala",
};

const Projects = () => {
  return (
    <Layout>
      {/* Header */}
      <header><Navigation /></header>
      {/* Content */}
      <main className="flex-col items-center justify-center p-4 flex-grow">
        <div>Projects</div>
      </main>
    </Layout>
  );
}

export default Projects;
