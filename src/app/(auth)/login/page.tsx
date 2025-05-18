import { LoginForm } from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - InvoiceGen",
  description: "Log in to your InvoiceGen account to manage your invoices and streamline your billing process.",
  openGraph: {
    title: "Login - InvoiceGen",
    description: "Log in to your InvoiceGen account to manage your invoices and streamline your billing process.",
    type: "website",
    url: "/login",
  },
};

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  );
}
