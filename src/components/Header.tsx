"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  CircuitBoard,
  CreditCard,
  ListMinus,
  MessageCircleMore,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Header() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="bg-[#0A0A0B] w-full sm:h-11 ">
        <div className="max-w-5xl mx-auto h-full flex items-center">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full px-5 gap-1 py-3 sm:py-0 sm:gap-0 sm:px-15">
            <div className="text-white text-sm">
              Early access for PointPulse SaaS
            </div>
            <div className="text-white text-sm">
              Join the waitlist for early access →
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 sm:h-26">
        <div className="max-w-5xl mx-auto h-full flex items-center">
          <div className="flex items-center justify-between w-full px-5 sm:px-15">
            <Image src="/logo.png" alt="logo" width={152} height={28} />
            <nav className="hidden sm:block">
              <ul className="flex items-center gap-8">
                <li>
                  <div className="flex items-center gap-2 text-[#0A0A0B] font-medium">
                    <CircuitBoard size={24} />
                    Feature
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-[#7B8994] font-medium">
                    <MessageCircleMore size={24} />
                    Testimonial
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-[#7B8994] font-medium">
                    <CreditCard size={24} />
                    Pricing
                  </div>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <div>
                {status === "loading" ? (
                  <div className="ml-auto flex items-center space-x-4">
                    <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
                  </div>
                ) : status === "authenticated" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <Avatar className="h-10 w-10 rounded-full">
                          {session?.user.image && (
                            <AvatarImage
                              className="h-10 w-10"
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
                      <DropdownMenuItem
                        onClick={() => signOut({ callbackUrl: "/" })}
                      >
                        Log Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div className="ml-auto flex items-center space-x-4">
                    <Button className="bg-[#0A0A0B] rounded-3xl">
                      <Link href="/login">Login</Link>
                    </Button>
                  </div>
                )}
              </div>
              <Sheet>
                <SheetTrigger className="sm:hidden" asChild>
                  <ListMinus className="w-7 h-7" strokeWidth={3} />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      <Image
                        src="/logo.png"
                        alt="logo"
                        width={152}
                        height={28}
                      />
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="p-5">
                    <ul className="flex flex-col gap-4">
                      <li>
                        <div className="flex items-center gap-2 text-[#0A0A0B] font-medium">
                          <CircuitBoard size={24} />
                          Feature
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2 text-[#7B8994] font-medium">
                          <MessageCircleMore size={24} />
                          Testimonial
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2 text-[#7B8994] font-medium">
                          <CreditCard size={24} />
                          Pricing
                        </div>
                      </li>
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
