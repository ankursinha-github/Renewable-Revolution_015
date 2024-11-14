import React, { useState } from "react";
import InvoiceForm from "./components/InvoceForm";
import InvoiceList from "./components/InvoiceList";
import { fetchPaymentStatus } from "./api";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [transactionStatus, setTransactionStatus] = useState("");
  const addInvoice = (invoice) => {
    setInvoices((prevInvoices) => [...prevInvoices, invoice]);
  };
  const updateInvoiceStatus = async (id) => {
    setTransactionStatus("pending");

    try {
      const { status } = await fetchPaymentStatus(id);
      setInvoices((prevInvoices) =>
        prevInvoices.map((invoice) =>
          invoice.id === id ? { ...invoice, status } : invoice
        )
      );
      setTransactionStatus("success");
    } catch (error) {
      console.error("Error updating payment status:", error);
      setTransactionStatus("failed");
    }
  };

  return (
    <div>
      <h1>Payment Tracker</h1>
      <InvoiceForm addInvoice={addInvoice} />
      <InvoiceList invoices={invoices} updateInvoiceStatus={updateInvoiceStatus} />
      {transactionStatus === "pending" && <p>Transaction in progress...</p>}
      {transactionStatus === "success" && <p>Transaction successful!</p>}
      {transactionStatus === "failed" && <p>Transaction failed. Please try again.</p>}
    </div>
  );
}

export default App;
