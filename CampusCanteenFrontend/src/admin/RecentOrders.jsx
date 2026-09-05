function RecentOrders({ orders }) {
  return (
    <div className="dashboard-card orders-card">
      <div className="card-heading">
        <div>
          <span>Latest activity</span>
          <h2>Recent Orders</h2>
        </div>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="orders-table-wrapper">
        <table className="orders-table-wrapper">
          <thead>
            <tr>
              <th>Order</th>
              <th>User</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              <tr key={order.id}>
                <td>
                  <strong>{order.id}</strong>
                </td>
                <td>
                  <div className="table-user">
                    <div className="small-avatar">
                      {order.user?.charAt(0) || "?"}
                    </div>
                    <div>
                      <strong>{order.user}</strong>
                      <span>{order.email}</span>
                    </div>
                  </div>
                </td>
                <td>{order.items}</td>
                <td>
                  <strong>₹{order.amount}</strong>
                </td>
                <td>
                  <span
                    className={`order-status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
