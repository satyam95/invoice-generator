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

export interface InvoiceData {
  general: {
    currency: string;
    dateFormat: string;
    invoiceNumber: string;
    invoiceType: string;
    issueDate: Date | null;
    serviceDate: Date | null;
    orderNumber: string;
    purchaseOrder: string;
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
}
