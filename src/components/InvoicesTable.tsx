// app/components/InvoicesTable.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoreVerticalIcon } from "lucide-react";
import { getUserInvoices } from "@/actions/getUserInvoices";
import { InvoiceData } from "@/context/types";
import { useRouter } from "next/navigation";
import { deleteInvoice } from "@/actions/deleteInvoice";
import Link from "next/link";

// Define the type for invoices based on getUserInvoices
type Invoice = {
  id: string;
  name: string;
  data: Omit<InvoiceData, "name">; // InvoiceData without 'name'
  createdAt: Date;
  updatedAt: Date;
};

// Define InvoiceDataWithoutName for clarity (adjust based on your actual InvoiceData type)
type InvoiceDataWithoutName = {
  general: {
    issueDate: Date | null;
    serviceDate: Date | null;
    status?: string; // Optional, may not exist
  };
  buyer: {
    name: string | null;
  };
  total: number | null;
};

const InvoicesTable = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchInvoices() {
      try {
        setLoading(true);
        const data = await getUserInvoices();
        setInvoices(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unexpected error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    fetchInvoices();
  }, []);

  const handleDelete = async (invoiceId: string) => {
    try {
      setLoading(true);
      setDeletingId(invoiceId);
      await deleteInvoice(invoiceId);
      const data = await getUserInvoices();
      setInvoices(data);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to delete invoice";
      setError(errorMessage);
    } finally {
      setDeletingId(null);
      setLoading(false);
    }
  };

  if (error) return <div>Error: {error}</div>;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="flex justify-center items-center">
          <div
            className="w-8 h-8 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"
            role="status"
            aria-label="Loading"
          ></div>
        </div>
      </div>
    );
  }

  if (invoices.length === 0) {
    return (
      <div className="text-center py-4">
        No Invoice found. Please create new invoice.
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="py-3 px-2 w-[5%]">S.No</TableHead>
            <TableHead className="py-3 px-2 w-[15%]">Invoice</TableHead>
            <TableHead className="py-3 px-2 w-[12.5%]">Issue Date</TableHead>
            <TableHead className="py-3 px-2 w-[12.5%]">Due Date</TableHead>
            <TableHead className="py-3 px-2 w-[10%]">Status</TableHead>
            <TableHead className="py-3 px-2 w-[30%]">Client</TableHead>
            <TableHead className="py-3 px-2 w-[10%]">Amount</TableHead>
            <TableHead className="py-3 px-2 w-[5%] text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice.id}>
              <TableCell className="py-3 px-2 w-[5%] text-center">
                {index + 1}
              </TableCell>
              <TableCell className="py-3 px-2 w-[15%]">
                <div className="flex flex-col gap-0.5">
                  <div className="leading-none">{invoice.name}</div>
                  <div className="text-xs text-gray-500">
                    {invoice.data.general.invoiceNumber}
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-3 px-2 w-[12.5%]">
                {invoice.data.general?.issueDate
                  ? new Date(
                      invoice.data.general.issueDate
                    ).toLocaleDateString()
                  : "-"}
              </TableCell>
              <TableCell className="py-3 px-2 w-[12.5%]">
                {invoice.data.general?.serviceDate
                  ? new Date(
                      invoice.data.general.serviceDate
                    ).toLocaleDateString()
                  : "-"}
              </TableCell>
              <TableCell className="py-3 px-2 w-[10%]">Pending</TableCell>
              <TableCell className="py-3 px-2 w-[30%]">
                <div className="flex flex-col gap-0.5">
                  <div className="leading-none">{invoice.data.buyer?.name}</div>
                  <div className="text-xs text-gray-500">
                    {invoice.data.buyer?.email}
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-3 px-2 w-[10%]">
                {invoice.data.total}
              </TableCell>
              <TableCell className="py-3 px-2 w-[5%]">
                <div className="w-full flex justify-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
                        size="icon"
                      >
                        <MoreVerticalIcon />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-32">
                      <DropdownMenuItem>
                        <Link href={`/invoice/${invoice.id}`}>Edit</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(invoice.id)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoicesTable;
