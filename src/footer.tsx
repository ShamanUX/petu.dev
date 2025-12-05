import { MailSolid } from "iconoir-react";

export default function Footer() {
  return (
    <div className="min-h-20 bg-amber-700 w-full flex items-center justify-center gap-4">
      {" "}
      <a href="https://www.linkedin.com/in/petrus-eskelinen/" className="flex gap-2 justify-center items-center ">
        <img
          className="invert -mr-1"
          color="#fff"
          src={"/linkedin.svg"}
          width={32}
          height={32}
          alt="linkedIn logo"
        ></img>
      </a>
      <a href="mailto:petrus.eskelinen@protonmail.com" className="flex gap-2">
        <MailSolid></MailSolid> petrus.eskelinen@protonmail.com
      </a>
    </div>
  );
}
