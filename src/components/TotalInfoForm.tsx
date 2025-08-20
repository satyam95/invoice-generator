"use client";
import { useInvoice } from "@/context/InvoiceContext";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
// import { Textarea } from "./ui/textarea";

const TotalInfoForm = () => {
  const { state, dispatch } = useInvoice();

  const handleRequirementToggle = (field: keyof typeof state.requirements, required: boolean) => {
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
        <div className="flex items-center justify-between">
          <Label htmlFor="additionalCharges">Additional Charges</Label>
          <div className="flex items-center space-x-2">
            <Label htmlFor="additional-charges-required" className="text-xs text-gray-500">
              Hide in PDF
            </Label>
            <Switch
              id="additional-charges-required"
              checked={requirements.additionalCharges}
              onCheckedChange={(checked) => handleRequirementToggle("additionalCharges", checked)}
            />
          </div>
        </div>
        <div className="space-y-0.5">
          <Input
            id="additionalCharges"
            placeholder="Additional Charges"
            value={state.additionalCharges}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_ADDITIONAL_CHARGES",
                payload: e.target.value,
              })
            }
          />
          <p className="text-xs text-gray-500">
            Enter the additional charges.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="discount">Discount</Label>
          <div className="flex items-center space-x-2">
            <Label htmlFor="discount-required" className="text-xs text-gray-500">
              Hide in PDF
            </Label>
            <Switch
              id="discount-required"
              checked={requirements.discount}
              onCheckedChange={(checked) => handleRequirementToggle("discount", checked)}
            />
          </div>
        </div>
        <div className="space-y-0.5">
          <Input
            id="discount"
            placeholder="Discount"
            value={state.discount}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_DISCOUNT",
                payload: e.target.value,
              })
            }
          />
          <p className="text-xs text-gray-500">
            Enter the discount amount.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="total">Total</Label>
        <div className="space-y-0.5">
          <Input
            id="total"
            placeholder="0.00"
            value={state.total}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_TOTAL",
                payload: e.target.value,
              })
            }
          />
          <p className="text-xs text-gray-500">
            Enter the total amount of the invoice.
          </p>
        </div>
      </div>
      {/* <div className="space-y-2">
        <Label htmlFor="paymentNote">Note</Label>
        <div className="space-y-0.5">
          <Textarea
            id="paymentNote"
            placeholder="Note"
            rows={2}
            value={state.note}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_NOTE",
                payload: e.target.value,
              })
            }
          />
          <p className="text-xs text-gray-500">
            Enter any additional payment-related notes.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default TotalInfoForm;
