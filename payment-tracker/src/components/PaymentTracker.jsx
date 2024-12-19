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
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-100">
        Payment Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PaymentCard title="Paid" invoices={invoices.paid} color="green" />
        <PaymentCard title="Pending" invoices={invoices.pending} color="yellow" />
        <PaymentCard title="Overdue" invoices={invoices.overdue} color="red" />
      </div>
    </div>
  );
}


function PaymentCard({ title, invoices, color }) {
  const colorMap = {
    green: {
      bg: "bg-gray-800",
      text: "text-green-300",
      accent: "text-green-500",
    },
    yellow: {
      bg: "bg-gray-800",
      text: "text-yellow-300",
      accent: "text-yellow-500",
    },
    red: {
      bg: "bg-gray-800",
      text: "text-red-300",
      accent: "text-red-500",
    },
  };

  const { bg, text, accent } = colorMap[color] || {
    bg: "bg-gray-800",
    text: "text-gray-300",
    accent: "text-gray-500",
  };

  return (
    <div className={`${bg} p-4 rounded-lg shadow-lg`}>
      <h2 className={`${accent} text-lg font-semibold mb-4`}>{title}</h2>
      {invoices.length > 0 ? (
        <ul className="space-y-2">
          {invoices.map((invoice, index) => (
            <li
              key={index}
              className="p-3 bg-gray-700 rounded-md shadow-sm text-gray-100"
            >
              <p className="text-sm font-medium">{invoice.customer}</p>
              <p className={`text-sm ${text}`}>
                Due: ${invoice.due} | Due Date: {invoice.dueDate}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No invoices</p>
      )}
    </div>
  );
}


export default PaymentDashboard;
