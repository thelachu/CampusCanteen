function PopularItems({ items }) {
  return (
    <div className="dashboard-card popular-card">
      <div className="card-heading">
        <div>
          <span>Best Performers</span>
          <h2>Popular Items</h2>
        </div>
        <div className="popular-list">
          {items.map((item, index) => {
            <div className="popular-item" key={item.id}>
              <div className="popular-rank">{index + 1}</div>
              <div className="popular-info">
                <strong>{item.name}</strong>
                <span>{item.orders} orders</span>
              </div>
              <strong className="popular-revenue">₹{item.revenue}</strong>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularItems;
