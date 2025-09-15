import { useState } from "react";
import { Link } from "react-router-dom";
export default function UseState() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rian");
  const valor1 = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const valor2 = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const valor3 = () => {
    setCount((prevCount) => prevCount * 2);
  };
  const valor4 = () => {
    setCount((prevCount) => prevCount / 2);
  };
  const valor5 = () => {
    setCount((prevCount) => prevCount * 0.01);
  };
  const valor6 = () => {
    setCount((prevCount) => -prevCount);
  };
  const valor7 = () => {
    setCount((prevCount) => prevCount ** 2);
  };
  const valorAC = () => {
    setCount(0);
  };
  const valor9 = () => {
    setCount((prevCount) => prevCount ** 3);
  };
  const valor10 = () => {
    setCount((prevCount) => prevCount ** prevCount);
  };
  const valor11 = () => {
    setCount((prevCount) => prevCount * prevCount);
  };
  const valor12 = () => {
    setCount(Math.sqrt(count));
  };
  const valor13 = () => {
    setCount((prev) => Math.cbrt(prev));
  };
  const valorInfinity = () => {
    setCount((prevCount) => prevCount / 0);
  };
  const valorNaN = () => {
    setCount(NaN);
  };
  const valorNull = () => {
    setCount(null);
  };
  const valorUndefined = () => {
    setCount(undefined);
  };
  const valorstringvazia = () => {
    setCount((prevCount) => prevCount + "");
  };
  const valorBigInt = () => {
    setCount((prev) => BigInt(prev) ** 1000n);
  };
  const valorSymbol = () => {
    setCount(Symbol("X"));
  };

  console.log(name);
  console.log(count);
  return (
    <div className="items-center min-h-screen  bg-gradient-to-br from-[#131313] via-[#202020] to-[#131313] flex flex-col text-white justify-center justify-items-center text-center">
      <div className="rounded-xl shadow-[0_0_20px_#000000] w-[600px] h-auto p-10 gap-4 space-y-4 flex flex-col border border-black bg-gradient-to-br from-[#131313] via-[#1d1d1d] to-[#131313]">
        <p className="truncate text-2xl font-bold leading-relaxed tracking-wide">
          {count}
        </p>
        <div className="gap-2 justify-center flex flex-wrap">
          <button
            className="leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-semibold"
            onClick={valor1}>
            +1
          </button>
          <button
            onClick={valor2}
            className="leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-semibold">
            -1
          </button>
          <button
            onClick={valor3}
            className="leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-semibold">
            x2
          </button>
          <button
            onClick={valor4}
            className="leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-semibold">
            :2
          </button>
          <button
            onClick={valor5}
            className="leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-semibold">
            %1
          </button>
          <button
            onClick={valor11}
            className="truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-semibold">
            {count}x{count}
          </button>
          <button
            onClick={valor7}
            className="truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-semibold">
            ²{count}
          </button>
          <button
            onClick={valor9}
            className="truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-extrabold">
            ³{count}
          </button>
          <button
            onClick={valor10}
            className=" truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-extrabold">
            {count}*{count}
          </button>
          <button
            onClick={valor12}
            className="truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-extrabold">
            ²√{count}
          </button>
          <button
            onClick={valor13}
            className="truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-extrabold">
            ³√{count}
          </button>
          <button
            onClick={valorInfinity}
            className="truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-extrabold">
            Infinity
          </button>
          <button
            onClick={valorNaN}
            className=" leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-extrabold">
            NaN
          </button>
          <button
            onClick={valorNull}
            className=" leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-extrabold">
            Null
          </button>
          <button
            onClick={valorUndefined}
            className="truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-extrabold">
            Undefined
          </button>
          <button
            onClick={valorstringvazia}
            className="truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-extrabold">
            StringV.
          </button>
          <button
            onClick={valorBigInt}
            className="truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-extrabold">
            BigInt
          </button>
          <button
            onClick={valorSymbol}
            className="truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-extrabold">
            Symbol
          </button>
          <button
            onClick={valor6}
            className="truncate leading-relaxed tracking-wide border border-black p-2 w-20 h-20 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] rounded-xl font-semibold">
            {-count}
          </button>
          <button
            onClick={valorAC}
            className="leading-relaxed tracking-wide border border-red-950 p-2 w-20 h-20 bg-gradient-to-br from-[#110000] via-[#240000] to-[#110000] rounded-xl font-extrabold">
            AC
          </button>
        </div>
        <p
          onChange={setName}
          className="text-2xl font-bold leading-relaxed tracking-wide">
          {name}
        </p>
        <input
          placeholder="Name"
          className="p-2 border border-black text-white bg-gradient-to-br from-[#131313] via-[#1d1d1d] to-[#131313] rounded-xl leading-relaxed tracking-wide"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Link to="/">
          <button className="text-lg ont-bold p-2 bg-gradient-to-br border rounded-lg border-black from-[#131313] via-[#1d1d1d] to-[#131313]">
            Meus outros projetos➡️.
          </button>
        </Link>
      </div>
    </div>
  );
}
