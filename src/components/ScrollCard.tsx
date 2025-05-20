// Card.tsx
import { LucideIcon } from "lucide-react";
import React from "react";

interface CardProps {
  icon: LucideIcon; // Component type for Lucide icons
  title: string;
  subtitle: string;
  description: string;
}

const ScrollCard: React.FC<CardProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="h-[223px] min-w-[342px] rounded-xl shadow-card border border-[#E1E4E7]">
      <div className="flex flex-col gap-2.5 p-7.5">
        <div className="text-[#7B8994] text-sm font-semibold uppercase">{subtitle}</div>
        <h3 className="text-[#2B3035] text-2xl font-bold flex items-center gap-2">
          {title} <Icon className="w-6 h-6" />
        </h3>
        <p className="text-[#7B8994]">{description}</p>
      </div>
    </div>
  );
};

export default ScrollCard;
