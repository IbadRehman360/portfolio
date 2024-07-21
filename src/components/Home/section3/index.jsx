import ArrowIcon from "@/components/Icons/ArrowIcon";
import { motion } from "framer-motion";
import Option1 from "./option1";

export default function Section3() {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
    >
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
        justify-center md:justify-center items-center md:items-start"
      >
        <CompaniesBar />
        <Option1 />
      </section>
    </div>
  );
}

const CompaniesBar = () => {
  const companies = [{ name: "EdgeFirm", component: <Option1 /> }];

  const CompanyButton = ({ name, active }) => (
    <button
      className={`flex-none sm:text-sm text-xs text-center md:text-left hover:text-AAsecondary
        hover:bg-ResumeButtonHover rounded font-mono py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
        ${active ? "bg-ResumeButtonHover text-AAsecondary" : "text-gray-500"}`}
    >
      {name}
    </button>
  );

  return (
    <div
      id="WhereIhaveWorkedSection"
      className="flex flex-col md:flex-row w-screen lg:w-auto overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start sm:justify-center items-start sm:items-center"
    >
      <div className="hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[297px] translate-y-1 md:w-0.5 rounded md:order-1 order-2">
        <motion.div className="absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary"></motion.div>
      </div>
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0">
        <div className="flex flex-row md:flex-col">
          {companies.map((company, index) => (
            <CompanyButton
              key={index}
              name={company.name}
              active={index === 0}
            />
          ))}
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div className="w-[128px] h-0.5 rounded bg-AAsecondary"></motion.div>
        </div>
      </div>
    </div>
  );
};
