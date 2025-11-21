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

interface ProjectCardProps {
  name: string;
  role: string;
  imgUrl: string;
  imgAlt: string;
  tech?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, role, imgUrl, imgAlt, tech }) => {
  return (
    <div className="flex flex-col min-w-full p-4 rounded-xl">
      <h3 className="text-2xl"> {name} </h3>
      <div className="bg-amber-400 w-fit p-2">
        <p>{role}</p>
        <p> {tech && tech?.join(", ")}</p>
      </div>
      <Image className="min-w-full" width={1000} height={1000} src={imgUrl} alt={imgAlt}></Image>
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
          <div className="flex flex-col gap-4">
            <ProjectCard
              name={"Easybook"}
              role={"Full Stack Developer, UX Designer"}
              tech={["React", "Node.js", "Tailwind", "Vercel", "Firestore db", "Cypress", "Figma"]}
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
            tech={["React", "Node.js", "Tailwind", "Vercel", "Firestore db", "Cypress", "Figma"]}
            description="Working for a SaaS startup, developed a robust embeddable calendar/chatbot system with React, Node.js and Typescript, utilizing Vercel and Cloud Firestore. I was responsible for designing the visual look of the app and new features. Implemented automated tests with Cypress. Took charge of developing the startup's devops and improved the way of working, both in terms of coding best practices and communication."
          />
          <h2 className="text-3xl" id="references"></h2>
        </div>
      </div>
    </>
  );
}
