// src/components/CompanyForm.js
import React, { useEffect, useState } from "react";
import { saveCompanyDetails, getCompanyDetails } from "../services/CompanyServices.js";
import { useAuth } from "../context/AuthContext";

function CompanyForm() {
  const { currentUser } = useAuth();
  const [companyData, setCompanyData] = useState({
    name: "",
    address: "",
    pin: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch company details for the current user
    const fetchCompanyDetails = async () => {
      if (currentUser) {
        const data = await getCompanyDetails(currentUser.uid);
        if (data) {
          setCompanyData(data);
        }
      }
    };
    fetchCompanyDetails();
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await saveCompanyDetails(currentUser.uid, companyData);
      alert("Company details saved successfully!");
    } catch (error) {
      console.error("Error saving company details", error);
      alert("Failed to save company details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Company Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Company Name
          </label>
          <input
            id="name"
            name="name"
            value={companyData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-400"
            placeholder="Enter your company name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={companyData.address}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-400"
            placeholder="Enter your company address"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pin" className="block text-sm font-medium text-gray-600">
            PIN Code
          </label>
          <input
            id="pin"
            name="pin"
            type="text"
            value={companyData.pin}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-400"
            placeholder="Enter your PIN code"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={companyData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-400"
            placeholder="Enter your email address"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Details"}
        </button>
      </form>
    </div>
  );
}

export default CompanyForm;
