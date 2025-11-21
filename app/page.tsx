import Image from "next/image";
import React from "react";

function ProfileImage() {
  return (
    <div className="rounded-full hidden md:block overflow-hidden max-h-54 max-w-54 lg:max-h-72 lg:max-w-72 min-h-54 min-w-54 lg:min-h-72 lg:min-w-72 shadow-xl shadow-highlight/20">
      <Image src="/PetrusEskelinen.jpg" alt="Picture of Petrus Eskelinen" width={500} height={500} quality={100} />
    </div>
  );
}

function HeaderText() {
  return (
    <div className="flex-col flex gap-8">
      <h1 className={`text-7xl font-iceberg relative`}>
        {" "}
        <span className="relative">
          Petrus{" "}
          <Image
            src="/handwritten/AKA PETU.svg"
            alt="Nickname Petu in handwritten style"
            width={300}
            height={300}
            className="invert absolute bottom-full md:left-24 left-0 w-48 md:w-64"
          ></Image>
        </span>{" "}
        Eskelinen
      </h1>
      <h2 className="w-full text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Robust <span className="font-mono font-bold">{`<code>`}</span>. Beautiful{" "}
        <span className=" bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          design.
        </span>{" "}
      </h2>
      <p className="w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        As a seasoned <strong>full stack developer</strong>, <br /> I build web & cloud solutions with proficiency and
        care.
      </p>
    </div>
  );
}

function ProjectsLink() {
  return (
    <div className="w-full justify-start flex flex-col gap-4 text-base font-medium sm:flex-row items-center">
      <a
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] max-w-fit"
        href="#projects"
      >
        <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={16} height={16} />
        Check out my projects
      </a>
    </div>
  );
}

function Header() {
  return (
    <div
      className="min-w-[80%] max-w-full flex items-start md:items-center justify-center flex-col-reverse md:flex-row relative"
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
  imgUrl: string;
  imgAlt: string;
  tech?: string[];
  flipBorder?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, role, imgUrl, imgAlt, tech, flipBorder }) => {
  return (
    <div className="flex flex-col rounded-sm min-w-full p-8 relative shadow-sm shadow-highlight">
      <div className="flex justify-between min-h-[60px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl align-top leading-[1]"> {name} </h3>
          <p>{role}</p>
        </div>

        <div className="max-w-1/3 font-mono lowercase text-sm flex flex-wrap flex-row-reverse items-center gap-y-1 gap-4 -mt-2">
          {tech &&
            tech.map((t, i) => (
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
      <Image className="min-w-full" width={1000} height={1000} src={imgUrl} alt={imgAlt}></Image>
      <PartialBorder side="right" flip />
      <PartialBorder side="top" />
      <PartialBorder side="left" />
    </div>
  );
};

interface ExperienceCardProps {
  companyName: string;
  roles: string[];
  tech: string[];
  description: string;
  timeRange: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ companyName, roles, tech, description, timeRange }) => {
  return (
    <div className="flex flex-col">
      <p>{companyName}</p>
      <p>{timeRange}</p>
      <p>{roles.join(", ")}</p>
      <p>{tech.join(", ")}</p>
      <p>{description}</p>
    </div>
  );
};

interface SectionHeadingProps {
  name: string;
  id: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ name, id }) => {
  return (
    <div className="flex gap-8 items-center">
      <h2 className="text-3xl mb-4 whitespace-nowrap" id={id}>
        {name}
      </h2>
      <span className="w-full h-[1px] mb-2 bg-highlight"></span>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <Header />
        <div className="flex flex-col w-full px-4 sm:px-16 max-w-4xl">
          <SectionHeading id="projects" name="Featured projects" />
          <div className="flex flex-col gap-16">
            <ProjectCard
              name={"Easybook"}
              role={"Full Stack Developer, UX Designer"}
              tech={["React", "Node.js", "Tailwind", "Vercel", "Firestore", "Cypress", "Figma"]}
              imgUrl={"/projectImages/EasybookShowcase.png"}
              imgAlt={"Easybook UX designs"}
            />
            <ProjectCard
              name={"Qaia fleet management solution"}
              role={"UX/UI Designer"}
              imgUrl={"/projectImages/Dashboardcollage.png"}
              imgAlt={"Qaia dashboard UX designs"}
            />
            <ProjectCard
              name={"Rajaton Taide"}
              role={"Web design, marketing, event production"}
              imgUrl={"/projectImages/Rajatontaidecollage.png"}
              imgAlt={"Rajaton taide web pages"}
            />
            <ProjectCard
              name={"Master's thesis - Learnability evaluation of VR apps"}
              role={"Researcher"}
              imgUrl={"/projectImages/ThesisFrontpage.png"}
              imgAlt={"Thesis paper front page: Learnability evaluation of VR applications, Petrus Eskelinen"}
            />
          </div>
          <h2 className="text-3xl" id="experience">
            Experience
          </h2>
          <ExperienceCard
            companyName="Easybook"
            timeRange="Nov 2024 - Present"
            roles={["Full Stack Developer", "UX Designer"]}
            tech={["React", "Node.js", "Tailwind", "Vercel", "Firestore", "Cypress", "Figma"]}
            description="Working for a SaaS startup, developed a robust embeddable calendar/chatbot system with React, Node.js and Typescript, utilizing Vercel and Cloud Firestore. I was responsible for designing the visual look of the app and new features. Implemented automated tests with Cypress. Took charge of developing the startup's devops and improved the way of working, both in terms of coding best practices and communication."
          />
          <h2 className="text-3xl" id="references"></h2>
        </div>
      </div>
    </>
  );
}
