import BuyerInfoForm from "@/components/BuyerInfoForm";
import GeneralInfoForm from "@/components/GeneralInfoForm";
import InvoiceItemsForm from "@/components/InvoiceItemsForm";
import InvoicePreview from "@/components/pdf/InvoicePreview";
import SellerInfoForm from "@/components/SellerInfoForm";
import TotalInfoForm from "@/components/TotalInfoForm";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InvoiceProvider } from "@/context/InvoiceContext";
import { Download, Save, Undo2 } from "lucide-react";

export default function Home() {
  return (
    <InvoiceProvider>
      <div className="w-full min-h-screen bg-gray-50">
        <div className="bg-white h-12 flex items-center">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Undo2 className="h-4 w-4" />
                </Button>
                <div className="text-xl font-bold">Pencil Invoice</div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-row gap-10 min-h-[calc(100vh-4rem)] p-2">
          <div className="w-sm p-4 bg-white border-r border-gray-200 relative shadow-md rounded-md space-y-4">
            <ScrollArea className="h-[calc(100vh-6rem)] no-scrollbar overflow-y-auto">
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
                <TotalInfoForm />
              </div>
            </ScrollArea>
          </div>
          <div className="flex-1">
            <InvoicePreview />
          </div>
        </div>
      </div>
    </InvoiceProvider>
  );
}
