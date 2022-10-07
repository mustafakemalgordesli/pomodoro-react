function PauseButton({ status, onClick }) {
  return (
    <button
      className="btn btn-outline-light ms-1"
      disabled={!status}
      onClick={onClick}
    >
      <i className="bi bi-pause fs-3"></i>
    </button>
  );
}

export default PauseButton;
