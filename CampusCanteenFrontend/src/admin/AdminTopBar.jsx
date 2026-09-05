import { Bell, Search } from "lucide-react";

function AdminTopBar() {
  return (
    <header className="admin-topbar">
      <div>
        <p className="admin-breadcrumb"></p>Dashboard
        <h1>Welcome back, Admin</h1>
      </div>
      <div className="admin-topbar-right">
        <div className="admin-search">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>
        <button className="notification-btn">
          <Bell size={20} />
        </button>
        <div className="top-admin-profile">
          <div className="admin-avatar">A</div>
          <div>
            <strong>Admin</strong>
            <small>Administrator</small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminTopBar;
