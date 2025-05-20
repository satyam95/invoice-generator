import React from "react";

interface SectionTitleProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  description: string;
}

const SectionTitle = ({
  icon: Icon,
  title,
  subtitle,
  description,
}: SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3 text-[#0A0A0B] font-semibold text-xl">
        {Icon && <Icon className="w-6 h-6" />}
        {subtitle}
      </div>
      <div className="flex flex-col gap-4 max-w-2xl">
        <h3 className="text-[#0A0A0B] text-5xl font-bold">{title}</h3>
        <p className="text-[#5A656F] text-xl">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
