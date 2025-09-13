import { Link } from "react-router-dom";
export default function Logando() {
  return (
    <div className="flex flex-col items-center text-center bg-gradient-to-br from-[#010f00] via-[#063100] to-[#010c00] justify-items-center justify-center h-screen text-white ">
      <div className="flex flex-col text-center items-center rounded-lg border border-green-600 shadow-2xl w-auto h-auto p-10 space-y-3 gap-3 bg-gradient-to-br from-[#000000] via-[#042400] to-[#000000]">
        <h1 className="text-3xl font-bold ">Entrar na Anonymous</h1>
        <input
          type="text"
          placeholder="Email ou Numero"
          className="rounded-lg border border-green-600 bg-gradient-to-br from-[#021400] via-[#022900] to-[#031800]"
        />
        <input
          type="text"
          placeholder="Senha"
          className="rounded-lg border border-green-600 bg-gradient-to-br from-[#021400] via-[#022900] to-[#031800]"
        />
        <Link to="/acesso"
        >
        <button className="p-2 w-auto   h-12 rounded-xl border border-green-600 bg-gradient-to-br from-[#021400] via-[#022900] to-[#031800]">
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
        <p className="font-extrabold underline italic">Coded by Rian</p>
        <Link
            to="/">
            <button className="text-lg ont-bold bg-gradient-to-br h-8 border rounded-lg border-green-600 from-[#063300] via-[#011400] to-[#063100]">
              Meus outros projetos➡️.
            </button>
          </Link>
      </div>
    </div>
  );
}
