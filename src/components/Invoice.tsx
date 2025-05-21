// components/Invoice.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { InvoiceProvider, useInvoice } from "@/context/InvoiceContext";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Save,
  Undo2,
  Edit2,
  Loader2,
  PencilIcon,
  FileTextIcon,
} from "lucide-react";
import InvoicePreview from "@/components/pdf/InvoicePreview";
import { InvoiceData } from "@/context/types";
import { saveInvoice } from "@/actions/saveInvoice";
import Link from "next/link";
import InvoicePDFDownloadLink from "./InvoicePDFDownloadLink ";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import InvoiceForm from "./InvoiceForm";

interface InvoiceProps {
  initialData: InvoiceData;
  isNew: boolean;
  invoiceId?: string;
}

export default function Invoice({
  initialData,
  isNew,
  invoiceId,
}: InvoiceProps) {
  const router = useRouter();

  const InvoiceContent = () => {
    const { state, dispatch } = useInvoice();
    const [isEditingName, setIsEditingName] = useState(false);
    const [editedName, setEditedName] = useState(state.name);
    const [saving, setSaving] = useState(false); // New saving state

    useEffect(() => {
      setEditedName(state.name);
    }, [state.name]);

    const handleSave = async () => {
      setSaving(true);
      try {
        const result = await saveInvoice(state, isNew, invoiceId);
        if (isNew && result.newId) {
          router.push(`/invoice/${result.newId}`);
          toast.success("Invoice created successfully!", {
            description: `Invoice ID: ${result.newId}`,
          });
        } else {
          toast.success("Invoice updated successfully!");
        }
      } catch (error) {
        toast.error("Failed to save invoice", {
          description: `"Error: ${error}`,
        });
      } finally {
        setSaving(false); // Reset saving state
      }
    };

    return (
      <div className="w-full min-h-screen bg-gray-50">
        <div className="bg-white h-12 flex items-center">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                  >
                    <Undo2 className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="text-xl font-bold flex items-center">
                  {isEditingName ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      onBlur={() => {
                        dispatch({ type: "UPDATE_NAME", payload: editedName });
                        setIsEditingName(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch({
                            type: "UPDATE_NAME",
                            payload: editedName,
                          });
                          setIsEditingName(false);
                        } else if (e.key === "Escape") {
                          setEditedName(state.name);
                          setIsEditingName(false);
                        }
                      }}
                      autoFocus
                      className="text-xl font-bold border-b border-gray-300 focus:outline-none"
                    />
                  ) : (
                    <>
                      {state.name}
                      <button
                        onClick={() => setIsEditingName(true)}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="hidden xl:flex items-center gap-4">
                <InvoicePDFDownloadLink data={state} />
                <Button
                  onClick={handleSave}
                  disabled={saving} // Disable button while saving
                  className="cursor-pointer"
                >
                  {saving ? (
                    <span className="inline-flex items-center">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </span>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" strokeWidth={3} />
                      {isNew ? "Save" : "Update"}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto hidden xl:flex flex-row gap-10 min-h-[calc(100vh-4rem)] p-2">
          <div>
            <ScrollArea className="h-[calc(100vh-4rem)] no-scrollbar overflow-y-auto w-sm p-6 bg-white border-r border-gray-200 relative shadow-md rounded-md space-y-4">
              <InvoiceForm />
            </ScrollArea>
          </div>
          <div className="flex-1">
            <InvoicePreview />
          </div>
        </div>
        <div className="xl:hidden h-[calc(100vh-3rem)] p-2">
          <Tabs defaultValue="TAB_INVOICE_FORM" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="TAB_INVOICE_FORM" className="flex-1">
                <span className="flex items-center gap-1">
                  <PencilIcon className="h-4 w-4" />
                  Edit Invoice
                </span>
              </TabsTrigger>
              <TabsTrigger value="TAB_INVOICE_PREVIEW" className="flex-1">
                <span className="flex items-center gap-1">
                  <FileTextIcon className="h-4 w-4" />
                  Preview PDF
                </span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="TAB_INVOICE_FORM" className="mt-1">
              <div className="h-[calc(100vh-6.75rem)] overflow-auto w-full p-4 pb-20">
                <InvoiceForm />
              </div>
            </TabsContent>
            <TabsContent value="TAB_INVOICE_PREVIEW" className="mt-1">
              <div className="flex h-[calc(100vh-6.75rem)] overflow-auto w-full">
                <InvoicePreview />
              </div>
            </TabsContent>
          </Tabs>
          <div className="absolute left-0 bottom-0 z-50 mt-2 flex items-center justify-center gap-3 w-full border border-t border-gray-200 bg-white px-3 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.05)]">
            <InvoicePDFDownloadLink data={state} />
                <Button
                  onClick={handleSave}
                  disabled={saving} // Disable button while saving
                  className="cursor-pointer"
                >
                  {saving ? (
                    <span className="inline-flex items-center">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </span>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" strokeWidth={3} />
                      {isNew ? "Save" : "Update"}
                    </>
                  )}
                </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <InvoiceProvider initialData={initialData}>
      <InvoiceContent />
    </InvoiceProvider>
  );
}
