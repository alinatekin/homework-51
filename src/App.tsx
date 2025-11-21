import {useState} from "react";
import Ball from "./components/Ball.tsx";

const generateRandomNumbers = (): number [] => {
  const set = new Set <number>();

  while (set.size < 5) {
    const num = Math.floor(Math.random() * (36 - 5 + 1));
    set.add(num);
  }

  return Array.from(set).sort((a, b) => a - b);
};


const App: React.FC = () => {
  const defaultNumbers = [5, 11, 16, 23, 32];
  const [numbers, setNumbers] = useState<number[]>(defaultNumbers);

  const handleNewNumbersClick = () => {
    const newNumbers = generateRandomNumbers();
    setNumbers(newNumbers);
  };

  return (
      <>
      <div style={{ textAlign: "center", paddingTop: "40px" }}>
        <button onClick={handleNewNumbersClick}>New numbers</button>

        <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
        >
          {numbers.map((n) => (
              <Ball key={n} number={n} />
          ))}
        </div>
      </div>
      </>
  );
};



export default App
