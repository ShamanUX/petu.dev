import { useState, useRef, useEffect } from "react";

const jobs = [
  {
    company: "Easybook",
    companyUrl: "https://easybook.fi",
    title: "Full Stack Developer, UX Designer",
    date: "NOV 2024 - PRESENT",
    summary: "Saas startup for booking, reservation and e-commerce solutions.",
    highlights: [
      "I designed and developed the admin panel UI, and implemented features ranging from chatbot logic to booking systems.",
      "Improved the development workflow and security, and implemented automated testing with Cypress.",
    ],
    icon: "/companyLogos/EasybookFullLogo.png",
  },
  {
    company: "Hitachi High-Tech Analytical Science",
    companyUrl: "https://hha.hitachi-hightech.com/en/",
    title: "UI Developer",
    date: "SEP 2023 - NOV 2024",
    summary: "Scientific instrumentation company specializing in analytical instruments.",
    highlights: [
      "I was in charge of developing the responsive web interface for a handheld measurement device.",
      "Collaborated in complex multi-team environment in an effort to maximise productivity.",
      "Unified the design across the product to ensure a consistent user experience.",
    ],
    icon: "/companyLogos/logo-hitachi.svg",
    invertIcon: true,
  },
  {
    company: "Solenovo",
    companyUrl: "https://solenovo.fi",
    title: "Software Developer Intern",
    date: "SUMMERS 2017-2018",
    summary: "Document and student management SaaS company.",
    highlights: [
      "Investigated use of robotic process automation (RPA) to improve internal workflows.",
      "Used docker to containerize legacy applications for easier deployment and maintenance.",
    ],
    icon: "/companyLogos/solenovo-logo.webp",
  },
  // Add more jobs as needed...
];

export default function VerticalJobTabs() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const highlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentTab = tabRefs.current[selected];
    const highlight = highlightRef.current;
    if (currentTab && highlight) {
      const { offsetTop, offsetHeight } = currentTab;
      highlight.style.transform = `translateY(${offsetTop}px)`;
      highlight.style.height = `${offsetHeight}px`;
    }
  }, [selected]);

  return (
    <section className="max-w-6xl mb-24">
      <div className="flex flex-row gap-8">
        {/* Tabs */}
        <div className="h-fit relative flex flex-col border-l-2 border-gray-300/30">
          {jobs.map((job, idx) => (
            <button
              key={job.company}
              ref={(el: HTMLButtonElement | null) => {
                tabRefs.current[idx] = el;
              }}
              className={`p x-4 ml-2 py-2 text-left tab-button font-medium transition-colors duration-300  ${
                selected === idx ? "text-highlight! bg-highlight/20" : " hover:text-highlight/70 hover:bg-highlight/10"
              }`}
              onClick={() => setSelected(idx)}
              role="tab"
              aria-selected={selected === idx}
              aria-controls={`panel-${idx}`}
              id={`tab-${idx}`}
              tabIndex={selected === idx ? 0 : -1}
            >
              <span className="flex items-center gap-2">
                <img
                  src={job.icon}
                  alt={`${job.company} logo`}
                  width={250}
                  height={250}
                  style={{ objectFit: "contain" }}
                  className={`${job.invertIcon ? "invert" : ""} h-16 w-16`}
                />

                <p className={`${selected === idx ? "text-highlight!" : ""}`}>{job.company}</p>
              </span>
            </button>
          ))}
          {/* Animated highlight */}
          <div
            ref={highlightRef}
            className="absolute left-0 w-1 bg-highlight transition-all duration-300"
            style={{ top: 0, zIndex: 10 }}
          />
        </div>
        {/* Panel */}
        <div className="flex-1 tab-panels">
          <div
            className="tab-panel"
            aria-labelledby={`tab-${selected}`}
            id={`panel-${selected}`}
            role="tabpanel"
            tabIndex={0}
          >
            <div className="flex flex-col gap-4 border-b pb-4">
              <div className="flex items-center gap-4">
                <img
                  src={jobs[selected].icon}
                  alt={`${jobs[selected].company} logo`}
                  width={64}
                  height={64}
                  style={{ objectFit: "contain" }}
                  className={`${jobs[selected].invertIcon ? "invert" : ""} h-fit w-32`}
                />
                <h3 className="font-medium flex leading-tight text-2xl">
                  <div>
                    <span>{jobs[selected].title}</span>
                    <p className="font-mono text-xs text-blue-700">{jobs[selected].date}</p>
                  </div>
                  <span className="text-slate">&nbsp;@&nbsp;</span>
                  <a
                    href={jobs[selected].companyUrl}
                    className="text-blue-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {jobs[selected].company}
                  </a>
                </h3>
              </div>
            </div>
            <div>
              <p className="mb-2">{jobs[selected].summary}</p>
              <ul className="list-disc pl-5">
                {jobs[selected].highlights.map((hl, i) => (
                  <li key={i} className="mb-2">
                    {hl}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
