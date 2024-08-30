import ArrowIcon from "@/components/Icons/ArrowIcon";

export default function Option1() {
  const tasks = [
    {
      text: "Worked on the front-end development using Next.js, Vue.js, Tailwind CSS, React.js, and Framer Motion.",
      keywords: ["Next.js", "Vue.js", "Tailwind CSS", "React.js", "Framer Motion"],
    },
    {
      text: "Managed back-end development with Node.js, Express.js, Nest.js, MongoDB, Supabase, and Firebase.",
      keywords: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "MongoDB",
        "Supabase",
        "Firebase",
      ],
    },
    {
      text: "Conducted quality assurance tasks to ensure high standards of work.",
      keywords: ["quality assurance"],
    },
    {
      text: "Gained expertise in Cross-platform development by handling both front-end and back-end responsibilities.",
      keywords: ["Cross-platform development"],
    },
  ];

  const getTasksTextWithHighlightedKeyword = (text, keywords) => {
    let highlightedText = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        "<span class='text-AAsecondary'>$1</span>"
      );
    });
    return highlightedText;
  };

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full-Stack Developer{" "}
            <span className="text-AAsecondary">@ Current Job</span>
          </span>
          <span className="font-mono text-xs text-gray-500">Ongoing</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
          >
            https://www.edgefirm.io/{" "}
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => (
            <div key={index} className="flex flex-row space-x-1">
              <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
              <span
                className="text-gray-500 sm:text-sm text-xs"
                dangerouslySetInnerHTML={{
                  __html: getTasksTextWithHighlightedKeyword(
                    item.text,
                    item.keywords
                  ),
                }}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
