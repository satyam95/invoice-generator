"use client";

import React from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { useInvoice } from "@/context/InvoiceContext";
import { InvoiceData } from "@/context/types";
import { DatePicker } from "./DatePicker";
import { Switch } from "./ui/switch";

const GeneralInfoForm = () => {
  const { state, dispatch } = useInvoice();

  const handleChange = <K extends keyof InvoiceData["general"]>(
    field: K,
    value: InvoiceData["general"][K]
  ) => {
    dispatch({ type: "UPDATE_GENERAL", payload: { [field]: value } });
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
        <Label htmlFor="currency">Currency</Label>
        <div className="space-y-0.5">
          <Select
            value={state.general.currency}
            onValueChange={(value) => handleChange("currency", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="INR">INR (₹)</SelectItem>
                <SelectItem value="USD">USD ($)</SelectItem>
                <SelectItem value="EUR">EUR (€)</SelectItem>
                <SelectItem value="GBP">GBP (£)</SelectItem>
                <SelectItem value="JPY">JPY (¥)</SelectItem>
                <SelectItem value="CAD">CAD (C$)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500">
            Select the currency of the invoice.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="dateFormat">Date Format</Label>
        <div className="space-y-0.5">
          <Select
            value={state.general.dateFormat}
            onValueChange={(value) => handleChange("dateFormat", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select date format" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500">
            Select the date format of the invoice.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="invoiceNumber">Invoice Number</Label>
        <div className="space-y-0.5">
          <Input
            id="invoiceNumber"
            placeholder="e.g. INV-001"
            value={state.general.invoiceNumber}
            onChange={(e) => handleChange("invoiceNumber", e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Enter the unique identifier for the invoice.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="orderNumber">Order Number</Label>
          <div className="flex items-center space-x-2">
            <Label htmlFor="order-number-required" className="text-xs text-gray-500">
              Hide in PDF
            </Label>
            <Switch
              id="order-number-required"
              checked={requirements.orderNumber}
              onCheckedChange={(checked) => handleRequirementToggle("orderNumber", checked)}
            />
          </div>
        </div>
        <div className="space-y-0.5">
          <Input
            id="orderNumber"
            placeholder="e.g. MMYYYY0001"
            value={state.general.orderNumber}
            onChange={(e) => handleChange("orderNumber", e.target.value)}
          />
          <p className="text-xs text-gray-500">Enter the unique order number.</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="purchaseOrder">Purchase Order</Label>
          <div className="flex items-center space-x-2">
            <Label htmlFor="purchase-order-required" className="text-xs text-gray-500">
              Hide in PDF
            </Label>
            <Switch
              id="purchase-order-required"
              checked={requirements.purchaseOrder}
              onCheckedChange={(checked) => handleRequirementToggle("purchaseOrder", checked)}
            />
          </div>
        </div>
        <div className="space-y-0.5">
          <Input
            id="purchaseOrder"
            placeholder="e.g. PO0000001"
            value={state.general.purchaseOrder}
            onChange={(e) => handleChange("purchaseOrder", e.target.value)}
          />
          <p className="text-xs text-gray-500">Enter the unique purchase order number.</p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="invoiceType">Invoice Type</Label>
        <div className="space-y-0.5">
          <Select
            value={state.general.invoiceType}
            onValueChange={(value) => handleChange("invoiceType", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select invoice type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Invoice">Invoice</SelectItem>
                <SelectItem value="Proforma">Proforma Invoice</SelectItem>
                <SelectItem value="Quote">Quotation</SelectItem>
                <SelectItem value="Receipt">Receipt</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500">
            Select the type of document to generate.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="issueDate">Date of Issue</Label>
        <div className="space-y-0.5">
          <DatePicker
            value={state.general.issueDate ?? undefined}
            onChange={(date) => handleChange("issueDate", date ?? null)}
            dateFormat={state.general.dateFormat}
          />
          <p className="text-xs text-gray-500">
            Enter the issuance date of the invoice.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="serviceDate">Date of Service</Label>
          <div className="flex items-center space-x-2">
            <Label htmlFor="service-date-required" className="text-xs text-gray-500">
              Hide in PDF
            </Label>
            <Switch
              id="service-date-required"
              checked={requirements.serviceDate}
              onCheckedChange={(checked) => handleRequirementToggle("serviceDate", checked)}
            />
          </div>
        </div>
        <div className="space-y-0.5">
          <DatePicker
            value={state.general.serviceDate ?? undefined}
            onChange={(date) => handleChange("serviceDate", date ?? null)}
            dateFormat={state.general.dateFormat}
          />
          <p className="text-xs text-gray-500">Enter the date the service or product was provided.</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfoForm;
