import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const FeatureCard = ({ image, alt, title, description }: FeatureCardProps) => {
  return (
    <div className="max-w-xs">
      <div className="flex flex-col items-center gap-7 p-3.5">
        <Image
          src={image}
          alt={alt}
          width={208}
          height={200}
          className="mx-auto"
        />
        <div className="flex gap-1.5 flex-col items-center">
          <h3 className="text-xl text-[#0A0A0B] font-semibold">{title}</h3>
          <p className="text-[#5A656F] text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
