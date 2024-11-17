import React from "react";

function InvoiceList({ invoices, onEdit, onDelete, onViewDetails }) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className="bg-gray-700 p-4 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold">{invoice.customer}</h3>
          <p>Total: ${invoice.totalAmount}</p>
          <p>Status: {invoice.status}</p>
          <div className="flex justify-between mt-4">
            <button
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
              onClick={() => onEdit(invoice)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md"
              onClick={() => onDelete(invoice.id)}
            >
              Delete
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md"
              onClick={() => onViewDetails(invoice)}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InvoiceList;
