import { send } from "emailjs-com";

function SendInvoiceButton({ invoice },{company}) {
  const sendInvoice = () => {
    // Check if all necessary fields exist
    if (!invoice || !invoice.id || !invoice.customer || !invoice.email || !invoice.totalAmount) {
      alert("Missing invoice information. Cannot send email.");
      return;
    }

    send(
      "service_bp75qrb", // Replace with your EmailJS service ID
      "template_v1slm9g", // Replace with your EmailJS template ID
      {
        invoiceId: invoice.id, // Correct key to match your invoice object
        customerName: invoice.customer, // Use correct customer name field
        amount: invoice.totalAmount, // Use total amount for the invoice
        status: invoice.paid === invoice.totalAmount ? "Paid" : "Unpaid", // Status logic
        email: invoice.email, // Customer's email
        companyEmail:company.email,
        companyAddress:company.address,
        companyName:company.name,
        pin:company.pin,
        message:"This is your invoice."
      },
      "Y0xNzESVRb8U-2PQF" // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Invoice sent successfully!");
      })
      .catch((err) => {
        console.error("Failed to send invoice email:", err);
        alert("Failed to send invoice. Please try again.");
      });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-md"
      onClick={sendInvoice}
    >
      Send Invoice
    </button>
  );
}

export default SendInvoiceButton;
