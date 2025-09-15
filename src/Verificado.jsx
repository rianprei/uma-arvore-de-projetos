import { useState } from "react";
import { Link } from "react-router-dom";
export default function Verificado() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 p-10 text-white bg-gradient-to-br from-[#063300] via-[#011400] to-[#063100]">
      <h1 className="text-3xl font-bold leading-relaxed tracking-wide">Verifique seu Email</h1>
      <p className="mt-4">
        Não recebeu o E-mail?
        <a
          href=""
          className="text-blue-400 leading-relaxed tracking-wide underline">
          Reenviar o Email
        </a>
      </p>
      <p className=" font-semibold leading-relaxed tracking-wide text-lg">
        ao concordar com os termos de licensa da Anonymous você fara parte de
        algo novo, não tenha medo algo grande o aguarda.
      </p>
      <p className="text-white italic underline font-black ">Coded by Rian.</p>
      <Link to="/">
        <button className="bg-gradient-to-br p-2 font-extrabold border rounded-lg border-green-600 from-[#063300] via-[#011400] to-[#063100]">
          Meus outros projetos➡️.
        </button>
      </Link>
    </div>
  );
}
