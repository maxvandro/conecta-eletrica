"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMensagem("Salvando...");

    const { error } = await supabase.from("profissionais").insert([
      {
        nome,
        cidade,
        telefone,
        especialidade,
      },
    ]);

    if (error) {
      console.error("Erro no cadastro:", error);
      setMensagem("Erro ao cadastrar: " + error.message);
      return;
    }

    setMensagem("Cadastrado com sucesso!");
    setNome("");
    setCidade("");
    setTelefone("");
    setEspecialidade("");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0a1f44 0%, #0d2f6f 55%, #1c63d5 100%)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "560px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "18px",
          padding: "24px",
          boxShadow: "0 18px 45px rgba(0,0,0,0.20)",
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: "18px" }}>Cadastro</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            required
            style={inputStyle}
          />

          <input
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Cidade"
            required
            style={inputStyle}
          />

          <input
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Telefone com DDD"
            required
            style={inputStyle}
          />

          <input
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            placeholder="Especialidade"
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Cadastrar
          </button>
        </form>

        <p style={{ marginTop: "16px", minHeight: "24px" }}>{mensagem}</p>

        <a href="/profissionais" style={{ color: "#ffd54a", textDecoration: "none" }}>
          Ver profissionais
        </a>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle: React.CSSProperties = {
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px",
  fontWeight: "bold",
  background: "#d9f46a",
  color: "#15316b",
  cursor: "pointer",
};