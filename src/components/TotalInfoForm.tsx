"use client";
import { useInvoice } from "@/context/InvoiceContext";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";

const TotalInfoForm = () => {
  const { state, dispatch } = useInvoice();
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="additionalCharges">Additional Charges</Label>
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
          <p className="text-xs text-gray-500">Enter the additional charges.</p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="discount">Discount</Label>
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
          <p className="text-xs text-gray-500">Enter the discount ammount.</p>
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
