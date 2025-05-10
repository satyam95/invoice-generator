import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area"; // Adjust based on your component library

// Define the Item interface
interface Item {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  netAmount: number;
  visible: boolean;
}

// Define the Page interface
interface Page {
  items: Item[];
  height: number;
}

// Dummy items data
const dummyItems: Item[] = [
  { id: "KXWPL", name: "Web Development Service", quantity: 1, unit: "hrs", unitPrice: 95, netAmount: 95, visible: true },
  { id: "NHYTR", name: "UI/UX Design", quantity: 10, unit: "hrs", unitPrice: 85, netAmount: 850, visible: true },
  { id: "PQMZS", name: "Hosting Service (Annual)", quantity: 1, unit: "year", unitPrice: 120, netAmount: 120, visible: true },
  { id: "JRTYH", name: "Frontend Development", quantity: 8, unit: "hrs", unitPrice: 90, netAmount: 720, visible: true },
  { id: "GKWND", name: "Backend Development", quantity: 12, unit: "hrs", unitPrice: 100, netAmount: 1200, visible: true },
  { id: "CFXLM", name: "Database Setup", quantity: 4, unit: "hrs", unitPrice: 110, netAmount: 440, visible: true },
  { id: "YQZTB", name: "API Integration", quantity: 6, unit: "hrs", unitPrice: 95, netAmount: 570, visible: true },
  { id: "VSHJD", name: "Testing & QA", quantity: 8, unit: "hrs", unitPrice: 80, netAmount: 640, visible: true },
  { id: "MPRKF", name: "Project Management", quantity: 5, unit: "hrs", unitPrice: 120, netAmount: 600, visible: true },
  { id: "TLWBN", name: "DevOps Setup", quantity: 3, unit: "hrs", unitPrice: 130, netAmount: 390, visible: true },
  { id: "DXCYG", name: "Performance Optimization", quantity: 4, unit: "hrs", unitPrice: 100, netAmount: 400, visible: true },
  { id: "AQZHN", name: "Security Audit", quantity: 2, unit: "service", unitPrice: 150, netAmount: 300, visible: true },
  { id: "RJTWP", name: "Content Migration", quantity: 3, unit: "hrs", unitPrice: 85, netAmount: 255, visible: true },
  { id: "LHYMZ", name: "User Training", quantity: 2, unit: "session", unitPrice: 200, netAmount: 400, visible: true },
  { id: "WKXFD", name: "Documentation", quantity: 3, unit: "hrs", unitPrice: 90, netAmount: 270, visible: true },
];

// Estimated heights in mm (adjust based on your CSS rendering)
const PAGE_HEIGHT: number = 297; // A4 height in mm
const PADDING_TOP_BOTTOM: number = 8 * 2; // p-8 (assuming 8mm top + bottom)
const FOOTER_HEIGHT: number = 15; // Estimated footer height
const USABLE_PAGE_HEIGHT: number = PAGE_HEIGHT - PADDING_TOP_BOTTOM - FOOTER_HEIGHT; // ~266mm
const HEADER_HEIGHT: number = 30; // Estimated header (Invoice title, business name)
const INVOICE_DETAILS_HEIGHT: number = 20; // Invoice details + company details
const CUSTOMER_DETAILS_HEIGHT: number = 20; // Customer details + billing address
const TABLE_HEADER_HEIGHT: number = 10; // Item table header
const ITEM_ROW_HEIGHT: number = 12; // Estimated height per item row
const TOTALS_HEIGHT: number = 15; // Subtotal + Grand Total

