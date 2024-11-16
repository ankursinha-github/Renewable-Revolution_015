import { send } from 'emailjs-com';

function SendInvoiceButton({ invoice }) {
  const sendInvoice = () => {
    send(
      'your_service_id', 
      'your_template_id', 
      {
        invoiceId: invoice.invoiceId,
        customerName: invoice.customerName,
        amount: invoice.amount,
        status: invoice.status,
        email: invoice.customerEmail 
      },
      'your_user_id'
    )
    .then(response => {
      alert('Invoice sent successfully!');
    })
    .catch(err => {
      alert('Failed to send invoice: ', err);
    });
  };

  return (
    <button onClick={sendInvoice}>Send Invoice</button>
  );
}

export default SendInvoiceButton;
