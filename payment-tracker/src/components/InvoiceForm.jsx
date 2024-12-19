import React, { useState } from "react";
import { createInvoice } from "../services/InvoiceService";

function InvoiceForm() {
  const [invoiceData, setInvoiceData] = useState({
    customer: "",
    email: "",
    phone: "",
    address: "",
    dueDate: "",
    items: [{ description: "", quantity: 1, price: 0 }],
    paid: 0,
  });

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index][field] = field === "quantity" || field === "price" ? Number(value) : value;
    setInvoiceData({ ...invoiceData, items: updatedItems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedInvoiceData = { ...invoiceData };

    updatedInvoiceData.subtotal = updatedInvoiceData.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    updatedInvoiceData.tax = updatedInvoiceData.subtotal * 0.1; // 10% tax
    updatedInvoiceData.totalAmount = updatedInvoiceData.subtotal + updatedInvoiceData.tax;
    updatedInvoiceData.due = updatedInvoiceData.totalAmount - updatedInvoiceData.paid;

    try {
      await createInvoice(updatedInvoiceData);
      alert("Invoice created successfully");
    } catch (error) {
      console.error("Failed to create invoice", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-md max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">Create Invoice</h1>

      {/* Customer Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          value={invoiceData.customer}
          onChange={(e) => setInvoiceData({ ...invoiceData, customer: e.target.value })}
          placeholder="Customer Name"
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="email"
          value={invoiceData.email}
          onChange={(e) => setInvoiceData({ ...invoiceData, email: e.target.value })}
          placeholder="Customer Email"
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          value={invoiceData.phone}
          onChange={(e) => setInvoiceData({ ...invoiceData, phone: e.target.value })}
          placeholder="Customer Phone"
          className="p-2 border border-gray-300 rounded-md"
        />
        <input
          type="date"
          value={invoiceData.dueDate}
          onChange={(e) => setInvoiceData({ ...invoiceData, dueDate: e.target.value })}
          className="p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <textarea
        value={invoiceData.address}
        onChange={(e) => setInvoiceData({ ...invoiceData, address: e.target.value })}
        placeholder="Customer Address"
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />

      {/* Items */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Items</h2>
        {invoiceData.items.map((item, index) => (
          <div key={index} className="grid grid-cols-12 gap-2 mb-2">
            <input
              type="text"
              value={item.description}
              onChange={(e) => handleItemChange(index, "description", e.target.value)}
              placeholder="Description"
              className="col-span-6 p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
              placeholder="Qty"
              className="col-span-2 p-2 border border-gray-300 rounded-md text-center"
              required
            />
            <input
              type="number"
              value={item.price}
              onChange={(e) => handleItemChange(index, "price", e.target.value)}
              placeholder="Price"
              className="col-span-3 p-2 border border-gray-300 rounded-md text-center"
              required
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => {
                  const updatedItems = invoiceData.items.filter((_, i) => i !== index);
                  setInvoiceData({ ...invoiceData, items: updatedItems });
                }}
                className="col-span-1 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setInvoiceData({
              ...invoiceData,
              items: [...invoiceData.items, { description: "", quantity: 1, price: 0 }],
            })
          }
          className="text-blue-600 hover:underline mt-2"
        >
          + Add Item
        </button>
      </div>

      {/* Payment */}
      <div>
        <input
          type="number"
          onChange={(e) => setInvoiceData({ ...invoiceData, paid: Number(e.target.value) })}
          placeholder="Amount Paid"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500"
      >
        Create Invoice
      </button>
    </form>
  );
}

export default InvoiceForm;
