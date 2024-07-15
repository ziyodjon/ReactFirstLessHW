export default function Btn({ text, handleClick, classes }) {
  return (
    <button onClick={handleClick} className={classes}>
      {text}
    </button>
  );
}
