const Alert = ({ msg, color }) => {
  return (
    <div className={`alert alert-${color}`} role="alert">
      {msg}
    </div>
  );
};

export default Alert;
