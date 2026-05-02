const SettingsRow = ({ title, children }) => {
  return (
    <div className="row border-bottom border-3 gy-3 py-3">
      <div className="col-12 col-md-4 text-center text-md-start">
        <h2 className="fs-4 text-uppercase">{title}</h2>
      </div>
      <div className="col-12 col-md-8">
        {children}
      </div>
    </div>
  );
};

export default SettingsRow;