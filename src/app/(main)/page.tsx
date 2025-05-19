import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

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
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                Invoice Generation <br />
                Simplified
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Create professional invoices in seconds. Streamline your billing
                process and get paid faster.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#signup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
