import { useState } from "react";
import { Link } from "react-router-dom";
export default function Verificado() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 p-10 text-white bg-gradient-to-br 0 from-[#063300] via-[#011400] to-[#063100]">
      <h1 className="text-3xl font-bold">Verifique seu Email</h1>
      <p className="mt-4">
        Não recebeu o e-mail?{" "}
        <a
          href=""
          className="text-blue-400 underline">
          Reenviar o Email
        </a>
      </p>
      <p className="fonte font-semibold text-lg">ao concordar com os termos de licensa da Anonymous você fara parte de algo novo, não tenha medo algo grande o aguarda.</p>
      <p className="text-white italic underline font-black ">Coded by Rian.</p>
      <Link to="/">
        <button className="bg-gradient-to-br px-4 py-2 font-extrabold border rounded-lg border-green-600 from-[#063300] via-[#011400] to-[#063100]">
          Meus outros projetos➡️.
        </button>
      </Link>
    </div>
  );
}
