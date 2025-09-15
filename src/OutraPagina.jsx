import { useState } from "react";
import { Link } from "react-router-dom";
export default function OutraPagina() {
  const [data, setData] = useState("");
  const [genero, setGenero] = useState("");

  return (
    <div className="flex flex-col items-center justify-center justify-items-center text-center h-screen text-white bg-gradient-to-br from-[#010800] via-[#023100] to-[#010800]">
      <div className=" flex flex-col shadow-[0_0_20px_#00ff00] gap-2 mt-1 mb-1 w-96 h-auto p-10 space-x-4 space-y-6 rounded-xl bg-gradient-to-br border border-green-900 from-[#063300] via-[#011400] to-[#063100] ">
        <h1 className="text-3xl font-extrabold">
          faça seu cadastro na Anonymous
        </h1>
        <p className="text-xl fonte-semi p-2 bold tracking-wide leading-relaxed">Preencha tudo</p>
        <input
          placeholder="Nome"
          type="text"
          name=""
          id=""
          className="text-lg font-bold p-2 bg-gradient-to-br h-8 border rounded-lg border-green-600 from-[#063300] via-[#011400] to-[#063100]"
        />
        <input
          type="text"
          placeholder="Numero ou Email"
          className="text-lg font-bold p-2 bg-gradient-to-br border h-8 rounded-lg border-green-600 from-[#063300] via-[#011400] to-[#063100]"
        />
        <input
          type="text"
          name=""
          placeholder="Senha"
          id=""
          className="text-lg font-bold p-2 border h-8 rounded-lg bg-gradient-to-br border-green-600 from-[#063300] via-[#011400] to-[#063100]"
        />
        <input
          className="text-lg font-bold p-2 border h-8 bg-gradient-to-br from-[#063300] via-[#011400] to-[#063100] rounded-lg border-green-600 "
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <div className="text-lg text-bold">
          <p>Genero:</p>

          <input
            type="radio"
            id="fem"
            name="genero"
            value="Feminino"
            checked={genero === "Feminino"}
            onChange={(e) => setGenero(e.target.value)}
          />
          <label htmlFor="fem">Feminino</label>

          <input
            type="radio"
            id="masc"
            name="genero"
            value="Masculino"
            checked={genero === "Masculino"}
            onChange={(e) => setGenero(e.target.value)}
          />
          <label htmlFor="masc">Masculino</label>
        </div>
        <div>
          <Link to="/verificado">
            <button className="text-xl font-bold p-2 w-64 h-12 bg-gradient-to-br border rounded-lg border-green-600 from-[#063300] via-[#011400] to-[#063100]">
              Cadastre-se
            </button>
          </Link>
          <div className="p-4">
            <Link to="/login">
              <button className="text-blue-400 underline">
                Já tem uma conta?
              </button>
            </Link>
            <div className="flex flex-col gap-2 p-2">
              <a
                href="/oquesomos"
                className="text-blue-400 underline">
                oque somos?
              </a>
            </div>
          </div>
          <div className="p-1">
            <p className="text-white italic leading-relaxed tracking-wide gap-2 p-2 underline font-black ">
              Coded by Rian.
            </p>
          </div>
          <Link to="/usestate">
            <button className="text-lg font-bold bg-gradient-to-br gap-2 p-2 border rounded-lg border-green-600 from-[#063300] via-[#011400] to-[#063100]">
              Meus outros projetos➡️.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
