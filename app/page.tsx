import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="pt-40 flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
      <h1 className="w-full text- text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Robust <span className="font-mono">{`<code>`}</span>. Beautiful{" "}
        <span className=" bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          design.
        </span>{" "}
      </h1>
      <p className="w-full text-lg text-center leading-8 text-zinc-600 dark:text-zinc-400">
        <span className="font-bold">Petrus Eskelinen</span> builds web & cloud apps with proficiency and care.
      </p>
      <div className=" w-full justify-center flex flex-col gap-4 text-base font-medium sm:flex-row">
        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={16} height={16} />
          Check out my projects
        </a>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  name: string;
  role: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, role }) => {
  return <div>{name}</div>;
};
export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <Header />
        <ProjectCard name={"easybook"} role={"Full Stack Developer, UX Designer"} />
      </div>
    </>
  );
}
