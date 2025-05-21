// Carousel.tsx
"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import ScrollCard from "./ScrollCard";
import {
  ChartNetwork,
  CirclePercent,
  Computer,
  Landmark,
  Slack,
} from "lucide-react";

const data = [
  {
    icon: Slack,
    title: "Slack Integration",
    subtitle: "Stay Connected, Stay Informed",
    description:
      "Integrate with Slack for real-time updates and notifications. Keep your team aligned with instant insights and alerts.",
  },
  {
    icon: ChartNetwork,
    title: "Google Analytics",
    subtitle: "Elevate Your Web Insights",
    description:
      "Sync with Google Analytics to enhance web performance analysis with AI insights. Boost user engagement and conversions.",
  },
  {
    icon: Computer,
    title: "HubSpot Integration",
    subtitle: "Supercharge Sales & Marketing",
    description:
      "Integrate with HubSpot to optimize sales and marketing. Track campaigns and sales pipelines with AI-driven insights.",
  },
  {
    icon: CirclePercent,
    title: "Salesforce",
    subtitle: "Comprehensive Customer Insights",
    description:
      "Seamlessly sync with Salesforce for a full view of customer data. Boost sales efficiency and customer satisfaction.",
  },
  {
    icon: Landmark,
    title: "API Integration",
    subtitle: "Seamless Tool Integration",
    description:
      "Connect Point Pulse with any tool using custom APIs. Ensure smooth data flow and leverage AI analytics seamlessly.",
  },
];

const HorizontalScroll = () => {
  const FAST_DURATION: number = 25;
  const SLOW_DURATION: number = 75;

  const [duration, setDuration] = useState<number>(FAST_DURATION);
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState<boolean>(false);
  const [rerender, setRerender] = useState<boolean>(false);

  useEffect(() => {
    let controls: { stop: () => void } | undefined;
    const finalPosition: number = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls?.stop();
  }, [rerender, xTranslation, duration, width, mustFinish]);

  return (
    <div className="py-8 overflow-hidden">
      <motion.div
        className="flex gap-4"
        style={{ x: xTranslation }}
        ref={ref}
        onMouseEnter={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onMouseLeave={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...data, ...data].map((item, idx) => (
          <ScrollCard
            key={idx}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalScroll;
