"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { useInvoice } from "@/context/InvoiceContext";
import { InvoiceData } from "@/context/types";

const SellerInfoForm = () => {
  const { state, dispatch } = useInvoice();
  const handleChange = (field: keyof InvoiceData["seller"], value: string) => {
    dispatch({ type: "UPDATE_SELLER", payload: { [field]: value } });
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
        <Label htmlFor="sellerName">Name/Company</Label>
        <div className="space-y-0.5">
          <Input
            id="sellerName"
            placeholder="Your name or company name"
            value={state.seller.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Enter the name or company name of the seller.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="sellerAddress">Address</Label>
        <div className="space-y-0.5">
          <Textarea
            id="sellerAddress"
            placeholder="Your address"
            rows={2}
            value={state.seller.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Enter the address of the seller.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="sellerVatNumber">VAT Number</Label>
            <div className="flex items-center space-x-2">
              <Label htmlFor="vat-required" className="text-xs text-gray-500">
                Hide in PDF
              </Label>
              <Switch
                id="vat-required"
                checked={requirements.sellerVatNumber}
                onCheckedChange={(checked) => handleRequirementToggle("sellerVatNumber", checked)}
              />
            </div>
          </div>
          <div className="space-y-0.5">
            <Input
              id="sellerVatNumber"
              placeholder="VAT number"
              value={state.seller.vatNumber}
              onChange={(e) => handleChange("vatNumber", e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Enter the VAT number of the seller.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="sellerEmail">Email</Label>
            <div className="flex items-center space-x-2">
              <Label htmlFor="email-required" className="text-xs text-gray-500">
                Hide in PDF
              </Label>
              <Switch
                id="email-required"
                checked={requirements.sellerEmail}
                onCheckedChange={(checked) => handleRequirementToggle("sellerEmail", checked)}
              />
            </div>
          </div>
          <div className="space-y-0.5">
            <Input
              id="sellerEmail"
              type="email"
              placeholder="Your email"
              value={state.seller.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Enter the email address of the seller.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="sellerPhone">Phone Number</Label>
            <div className="flex items-center space-x-2">
              <Label htmlFor="phone-required" className="text-xs text-gray-500">
                Hide in PDF
              </Label>
              <Switch
                id="phone-required"
                checked={requirements.sellerPhone}
                onCheckedChange={(checked) => handleRequirementToggle("sellerPhone", checked)}
              />
            </div>
          </div>
          <div className="space-y-0.5">
            <Input
              id="sellerPhone"
              type="text"
              placeholder="Phone Number"
              value={state.seller.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Enter the phone number of the seller.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="sellerAccountDetails">Account Details</Label>
        <div className="space-y-0.5">
          <Textarea
            id="sellerAccountDetails"
            placeholder="Bank account details"
            rows={2}
            value={state.seller.accountDetails}
            onChange={(e) => handleChange("accountDetails", e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Enter the bank account details of the seller.
          </p>
        </div>
      </div>
      {/* <div className="space-y-2">
        <Label htmlFor="sellerNotes">Notes</Label>
        <div className="space-y-0.5">
          <Textarea
            id="sellerNotes"
            placeholder="Additional notes"
            rows={2}
            value={state.seller.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Enter any additional notes from the seller.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default SellerInfoForm;
