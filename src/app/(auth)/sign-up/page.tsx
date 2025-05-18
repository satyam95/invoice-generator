import { SignUpForm } from "@/components/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - InvoiceGen",
  description: "Create a free InvoiceGen account to start generating and managing professional invoices today.",
  openGraph: {
    title: "Sign Up - InvoiceGen",
    description: "Create a free InvoiceGen account to start generating and managing professional invoices today.",
    type: "website",
    url: "/signup",
  },
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SignUpForm />
      </div>
    </div>
  );
}
