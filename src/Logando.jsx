import { Link } from "react-router-dom";
export default function Logando() {
  return (
    <div className="flex flex-col items-center text-center bg-gradient-to-br from-[#010f00] via-[#063100] to-[#010c00] justify-items-center justify-center h-screen text-white ">
      <div className="shadow-[0_0_20px_#00ff00] flex flex-col text-center items-center rounded-lg border border-green-600 w-auto h-auto p-10 space-y-3 gap-3 bg-gradient-to-br from-[#000000] via-[#042400] to-[#000000]">
        <h1 className="text-3xl font-bold leading-relaxed tracking-wide">Entrar na Anonymous</h1>
        <input
          type="text"
          placeholder="Email ou Numero"
          className="rounded-lg leading-relaxed tracking-wide text-lg p-2 font-bold border h-8 border-green-600 bg-gradient-to-br from-[#021400] via-[#022900] to-[#031800]"
        />
        <input
          type="text"
          placeholder="Senha"
          className="rounded-lg leading-relaxed tracking-wide p-2 font-bold text-lg border h-8 border-green-600 bg-gradient-to-br from-[#021400] via-[#022900] to-[#031800]"
        />
        <Link to="/acesso">
          <button className="p-2 leading-relaxed tracking-wide w-36 font-extrabold h-auto rounded-lg border border-green-600 bg-gradient-to-br from-[#021400] via-[#022900] to-[#031800]">
            Entrar
          </button>
        </Link>
        <p>
          Não tem uma conta?
          <a
            href="/outra"
            className="text-blue-400 underline">
            Crie aqui
          </a>
        </p>
        <p className=" italic font-extrabold underline leading-relaxed tracking-wide">
          Coded by Rian
        </p>
        <Link to="/">
          <button className="text-lg font-bold bg-gradient-to-br p-2 border rounded-lg border-green-600 from-[#063300] via-[#011400] to-[#063100]">
            Meus outros projetos➡️.
          </button>
        </Link>
      </div>
    </div>
  );
}
