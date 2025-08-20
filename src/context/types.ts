export interface InvoiceItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  taxAmount: number;
  taxPercentage: number;
  total: number;
}

export interface FieldRequirements {
  sellerVatNumber: boolean;
  sellerEmail: boolean;
  sellerPhone: boolean;
  buyerEmail: boolean;
  buyerPhone: boolean;
  itemTaxAmount: boolean;
  itemTaxPercentage: boolean;
  additionalCharges: boolean;
  discount: boolean;
  orderNumber: boolean;
  purchaseOrder: boolean;
  serviceDate: boolean;
}

export interface InvoiceData {
  name: string;
  general: {
    currency: string;
    dateFormat: string;
    invoiceNumber: string;
    invoiceType: string;
    issueDate: Date | null;
    serviceDate: Date | null;
    orderNumber: string;
    purchaseOrder: string;
    showOrderNumber?: boolean;
    showPurchaseOrder?: boolean;
    showServiceDate?: boolean;
  };
  seller: {
    name: string;
    address: string;
    vatNumber: string;
    email: string;
    phone: string;
    accountDetails: string;
    notes: string;
  };
  buyer: {
    name: string;
    address: string;
    phone: string;
    email: string;
    notes: string;
  };
  items: InvoiceItem[];
  additionalCharges: string;
  discount: string;
  total: string;
  note: string;
  requirements: FieldRequirements;
}
