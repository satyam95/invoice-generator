import { auth } from "@/app/api/auth/[...nextauth]/route";
import { LoginForm } from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login - InvoiceGen",
  description:
    "Log in to your InvoiceGen account to manage your invoices and streamline your billing process.",
  openGraph: {
    title: "Login - InvoiceGen",
    description:
      "Log in to your InvoiceGen account to manage your invoices and streamline your billing process.",
    type: "website",
    url: "/login",
  },
};

export default async function LoginPage() {
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
        <LoginForm />
      </div>
    </div>
  );
}
