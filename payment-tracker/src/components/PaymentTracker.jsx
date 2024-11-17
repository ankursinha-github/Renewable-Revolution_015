import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

function PaymentDashboard() {
  const [invoices, setInvoices] = useState({
    paid: [],
    pending: [],
    overdue: [],
  });

  useEffect(() => {
    const db = getDatabase();
    const invoicesRef = ref(db, "invoices");

    onValue(invoicesRef, (snapshot) => {
      const data = snapshot.val();
      const categorized = { paid: [], pending: [], overdue: [] };

      const today = new Date();
      for (const id in data) {
        const invoice = data[id];
        const dueDate = new Date(invoice.dueDate);

        if (invoice.due === 0) {
          categorized.paid.push(invoice);
        } else if (invoice.due > 0 && dueDate >= today) {
          categorized.pending.push(invoice);
        } else if (invoice.due > 0 && dueDate < today) {
          categorized.overdue.push(invoice);
        }
      }

      setInvoices(categorized);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Payment Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PaymentCard title="Paid" invoices={invoices.paid} color="green" />
        <PaymentCard title="Pending" invoices={invoices.pending} color="yellow" />
        <PaymentCard title="Overdue" invoices={invoices.overdue} color="red" />
      </div>
    </div>
  );
}

function PaymentCard({ title, invoices, color }) {
  return (
    <div className={`bg-${color}-100 p-4 rounded-lg shadow-md`}>
      <h2 className={`text-${color}-600 text-lg font-semibold mb-4`}>{title}</h2>
      {invoices.length > 0 ? (
        <ul className="space-y-2">
          {invoices.map((invoice, index) => (
            <li key={index} className="p-3 bg-white rounded-md shadow-sm">
              <p className="text-sm font-medium">{invoice.customer}</p>
              <p className="text-sm text-gray-600">
                Due: ${invoice.due} | Due Date: {invoice.dueDate}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No invoices</p>
      )}
    </div>
  );
}

export default PaymentDashboard;