const InvoicePreview: React.FC = () => {
  // Split items into pages
  const pages: Page[] = [];
  let currentPage: Page = {
    items: [],
    height: HEADER_HEIGHT + INVOICE_DETAILS_HEIGHT + CUSTOMER_DETAILS_HEIGHT + TABLE_HEADER_HEIGHT,
  };
  let currentHeight: number = currentPage.height;

  dummyItems.forEach((item: Item, index: number) => {
    const rowHeight: number = ITEM_ROW_HEIGHT;
    if (currentHeight + rowHeight <= USABLE_PAGE_HEIGHT - TOTALS_HEIGHT) {
      // Item fits on current page
      currentPage.items.push(item);
      currentHeight += rowHeight;
    } else {
      // Start a new page
      pages.push(currentPage);
      currentPage = {
        items: [item],
        height: TABLE_HEADER_HEIGHT + rowHeight, // Only table header for subsequent pages
      };
      currentHeight = currentPage.height;
    }
  });

  // Add totals height to the last page and push it
  currentPage.height += TOTALS_HEIGHT;
  pages.push(currentPage);

  return (
    <ScrollArea className="mx-auto bg-white shadow-lg rounded-lg max-w-[210mm] h-[calc(100vh-4rem)] relative">
      {pages.map((page: Page, pageIndex: number) => (
        <div
          key={pageIndex}
          className="p-8 w-full relative"
          style={{ minHeight: "297mm", borderBottom: pageIndex < pages.length - 1 ? "1px dashed gray" : "none" }}
        >
          {/* Header and Details (only on first page) */}
          {pageIndex === 0 && (
            <>
              <div className="flex justify-between mb-8">
                <div className="space-y-1">
                  <h1 className="text-3xl font-bold">Invoice</h1>
                  <p className="text-gray-600">No: INV-2025-001</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl">Your Business Name</p>
                  <p className="text-gray-600">TAX - VAT-123456789</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-6">
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-x-4 text-sm">
                    <p className="text-gray-500">Order No.</p>
                    <p>INV-2025-001</p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 text-sm">
                    <p className="text-gray-500">Invoice Date</p>
                    <p>5/10/2025</p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 text-sm">
                    <p className="text-gray-500">Due Date</p>
                    <p>6/10/2025</p>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="whitespace-pre-line mb-2">
                    123 Business Street City,
                    <br /> State 12345
                    <br /> United States
                  </p>
                  <p>contact@yourbusiness.com</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">Customer Details</h3>
                  <div className="text-sm">
                    <p className="font-medium">Client Company Inc.</p>
                    <p>billing@clientcompany.com</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Billing Address</h3>
                  <div className="text-sm">
                    <p className="whitespace-pre-line">
                      456 Client Avenue
                      <br />
                      Client City, State 67890
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Item Table */}
          <div className="mb-8">
            <div className="grid grid-cols-12 gap-4 py-3 border-b font-medium text-sm">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Item Name</div>
              <div className="col-span-1 text-center">Qty</div>
              <div className="col-span-2 text-right">Unit Price</div>
              <div className="col-span-3 text-right">Total</div>
            </div>
            {page.items.map((item: Item, index: number) => (
              <div key={item.id} className="grid grid-cols-12 gap-4 py-4 border-b text-sm">
                <div className="col-span-1">
                  {pages.slice(0, pageIndex).reduce((acc: number, p: Page) => acc + p.items.length, 0) + index + 1}
                </div>
                <div className="col-span-5">
                  <p className="font-medium">{item.name}</p>
                </div>
                <div className="col-span-1 text-center">{item.quantity}</div>
                <div className="col-span-2 text-right">${item.unitPrice}</div>
                <div className="col-span-3 text-right font-medium">${item.netAmount}</div>
              </div>
            ))}
          </div>

          {/* Totals (only on the last page) */}
          {pageIndex === pages.length - 1 && (
            <div className="mt-6 flex justify-end">
              <div className="w-1/3 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${dummyItems.reduce((sum: number, item: Item) => sum + item.netAmount, 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t font-bold">
                  <span>Grand Total</span>
                  <span>${dummyItems.reduce((sum: number, item: Item) => sum + item.netAmount, 0).toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-6 border-t pt-4 absolute bottom-8 w-[calc(100%-64px)]">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>This invoice is generated by InvoicePro.</p>
              <p>Page {pageIndex + 1} of {pages.length}</p>
            </div>
          </div>
        </div>
      ))}
    </ScrollArea>
  );
};

export default InvoicePreview;