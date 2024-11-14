import React from "react";

function InvoiceList({ invoices, updateInvoiceStatus }) {
  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <span>{invoice.description} - </span>
            <span>Status: {invoice.status} </span>
            <select
              value={invoice.status}
              onChange={(e) => updateInvoiceStatus(invoice.id, e.target.value)}
            >
              <option value="unpaid">Unpaid</option>
              <option value="paid">Paid</option>
              <option value="overdue">Overdue</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
