import { MailSolid, Menu, Xmark } from "iconoir-react";
import { useState } from "react";

interface NavLinkProps {
  name: string;
  id: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ name, id, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -64; // NavBar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <button className="relative inline-block group py-2" onClick={handleClick}>
      <span className="group-hover:text-highlight">{name} </span>
      <div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-highlight
              transform scale-x-0 transition-transform duration-300
              group-hover:scale-x-100
              group-hover:origin-left
              origin-right"
      ></div>
    </button>
  );
};

const SocialLinks: React.FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => (
  <div className="flex w-full flex-col justify-start items-start">
    <a
      href="mailto:petrus.eskelinen@protonmail.com"
      className="relative group flex items-center justify-center gap-2 py-2"
      title="Email"
      onClick={onLinkClick}
    >
      <MailSolid />
      <div className="text-gray-600 leading-0 dark:text-gray-400 group-hover:text-highlight transition-colors duration-300 ">
        Contact me!
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-highlight transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left origin-right"></div>
    </a>

    <a
      href="https://github.com/ShamanUX"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group flex items-center gap-2 py-2"
      title="GitHub"
      onClick={onLinkClick}
    >
      <img className="invert dark:invert-0 h-6 w-6" src="/github.svg" alt="GitHub" />
      <span className="text-gray-600 dark:text-gray-400 group-hover:text-highlight transition-colors duration-300">
        GitHub
      </span>
      <span className="transition-all duration-300 absolute -inset-1 border-highlight group-hover:border-2 rounded-sm p-2 group-hover:bg-highlight opacity-0 group-hover:opacity-40"></span>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-highlight transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left origin-right"></div>
    </a>

    <a
      href="https://linkedin.com/in/petrus-eskelinen"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group flex items-center gap-2 py-2"
      title="LinkedIn"
      onClick={onLinkClick}
    >
      <div className="relative h-6 w-6 overflow-visible">
        <img
          className="absolute invert-0 dark:invert scale-125"
          width={48}
          height={48}
          src="/linkedin.svg"
          alt="LinkedIn"
        />
      </div>
      <span className="text-gray-600 dark:text-gray-400 group-hover:text-highlight transition-colors duration-300">
        LinkedIn
      </span>
      <span className="transition-all duration-300 absolute -inset-1 border-highlight group-hover:border-2 rounded-sm p-2 group-hover:bg-highlight opacity-0 group-hover:opacity-40"></span>
      <div className="absolute bottom-0 right-0 w-0.5 h-full bg-highlight transform scale-y-0 transition-transform duration-300 group-hover:scale-y-100 group-hover:origin-top origin-bottom"></div>
    </a>
  </div>
);

export default function NavBar({ height }: { height: number }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop NavBar */}
      <div className="hidden md:block w-full sticky top-0 z-10 fixed-text-size">
        <div className="absolute inset-0 bg-[#12334540] backdrop-blur-sm " />
        <div className="flex justify-end w-full px-16">
          <div className={`flex gap-4 justify-center items-center`} style={{ height: height }}>
            <NavLink name="Projects" id="projects" />
            <NavLink name="Experience" id="experience" />
            <NavLink name="References" id="references" />

            <a className="relative group" href="https://github.com/ShamanUX" target="_blank">
              <img
                className="invert group-hover:scale-120 transition-all duration-200 dark:invert-0 h-6 w-6"
                src="/github.svg"
                alt="Github logo"
                width={100}
                height={100}
              />
              <span className=" transition-all duration-300 absolute -inset-1 border-highlight hover:border-2 rounded-sm  p-2 hover:bg-highlight opacity-0 hover:opacity-40"></span>
            </a>
            <a
              href="https://linkedin.com/in/petrus-eskelinen"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              title="LinkedIn"
            >
              <img
                className="invert-0 dark:invert scale-140 h-6 w-6 group-hover:scale-160 transition-transform duration-300"
                src="/linkedin.svg"
                alt="LinkedIn"
              />
              <span className="transition-all duration-300 absolute -inset-1 border-highlight group-hover:border-2 rounded-sm p-2 group-hover:bg-highlight opacity-0 group-hover:opacity-40"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Burger */}
      <div className="md:hidden w-full sticky top-0 z-10 fixed-text-size">
        <div className="flex justify-end w-full px-4">
          <div className={`flex gap-4 justify-center items-center`} style={{ height: height }}>
            <button onClick={toggleMenu} className="relative group p-2" aria-label="Toggle menu">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <Menu />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button onClick={closeMenu} className="absolute top-4 right-4 p-2" aria-label="Close menu">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <Xmark />
            </div>
          </button>
          <nav className="mt-12 flex flex-col gap-6  ">
            <NavLink name="Projects" id="projects" onClick={closeMenu} />
            <NavLink name="Experience" id="experience" onClick={closeMenu} />
            <NavLink name="References" id="references" onClick={closeMenu} />
            <div className="border-t pt-6">
              <SocialLinks onLinkClick={closeMenu} />
            </div>
            <div className="border-t pt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Petrus Eskelinen
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-10 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>
    </>
  );
}
