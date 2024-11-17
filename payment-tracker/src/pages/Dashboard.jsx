import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import InvoiceForm from "../components/InvoiceForm.jsx";
import InvoiceList from "../components/InvoiceList.jsx";
import EditInvoiceModal from "../components/EditInvoiceModal.jsx";
import { getDatabase, ref, onValue, remove, update } from "firebase/database";
import SendInvoiceButton from "../components/SendInvoiceButton.jsx";
import { getCompanyDetails } from "../services/CompanyServices.js";

function Dashboard() {
  const { logout } = useAuth();
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

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
    setSelectedInvoice(invoice);
    setShowDetails(true);
  };
  const companyDetails=getCompanyDetails();
  return (
    <div className="p-6 bg-gray-800 text-white">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">Create Invoice</h2>
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

      {showDetails && selectedInvoice && (
        <div className="bg-gray-700 p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold">Invoice Details</h3>
          <p>Customer: {selectedInvoice.customer}</p>
          <p>Email: {selectedInvoice.email}</p>
          <p>Total Amount: ${selectedInvoice.totalAmount}</p>
          <p>Paid: ${selectedInvoice.paid}</p>
          <p>Due: ${selectedInvoice.due}</p>
          <p>Items:</p>
          <ul className="ml-4">
            {selectedInvoice.items.map((item, index) => (
              <li key={index}>
                {item.description} - {item.quantity} x ${item.price} = $
                {item.quantity * item.price}
              </li>
            ))}
          </ul>
          <SendInvoiceButton invoice={selectedInvoice} company={companyDetails}/>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
