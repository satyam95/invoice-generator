import BuyerInfoForm from "@/components/BuyerInfoForm";
import GeneralInfoForm from "@/components/GeneralInfoForm";
import InvoiceItemsForm from "@/components/InvoiceItemsForm";
import InvoicePreview from "@/components/InvoicePreview";
import SellerInfoForm from "@/components/SellerInfoForm";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="flex flex-row min-h-screen p-2">
        <div className="w-sm p-4 bg-white border-r border-gray-200 relative shadow-md rounded-md space-y-4">
          <ScrollArea className="h-[calc(100vh-3rem)] no-scrollbar overflow-y-auto">
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
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="total">Total</Label>
                  <div className="space-y-0.5">
                    <Input id="total" placeholder="0.00" />
                    <p className="text-xs text-gray-500">
                      Enter the total amount of the invoice.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <div className="space-y-0.5">
                    <Input id="paymentMethod" placeholder="Payment Due" />
                    <p className="text-xs text-gray-500">
                      Enter the payment method for the invoice.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentDue">Payment Due</Label>
                  <div className="space-y-0.5">
                    <Input id="paymentDue" placeholder="10-March-2025" />
                    <p className="text-xs text-gray-500">
                      Enter the due date for payment.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentNote">Note</Label>
                  <div className="space-y-0.5">
                    <Textarea id="paymentNote" placeholder="Note" rows={2} />
                    <p className="text-xs text-gray-500">
                      Enter any additional payment-related notes.
                    </p>
                  </div>
                </div>
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
}
