import { useState } from "react";

import {
  ShoppingBag,
  IndianRupee,
  Users,
  Utensils,
  Plus,
  PlusIcon,
} from "lucide-react";

import AdminSideBar from "../AdminSideBar";
import AdminTopBar from "../AdminTopBar";
import Statcard from "../StatCard";
import SalesChart from "../SalesChart";
import PopularItems from "../PopularItems";
import RecentOrders from "../RecentOrders";
import AddMenuItem from "../AddMenuItem";

import "./Admin.css";

function Admin() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [showAddItem, setShowAddItem] = useState(false);

  // =========================
  // Dashboard Statistics
  // =========================

  const adminStats = {
    totalOrders: 128,
    totalSales: 15480,
    totalUsers: 86,
    totalItems: 24,
  };

  // =========================
  // Sales Chart Data
  // =========================

  const salesData = [
    {
      day: "Mon",
      sales: 2200,
    },
    {
      day: "Tue",
      sales: 3100,
    },
    {
      day: "Wed",
      sales: 2800,
    },
    {
      day: "Thu",
      sales: 3600,
    },
    {
      day: "Fri",
      sales: 4200,
    },
    {
      day: "Sat",
      sales: 5100,
    },
    {
      day: "Sun",
      sales: 3900,
    },
  ];

  // =========================
  // Popular Food Items
  // =========================

  const popularItems = [
    {
      id: 1,
      name: "Manchurian Noodles",
      orders: 42,
      sales: 2940,
    },
    {
      id: 2,
      name: "Jeera Rice",
      orders: 35,
      sales: 2800,
    },
    {
      id: 3,
      name: "Veg Meals",
      orders: 28,
      sales: 2800,
    },
    {
      id: 4,
      name: "Masala Dosa",
      orders: 24,
      sales: 1440,
    },
  ];

  // =========================
  // Recent Orders
  // =========================

  const recentOrders = [
    {
      id: "#ORD1001",
      customer: "Rahul",
      items: 3,
      amount: 240,
      status: "Completed",
    },
    {
      id: "#ORD1002",
      customer: "Priya",
      items: 2,
      amount: 150,
      status: "Preparing",
    },
    {
      id: "#ORD1003",
      customer: "Arjun",
      items: 4,
      amount: 360,
      status: "Completed",
    },
    {
      id: "#ORD1004",
      customer: "Sneha",
      items: 1,
      amount: 60,
      status: "Pending",
    },
    {
      id: "#ORD1005",
      customer: "Kiran",
      items: 2,
      amount: 170,
      status: "Completed",
    },
  ];

  return (
    <div className="admin-layout">
      {/* =========================
          Sidebar
      ========================= */}

      <AdminSideBar activePage={activePage} setActivePage={setActivePage} />

      {/* =========================
          Main Content
      ========================= */}

      <main className="admin-main">
        <AdminTopBar />

        {/* =========================
            Dashboard
        ========================= */}

        {activePage === "Dashboard" && (
          <div className="admin-content">
            {/* Page Heading */}

            <div className="admin-page-heading">
              <div>
                <span>Overview</span>
                <h2>Dashboard</h2>
              </div>

              <button
                className="add-item-btn"
                onClick={() => setShowAddItem(true)}>
                <PlusIcon size={18} />
                Add Menu Item
              </button>
            </div>

            {/* =========================
                Statistics
            ========================= */}

            <section className="stats-grid">
              <Statcard
                title="Total Orders"
                value={adminStats.totalOrders}
                icon={ShoppingBag}
                description="+12.5% from last week"
              />

              <Statcard
                title="Total Revenue"
                value={`₹${adminStats.totalSales}`}
                icon={IndianRupee}
                description="+8.2% from last week"
              />

              <Statcard
                title="Total Users"
                value={adminStats.totalUsers}
                icon={Users}
                description="+5 new users today"
              />

              <Statcard
                title="Menu Items"
                value={adminStats.totalItems}
                icon={Utensils}
                description="4 currently unavailable"
              />
            </section>

            {/* =========================
                Charts
            ========================= */}

            <section className="dashboard-grid">
              <SalesChart data={salesData} />

              <PopularItems items={popularItems} />
            </section>

            {/* =========================
                Recent Orders
            ========================= */}

            <RecentOrders orders={recentOrders} />
          </div>
        )}

        {/* =========================
            Menu Items
        ========================= */}

        {activePage === "Menu Items" && (
          <div className="admin-placeholder">
            <h2>Menu Management</h2>

            <p>Add, edit and manage all canteen menu items here.</p>

            <button
              className="add-item-btn"
              onClick={() => setShowAddItem(true)}>
              <Plus size={18} />
              Add Menu Item
            </button>
          </div>
        )}

        {/* =========================
            Orders
        ========================= */}

        {activePage === "Orders" && (
          <div className="admin-placeholder">
            <h2>Orders Management</h2>

            <p>All customer orders will appear here.</p>

            <RecentOrders orders={recentOrders} />
          </div>
        )}

        {/* =========================
            Users
        ========================= */}

        {activePage === "Users" && (
          <div className="admin-placeholder">
            <h2>Users</h2>

            <p>Registered users and their purchase history will appear here.</p>
          </div>
        )}

        {/* =========================
            Settings
        ========================= */}

        {activePage === "Settings" && (
          <div className="admin-placeholder">
            <h2>Admin Settings</h2>

            <p>Manage admin account and application settings.</p>
          </div>
        )}
      </main>

      {/* =========================
          Add Menu Item Modal
      ========================= */}

      {showAddItem && <AddMenuItem onClose={() => setShowAddItem(false)} />}
    </div>
  );
}

export default Admin;
