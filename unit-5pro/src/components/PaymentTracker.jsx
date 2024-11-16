import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import SendInvoiceButton from './SendInvoiceButton';

function PaymentTracker() {
  const [invoices, setInvoices] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchInvoices = async () => {
      const querySnapshot = await getDocs(collection(db, 'invoices'));
      const invoiceData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setInvoices(invoiceData);
    };
    fetchInvoices();
  }, []);

  const filteredInvoices = filter === 'all' 
    ? invoices 
    : invoices.filter(invoice => invoice.status === filter);

  return (
    <div>
      <h2>Payment Tracker</h2>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('paid')}>Paid</button>
        <button onClick={() => setFilter('unpaid')}>Unpaid</button>
        <button onClick={() => setFilter('overdue')}>Overdue</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Customer Name</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
  {filteredInvoices.map(invoice => (
    <tr key={invoice.id}>
      <td>{invoice.invoiceId}</td>
      <td>{invoice.customerName}</td>
      <td>{invoice.amount}</td>
      <td>{invoice.status}</td>
      <td><SendInvoiceButton invoice={invoice} /></td>
    </tr>
  ))}
</tbody>   
      </table>
    </div>
  );
}

export default PaymentTracker;
