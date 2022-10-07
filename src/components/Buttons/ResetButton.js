function ResetButton({ status, onClick }) {
  return (
    <button className="btn btn-outline-light ms-1" onClick={onClick}>
      <i className="bi bi-arrow-clockwise fs-3"></i>
    </button>
  );
}

export default ResetButton;
