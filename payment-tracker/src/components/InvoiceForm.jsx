// src/components/InvoiceForm.js
import React, { useState } from "react";
import { createInvoice } from "../services/InvoiceService";

function InvoiceForm() {
  const [invoiceData, setInvoiceData] = useState({
    customer: "",
    date: "",
    dueDate: "",
    items: [],
    totalAmount: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createInvoice(invoiceData);
      alert("Invoice created successfully");
    } catch (error) {
      console.error("Failed to create invoice", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={invoiceData.customer} onChange={(e) => setInvoiceData({ ...invoiceData, customer: e.target.value })} placeholder="Customer" />
      <input type="date" value={invoiceData.date} onChange={(e) => setInvoiceData({ ...invoiceData, date: e.target.value })} />
      <input type="date" value={invoiceData.dueDate} onChange={(e) => setInvoiceData({ ...invoiceData, dueDate: e.target.value })} />
      <button type="submit">Create Invoice</button>
    </form>
  );
}

export default InvoiceForm;
