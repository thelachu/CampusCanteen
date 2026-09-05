function Statcard({ title, value, icon: Icon, description }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className="stat-icon">
          <Icon size={21} />
        </div>
      </div>
      <p>{title}</p>
      <h2>{value}</h2>
      <span className="stat-description">{description}</span>
    </div>
  );
}

export default Statcard;
