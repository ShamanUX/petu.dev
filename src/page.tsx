import React from "react";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import VerticalJobTabs from "./verticalJobTabs";
import ReferenceCard, { Quote } from "./ReferenceCard";
import { ArrowDown, MailSolid } from "iconoir-react";
import { offsetScrollTo } from "./helpers";

function ProfileImage() {
  return (
    <div className="rounded-full hidden md:block overflow-hidden max-h-54 max-w-54 lg:max-h-72 lg:max-w-72 min-h-54 min-w-54 lg:min-h-72 lg:min-w-72 shadow-xl shadow-highlight/20">
      <img src="/PetrusEskelinen.jpg" alt="Picture of Petrus Eskelinen" width={500} height={500} />
    </div>
  );
}

function HeaderText() {
  return (
    <div className="flex-col flex gap-8">
      <h1 className={`text-5xl md:text-7xl font-iceberg relative`}>
        {" "}
        <span className="relative">
          Petrus{" "}
          <img
            src="/handwritten/AKA PETU.svg"
            alt="Nickname Petu in handwritten style"
            width={300}
            height={300}
            className="invert absolute bottom-full left-24 w-48 md:w-64 fade-in-delay"
          ></img>
        </span>{" "}
        Eskelinen
      </h1>
      <h2 className="w-full text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Robust <span className="font-mono font-bold">{`<code>`}</span>. <br className="md:hidden" /> Beautiful{" "}
        <span className=" bg-linear-to-r from-highlight to-blue-300 bg-clip-text text-transparent animate-gradient">
          design.
        </span>{" "}
      </h2>
      <p className="w-full text-lg  text-zinc-600 dark:text-zinc-400">
        As a seasoned <strong>full stack developer</strong>, <br /> I build{" "}
        <strong className="bg-linear-to-r to-highlight from-blue-300 bg-clip-text text-transparent animate-gradient">
          web & cloud
        </strong>{" "}
        solutions with proficiency and care.
      </p>
      <div className="flex w-full items-center justify-center md:items-start md:justify-start gap-2">
        <a
          href="mailto:petrus.eskelinen@protonmail.com"
          className="inline-block px-6 py-3 hover:scale-115 rounded-full bg-linear-to-r to-highlight from-blue-300 text-background animate-gradient transition-all duration-300 hover:shadow-sm hover:shadow-highlight  font-medium"
        >
          Contact Me
        </a>
        <ProjectsLink />
      </div>
    </div>
  );
}

