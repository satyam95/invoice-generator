import { AppSidebar } from "@/components/AppSidebar";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex w-full h-16 shrink-0 items-center gap-2">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <div className="flex items-center h-4 gap-2 ">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="h-4 block" />
              <BreadcrumbNav />
            </div>
            <Link href="/invoice/new" className="cursor-pointer">
              <Button size="sm">
                <Plus size={20} strokeWidth={3} /> Create Invoice
              </Button>
            </Link>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
