// src/services/CustomerService.js
import { database } from "../firebase";
import { ref, set, push, get } from "firebase/database";

// Create Customer
export async function createCustomer(customerData) {
  const customerRef = push(ref(database, 'customers'));
  await set(customerRef, customerData);
}

// Get Customers
export async function getCustomers() {
  const customersRef = ref(database, 'customers');
  const snapshot = await get(customersRef);
  return snapshot.exists() ? snapshot.val() : {};
}
