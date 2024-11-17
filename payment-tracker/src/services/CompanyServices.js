// src/services/CompanyService.js
import { database } from "../firebase";
import { ref, set, get } from "firebase/database";

// Save or Update Company Details
export async function saveCompanyDetails(uid, companyData) {
  const companyRef = ref(database, `companies/${uid}`);
  await set(companyRef, companyData);
}

// Get Company Details
export async function getCompanyDetails(uid) {
  const companyRef = ref(database, `companies/${uid}`);
  const snapshot = await get(companyRef);
  return snapshot.exists() ? snapshot.val() : null;
}
