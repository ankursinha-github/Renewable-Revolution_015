import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import InvoiceForm from "../components/InvoiceForm.jsx";
import InvoiceList from "../components/InvoiceList.jsx";
import EditInvoiceModal from "../components/EditInvoiceModal.jsx";
import { getDatabase, ref, onValue, remove, update } from "firebase/database";
import SendInvoiceButton from "../components/SendInvoiceButton.jsx";
import { getCompanyDetails } from "../services/CompanyServices.js";

function Dashboard() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [companyDetails,setComapanydetails]=useState(null);

  // Fetch invoices from Firebase Realtime Database
  useEffect(() => {
    const db = getDatabase();
    const invoicesRef = ref(db, "invoices");

    const unsubscribe = onValue(invoicesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedInvoices = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setInvoices(formattedInvoices);
      } else {
        setInvoices([]);
      }
    });

    return () => unsubscribe();
  }, []);



  const handleDelete = async (invoiceId) => {
    const db = getDatabase();
    try {
      await remove(ref(db, `invoices/${invoiceId}`));
      alert("Invoice deleted successfully");
    } catch (error) {
      console.error("Failed to delete invoice", error);
    }
  };

  const handleEdit = (invoice) => {
    setSelectedInvoice(invoice);
    setShowEditModal(true);
  };

  const handleViewDetails = (invoice) => {
    setComapanydetails(async()=>{await getCompanyDetails()});
    setSelectedInvoice(invoice);
    setShowDetails(true);
  };
  
  return (
    <div className="p-6 bg-gray-800 text-white">

      <section className="mb-6">
        <InvoiceForm />
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">Invoices</h2>
        <InvoiceList
          invoices={invoices} // Pass the invoices as props
          onEdit={handleEdit} // Pass the edit handler as props
          onDelete={handleDelete} // Pass the delete handler as props
          onViewDetails={handleViewDetails} // Pass the view details handler as props
        />
      </section>

      {showEditModal && (
        <EditInvoiceModal
          invoice={selectedInvoice}
          onClose={() => setShowEditModal(false)}
        />
      )}

{showDetails && selectedInvoice && companyDetails && (
  <div className="bg-white text-black p-6 rounded-md shadow-lg max-w-2xl mx-auto">
    <header className="flex justify-between items-center border-b pb-4 mb-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Invoice</h1>
        <p className="text-sm text-gray-500">Invoice ID: {selectedInvoice.id}</p>
      </div>
      <div className="text-right">
        <h2 className="text-lg font-semibold">{companyDetails.name}</h2>
        <p className="text-sm">{companyDetails.address}</p>
        <p className="text-sm">Phone: {companyDetails.phone}</p>
        <p className="text-sm">Email: {companyDetails.email}</p>
      </div>
    </header>

    <section className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800">Bill To:</h3>
      <p className="text-gray-600">{selectedInvoice.customer}</p>
      <p className="text-gray-600">{selectedInvoice.email}</p>
      <p className="text-gray-600">{selectedInvoice.address}</p>
    </section>

    <section>
      <table className="w-full text-left border-collapse border-spacing-0 border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border-b border-gray-300 px-4 py-2">Item</th>
            <th className="border-b border-gray-300 px-4 py-2 text-center">Quantity</th>
            <th className="border-b border-gray-300 px-4 py-2 text-center">Price</th>
            <th className="border-b border-gray-300 px-4 py-2 text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          {selectedInvoice.items.map((item, index) => (
            <tr key={index}>
              <td className="border-b border-gray-300 px-4 py-2">{item.description}</td>
              <td className="border-b border-gray-300 px-4 py-2 text-center">{item.quantity}</td>
              <td className="border-b border-gray-300 px-4 py-2 text-center">${item.price.toFixed(2)}</td>
              <td className="border-b border-gray-300 px-4 py-2 text-center">
                ${(item.quantity * item.price).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

    <footer className="mt-6 border-t pt-4">
      <div className="flex justify-between text-gray-700">
        <div>
          <p>Subtotal:</p>
          <p>Tax (10%):</p>
          <p>Discount:</p>
          <p>Total:</p>
          <p>Paid:</p>
          <p>Due:</p>
        </div>
        <div className="text-right">
          <p>${selectedInvoice.subtotal.toFixed(2)}</p>
          <p>${selectedInvoice.tax.toFixed(2)}</p>
          <p>${selectedInvoice.discount.toFixed(2)}</p>
          <p className="font-bold">${selectedInvoice.totalAmount.toFixed(2)}</p>
          <p>${selectedInvoice.paid.toFixed(2)}</p>
          <p className="text-red-500">${selectedInvoice.due.toFixed(2)}</p>
        </div>
      </div>
    </footer>
    <div className="mt-6 flex justify-end">
      <SendInvoiceButton invoice={selectedInvoice} company={companyDetails} />
    </div>
  </div>
)}

    </div>
  );
}

export default Dashboard;
