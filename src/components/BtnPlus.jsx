const BtnPlus = ({ setCounter, counter }) => {
  return (
    <button
      className={`btnPlus ${counter === 10 ? "invisible" : ""}`}
      onClick={() => {
        counter < 10 && setCounter(counter + 1); // Vérifie si le compteur est supérieur à zéro avant de décrémenter
      }}
    >
      {counter === 10 ? "" : "+"}
    </button>
  );
};

export default BtnPlus;
