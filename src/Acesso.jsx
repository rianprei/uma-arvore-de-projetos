import { Link } from "react-router-dom";
export default function Acesso() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center text-white justify-items-center justify-center bg-gradient-to-br from-[#010f00] via-[#063100] to-[#010c00]">
      <h1 className="text-4xl font-bold">Acesso concedido.</h1>
      <p className="font-bold text-lg">Bem vindo Sr.Anonimus</p>
      <Link to="/ferramenta">
        <button className="rounded-lg border border-green-400 bg-gradient-to-br from-[#010f00] via-[#063100] to-[#010c00]">
          acesso ao gerador de contas
        </button>
      </Link>
      <button></button>
    </div>
  );
}
