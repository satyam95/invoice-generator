// components/Invoice.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { InvoiceProvider, useInvoice } from "@/context/InvoiceContext";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, Save, Undo2, Edit2 } from "lucide-react";
import GeneralInfoForm from "@/components/GeneralInfoForm";
import SellerInfoForm from "@/components/SellerInfoForm";
import BuyerInfoForm from "@/components/BuyerInfoForm";
import InvoiceItemsForm from "@/components/InvoiceItemsForm";
import TotalInfoForm from "@/components/TotalInfoForm";
import InvoicePreview from "@/components/pdf/InvoicePreview";
import { InvoiceData } from "@/context/types";
import { saveInvoice } from "@/actions/saveInvoice";
import Link from "next/link";

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

    useEffect(() => {
      setEditedName(state.name);
    }, [state.name]);

    const handleSave = async () => {
      try {
        const result = await saveInvoice(state, isNew, invoiceId);
        if (isNew && result.newId) {
          router.push(`/invoice/${result.newId}`);
        } else {
          console.log("Invoice updated successfully");
        }
      } catch (error) {
        console.error("Error saving invoice:", error);
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
              <div className="flex items-center gap-4">
                <Button variant="outline" className="cursor-pointer">
                  <Download className="mr-2 h-4 w-4 " />
                  Download
                </Button>
                <Button onClick={handleSave} className="cursor-pointer">
                  <Save className="mr-2 h-4 w-4" />
                  {isNew ? "Save" : "Update"}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-row gap-10 min-h-[calc(100vh-4rem)] p-2">
          <div>
            <ScrollArea className="h-[calc(100vh-4rem)] no-scrollbar overflow-y-auto w-sm p-6 bg-white border-r border-gray-200 relative shadow-md rounded-md space-y-4">
              <div className="space-y-4">
                <Accordion
                  type="multiple"
                  defaultValue={["general"]}
                  className="space-y-4"
                >
                  <AccordionItem
                    value="general"
                    className="rounded-lg border shadow"
                  >
                    <AccordionTrigger className="px-4 py-3 items-center">
                      <div className="text-lg font-semibold text-gray-900">
                        General Information
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <GeneralInfoForm />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="seller"
                    className="rounded-lg border shadow"
                  >
                    <AccordionTrigger className="px-4 py-3 items-center">
                      <div className="text-lg font-semibold text-gray-900">
                        Seller Information
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <SellerInfoForm />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="buyer"
                    className="rounded-lg border shadow"
                  >
                    <AccordionTrigger className="px-4 py-3 items-center">
                      <div className="text-lg font-semibold text-gray-900">
                        Buyer Information
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <BuyerInfoForm />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="items"
                    className="rounded-lg border shadow"
                  >
                    <AccordionTrigger className="px-4 py-3 items-center">
                      <div className="text-lg font-semibold text-gray-900">
                        Invoice Items
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <InvoiceItemsForm />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="px-2">
                  <TotalInfoForm />
                </div>
              </div>
            </ScrollArea>
          </div>
          <div className="flex-1">
            <InvoicePreview />
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
