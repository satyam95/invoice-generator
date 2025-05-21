import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import GeneralInfoForm from "./GeneralInfoForm";
import SellerInfoForm from "./SellerInfoForm";
import BuyerInfoForm from "./BuyerInfoForm";
import InvoiceItemsForm from "./InvoiceItemsForm";
import TotalInfoForm from "./TotalInfoForm";

const InvoiceForm = () => {
  return (
    <div className="space-y-4">
      <Accordion
        type="multiple"
        defaultValue={["general"]}
        className="space-y-4"
      >
        <AccordionItem value="general" className="rounded-lg border shadow">
          <AccordionTrigger className="px-4 py-3 items-center">
            <div className="text-lg font-semibold text-gray-900">
              General Information
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <GeneralInfoForm />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="seller" className="rounded-lg border shadow">
          <AccordionTrigger className="px-4 py-3 items-center">
            <div className="text-lg font-semibold text-gray-900">
              Seller Information
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <SellerInfoForm />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="buyer" className="rounded-lg border shadow">
          <AccordionTrigger className="px-4 py-3 items-center">
            <div className="text-lg font-semibold text-gray-900">
              Buyer Information
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <BuyerInfoForm />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="items" className="rounded-lg border shadow">
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
  );
};

export default InvoiceForm;
