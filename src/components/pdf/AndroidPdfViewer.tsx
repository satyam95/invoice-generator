import { InvoiceData } from "@/context/types";
import { BlobProvider } from "@react-pdf/renderer/lib/react-pdf.browser";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import InvoicePdfTemplate from "./InvoicePdfTemplate";

// https://github.com/wojtekmaj/react-pdf/issues/1822#issuecomment-2233334169
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const AndroidPdfViewer = ({
  invoiceData,
}: {
  invoiceData: InvoiceData;
}) => {
  return (
    <BlobProvider document={<InvoicePdfTemplate data={invoiceData} />}>
      {({ url, loading, error }) => {
        if (loading)
          return (
            <div className="flex h-full w-full items-center justify-center border border-gray-200 bg-gray-200">
              <div className="text-center">
                <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
                <p className="text-gray-600">Loading PDF viewer...</p>
              </div>
            </div>
          );
        if (error)
          return (
            <div className="flex h-[580px] w-full items-center justify-center border border-gray-200 bg-gray-200 lg:h-[620px] 2xl:h-[700px]">
              <div className="text-center">
                <p className="text-red-600">Error generating PDF preview</p>
                <p className="mt-2 text-sm text-gray-600">
                  Something went wrong. Please try again or contact support.
                </p>
              </div>
            </div>
          );
        return (
          <Document
            file={url} // Ensure file is string | undefined
            className="h-[480px] w-[650px]"
            loading={
              <div className="flex h-[480px] w-full items-center justify-center border border-gray-200 bg-gray-200 lg:h-[620px] 2xl:h-[700px]">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
                  <p className="text-gray-600">Loading PDF viewer...</p>
                </div>
              </div>
            }
          >
            <Page
              pageNumber={1}
              renderMode="canvas"
              error={"Something went wrong"}
              loading={
                <div className="flex h-[480px] w-full items-center justify-center border border-gray-200 bg-gray-200 lg:h-[620px] 2xl:h-[700px]">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
                    <p className="text-gray-600">Loading PDF viewer...</p>
                  </div>
                </div>
              }
              height={450}
              width={650}
            />
          </Document>
        );
      }}
    </BlobProvider>
  );
};
