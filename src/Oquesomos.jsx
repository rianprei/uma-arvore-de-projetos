import { Link } from "react-router-dom";
export default function Oquesomos() {
  return (
    <div className="min-h-screen flex flex-col text-white items-center justify-center justify-items-center text-center bg-gradient-to-br from-[#010f00] via-[#042200] to-[#010c00]">
      <div className="rounded-xl flex flex-col shadow-[0_0_20px_#00ff00] gap-6 space-y-4 p-10 max-w-[640px] h-auto border border-green-400 bg-gradient-to-br from-[#000000] via-[#001a00] to-[#000000]">
        <p className="text-3xl font-bold text-green-500 ">O que é Anonymous</p>
        <div className="text-xl leading-relaxed italic tracking-wide font-bold text-green-400">
          <p className="text-lg text-400 semibold">
            O Anonymous é um coletivo que se originou em 2003, representando a
            ideia de que múltiplos usuários de comunidades online atuam como uma
            entidade global e unificada.
          </p>
        </div>
        <div className="flex gap-4  justify-center">
          <div className="leading-relaxed  w-48 h-16 tracking-wide rounded-xl  bg-gradient-to-br from-[#000000] via-[#041f00] to-[#000000] border border-green-600 shadow-2xl">
            <p className="text-xl text-green-500 font-bold">Fundador</p>
            <p className="text-lg text-green-400 italic font-semibold">
              Aubrey Cottle
            </p>
          </div>
          <div className="leading-relaxed  w-48 h-16 tracking-wide rounded-xl  bg-gradient-to-br from-[#000000] via-[#041f00] to-[#000000] border border-green-600 shadow-2xl">
            <p className="text-xl text-green-500 font-bold">Fundação</p>
            <p className="text-lg text-green-400 italic font-semibold">2003</p>
          </div>
          <div className="leading-relaxed  w-48 h-auto tracking-wide rounded-xl  bg-gradient-to-br from-[#000000] via-[#041f00] to-[#000000] border border-green-600 shadow-2xl">
            <p className="text-xl text-green-500 font-bold">Membros</p>
            <p className="text-lg text-green-400 italic font-semibold">???</p>
          </div>
        </div>
        <p className="italic font-extrabold underline leading-relaxed tracking-wide">
          Coded by Rian.
        </p>
        <Link to="/">
          <button className="text-lg ont-bold p-2 bg-gradient-to-br border rounded-lg border-green-600 from-[#063300] via-[#011400] to-[#063100]">
            Meus outros projetos➡️.
          </button>
        </Link>
      </div>
    </div>
  );
}
