import InvoicesTable from "@/components/InvoicesTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard - InvoiceGen",
  description: "View and manage your invoices with InvoiceGen.",
  openGraph: {
    title: "Dashboard - InvoiceGen",
    description: "View and manage your invoices with InvoiceGen.",
    type: "website",
    url: "/dashboard",
  },
};

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-2xl">Invoices</h2>
      <InvoicesTable />
    </div>
  );
};

export default Dashboard;
