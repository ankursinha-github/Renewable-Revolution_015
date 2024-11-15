import { useAuth } from '../context/AuthContext.jsx';
import InvoiceForm from '../components/InvoiceForm.jsx';
import CustomerForm from '../components/CustomerForm.jsx';
import InvoiceList from '../components/InvoiceList.jsx';

function Dashboard() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.reload(); // Refresh the page to reset user session
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <section style={{ flex: 1 }}>
          <h2>Create Invoice</h2>
          <InvoiceForm />
        </section>

        <section style={{ flex: 1 }}>
          <h2>Manage Customers</h2>
          <CustomerForm />
        </section>
      </div>

      <section style={{ marginTop: '20px' }}>
        <h2>Invoices</h2>
        <InvoiceList />
      </section>
    </div>
  );
}

export default Dashboard;
