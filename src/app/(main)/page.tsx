import FeatureCard from "@/components/FeatureCard";
import HorizontalScroll from "@/components/HorizontalScroll";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { MoveRight, ServerCrash } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "InvoiceGen - Create and Manage Invoices Easily",
  description:
    "Generate, track, and manage professional invoices effortlessly with InvoiceGen. Simplify your billing process today.",
  openGraph: {
    title: "InvoiceGen - Create and Manage Invoices Easily",
    description:
      "Generate, track, and manage professional invoices effortlessly with InvoiceGen. Simplify your billing process today.",
    type: "website",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <section className="py-13">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col gap-10 items-center w-full">
            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <h2 className="text-[#0A0A0B] text-4xl sm:text-5xl font-bold sm:leading-15 text-center">
                Unlock the Power of Your Data with Point Pulse
              </h2>
              <p className="text-[#5A656F] text-xl text-center px-4">
                <span className="text-[#0A0A0B]">Monitor</span>,{" "}
                <span className="text-[#0A0A0B]">analyze</span>, and{" "}
                <span className="text-[#0A0A0B]">optimize</span> every aspect of
                your operations with AI-driven analytics with actionable
                insights and predictions.
              </p>
            </div>
            <Button className="bg-[#0A0A0B] px-5 py-4 font-semibold text-base h-14 rounded-3xl">
              <div className="flex items-center gap-3">
                Get Started Now <MoveRight className="w-6 h-6" />
              </div>
            </Button>
          </div>
        </div>
      </section>
      <HorizontalScroll />
      <section className="border-b border-[#E1E4E7]">
        <div className="max-w-5xl mx-auto">
          <div className="py-20">
            <div className="px-5 sm:px-16">
              <div className="flex flex-col gap-16">
                <SectionTitle
                  icon={ServerCrash}
                  title="Proactive Real-Time Monitoring"
                  subtitle="Always Stay Ahead"
                  description="Gain critical insights by monitoring your business activities in real-time, ensuring you’re always one step ahead."
                />
                <div className="relative w-full sm:h-[518px] max-w-[896px] mx-auto">
                  <Image
                    src="/feature.png"
                    alt="feature"
                    width={896}
                    height={518}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4 max-w-xl">
                  <div className="flex items-center gap-3 text-[#0A0A0B] font-semibold text-xl">
                    <ServerCrash className="w-6 h-6" />
                    Seamless Asana Integration
                  </div>
                  <p className="text-[#5A656F] text-xl">
                    Receive insights and alerts without leaving your favorite
                    communication platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-[#E1E4E7]">
        <div className="py-20">
          <div className="flex flex-col gap-16">
            <div className="max-w-5xl mx-auto">
              <div className="px-5 sm:px-16">
                <SectionTitle
                  icon={ServerCrash}
                  title="Streamline Your Workflows with Automation"
                  subtitle="Instant Updates"
                  description="Automate repetitive tasks and optimize your workflows to enhance productivity and efficiency."
                />
              </div>
            </div>
            <div className="container mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-0 sm:justify-between">
                <FeatureCard
                  image="/feature2.png"
                  alt="feature 2"
                  title="Real-time Alerts"
                  description="Stay updated with real-time alerts on your main KPIs"
                />
                <FeatureCard
                  image="/feature3.png"
                  alt="feature 3"
                  title="Seamless Asana Integration"
                  description="No more guessing games; receive transparent insights in English"
                />
                <FeatureCard
                  image="/feature4.png"
                  alt="feature 4"
                  title="Tailored Connections"
                  description="Receive insights and alerts without leaving your favorite communication platform"
                />
                <FeatureCard
                  image="/feature5.png"
                  alt="feature 5"
                  title="Dynamic Data Sync"
                  description="24/7 coverage of your data, enabling you to catch spikes in trends immediately"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="px-5 sm:px-16">
            <div className="flex flex-col gap-10 sm:gap-16">
              <Image
                src="/iconcontainer.png"
                alt="icon"
                width={64}
                height={64}
              />
              <div className="flex flex-col gap-4 max-w-2xl">
                <h3 className="text-[#0A0A0B] text-4xl sm:text-5xl font-bold">
                  A Must-Have Tool for Team
                </h3>
                <p className="text-[#5A656F] text-xl">
                  Discover a versatile tool designed to meet the diverse needs
                  of any team, improving collaboration and productivity
                </p>
              </div>
              <Button className="bg-[#0A0A0B] px-5 py-4 font-semibold text-base h-14 rounded-3xl max-w-fit">
                <div className="flex items-center gap-3">
                  Get Started Now <MoveRight className="w-6 h-6" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
