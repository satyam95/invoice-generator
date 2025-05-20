"use client";
import React from "react";
import { SidebarMenu, SidebarMenuItem } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

const NavUser = () => {
  const { data: session } = useSession();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="px-1 py-1.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              {session?.user.image && (
                <AvatarImage
                  src={session?.user.image}
                  alt={session?.user.name || "User"}
                />
              )}
              <AvatarFallback className="rounded-lg">NA</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {session?.user.name || "Hello User"}
              </span>
              <span className="truncate text-xs">{session?.user.email}</span>
            </div>
          </div>
          <Button
            variant="link"
            className="px-0.5 py-1.5 cursor-pointer"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavUser;
