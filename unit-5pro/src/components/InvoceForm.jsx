import React, { useState } from "react";

function InvoiceForm({ addInvoice }) {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("unpaid");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      addInvoice({
        id: Date.now(),
        description,
        status,
      });
      setDescription("");
      setStatus("unpaid");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Invoice Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="unpaid">Unpaid</option>
        <option value="paid">Paid</option>
        <option value="overdue">Overdue</option>
      </select>
      <button type="submit">Add Invoice</button>
    </form>
  );
}

export default InvoiceForm;
