// src/components/InvoiceList.js
import { useEffect, useState } from "react";
import { getInvoices } from "../services/InvoiceService";

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const data = await getInvoices();
      setInvoices(Object.values(data || {}));
    };
    fetchInvoices();
  }, []);

  return (
    <ul>
      {invoices.map((invoice, index) => (
        <li key={index}>
          {invoice.customer} - {invoice.date} - ${invoice.totalAmount}
        </li>
      ))}
    </ul>
  );
}

export default InvoiceList;
