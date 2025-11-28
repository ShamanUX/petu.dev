interface NavLinkProps {
  name: string;
  id: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, id }) => {
  return (
    <a href={`#${id}`} className="relative inline-block group">
      <span className="group-hover:text-highlight">{name} </span>
      <div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-highlight 
              transform scale-x-0 transition-transform duration-300 
              group-hover:scale-x-100 
              group-hover:origin-left
              origin-right"
      ></div>
    </a>
  );
};

export default function NavBar({ height }: { height: number }) {
  return (
    <div className="w-full sticky top-0 z-10 fixed-text-size">
      <div className="absolute inset-0 bg-[#12334540] backdrop-blur-sm " />
      <div className="flex justify-end w-full px-16">
        <div className={`flex gap-4 justify-center items-center`} style={{ height: height }}>
          <NavLink name="Projects" id="projects" />
          <NavLink name="Experience" id="experience" />
          <NavLink name="References" id="references" />

          <a className="relative" href="https://github.com/ShamanUX" target="_blank">
            <img
              className="invert dark:invert-0 h-6 w-6"
              src="/github.svg"
              alt="Github logo"
              width={100}
              height={100}
            />
            <span className=" transition-all duration-300 absolute -inset-1 border-highlight hover:border-2 rounded-sm  p-2 hover:bg-highlight opacity-0 hover:opacity-40"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
