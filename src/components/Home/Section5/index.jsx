import ArrowIcon from "@/components/Icons/ArrowIcon";
import ExternalLink from "@/components/Icons/ExternalLink";
import GithubIcon from "@/components/Icons/GithubIcon";
import Image from "next/image";
import EasyConnection from "/public/projects/EasyConnection.png";
import Gfacility from "/public/projects/Gfacility.png";
import Halalcsorg from "/public/projects/Halalcsorg.png";
import Halalus from "/public/projects/Halalus.png";
import Lawep from "/public/projects/Lawep.png";
import LawepAi from "/public/projects/LawepAi.png";
import leadware from "/public/projects/leadware.png";
import Lyncit from "/public/projects/Lyncit.png";
import PerilGroup from "/public/projects/PerilGroup.png";
import SurgiMakers from "/public/projects/SurgiMakers.png";
import Trademarks from "/public/projects/Trademarks.png";
import TripKarao from "/public/projects/TripKarao.png";
import Link from "next/link";

const projects = [
  {
    title: "EazyConnections",
    description: (
      <>
        With <span className="text-AAsecondary">EazyConnections</span>, I
        developed a networking platform aimed at connecting professionals. The
        project utilized React.js and Node.js to create a user-friendly
        interface and robust backend.
      </>
    ),
    tags: ["Networking", "Professional", "React.js", "Node.js"],
    imageUrl: EasyConnection,
    projectUrl: "https://www.eazyconnections.com/",
  },
  {
    title: "Perill Group",
    description: (
      <>
        At <span className="text-AAsecondary">Perill Group</span>, I was
        involved in creating a corporate risk management platform. We used
        Next.js and Tailwind CSS to develop tools for risk assessment and
        mitigation.
      </>
    ),
    tags: ["Risk Management", "Corporate", "Next.js", "Tailwind CSS"],
    imageUrl: PerilGroup,
    projectUrl: "https://perill-group.vercel.app/",
  },
  {
    title: "SurgiMakers",
    description: (
      <>
        At <span className="text-AAsecondary">Surgimakers</span>, I was involved
        in creating a platform to enhance surgical training using VR and AR
        technologies. We used Unity and C# to develop immersive training
        simulations.
      </>
    ),
    tags: ["Surgical Training", "Aos Animation", "Nextjs", "Tailwind CSS"],
    imageUrl: SurgiMakers,
    projectUrl: "https://www.surgimakers.com/",
  },
  {
    title: "Trip Karao",
    description: (
      <>
        At <span className="text-AAsecondary">TripKarao</span>, I worked on a
        travel booking platform that integrates various travel services. We used
        React.js and Supabase to provide a seamless booking experience for
        users.
      </>
    ),
    tags: ["Travel", "Booking", "React.js", "Supabase"],
    imageUrl: TripKarao,
    projectUrl: "https://www.tripkarao.pk/",
  },
  {
    title: "G-Facility",
    description: (
      <>
        At <span className="text-AAsecondary">GFacility</span>, I helped create
        a comprehensive facility management system. We used Next.js and Firebase
        to provide real-time monitoring and management of facility operations.
      </>
    ),
    tags: ["Facility Management", "Next.js", "Firebase"],
    imageUrl: Gfacility,
    projectUrl: "https://gfacility.com/",
  },
  {
    title: "Lawep",
    description: (
      <>
        At <span className="text-AAsecondary">Lawep</span>, I contributed to
        developing a platform that leverages AI to streamline legal document
        analysis and management. Using technologies like Next.js and Tailwind
        CSS, we enhanced the efficiency and accuracy of legal processes.
      </>
    ),
    tags: ["AI", "LegalTech", "Next.js", "Tailwind CSS"],
    imageUrl: Lawep,
    projectUrl: "https://www.lawep.ai/",
  },
  {
    title: "Edge Firm",
    description: (
      <>
        Working with <span className="text-AAsecondary">EdgeFirm</span>, I
        developed a legal case management system. The platform, built with
        Nest.js and MongoDB, improves the efficiency and organization of legal
        practices.
      </>
    ),
    tags: ["Case Management", "LegalTech", "Nest.js", "MongoDB"],
    imageUrl: LawepAi,
    projectUrl: "https://www.edgefirm.io/",
  },
  {
    title: "Trademark Essentials",
    description: (
      <>
        With <span className="text-AAsecondary">Trademark Essentials</span>, I
        contributed to a platform that simplifies the trademark registration
        process. The project utilized Next.js and PostgreSQL for efficient data
        handling and user management.
      </>
    ),
    tags: ["Trademark", "Registration", "Next.js", "PostgreSQL"],
    imageUrl: Trademarks,
    projectUrl: "https://www.trademarkessentials.us/",
  },
  {
    title: "Lyncit",
    description: (
      <>
        With <span className="text-AAsecondary">Lyncit</span>, I worked on an
        AI-driven platform designed to optimize customer interactions and
        engagement. Utilizing React.js and Node.js, the project focused on
        improving user experience and operational efficiency.
      </>
    ),
    tags: ["AI", "Customer Engagement", "React.js", "Node.js"],
    imageUrl: Lyncit,
    projectUrl: "https://www.lyncit.ai/",
  },
  {
    title: "Lead Aware",
    description: (
      <>
        Working with <span className="text-AAsecondary">LeadAware</span>, I
        developed a lead generation platform that leverages machine learning to
        identify and qualify potential leads. We implemented this solution using
        Express.js and MongoDB.
      </>
    ),
    tags: ["Lead Generation", "Machine Learning", "Express.js", "MongoDB"],
    imageUrl: leadware,
    projectUrl: "https://www.leadaware.co/",
  },
  {
    title: "Halal Certifcation Usa",
    description: (
      <>
        At <span className="text-AAsecondary">HalalCS</span>, I helped develop a
        compliance management system for halal certification. Using Laravel and
        MySQL, the platform ensures adherence to halal standards and facilitates
        certification processes.
      </>
    ),
    tags: ["Compliance", "Halal Certification", "MySQL"],
    imageUrl: Halalus,
    projectUrl: "https://www.halalcs.us/",
  },
  //   {
  //     title: "Halalcsorg",
  //     description: (
  //       <>
  //         Working with <span className="text-AAsecondary">HalalAQ</span>, I
  //         developed a platform to ensure halal quality assurance in food products.
  //         Using Flask and MongoDB, the system facilitates thorough quality checks
  //         and certification.
  //       </>
  //     ),
  //     tags: ["Quality Assurance", "Halal", "Flask", "MongoDB"],
  //     imageUrl: Halalcsorg,
  //     projectUrl: "https://www.halalaq.org/",
  //   },
];


