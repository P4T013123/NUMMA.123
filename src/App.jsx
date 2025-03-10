import { useState, useEffect } from "react";
import "./index.css"; // Importamos el archivo de estilos

export default function NumberGame() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateNumbers();
  }, []);

  function generateNumbers() {
    const n1 = Math.floor(Math.random() * 100);
    const n2 = Math.floor(Math.random() * 100);
    setNum1(n1);
    setNum2(n2);
  }

  function checkAnswer(selected, other) {
    if (selected > other) {
      setScore((prevScore) => prevScore + 1);
      generateNumbers();
    } else {
      alert(`Juego terminado! Puntuación: ${score}`);
      setScore(0);
      generateNumbers();
    }
  }

  return (
    <div className="container">
      <h1>Juego de Números</h1>
      <div className="number-container">
        <button className="number" onClick={() => checkAnswer(num1, num2)}>
          {num1}
        </button>
        <button className="number" onClick={() => checkAnswer(num2, num1)}>
          {num2}
        </button>
      </div>
      <p className="score">Puntuación: {score}</p>
    </div>
  );
}
