import { Link } from "react-router-dom";
export default function Acesso() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center text-white justify-items-center justify-center bg-gradient-to-br from-[#010f00] via-[#063100] to-[#010c00]">
      <div className="rounded-xl shadow-[0_0_20px_#00ff00] border border-green-400 flex flex-col items-center text-center gap-4 p-10 space-y-4 bg-gradient-to-br from-[#000000] via-[#052c00] to-[#000000]">
        <h1 className="text-4xl leading-relaxed tracking-wide font-bold">Acesso concedido.</h1>
        <p className="font-semibold italic leading-relaxed tracking-wide text-lg">Bem vindo Sr.Anonymous</p>
        <div className="flex flex-col gap-4">
          <Link to="/ferramenta">
            <button className="rounded-lg p-2 font-semibold leading-relaxed tracking-wide border flex flex-col border-green-400 bg-gradient-to-br from-[#010f00] via-[#063100] to-[#010c00]">
              acesso ao gerador de contas
            </button>
          </Link>
          <div>
            <a
              href="/oquesomos"
              className="text-blue-400 underline">
              oque somos?
            </a>
          </div>
          <p className=" font-extrabold underline leading-relaxed tracking-wide italic">
            Coded by Rian
          </p>
          <Link to="/">
            <button className="text-lg ont-bold flex flex-col space-y-4 bg-gradient-to-br border p-2 rounded-lg border-green-600 from-[#063300] via-[#011400] to-[#063100]">
              Meus outros projetos➡️.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
