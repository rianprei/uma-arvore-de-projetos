// src/FakeEmail.jsx
import { useState } from "react";

const nomes = [
  "Alex", "Rian", "Kai", "Niko", "Vega", "Raven", "Zero", "Jax", "Mika", "Nova",
  "Zed", "Aria", "Luna", "Orion", "Echo", "Rico", "Kade", "Sora", "Iris", "Ivo"
];
const sobrenomes = [
  "Silva", "Costa", "Ramos", "Moreira", "Alves", "Santos", "Pinto", "Cardozo",
  "Moraes", "Teixeira", "Azevedo", "Nogueira"
];
const dominios = ["gmail.com", "yahoo.com", "outlook.com", "protonmail.com"];

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarNomeCompleto() {
  const n = nomes[randInt(0, nomes.length - 1)];
  const s = sobrenomes[randInt(0, sobrenomes.length - 1)];
  return `${n} ${s}`;
}

function gerarTelefone(br = true) {
  // formato brasileiro +55 (XX) 9XXXX-XXXX
  if (br) {
    const ddd = String(randInt(11, 99));
    const parte1 = String(randInt(9000, 9999));
    const parte2 = String(randInt(1000, 9999));
    return `+55 (${ddd}) 9${parte1}-${parte2}`;
  }
  // genérico internacional
  return `+${randInt(1,99)} ${randInt(100,999)} ${randInt(1000,9999)}`;
}

function gerarEmail(nomeCompleto, digits = 3, dominio = "gmail.com") {
  // transforma "Rian Silva" -> rian.silva
  const base = nomeCompleto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acento
    .replace(/[^a-z\s]/g, "")
    .trim()
    .split(/\s+/)
    .join(".");
  const numeros = String(randInt(Math.pow(10, digits-1), Math.pow(10, digits)-1));
  return `${base}${numeros}@${dominio}`;
}

export default function Fe() {
  const [ultimo, setUltimo] = useState(null);
  const [history, setHistory] = useState([]);
  const [digits, setDigits] = useState(3);
  const [dominio, setDominio] = useState("gmail.com");
  const [brPhone, setBrPhone] = useState(true);

  const gerar = () => {
    const nome = gerarNomeCompleto();
    const tel = gerarTelefone(brPhone);
    const email = gerarEmail(nome, Number(digits), dominio);
    const item = { nome, email, tel, ts: new Date().toLocaleString() };
    setUltimo(item);
    setHistory(prev => [item, ...prev].slice(0, 12)); // guarda últimas 12
  };

  const copiar = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copiado pro clipboard!");
    } catch (err) {
      alert("Falha ao copiar — permite clipboard no navegador.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000] via-[#021400] to-[#000] text-green-200 p-6">
      <div className="w-full max-w-3xl space-y-6">
        <div className="rounded-xl p-6 bg-black/60 border border-green-700 shadow-lg">
          <h2 className="text-2xl font-bold font-mono mb-3">Gerador de conta fake</h2>

          <div className="flex gap-3 mb-4 flex-wrap">
            <label className="flex items-center gap-2">
              <span className="text-sm text-green-300">Dígitos</span>
              <input
                type="number"
                min={1}
                max={6}
                value={digits}
                onChange={(e) => setDigits(e.target.value)}
                className="w-20 p-1 text-black rounded"
              />
            </label>

            <label className="flex items-center gap-2">
              <span className="text-sm text-green-300">Domínio</span>
              <select
                value={dominio}
                onChange={(e) => setDominio(e.target.value)}
                className="p-1 text-black rounded"
              >
                {dominios.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={brPhone}
                onChange={(e) => setBrPhone(e.target.checked)}
                className="accent-green-400"
              />
              <span className="text-sm text-green-300">Telefone BR</span>
            </label>

            <button
              onClick={gerar}
              className="ml-auto px-4 py-2 bg-green-600 hover:bg-green-700 rounded font-bold"
            >
              Gerar
            </button>
          </div>

          {ultimo ? (
            <div className="mt-3 bg-green-900/10 border border-green-700 rounded p-4">
              <p className="font-semibold text-green-100 font-mono">Nome: <span className="font-normal">{ultimo.nome}</span></p>
              <p className="font-semibold text-green-100 font-mono">E-mail: <span className="font-normal">{ultimo.email}</span>
                <button onClick={() => copiar(ultimo.email)} className="ml-3 px-2 py-1 text-xs bg-green-600 hover:bg-green-700 rounded">Copiar</button>
              </p>
              <p className="font-semibold text-green-100 font-mono">Telefone: <span className="font-normal">{ultimo.tel}</span></p>
              <p className="text-xs text-green-300 mt-2">Gerado em {ultimo.ts}</p>
            </div>
          ) : (
            <p className="text-sm text-green-300/70">Clique em Gerar para criar uma conta falsa.</p>
          )}
        </div>

        {/* histórico */}
        <div className="rounded-xl p-4 bg-black/60 border border-green-700">
          <h3 className="font-bold font-mono mb-2">Histórico</h3>
          {history.length === 0 ? (
            <p className="text-sm text-green-300/60">Nenhuma geração ainda.</p>
          ) : (
            <ul className="space-y-2 max-h-60 overflow-y-auto">
              {history.map((h, i) => (
                <li key={i} className="flex justify-between items-center bg-black/30 p-2 rounded">
                  <div>
                    <div className="text-sm font-mono text-green-200">{h.email}</div>
                    <div className="text-xs text-green-300">{h.nome} · {h.tel}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => copiar(h.email)} className="px-2 py-1 text-xs bg-green-600 rounded">Copiar</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}
