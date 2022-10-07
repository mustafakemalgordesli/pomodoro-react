function StartButton({ status, onClick }) {
  return (
    <button
      className="btn btn-outline-light me-1"
      disabled={status}
      onClick={onClick}
    >
      <i className="bi bi-play fs-3"></i>
    </button>
  );
}

export default StartButton;
