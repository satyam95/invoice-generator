import { auth } from "@/app/api/auth/[...nextauth]/route";
import Invoice from "@/components/Invoice";
import { initialState } from "@/context/InvoiceContext";
import { InvoiceData } from "@/context/types";
import { db } from "@/db/db";
import { invoices } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  let title = "New Invoice - InvoiceGen";
  let description = "Create a new invoice with InvoiceGen.";

  if (params.id !== "new") {
    const session = await auth();
    if (session) {
      const userId = session.user.id;
      const invoice = await db
        .select()
        .from(invoices)
        .where(and(eq(invoices.id, params.id), eq(invoices.userId, userId)))
        .limit(1);

      if (invoice[0]) {
        title = `${invoice[0].name} - InvoiceGen`;
        description = `View and edit the invoice "${invoice[0].name}" in InvoiceGen.`;
      }
    }
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `/invoice/${params.id}`,
    },
  };
}

export default async function InvoicePage({
  params,
}: {
  params: { id: string };
}) {
  const session = await auth();
  if (!session) {
    return <div>Please log in to access this page.</div>;
  }

  const { id } = await params;
  const userId = session.user.id;
  let initialData: InvoiceData;
  let isNew: boolean;

  if (id === "new") {
    isNew = true;
    initialData = initialState;
  } else {
    const invoice = await db
      .select()
      .from(invoices)
      .where(and(eq(invoices.id, id), eq(invoices.userId, userId)))
      .limit(1);

    if (!invoice[0]) {
      notFound();
    }
    initialData = { ...invoice[0].data, name: invoice[0].name } as InvoiceData;
    isNew = false;
  }

  return (
    <Invoice
      initialData={initialData}
      isNew={isNew}
      invoiceId={id !== "new" ? id : undefined}
    />
  );
}
