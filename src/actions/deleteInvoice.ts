"use server";

import { auth } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/db/db";
import { invoices } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export async function deleteInvoice(invoiceId: string) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  try {
    await db
      .delete(invoices)
      .where(and(eq(invoices.id, invoiceId), eq(invoices.userId, session.user.id)));
    return { success: true };
  } catch (error) {
    console.error("Error deleting invoice:", error);
    throw new Error("Failed to delete invoice");
  }
}