import React,{createContext,useState} from "react";
import Sidebar from "./Dashboard/Sidebar";
import Header from "./Dashboard/Header";
import RevenueChart from "./Dashboard/RevenueChart";
import Dashboard from "./pages/Dashboard";
import CompanyForm from "./components/CompanyForm";
import PaymentDashboard from "./components/PaymentTracker";

export const ComponentContext = createContext();

function DashboardMain() {

  const [currentComponent, setCurrentComponent] = useState('revenueChart');

  const componentsMap = {
    paymenttracker:<PaymentDashboard/>,
    revenueChart: <RevenueChart />,
    invoice:<Dashboard/>,
    company:<CompanyForm/>
  };

  return (
    <ComponentContext.Provider value={{ currentComponent, setCurrentComponent }}>
    <div className="bg-gray-900 text-gray-100 overflow-x-hidden min-h-screen">
      <Header />
      <div className="flex flex-col lg:flex-row p-3 gap-4">
        {/* Sidebar */}
        <Sidebar className="lg:static fixed z-10 inset-y-0 left-0 w-64 bg-gray-800 lg:block hidden" />

        {/* Main Content */}
        <main className="flex-1 bg-gray-800 p-4 rounded-lg h-[600px] overflow-scroll">
          <div className="bg-gray-700 p-5 rounded-md h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <i className="bx bx-trending-up text-teal-400 text-2xl"></i>
                <h2 className="text-lg font-semibold text-gray-100">Revenue Flow</h2>
              </div>
              <span className="text-xl font-bold text-gray-100">$24,300</span>
            </div>
            {componentsMap[currentComponent]}
          </div>
        </main>
      </div>
    </div>
    </ComponentContext.Provider>
  );
}

export default DashboardMain;
