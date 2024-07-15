export default function Button({ text, handleClick, classes }) {
  return (
    <button onClick={handleClick} className={`btn ${classes}`}>
      {text}
    </button>
  );
}
