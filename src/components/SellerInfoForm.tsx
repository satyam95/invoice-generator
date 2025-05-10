import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const SellerInfoForm = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="sellerName">Name/Company</Label>
        <div className="space-y-0.5">
          <Input id="sellerName" placeholder="Your name or company name" />
          <p className="text-xs text-gray-500">
            Enter the name or company name of the seller.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="sellerAddress">Address</Label>
        <div className="space-y-0.5">
          <Textarea id="sellerAddress" placeholder="Your address" rows={2} />
          <p className="text-xs text-gray-500">
            Enter the address of the seller.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="sellerVatNumber">VAT Number</Label>
          <div className="space-y-0.5">
            <Input id="sellerVatNumber" placeholder="VAT number" />
            <p className="text-xs text-gray-500">
              Enter the VAT number of the seller.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="sellerEmail">Email</Label>
          <div className="space-y-0.5">
            <Input id="sellerEmail" type="email" placeholder="Your email" />
            <p className="text-xs text-gray-500">
              Enter the email address of the seller.
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
          />
          <p className="text-xs text-gray-500">
            Enter the bank account details of the seller.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="sellerNotes">Notes</Label>
        <div className="space-y-0.5">
          <Textarea id="sellerNotes" placeholder="Additional notes" rows={2} />
          <p className="text-xs text-gray-500">
            Enter any additional notes from the seller.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerInfoForm;
