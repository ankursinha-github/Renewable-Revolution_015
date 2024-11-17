// src/components/InvoiceForm.js
import React, { useState } from "react";
import { createInvoice } from "../services/InvoiceService";


function InvoiceForm() {
  const [invoiceData, setInvoiceData] = useState({
    customer: "",
    email: "",
    phone: "",
    address: "",
    dueDate: "",
    items: [
      { description: "", quantity: 1, price: 0 },
    ],
    subtotal: 0,
    tax: 0,
    discount: 0,
    all: 0,
    paid: 0,
    due: 0,
    unpaid:0
  });

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index][field] = field === "quantity" || field === "price" ? Number(value) : value;
    setInvoiceData({ ...invoiceData, items: updatedItems });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Perform calculations directly in a local object
    const updatedInvoiceData = { ...invoiceData };
  
    // Calculate totals
    updatedInvoiceData.subtotal = updatedInvoiceData.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    updatedInvoiceData.tax = updatedInvoiceData.subtotal * 0.1; // Example: 10% tax
    updatedInvoiceData.discount = 0; // Add discount logic if needed
    updatedInvoiceData.totalAmount = updatedInvoiceData.subtotal + updatedInvoiceData.tax - updatedInvoiceData.discount;
    updatedInvoiceData.due = updatedInvoiceData.totalAmount - updatedInvoiceData.paid;
    updatedInvoiceData.unpaid = updatedInvoiceData.totalAmount - updatedInvoiceData.paid;
  
    try {
      // Use the updated data in your submission
      await createInvoice(updatedInvoiceData);
      alert("Invoice created successfully");
    } catch (error) {
      console.error("Failed to create invoice", error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md space-y-4 max-w-3xl mx-auto">
      <h1 className="text-xl font-semibold">Create Invoice</h1>
      
      <div>
        <input
          type="text"
          value={invoiceData.customer}
          onChange={(e) => setInvoiceData({ ...invoiceData, customer: e.target.value })}
          placeholder="Customer Name"
          className="w-full text-black p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      
      <div>
        <input
          type="email"
          value={invoiceData.email}
          onChange={(e) => setInvoiceData({ ...invoiceData, email: e.target.value })}
          placeholder="Customer Email"
          className="w-full p-2 border text-black border-gray-300 rounded-md"
          required
        />
      </div>
      
      <div>
        <input
          type="text"
          value={invoiceData.phone}
          onChange={(e) => setInvoiceData({ ...invoiceData, phone: e.target.value })}
          placeholder="Customer Phone"
          className="w-full p-2 border text-black border-gray-300 rounded-md"
          required
        />
      </div>
      
      <div>
        <textarea
          value={invoiceData.address}
          onChange={(e) => setInvoiceData({ ...invoiceData, address: e.target.value })}
          placeholder="Customer Address"
          className="w-full p-2 border text-black border-gray-300 rounded-md"
          required
        />
      </div>
      
      <div>
        <input
          type="date"
          value={invoiceData.dueDate}
          onChange={(e) => setInvoiceData({ ...invoiceData, dueDate: e.target.value })}
          placeholder="Due Date"
          className="w-full p-2 border text-black border-gray-300 rounded-md"
          required
        />
      </div>

      <h2 className="text-lg font-semibold">Items</h2>
      {invoiceData.items.map((item, index) => (
        <div key={index} className="flex space-x-4 items-center">
          <input
            type="text"
            value={item.description}
            onChange={(e) => handleItemChange(index, "description", e.target.value)}
            placeholder="Item Description"
            className="flex-1 p-2 border text-black border-gray-300 rounded-md"
            required
          />
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
            placeholder="Quantity"
            className="w-20 p-2 border text-black border-gray-300 rounded-md"
            required
          />
          <input
            type="number"
            value={item.price}
            onChange={(e) => handleItemChange(index, "price", e.target.value)}
            placeholder="Price"
            className="w-24 p-2 border text-black border-gray-300 rounded-md"
            required
          />
          {index > 0 && (
            <button
              type="button"
              onClick={() => {
                const updatedItems = invoiceData.items.filter((_, i) => i !== index);
                setInvoiceData({ ...invoiceData, items: updatedItems });
              }}
              className="text-red-500"
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
        className="text-blue-500"
      >
        + Add Item
      </button>

      <div>
        <input
          type="number"
          value={invoiceData.paid}
          onChange={(e) => setInvoiceData({ ...invoiceData, paid: Number(e.target.value) })}
          placeholder="Amount Paid"
          className="w-full  text-black p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500"
      >
        Create Invoice
      </button>
    </form>
  );
}

export default InvoiceForm;