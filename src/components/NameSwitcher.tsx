import { useState, useEffect } from "react";

const NameSwitcher = () => {
  const [textIndex, setTextIndex] = useState(0);
  const words = ["name", "e-mail", "password"]; // palavras para alternar

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Troca a palavra a cada 2 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <span>
      {words[textIndex]}
    </span>
  );
};

export default NameSwitcher;
