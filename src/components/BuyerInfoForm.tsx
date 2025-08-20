"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { useInvoice } from "@/context/InvoiceContext";
import { InvoiceData } from "@/context/types";

const BuyerInfoForm = () => {
  const { state, dispatch } = useInvoice();
  const handleChange = (field: keyof InvoiceData["buyer"], value: string) => {
    dispatch({ type: "UPDATE_BUYER", payload: { [field]: value } });
  };

  const handleRequirementToggle = (field: keyof InvoiceData["requirements"], required: boolean) => {
    dispatch({ type: "UPDATE_REQUIREMENT", payload: { field, required } });
  };

  // Safety check for requirements object
  const requirements = state.requirements || {
    sellerVatNumber: false,
    sellerEmail: false,
    sellerPhone: false,
    buyerEmail: false,
    buyerPhone: false,
    itemTaxAmount: false,
    itemTaxPercentage: false,
    additionalCharges: false,
    discount: false,
    orderNumber: false,
    purchaseOrder: false,
    serviceDate: false,
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="buyerName">Name/Company</Label>
        <div className="space-y-0.5">
          <Input
            id="buyerName"
            placeholder="Buyer's name or company name"
            value={state.buyer.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Enter the name or company name of the buyer.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="buyerAddress">Address</Label>
        <div className="space-y-0.5">
          <Textarea
            id="buyerAddress"
            placeholder="Buyer's address"
            rows={2}
            value={state.buyer.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Enter the address of the buyer.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="buyerPhoneNumber">Phone Number</Label>
            <div className="flex items-center space-x-2">
              <Label htmlFor="buyer-phone-required" className="text-xs text-gray-500">
                Hide in PDF
              </Label>
              <Switch
                id="buyer-phone-required"
                checked={requirements.buyerPhone}
                onCheckedChange={(checked) => handleRequirementToggle("buyerPhone", checked)}
              />
            </div>
          </div>
          <div className="space-y-0.5">
            <Input
              id="buyerPhoneNumber"
              placeholder="Phone Number"
              value={state.buyer.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Enter the phone number of the buyer.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="buyerEmail">Email</Label>
            <div className="flex items-center space-x-2">
              <Label htmlFor="buyer-email-required" className="text-xs text-gray-500">
                Hide in PDF
              </Label>
              <Switch
                id="buyer-email-required"
                checked={requirements.buyerEmail}
                onCheckedChange={(checked) => handleRequirementToggle("buyerEmail", checked)}
              />
            </div>
          </div>
          <div className="space-y-0.5">
            <Input
              id="buyerEmail"
              type="email"
              placeholder="Buyer's email"
              value={state.buyer.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Enter the email address of the buyer.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="space-y-2">
        <Label htmlFor="buyerNotes">Notes</Label>
        <div className="space-y-0.5">
          <Textarea
            id="buyerNotes"
            placeholder="Additional notes"
            rows={2}
            value={state.buyer.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Enter any additional notes for the buyer.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default BuyerInfoForm;
