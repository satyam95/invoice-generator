// actions/saveInvoice.ts
"use server";
// Adjust path
import { and, eq } from "drizzle-orm";
import { InvoiceData } from "@/context/types"; // Adjust path
import { auth } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/db/db";
import { invoices } from "@/db/schema";

export async function saveInvoice(
  data: InvoiceData,
  isNew: boolean,
  invoiceId?: string
) {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }
  const userId = session.user.id;

  if (isNew) {
    const newId = crypto.randomUUID();
    await db.insert(invoices).values({
      id: newId,
      userId,
      name: data.name,
      data: { ...data, name: undefined }, // Exclude name from JSONB data
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return { newId };
  } else {
    if (!invoiceId) {
      throw new Error("Invoice ID is required for update");
    }
    await db
      .update(invoices)
      .set({
        name: data.name,
        data: { ...data, name: undefined },
        updatedAt: new Date(),
      })
      .where(and(eq(invoices.id, invoiceId), eq(invoices.userId, userId)));
    return { success: true };
  }
}
