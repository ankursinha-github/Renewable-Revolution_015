export const fetchPaymentStatus =  async (invoiceId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const statuses = ["paid", "unpaid", "overdue"];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        resolve({ id: invoiceId, status });
      }, 1000);
    });
  };
  