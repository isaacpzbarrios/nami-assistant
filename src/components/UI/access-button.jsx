import "../../styles/access-button.css";

function AccessButton({ text, handleClick }) {
  return (
    <div>
      <button className="btn-access" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}

export default AccessButton;
