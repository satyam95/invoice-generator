import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Perfect for freelancers and small businesses",
    price: "$12",
    duration: "/month",
    features: [
      "Up to 20 invoices per month",
      "5 clients",
      "Basic templates",
      "Email support",
      "Export as PDF",
      "Payment tracking",
    ],
    limitations: [
      "No recurring invoices",
      "No custom branding",
      "No multi-currency",
    ],
    popularPlan: false,
    ctaText: "Start Free Trial",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$29",
    duration: "/month",
    features: [
      "Unlimited invoices",
      "Unlimited clients",
      "All templates",
      "Priority email support",
      "Export as PDF & CSV",
      "Payment tracking",
      "Recurring invoices",
      "Custom branding",
      "Multi-currency",
    ],
    limitations: ["Limited integrations"],
    popularPlan: true,
    ctaText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For large teams and organizations",
    price: "$49",
    duration: "/month",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom API access",
      "Advanced reporting",
      "Team permissions",
      "All integrations",
      "Custom invoice workflows",
      "White labeling",
      "Priority support",
    ],
    limitations: [],
    popularPlan: false,
    ctaText: "Contact Sales",
  },
];

export default function Home() {
  return (
    <>
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
                  Create professional invoices in seconds. Streamline your
                  billing process and get paid faster.
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
      <section className="py-20" id="pricing">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              Choose the plan that works best for your business
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div key={index}>
                <Card
                  className={cn(
                    "h-full flex flex-col relative",
                    plan.popularPlan &&
                      "border-primary shadow-lg shadow-primary/20"
                  )}
                >
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="ml-1 text-muted-foreground">
                        {plan.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 grid gap-4">
                    <div className="grid gap-2">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div
                          key={limitationIndex}
                          className="flex items-center gap-2"
                        >
                          <X className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {limitation}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className={cn(
                        "mt-4 w-full",
                        plan.popularPlan
                          ? "bg-primary text-primary-foreground"
                          : ""
                      )}
                    >
                      {plan.ctaText}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
