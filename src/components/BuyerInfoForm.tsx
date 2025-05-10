import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const BuyerInfoForm = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="buyerName">Name/Company</Label>
        <div className="space-y-0.5">
          <Input id="buyerName" placeholder="Buyer's name or company name" />
          <p className="text-xs text-gray-500">
            Enter the name or company name of the buyer.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="buyerAddress">Address</Label>
        <div className="space-y-0.5">
          <Textarea id="buyerAddress" placeholder="Buyer's address" rows={2} />
          <p className="text-xs text-gray-500">
            Enter the address of the buyer.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="buyerVatNumber">VAT Number</Label>
          <div className="space-y-0.5">
            <Input id="buyerVatNumber" placeholder="VAT number" />
            <p className="text-xs text-gray-500">
              Enter the VAT number of the buyer.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="buyerEmail">Email</Label>
          <div className="space-y-0.5">
            <Input id="buyerEmail" type="email" placeholder="Buyer's email" />
            <p className="text-xs text-gray-500">
              Enter the email address of the buyer.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="buyerNotes">Notes</Label>
        <div className="space-y-0.5">
          <Textarea id="buyerNotes" placeholder="Additional notes" rows={2} />
          <p className="text-xs text-gray-500">
            Enter any additional notes for the buyer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyerInfoForm;
