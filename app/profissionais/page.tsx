"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Profissional = {
  id: number;
  nome: string;
  cidade: string;
};

export default function ProfissionaisPage() {
  const [dados, setDados] = useState<Profissional[]>([]);
  const [mensagem, setMensagem] = useState("Carregando...");

  async function carregar() {
    const { data, error } = await supabase
      .from("profissionais")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Erro ao carregar:", error);
      setMensagem("Erro ao carregar: " + error.message);
      return;
    }

    setDados(data || []);
    setMensagem("");
  }

  async function excluir(id: number) {
    const { error } = await supabase.from("profissionais").delete().eq("id", id);

    if (error) {
      console.error("Erro ao excluir:", error);
      alert("Erro ao excluir: " + error.message);
      return;
    }

    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a1f44",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
      }}
    >
      <h1>Profissionais</h1>

      {mensagem && <p>{mensagem}</p>}

      {dados.map((p) => (
        <div
          key={p.id}
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "12px",
          }}
        >
          <p><strong>Nome:</strong> {p.nome}</p>
          <p><strong>Cidade:</strong> {p.cidade}</p>

          <button
            onClick={() => excluir(p.id)}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "none",
              background: "#ff4d4d",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Excluir
          </button>
        </div>
      ))}

      <a href="/cadastro" style={{ color: "#ffd54a" }}>
        Ir para cadastro
      </a>
    </main>
  );
}