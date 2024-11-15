// src/services/InvoiceService.js
import { database } from "../firebase";
import { ref, set, push, get } from "firebase/database";

// Create Invoice
export async function createInvoice(invoiceData) {
  const invoiceRef = push(ref(database, 'invoices'));
  await set(invoiceRef, invoiceData);
}

// Get Invoices
export async function getInvoices() {
  const invoicesRef = ref(database, 'invoices');
  const snapshot = await get(invoicesRef);
  return snapshot.exists() ? snapshot.val() : {};
}
