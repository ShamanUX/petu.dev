import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex w-full justify-between gap-4 sticky top-0">
      <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
      <div className="flex gap-2">
        <a href="">Projects</a>
        <a href="">Experience</a>
        <a href="">References</a>
      </div>
    </div>
  );
}