export default function Section5() {
  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col   xl:space-y-28 space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary" />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">
            {" "}
            03.
          </span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="relative md:grid md:grid-cols-12 w-full md:h-96"
          >
            <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
              <div
                className={`relative rounded w-full h-full ${
                  index % 2 === 0 ? "col-span-7" : "col-start-6 col-span-7"
                }`}
              >
                {console.log(project.projectUrl)}
                <Link href={project.projectUrl} target="_blank"  >
                    <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-15 hover:opacity-0 hover:cursor-pointer duration-300"></div>
                    <Image
                      src={project.imageUrl}
                      width={800}
                      height={800}
                      alt="Project Screenshot"
                      className="w-full rounded object-cover h-full"
                    />
                </Link>
              </div>
            </div>
            <Link target="_blank" href={project.projectUrl}>
              <div className="block bg-orange-500 md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
                <div className="absolute w-full h-full bg-opacity-70 z-0">
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                    <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                    <Image
                      width={800}
                      height={800}
                      src={project.imageUrl}
                      alt="Project Screenshot"
                      className="w-full object-cover h-full"
                    />
                  </div>
                </div>
                <div
                  className={`px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 ${
                    index % 2 === 0
                      ? "xl:col-start-7 col-start-5 col-span-8 md:items-end"
                      : "col-span-8 md:items-start"
                  } flex flex-col items-start space-y-3`}
                >
                  <div className="flex flex-col space-y-1 z-10">
                    <span
                      className={`text-AAsecondary ${
                        index % 2 === 0 ? " md:text-right" : ""
                      } text-start text-base`}
                    >
                      {project.title}
                    </span>
                    <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                      {project.title}
                    </span>
                  </div>
                  <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                    <p
                      className={`text-gray-300 md:text-gray-400 ${
                        index % 2 === 0 ? " md:text-right" : ""
                      } text-left`}
                    >
                      {project.description}
                    </p>
                  </div>
                  <ul
                    className={`flex flex-wrap w-full text-gray-300 md:text-gray-400 ${
                      index % 2 === 0 ? " md:text-right" : ""
                    } text-sm font-Text2`}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="pr-4 z-10">
                        {tag}
                      </span>
                    ))}
                  </ul>
                  <div className="z-10 flex flex-row space-x-5">
                    {project.githubUrl && <GithubIcon link={project.githubUrl} />}
                    {/* <Link href={project.projectUrl} target="_blank" rel="noreferrer">
                        <ExternalLink url={project.projectUrl} />
                    </Link> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}