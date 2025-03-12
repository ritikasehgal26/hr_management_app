// import "./all.css";

export default function Button({ children, type, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 rounded-lg transition ${className}`}
    >
      {children}
    </button>
  );
}
