// app/actions/getUserInvoices.ts
'use server';

import { auth } from "@/lib/auth";
import { db } from '@/db/db';
import { invoices } from '@/db/schema'; 
import { eq } from 'drizzle-orm';

export async function getUserInvoices() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  try {
    const userInvoices = await db
      .select({
        id: invoices.id,
        name: invoices.name,
        data: invoices.data,
        createdAt: invoices.createdAt,
        updatedAt: invoices.updatedAt,
      })
      .from(invoices)
      .where(eq(invoices.userId, session.user.id));
    return userInvoices;
  } catch (error) {
    console.error('Error fetching invoices:', error);
    throw new Error('Failed to fetch invoices');
  }
}