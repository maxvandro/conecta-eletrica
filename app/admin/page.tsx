"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Profissional = {
  id: number;
  nome: string;
  cidade: string;
  telefone: string;
  especialidade: string;
  email: string;
  status: string;
};

export default function AdminPage() {
  const [dados, setDados] = useState<Profissional[]>([]);
  const [mensagem, setMensagem] = useState("Carregando...");

  async function carregar() {
    const { data, error } = await supabase
      .from("profissionais")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      setMensagem("Erro ao carregar: " + error.message);
      return;
    }

    setDados(data || []);
    setMensagem("");
  }

  async function atualizarStatus(id: number, status: string) {
    const { error } = await supabase
      .from("profissionais")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert("Erro ao atualizar");
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
        padding: "24px",
        background: "#0a1f44",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      <h1>Painel Admin</h1>

      {mensagem && <p>{mensagem}</p>}

      <div style={{ display: "grid", gap: "16px" }}>
        {dados.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#122b63",
              padding: "16px",
              borderRadius: "12px",
            }}
          >
            <h3>{p.nome}</h3>

            <p>Cidade: {p.cidade}</p>
            <p>Telefone: {p.telefone}</p>
            <p>Email: {p.email}</p>
            <p>Especialidade: {p.especialidade}</p>
            <p>Status: {p.status}</p>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => atualizarStatus(p.id, "aprovado")}
                style={{
                  background: "green",
                  color: "#fff",
                  padding: "8px",
                  border: "none",
                  borderRadius: "6px",
                }}
              >
                Aprovar
              </button>

              <button
                onClick={() => atualizarStatus(p.id, "bloqueado")}
                style={{
                  background: "red",
                  color: "#fff",
                  padding: "8px",
                  border: "none",
                  borderRadius: "6px",
                }}
              >
                Bloquear
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}