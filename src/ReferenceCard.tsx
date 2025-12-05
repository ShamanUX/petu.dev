import React from "react";

interface ReferenceCardProps {
  referrerName: string;
  referrerRole: string;
  companyName: string;
  logo?: string;
  logoClassName?: string;
  children: React.ReactNode;
}

export const Quote: React.FC = () => {
  return (
    <div
      className="inline relative
    "
    >
      <div className="opacity-0 inline font-jost text-2xl !leading-[0] mt-2 max-h-0 ">"</div>
      <div className="absolute opacity-65 text-white font-jost text-2xl !leading-[0] mt-2 max-h-0 right-0 top-0.5">
        "
      </div>
    </div>
  );
};

const ReferenceCard: React.FC<ReferenceCardProps> = ({
  logoClassName,
  referrerName,
  referrerRole,
  companyName,
  logo,
  children,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:shadow-highlight/5 rounded-lg p-6 m-4 transition-shadow duration-300 max-w-2xl">
      <div className="flex items-baseline gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-none">{referrerName}</h3>
            {logo && <img src={logo} alt={companyName} className={`${logoClassName || ""} w-auto h-6`} />}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">{referrerRole}</p>
        </div>
        <div className="flex items-center mb-4"></div>
      </div>
      <div className="relative mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
};

export default ReferenceCard;
