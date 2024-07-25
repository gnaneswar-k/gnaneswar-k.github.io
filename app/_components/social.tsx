import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function SocialLink({
  sitename,
  username,
  link,
  icon
}: {
  sitename: string,
  username: string,
  link?: string,
  icon?: IconDefinition
}) {
  return (
    <div className="flex justify-center w-full md:w-3/4 text-lg md:text-xl my-1 md:my-2 rounded-md p-2 transition duration-200 hover:scale-105 hover:shadow-sm md:hover:shadow-md hover:bg-gray-400/5" >
      {link !== undefined ?
        <Link
          className="grid grid-cols-1 grid-rows-2 w-full"
          href={link}
        >
          <div className="flex justify-center items-center space-x-1 md:space-x-4">
            <FontAwesomeIcon icon={icon !== undefined ? icon : faGlobe} />
            <span className="font-semibold font-sans">{sitename}</span>
          </div>
          <span className="flex justify-center items-center max-lg:col-span-2 text-gray-900">
            {username}
          </span>
        </Link> :
        <span className="grid grid-cols-1 grid-rows-2 w-full">
          <div className="flex justify-center items-center space-x-1 md:space-x-4">
            <FontAwesomeIcon icon={icon !== undefined ? icon : faGlobe} />
            <span className="font-semibold font-sans">{sitename}</span>
          </div>
          <span className="flex justify-center items-center max-lg:col-span-2 text-gray-900">
            {username}
          </span>
        </span>}
    </div>
  );
}
