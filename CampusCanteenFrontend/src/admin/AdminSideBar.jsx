import {
  LayoutDashboard,
  Utensils,
  ShoppingBag,
  Users,
  Settings,
} from "lucide-react";
import "./AdminSideBar.css";

function AdminSideBar({ activePage, setActivePage }) {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Menu Items",
      icon: Utensils,
    },
    {
      name: "Orders",
      icon: ShoppingBag,
    },
    {
      name: "Users",
      icon: Users,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="admin-sidebar">
      {/* Logo */}
      <div className="admin-logo">
        <div className="logo-icon">🍴</div>

        <div>
          <h2>College</h2>
          <span>Canteen</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="admin-nav">
        <p className="nav-title">MANAGEMENT</p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`nav-item ${activePage === item.name ? "active" : ""}`}
              onClick={() => setActivePage(item.name)}>
              <Icon size={20} />

              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default AdminSideBar;
