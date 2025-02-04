import { useState, useEffect } from "react";

const NameSwitcher = () => {
    const [textIndex, setTextIndex] = useState(0);
    const words = ["Name", "E-mail", "Password", "Number", "Sensive Data", "Person Data"]; // palavras para alternar

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Troca a palavra a cada 2 segundos

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
    }, []);

    return (
        <span className="inline-block transition-opacity duration-1000 opacity-0 animate-fadeInOut">
            {words[textIndex]}
        </span>
    );
};

export default NameSwitcher;
