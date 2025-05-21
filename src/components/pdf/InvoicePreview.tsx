"use client";

import React, { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import InvoicePdfTemplate from "./InvoicePdfTemplate";
import { useInvoice } from "@/context/InvoiceContext";
import { useDeviceContext } from "@/context/device-context";

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-[580px] w-full items-center justify-center border border-red-200 bg-red-50">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-red-600">
              PDF Rendering Error
            </h2>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const InvoicePDFViewer = dynamic(
  () => import("./PDFViewer").then((mod) => mod.InvoicePDFViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[580px] w-full items-center justify-center border border-gray-200 bg-gray-200 lg:h-[620px] 2xl:h-[700px]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
          <p className="text-gray-600">Loading PDF viewer...</p>
        </div>
      </div>
    ),
  }
);

const AndroidPDFViewer = dynamic(
  () => import("./AndroidPdfViewer").then((mod) => mod.AndroidPdfViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center border border-gray-200 bg-gray-200">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
          <p className="text-gray-600">Loading PDF viewer...</p>
        </div>
      </div>
    ),
  }
);

const InvoicePreview: React.FC = () => {
  const { state } = useInvoice();
  const [stableState, setStableState] = useState(state);
  const { isAndroid } = useDeviceContext();

  // Debounce state updates to prevent rapid re-renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setStableState(state);
    }, 100);
    return () => clearTimeout(timer);
  }, [state]);

  // Generate a unique key based on items array
  const pdfKey = useMemo(
    () =>
      JSON.stringify(
        stableState.items.map((item) => item.id || item.name + item.description)
      ),
    [stableState.items]
  );
  // Validate state before rendering
  if (!stableState.items || stableState.items.length === 0) {
    return (
      <div className="flex h-[580px] w-full items-center justify-center border border-gray-200 bg-gray-50">
        <p className="text-gray-600">
          No items to display in the invoice. Add items to preview invoice.
        </p>
      </div>
    );
  }

  const isAndroidClient =
    typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
  const isAndroidFinal = isAndroid || isAndroidClient;

  if (isAndroidFinal) {
    return <AndroidPDFViewer invoiceData={stableState} />;
  }

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <ErrorBoundary>
        <InvoicePDFViewer key={pdfKey}>
          <InvoicePdfTemplate data={stableState} />
        </InvoicePDFViewer>
      </ErrorBoundary>
    </div>
  );
};

export default InvoicePreview;
