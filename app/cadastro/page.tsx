"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [email, setEmail] = useState("");
  const [aceitou, setAceitou] = useState(false);
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!aceitou) {
      setMensagem("Você precisa aceitar a Política de Privacidade para continuar.");
      return;
    }

    setMensagem("Salvando...");

    const { error } = await supabase.from("profissionais").insert([
      {
        nome,
        cidade,
        telefone,
        especialidade,
        email,
        status: "pendente",
        aceitou_lgpd: true,
        consentimento_em: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Erro no cadastro:", error);
      setMensagem("Erro ao cadastrar: " + error.message);
      return;
    }

    setMensagem("Cadastro enviado com sucesso! Aguarde aprovação.");
    setNome("");
    setCidade("");
    setTelefone("");
    setEspecialidade("");
    setEmail("");
    setAceitou(false);
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
          maxWidth: "620px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "18px",
          padding: "24px",
          boxShadow: "0 18px 45px rgba(0,0,0,0.20)",
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: "18px" }}>
          Cadastro de Profissional
        </h1>

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

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
            style={inputStyle}
          />

          <label
            style={{
              fontSize: "14px",
              lineHeight: "1.5",
              background: "rgba(255,255,255,0.06)",
              padding: "12px",
              borderRadius: "10px",
            }}
          >
            <input
              type="checkbox"
              checked={aceitou}
              onChange={(e) => setAceitou(e.target.checked)}
              style={{ marginRight: "8px" }}
            />
            Li e aceito a{" "}
            <a
              href="/privacidade"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffd54a" }}
            >
              Política de Privacidade
            </a>{" "}
            e autorizo o uso dos meus dados para análise e divulgação na plataforma.
          </label>

          <button type="submit" style={buttonStyle}>
            Cadastrar
          </button>
        </form>

        <p style={{ marginTop: "16px", minHeight: "24px" }}>{mensagem}</p>

        <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
          <a
            href="/profissionais"
            style={{ color: "#ffd54a", textDecoration: "none" }}
          >
            Ver profissionais
          </a>

          <a
            href="/privacidade"
            style={{ color: "#ffd54a", textDecoration: "none" }}
          >
            Política de Privacidade
          </a>
        </div>
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