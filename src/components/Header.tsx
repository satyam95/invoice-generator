"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileInput as FileInvoice } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  const { data: session, status } = useSession();
  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <FileInvoice className="h-6 w-6" />
            <span className="font-bold">InvoiceGen</span>
          </Link>
        </div>
        {status === "loading" ? (
          <div className="ml-auto flex items-center space-x-4">
            <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
          </div>
        ) : status === "authenticated" ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-1 cursor-pointer">
                <Avatar className="h-8 w-8 rounded-full">
                  {session?.user.image && (
                    <AvatarImage
                      src={session?.user.image}
                      alt={session?.user.name || "User"}
                    />
                  )}
                  <AvatarFallback className="h-8 w-8 rounded-full text-sm">
                    NA
                  </AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem>
                <Link href="/dashboard">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
