import NavBar from "../navBar";

import BubbleBackground from "../BubbleBackground";
import Page from "../page";

export function Welcome() {
  const webPageTopPadding = "8rem";
  const navBarHeight = 64;
  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center font-sans pt-[${webPageTopPadding}] bg-white dark:bg-[#0a192f] sm:items-start relative`}
    >
      <div className="relative z-10 w-full">
        <NavBar height={navBarHeight} />
        <Page />
      </div>
      <BubbleBackground />
    </main>
  );
}
