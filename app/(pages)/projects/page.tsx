import type { Metadata } from "next";
// import NavBar from "@/app/_components/navigation/navbar";
import Layout from "@/app/layout";

export const metadata: Metadata = {
  title: "Projects | Gnaneswar Kulindala",
  description: "Projects done by Gnaneswar Kulindala",
};

const Projects = () => {
  return (
    <Layout>
      {/* Header */}
      {/* <header><NavBar /></header> */}
      {/* Content */}
      <main className="flex-col items-center justify-center p-4 flex-grow">
        <div>Projects</div>
      </main>
    </Layout>
  );
}

export default Projects;
