import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
function App() {
  const [numeroSomar, setNumeroSomar] = useState("");
  const [numeroSet, setNumeroSet] = useState("");
  const [historico, setHistorico] = useState([]);
  const [operacao, setOperacao] = useState("+");
  const [amendoin, setAmendoin] = useState(() => {
    const valorSalvo = localStorage.getItem("amendoin");
    return valorSalvo ? Number(valorSalvo) : 0;
  });

  useEffect(() => {
    localStorage.setItem("amendoin", amendoin);
  }, [amendoin]);

  const registrar = (acao, resultado) => {
    setHistorico((prev) => [...prev, `${acao} → ${resultado}`]);
  };

  const valor1 = () => {
    const novo = amendoin + 1;
    setAmendoin(novo);
    registrar("+1", novo);
  };

  const valor2 = () => {
    const novo = amendoin - 1;
    setAmendoin(novo);
    registrar("-1", novo);
  };

  const valor3 = () => {
    const novo = amendoin * 2;
    setAmendoin(novo);
    registrar("x2", novo);
  };

  const valor4 = () => {
    const novo = amendoin / 2;
    setAmendoin(novo);
    registrar("÷2", novo);
  };

  const valor5 = () => {
    const novo = amendoin * 0.01;
    setAmendoin(novo);
    registrar("%1", novo);
  };

  const valorAC = () => {
    setAmendoin(0);
    registrar("AC", 0);
  };
  const valor7 = () => {
    const novo = -amendoin;
    setAmendoin(novo);
    registrar("-", novo);
  };
  const valor8 = () => {
    const antigo = amendoin;
    const novo = antigo * antigo;
    setAmendoin(novo);
    registrar(`${antigo}x${antigo}`, novo);
  };
  const valorRaiz = () => {
    const antigo = amendoin;
    const novo = Math.sqrt(amendoin);
    setAmendoin(novo);
    registrar(`√(${antigo})`, novo);
  };
  const valorRandom = () => {
    const novo = Math.floor(Math.random() * 101);
    setAmendoin(novo);
    registrar("🎲", novo);
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#000] flex justify-center items-center min-h-screen text-blue-400">
      <div className="shadow-[0_0_20px_#0004ff] space-y-4 w-96 mt-4 h-auto rounded-xl border border-blue-400 p-10 bg-gray-900/40 text-center">
        <p className="font-extrabold">
          Contador Neon PRO MAX PREMIUN SUPER ULTRA MEGA PLUS
        </p>
        <p className="font-bold text-2xl">{amendoin}</p>

        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={valor1}
            className="bg-gradient-to-br from-[#051d55] via-[#1100ff] to-[#04083f] border border-blue-400 hover:bg-blue-800 font-semibold w-12 h-12 rounded-xl">
            +1
          </button>
          <button
            onClick={valor2}
            className="bg-gradient-to-br from-[#051d55] via-[#1100ff] to-[#04083f] border border-blue-400 hover:bg-blue-800 font-semibold w-12 h-12 rounded-xl">
            -1
          </button>
          <button
            onClick={valor3}
            className="bg-gradient-to-br from-[#051d55] via-[#1100ff] to-[#04083f] border border-blue-400 hover:bg-blue-800 font-semibold w-12 h-12 rounded-xl">
            x2
          </button>
          <button
            onClick={valor4}
            className="bg-gradient-to-br from-[#051d55] via-[#1100ff] to-[#04083f] border border-blue-400 hover:bg-blue-800 font-semibold w-12 h-12 rounded-xl">
            ÷2
          </button>
          <button
            onClick={valor5}
            className="bg-gradient-to-br from-[#051d55] via-[#1100ff] to-[#04083f] border border-blue-400  hover:bg-blue-800 font-semibold w-12 h-12 rounded-xl">
            %1
          </button>
          <button
            onClick={valor7}
            className="truncate bg-gradient-to-br from-[#051d55] via-[#1100ff] to-[#04083f] border border-blue-400  hover:bg-blue-800 font-semibold w-12 h-12 rounded-xl">
            {-amendoin}
          </button>
          <button
            onClick={valor8}
            className="truncate bg-gradient-to-br from-[#051d55] via-[#1100ff] to-[#04083f] border border-blue-400  hover:bg-blue-800 font-semibold w-12 h-12 rounded-xl">
            x{amendoin}
          </button>

          <button
            onClick={valorRaiz}
            className="truncate bg-gradient-to-br from-[#051d55] via-[#1100ff] to-[#04083f] border border-blue-400  hover:bg-blue-800 font-semibold w-12 h-12 rounded-xl">
            √{amendoin}
          </button>
          <button
            onClick={valorRandom}
            className="bg-gradient-to-br from-[#042502] via-[#09ff00] to-[#042502] border border-green-400  hover:bg-blue-800 font-semibold w-12 h-12 rounded-xl">
            🎲
          </button>
          <button
            onClick={valorAC}
            className="bg-gradient-to-br from-[#310707] via-[#ff0000] to-[#3a0303] border border-red-400 text-white hover:bg-red-800 font-extrabold w-12 h-12 rounded-lg">
            AC
          </button>
        </div>
        <div className="flex gap-2 w-full">
          <select
            value={operacao}
            onChange={(e) => setOperacao(e.target.value)}
            className="bg-blue-950 border bg-gradient-to-br from-[#00091f] via-[#05004b] to-[#00091f] border-blue-900 text-blue-400 font-bold rounded-lg px-2">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">x</option>
            <option value="/">÷</option>
            <option value="%">%</option>
          </select>

          <input
            type="number"
            value={numeroSomar}
            onChange={(e) => setNumeroSomar(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const valor = Number(numeroSomar);
                let novo = amendoin;
                switch (operacao) {
                  case "+":
                    novo = amendoin + valor;
                    break;
                  case "-":
                    novo = amendoin - valor;
                    break;
                  case "*":
                    novo = amendoin * valor;
                    break;
                  case "/":
                    novo = amendoin / valor;
                    break;
                  case "%":
                    novo = (amendoin * valor) / 100;
                    break;
                  default:
                    break;
                }

                setAmendoin(novo);
                registrar(`${operacao}${valor}`, novo);
                setNumeroSomar("");
              }
            }}
            placeholder="Digite o número"
            className="flex-1 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#000] 
               text-blue-400 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        <input
          type="number"
          value={numeroSet}
          onChange={(e) => setNumeroSet(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const novo = Number(numeroSet);
              setAmendoin(novo);
              registrar("Definiu", novo);
              setNumeroSet("");
            }
          }}
          placeholder="Digite para definir"
          className="mb-4 p-2 border bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#000] text-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 w-full"
        />
        <div className="border border-blue-400  text-sm overflow-y-auto text-left max-h-32 w-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#000] rounded-xl p-2">
          <p className="font-bold text-blue-400 mb-1">Histórico:</p>
          {historico.length === 0 ? (
            <p className="text-blue-400">Nenhuma operação ainda</p>
          ) : (
            historico.map((item, index) => (
              <p
                key={index}
                className="text-gray-300">
                {item}
              </p>
            ))
          )}
        </div>
        <p className="text-white italic font-extrabold underline leading-relaxed tracking-wide ">
          Coded by Rian.
        </p>
        <div className="mt-6">
          <Link to="/outra">
            <button className="bg-gradient-to-br font-bold rounded-lg from-[#010016] via-[#030030] to-[#030014] border border-blue-950 px-4 py-2 hover:bg-green-600 transition">
              Meus outros projetos➡️.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
