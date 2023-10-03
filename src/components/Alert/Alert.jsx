const Alert = (props) => {
  return (
    <div className={`alert alert-${props.color}`} role="alert">
      {props.msg}
    </div>
  );
};

export default Alert;
