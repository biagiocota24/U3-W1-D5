const InfoLink = ({ href = "#", children }) => (
  <a href={href} className="fw-bold text-info text-decoration-none">
    {children}
  </a>
);

export default InfoLink;