function ProjectsLink() {
  return (
    <div className="justify-start flex flex-col gap-4 text-base font-medium sm:flex-row items-center">
      <a
        className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full border-1 border-highlight px-5  transition-all duration-200 hover:bg-[#383838] dark:hover:bg-highlight/20 max-w-fit"
        onClick={(e) => offsetScrollTo("projects", e)}
      >
        Check out my projects
        <ArrowDown width={16} height={16} />
      </a>
    </div>
  );
}

function Header() {
  return (
    <div
      className="min-w-[80%] p-4 md:p-16 max-w-full flex items-start md:items-center justify-center flex-col-reverse md:flex-row relative"
      style={{ minHeight: "calc(100dvh - 64px)" }}
    >
      <div className="flex w-full flex-col justify-between gap-8 text-center md:text-left">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-24 items-center">
          <HeaderText />
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}

const PartialBorder: React.FC<{ side: string; flip?: boolean }> = ({ side, flip }) => {
  const height = side === "left" || side === "right" ? "h-[80px]" : "h-[2px]";
  const width = side === "top" || side === "bottom" ? "w-[80px]" : "w-[2px]";
  let secondSide = "";
  if (side === "left") {
    secondSide = flip ? "bottom" : "top";
  } else if (side === "right") {
    secondSide = flip ? "top" : "bottom";
  } else if (side === "top") {
    secondSide = flip ? "right" : "left";
  } else if (side === "bottom") {
    secondSide = flip ? "left" : "right";
  }

  // Set style variable based on selected side
  const style: React.CSSProperties = {};
  const shiftAmount = "16px";
  if (side === "left") style.left = shiftAmount;
  if (side === "right") style.right = shiftAmount;
  if (side === "top") style.top = shiftAmount;
  if (side === "bottom") style.bottom = shiftAmount;
  if (secondSide === "left") style.left = shiftAmount;
  if (secondSide === "right") style.right = shiftAmount;
  if (secondSide === "top") style.top = shiftAmount;
  if (secondSide === "bottom") style.bottom = shiftAmount;

  return <div className={`absolute bg-highlight ${height} ${width} shadow-sm shadow-highlight`} style={style} />;
};

interface ProjectCardProps {
  name: string;
  role: string;
  vidUrl?: string;
  imgUrl?: string;
  imgAlt?: string;
  tech?: string[];
  flipBorder?: boolean;
  disableZoom?: boolean;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  role,
  imgUrl,
  imgAlt,
  tech,
  flipBorder,
  disableZoom,
  description,
  vidUrl,
}) => {
  return (
    <div className="flex flex-col rounded-sm p-8 gap-4 w-full md:w-8/9 relative shadow-sm shadow-highlight backdrop-blur-xs">
      <div className="flex justify-between min-h-[60px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl align-top leading-[1]"> {name} </h3>
          <p>{role}</p>
        </div>

        <div className="max-w-1/3 font-mono lowercase text-sm flex flex-wrap flex-row-reverse items-start gap-y-1 gap-4 -mt-2">
          {tech &&
            tech.map((t) => (
              <span key={t} className="flex items-center gap-1">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block rotate-90 opacity-60"
                >
                  <polygon points="5,0 10,10 0,10" />
                </svg>
                {t}
              </span>
            ))}
        </div>
      </div>
      {description && <p>{description}</p>}
      {imgUrl && imgAlt && (
        <Zoom classDialog="custom-zoom" isDisabled={disableZoom}>
          <img
            className="min-w-full"
            width={1000}
            height={1000}
            src={imgUrl}
            alt={imgAlt}
            style={{ objectFit: "contain" }}
          />
        </Zoom>
      )}
      {vidUrl && (
        <video className=" rounded-md min-w-full" autoPlay muted loop>
          <source src={vidUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <PartialBorder side="bottom" flip={flipBorder} />
      <PartialBorder side="right" flip />
      <PartialBorder side="top" />
      <PartialBorder side="left" />
    </div>
  );
};

interface SectionHeadingProps {
  name: string;
  id: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ name, id }) => {
  return (
    <div className=" flex gap-8 items-center">
      <h2 className="text-3xl mb-4 whitespace-nowrap" id={id}>
        {name}
      </h2>
      <span className="w-full h-[1px] mb-2 bg-highlight"></span>
    </div>
  );
};

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative flex flex-col w-full px-4 sm:px-16 max-w-[95%] md:max-w-6xl gap-4 md:gap-4 my-8 md:my-12">
      {children}
    </div>
  );
};

export default function Page() {
  const projectCardComponents = [
    <ProjectCard
      key={"eb"}
      name={"Easybook"}
      role={"Full Stack Developer, UX Designer"}
      tech={["React", "Node.js", "Tailwind", "Vercel", "Firestore", "Cypress", "Figma"]}
      imgUrl={"/projectImages/EasybookShowcase.png"}
      imgAlt={"Easybook UX designs"}
    />,
    <ProjectCard
      key={"qaia"}
      name={"Qaia fleet management solution"}
      role={"UX/UI Designer"}
      imgUrl={"/projectImages/Dashboardcollage.png"}
      imgAlt={"Qaia dashboard UX designs"}
      tech={["figma"]}
    />,
    <ProjectCard
      key={"rt"}
      name={"Rajaton Taide"}
      role={"Web design, marketing, event production"}
      imgUrl={"/projectImages/Rajatontaidecollage.png"}
      imgAlt={"Rajaton taide web pages"}
      tech={["js", "html", "css"]}
    />,
    <ProjectCard
      key={"sr"}
      name={"SpaceRider"}
      role={"Game Developer"}
      vidUrl={"/projectImages/SpaceRider.mkv"}
      tech={["unity", "c#"]}
    />,
    <ProjectCard
      key={"thesis"}
      name={"Master's thesis - Learnability evaluation of VR apps"}
      role={"Researcher"}
      imgUrl={"/projectImages/ThesisFrontpage.png"}
      imgAlt={"Thesis paper front page: Learnability evaluation of VR applications, Petrus Eskelinen"}
      disableZoom
    />,
  ];
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <Header />
        <Section>
          <SectionHeading id="projects" name="Featured projects" />
          <div className="flex flex-col gap-8 md:gap-16">
            {projectCardComponents.map((pc, index) => (
              <div key={pc.key} className={`flex w-full ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {pc}
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <SectionHeading id="experience" name="Experience" />

          <VerticalJobTabs />
        </Section>
        <Section>
          <SectionHeading id="references" name="References" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ReferenceCard
              referrerName="Elias Anttalainen"
              referrerRole="Marketing Director"
              companyName="Easybook"
              logo="/companyLogos/EasybookFullLogo.png"
              logoClassName="mt-1"
            >
              <p>
                <Quote />
                Petrus has been truly reliable and cooperative, and he has handled his work excellently. He has been a
                strong part of the team. In addition to being a talented UI designer who also understands the backend
                side, he has an excellent ability to lead the team. Petrus was responsible for the entire software
                design and at the same time succeeded in bringing new practices and clear rules to the company, which
                have streamlined our software development process. A self-directed, determined, and reliable performer.
                <Quote />
              </p>
            </ReferenceCard>
            <ReferenceCard
              referrerName="Henri Auer"
              referrerRole="Lead Developer"
              companyName="Hitachi High-Tech Analytical Science Finland"
              logo="/companyLogos/logo-hitachi.svg"
              logoClassName=" invert !h-5 mt-1"
            >
              <p>
                <Quote />
                Petrus has taken care of his tasks very skillfully in timely manner and had right competences for the
                job. He designed and implemented graphical user interfaces and coordinated work with other developers.
                He worked independently, devotedly and has proven excellent co-operation skills within multi-team
                projects. We can warmly recommend him for similar, demanding tasks.
                <Quote />
              </p>
            </ReferenceCard>
            <ReferenceCard
              referrerName="Johannes Takamäki"
              referrerRole="Full Stack Developer"
              companyName="Easybook"
              logo="/companyLogos/EasybookFullLogo.png"
              logoClassName="mt-1"
            >
              <p>
                <Quote />
                Petrus Eskelinen brings with him professional critical thinking, with which he is able to analyze and
                organize every situation effectively. A creator with a great visual eye, who is able to create realistic
                but truly impressive designs AND turn his plans into code. Petrus has been a really big addition to the
                team. He is open to constructive discussion, criticism, and development suggestions. He does not shy
                away from responsibility.
                <Quote />
              </p>
            </ReferenceCard>
          </div>
        </Section>
      </div>

      {/* Social Links */}
      <div className="hidden md:fixed bottom-4 left-4 md:flex flex-col justify-center items-center gap-4 z-20">
        <a href="mailto:petrus.eskelinen@protonmail.com" className="relative group font-mono" title="Email">
          <div
            className="flex gap-2  text-gray-600 dark:text-white group-hover:text-highlight transition-colors duration-300"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "14px",
              letterSpacing: "2px",
            }}
          >
            <MailSolid className="rotate-180" />
            petrus.eskelinen@protonmail.com
          </div>
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-highlight transform scale-y-0 transition-transform duration-300 group-hover:scale-y-100 group-hover:origin-bottom origin-top"></div>
        </a>

        <a
          href="https://github.com/ShamanUX"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          title="GitHub"
        >
          <img
            className="invert dark:invert-0 h-6 w-6 group-hover:scale-110 transition-transform duration-300"
            src="/github.svg"
            alt="GitHub"
          />
          <span className="transition-all duration-300 absolute -inset-1 border-highlight group-hover:border-2 rounded-sm p-2 group-hover:bg-highlight opacity-0 group-hover:opacity-40"></span>
        </a>

        <a
          href="https://linkedin.com/in/petrus-eskelinen"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          title="LinkedIn"
        >
          <img
            className="invert-0 dark:invert scale-140 h-6 w-6 group-hover:scale-110 transition-transform duration-300"
            src="/linkedin.svg"
            alt="LinkedIn"
          />
          <span className="transition-all duration-300 absolute -inset-1 border-highlight group-hover:border-2 rounded-sm p-2 group-hover:bg-highlight opacity-0 group-hover:opacity-40"></span>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Petrus Eskelinen
      </div>
    </>
  );
}
