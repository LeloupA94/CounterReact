const ButtonMoin = ({ setCounter, counter }) => {
  return (
    <button
      className={`btnMoin ${counter === 0 ? "invisible" : ""}`}
      onClick={() => {
        counter > 0 && setCounter(counter - 1); // Vérifie si le compteur est supérieur à zéro avant de décrémenter
      }}
    >
      {counter === 0 ? "" : "-"}
    </button>
  );
};

export default ButtonMoin;
