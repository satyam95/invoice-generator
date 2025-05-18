"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileInput as FileInvoice } from "lucide-react";

export function Header() {
  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <FileInvoice className="h-6 w-6" />
            <span className="font-bold">InvoiceGen</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
