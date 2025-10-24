import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full  sticky top-0">
      <div className="flex justify-between w-full px-16">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
        <div className="flex gap-2">
          <a href="">Projects</a>
          <a href="">Experience</a>
          <a href="">References</a>
        </div>
      </div>
    </div>
  );
}
