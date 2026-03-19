"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [email, setEmail] = useState("");
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
        email,
        status: "pendente", // 🔥 AQUI ESTÁ O CONTROLE
      },
    ]);

    if (error) {
      console.error("Erro no cadastro:", error);
      setMensagem("Erro ao cadastrar: " + error.message);
      return;
    }

    setMensagem("Cadastro enviado! Aguarde aprovação.");
    setNome("");
    setCidade("");
    setTelefone("");
    setEspecialidade("");
    setEmail("");
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
        }}
      >
        <h1>Cadastro de Profissional</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <input
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <input
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />

          <input
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />

          <input
            placeholder="Especialidade"
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Cadastrar</button>
        </form>

        <p>{mensagem}</p>

        <a href="/profissionais">Ver profissionais</a>
      </div>
    </main>
  );
}