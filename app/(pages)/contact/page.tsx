import type { Metadata } from "next";
import Navigation from "@/app/_components/navigation/navigation";
import Layout from "@/app/layout";
import SocialLink from "@/app/_components/social";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Contact | Gnaneswar Kulindala",
  description: "Contact details and socials of Gnaneswar Kulindala",
};

const Contact = () => {
  return (
    <Layout>
      {/* Header */}
      <header><Navigation /></header>
      {/* Content */}
      <main className="flex-col items-center justify-center p-4 flex-grow">
        <div className="flex flex-grow items-center justify-center bg-white/75 rounded-lg shadow-md md:shadow-lg m-2 md:m-6 p-4">
          <div className="grid md:grid-cols-2 md:grid-rows-1 w-full">
            <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl flex items-center justify-center max-md:my-2">Socials</span>
            <div className="flex flex-col items-center justify-start max-md:border-t-2 md:border-l-4 max-md:border-t-gray-800 md:border-l-gray-800 rounded-sm">
              <SocialLink
                sitename="GitHub"
                username="gnaneswar-k"
                link="https://www.github.com/gnaneswar-k"
                icon={faGithub}
              />
              <SocialLink
                sitename="LinkedIn"
                username="gnaneswar-kulindala"
                link="https://www.linkedin.com/in/gnaneswar-kulindala/"
                icon={faLinkedin}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Contact;
