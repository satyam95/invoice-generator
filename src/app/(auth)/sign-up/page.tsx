import { auth } from "@/app/api/auth/[...nextauth]/route";
import { SignUpForm } from "@/components/SignUpForm";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up - InvoiceGen",
  description:
    "Create a free InvoiceGen account to start generating and managing professional invoices today.",
  openGraph: {
    title: "Sign Up - InvoiceGen",
    description:
      "Create a free InvoiceGen account to start generating and managing professional invoices today.",
    type: "website",
    url: "/signup",
  },
};

export default async function SignUpPage() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="absolute top-4 left-4">
        <Link href="/">
          <Button variant="outline">
            <MoveLeft strokeWidth={3} /> Back
          </Button>
        </Link>
      </div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SignUpForm />
      </div>
    </div>
  );
}
