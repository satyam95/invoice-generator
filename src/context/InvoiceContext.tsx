// InvoiceContext.tsx
"use client";
import { createContext, useContext, useReducer } from "react";
import { InvoiceData, InvoiceItem } from "./types";

type Action =
  | { type: "UPDATE_GENERAL"; payload: Partial<InvoiceData["general"]> }
  | { type: "UPDATE_SELLER"; payload: Partial<InvoiceData["seller"]> }
  | { type: "UPDATE_BUYER"; payload: Partial<InvoiceData["buyer"]> }
  | { type: "ADD_ITEM"; payload: InvoiceItem }
  | {
      type: "UPDATE_ITEM";
      payload: { index: number; item: Partial<InvoiceItem> };
    }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_TOTAL"; payload: string }
  | { type: "UPDATE_ADDITIONAL_CHARGES"; payload: string }
  | { type: "UPDATE_DISCOUNT"; payload: string }
  | { type: "UPDATE_NOTE"; payload: string };

const currentDate = new Date(); // May 15, 2025
const serviceDate = new Date(currentDate);
serviceDate.setDate(currentDate.getDate() + 7);

const initialState: InvoiceData = {
  general: {
    currency: "INR",
    dateFormat: "MM/DD/YYYY",
    invoiceNumber: "INV-2025-001",
    invoiceType: "Invoice",
    orderNumber: "MMYYYY0001",
    purchaseOrder: "PO0000001",
    issueDate: currentDate,
    serviceDate: serviceDate,
  },
  seller: {
    name: "Your Business Name",
    address:
      "Address line, Street Address, City Name, State, Country — Pin Code",
    vatNumber: "VAT-123456789",
    email: "username@email.com",
    phone: "+91 98765 43210",
    accountDetails:
      "Bank name: ABC Bank limited, SWIFT/IBAN: NZ0201230012, Account number: 12-1234-123456-12",
    notes: "Additional notes",
  },
  buyer: {
    name: "Customer/Business name",
    address:
      "Address line, Street Address, City Name, State, Country — Pin Code",
    phone: "+91 98765 43210",
    email: "username@email.com",
    notes: "Additional notes",
  },
  items: [
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      name: "HP x1000 Wired Optical Mouse",
      description: "FSN: ACCDBFEVHVDG3CMJ",
      quantity: 1,
      unitPrice: 250,
      taxAmount: 45,
      taxPercentage: 18,
      total: 295,
    },
  ],
  total: "27516.00",
  additionalCharges: "100.00",
  discount: "500.00",
  note: "Additional notes",
};

function invoiceReducer(state: InvoiceData, action: Action): InvoiceData {
  switch (action.type) {
    case "UPDATE_GENERAL":
      return { ...state, general: { ...state.general, ...action.payload } };
    case "UPDATE_SELLER":
      return { ...state, seller: { ...state.seller, ...action.payload } };
    case "UPDATE_BUYER":
      return { ...state, buyer: { ...state.buyer, ...action.payload } };
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === action.payload.index
            ? { ...item, ...action.payload.item }
            : item
        ),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case "UPDATE_TOTAL":
      return { ...state, total: action.payload };
    case "UPDATE_ADDITIONAL_CHARGES":
      return { ...state, additionalCharges: action.payload };
    case "UPDATE_DISCOUNT":
      return { ...state, discount: action.payload };
    case "UPDATE_NOTE":
      return { ...state, note: action.payload };
    default:
      return state;
  }
}

const InvoiceContext = createContext<{
  state: InvoiceData;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const InvoiceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(invoiceReducer, initialState);
  return (
    <InvoiceContext.Provider value={{ state, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export const useInvoice = () => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error("useInvoice must be used within an InvoiceProvider");
  }
  return context;
};
