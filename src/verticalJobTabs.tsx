import { useState, useRef, useEffect } from "react";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { OpenNewWindow } from "iconoir-react";

interface Job {
  company: string;
  companyUrl: string;
  title: string[];
  date: string;
  summary: string;
  highlights: string[];
  icon: string;
  invertIcon?: boolean;
  iconClassName?: string;
}

interface JobPanelProps {
  job: Job;
}

const JobPanel: React.FC<JobPanelProps> = ({ job }) => (
  <>
    <div className="flex flex-col gap-4 border-b pb-4">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
        <div className="flex flex-col md:flex-row gap-2 md:items-center justify-center">
          <img
            src={job.icon}
            alt={`${job.company} logo`}
            width={64}
            height={64}
            style={{ objectFit: "contain" }}
            className={`${job.invertIcon ? "invert" : ""} ${job.iconClassName || ""}h-fit w-32`}
          />
          <div className="hidden md:block">
            <a href={job.companyUrl} className="" target="_blank" rel="noopener noreferrer">
              <OpenNewWindow />
            </a>
          </div>
        </div>
        <h3 className="font-medium flex md:ml-2 leading-tight text-xl md:text-2xl">
          <div>
            {job.title.map((title) => (
              <div key={title}>{title}</div>
            ))}

            <p className="font-mono text-xs text-blue-700">{job.date}</p>
          </div>
        </h3>
      </div>
    </div>
    <div>
      <p className="mb-2">{job.summary}</p>
      <ul className="list-disc pl-5">
        {job.highlights.map((hl, i) => (
          <li key={i} className="mb-2">
            {hl}
          </li>
        ))}
      </ul>
    </div>
  </>
);

const jobs: Job[] = [
  {
    company: "Easybook",
    companyUrl: "https://easybook.fi",
    title: ["Full Stack Developer", "UX Designer"],
    date: "NOV 2024 - PRESENT",
    summary: "SaaS startup for booking, reservation and e-commerce solutions.",
    highlights: [
      "I designed and developed the admin panel UI, and implemented features ranging from chatbot logic to booking systems.",
      "Improved the development workflow and security, and implemented automated testing with Cypress.",
    ],
    icon: "/companyLogos/EasybookFullLogo.png",
  },
  {
    company: "Hitachi High-Tech Analytical Science",
    companyUrl: "https://hha.hitachi-hightech.com/en/",
    title: ["UI Developer"],
    date: "SEP 2023 - NOV 2024",
    summary: "Scientific instrumentation company specializing in analytical instruments.",
    highlights: [
      "I was in charge of developing the responsive web interface for a handheld measurement device.",
      "Collaborated in complex multi-team environment in an effort to maximise productivity.",
      "Unified the design across the product to ensure a consistent user experience.",
    ],
    icon: "/companyLogos/logo-hitachi.svg",
    iconClassName: "-ml-1 absolute",
    invertIcon: true,
  },
  {
    company: "Solenovo",
    companyUrl: "https://solenovo.fi",
    title: ["Software Developer Intern"],
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      // add plugins here
    ]
  );

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
    <section className="md:flex md:items-center md:justify-center md:w-full">
      {/* Mobile Carousel */}
      <div className="md:hidden">
        {loaded && (
          <div className="flex justify-center gap-2 mb-4">
            {jobs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === idx ? "bg-highlight" : "bg-gray-300"
                }`}
                aria-label={`Go to job ${idx + 1}`}
              />
            ))}
          </div>
        )}
        <div ref={sliderRef} className="keen-slider">
          {jobs.map((job) => (
            <div key={job.company} className="keen-slider__slide p-4">
              <JobPanel job={job} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Vertical Tabs */}
      <div className="hidden md:flex w-4/5 flex-row gap-8">
        {/* Tabs */}
        <div className="h-fit w-24 relative flex flex-col border-l-2 border-gray-300/30">
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
                  className={`${job.invertIcon ? "invert" : ""} h-12`}
                />
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
            <JobPanel job={jobs[selected]} />
          </div>
        </div>
      </div>
    </section>
  );
}
