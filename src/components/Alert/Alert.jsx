const Alert = (props) => {
  return (
    <div className={`alert alert-${props.color}`} role="alert">
      {props.mensaje}
    </div>
  );
};

export default Alert;
