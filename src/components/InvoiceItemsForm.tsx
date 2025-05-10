import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";

const InvoiceItemsForm = () => {
  return (
    <>
      <fieldset className="relative mb-4 rounded-lg border p-4 shadow">
        <legend className="text-lg font-semibold text-gray-900 px-1">
          Item 1
        </legend>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="itemName">Name</Label>
            <div className="space-y-0.5">
              <Textarea id="itemName" placeholder="Item name" rows={2} />
              <p className="text-xs text-gray-500">
                Enter the name or description of the item.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="qty">Quantity</Label>
            <div className="space-y-0.5">
              <Input id="qty" placeholder="Item Quantity" />
              <p className="text-xs text-gray-500">
                Enter the quantity of the item.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="unit">Unit</Label>
            <div className="space-y-0.5">
              <Input id="unit" placeholder="Item Unit" />
              <p className="text-xs text-gray-500">
                Enter the unit of measurement for the item.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="unitPrice">Unit Price</Label>
            <div className="space-y-0.5">
              <Input id="unitPrice" placeholder="Item Unit Price" />
              <p className="text-xs text-gray-500">
                Enter the price per unit of the item.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="space-y-0.5">
              <Input id="amount" placeholder="Amount" />
              <p className="text-xs text-gray-500">
                Enter the total amount for the item.
              </p>
            </div>
          </div>
        </div>
      </fieldset>
      <Button variant="outline">
        <Plus className="mr-2 h-4 w-4" />
        Add invoice item
      </Button>
    </>
  );
};

export default InvoiceItemsForm;
