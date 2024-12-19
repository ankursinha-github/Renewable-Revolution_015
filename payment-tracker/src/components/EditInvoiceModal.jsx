import React, { useState } from "react";
import { getDatabase, ref, update } from "firebase/database";

function EditInvoiceModal({ invoice, onClose }) {
  const [formData, setFormData] = useState(invoice);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase();
    try {
      await update(ref(db, `invoices/${invoice.id}`), formData);
      alert("Invoice updated successfully");
      onClose();
    } catch (error) {
      console.error("Failed to update invoice", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit Invoice</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            placeholder="Customer"
            className="mb-2 p-2 rounded-md w-full text-black"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-2 p-2 rounded-md w-full text-black"
          />
          {/* Add other fields */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
          >
            Save Changes
          </button>
        </form>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md mt-4"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditInvoiceModal;
