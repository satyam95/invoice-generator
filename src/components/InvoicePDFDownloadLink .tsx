"use client";

import { InvoiceData } from "@/context/types";
import InvoicePdfTemplate from "./pdf/InvoicePdfTemplate";
import { Button } from "@/components/ui/button"; // Import Shadcn Button
import { Download, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicPDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

const InvoicePDFDownloadLink = ({ data }: { data: InvoiceData }) => {
  const now = new Date();
  const formattedDate = `${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}-${now.getFullYear()}`;
  const filename = `invoice-${formattedDate}.pdf`;

  return (
    <DynamicPDFDownloadLink
      document={<InvoicePdfTemplate data={data} />}
      fileName={filename}
    >
      {({ loading }) => (
        <Button          
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <span className="inline-flex items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span className="animate-pulse">Generating...</span>
            </span>
          ) : (
            <span className="inline-flex items-center">
              <Download strokeWidth={3} className="mr-2 h-4 w-4" />
              Download PDF
            </span>
          )}
        </Button>
      )}
    </DynamicPDFDownloadLink>
  );
};

export default InvoicePDFDownloadLink;