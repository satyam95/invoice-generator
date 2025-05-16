"use client";

import { PDFViewer } from "@react-pdf/renderer";

export function InvoicePDFViewer({ children }: { children: React.ReactNode }) {
  if (!children) {
    console.error("InvoicePDFViewer: Invalid children prop");
    return <div>Error: Invalid PDF content</div>;
  }
  return (
    <PDFViewer style={{ height: "100%", width: "100%" }}>
      {/* @ts-expect-error PR with fix?: https://github.com/diegomura/react-pdf/pull/2888 */}
      {children}
    </PDFViewer>
  );
}


