"use client";

import { FormEvent, useState } from "react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [especialidade, setEspecialidade] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const novoProfissional = {
      id: Date.now(),
      nome,
      email,
      telefone,
      cidade,
      especialidade,
    };

    const profissionaisSalvos = localStorage.getItem("profissionais");
    const profissionais = profissionaisSalvos
      ? JSON.parse(profissionaisSalvos)
      : [];

    profissionais.push(novoProfissional);

    localStorage.setItem("profissionais", JSON.stringify(profissionais));

    alert("Profissional cadastrado com sucesso!");

    setNome("");
    setEmail("");
    setTelefone("");
    setCidade("");
    setEspecialidade("");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
        background:
          "linear-gradient(135deg, #0b2c6b 0%, #1147a8 45%, #1c63d5 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          background: "rgba(255,255,255,0.10)",
          border: "1px solid rgba(255,255,255,0.18)",
          backdropFilter: "blur(6px)",
          borderRadius: "24px",
          padding: "40px 28px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "999px",
            backgroundColor: "rgba(255, 210, 60, 0.18)",
            border: "1px solid rgba(255, 210, 60, 0.45)",
            color: "#ffd54a",
            fontWeight: "bold",
            fontSize: "14px",
            marginBottom: "18px",
          }}
        >
          Cadastro de profissional
        </div>

        <h1
          style={{
            fontSize: "38px",
            margin: "0 0 10px 0",
            lineHeight: "1.1",
            color: "#ffffff",
            textShadow: "0 4px 18px rgba(0,0,0,0.25)",
          }}
        >
          Entre para o Conecta Elétrica
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.92)",
            margin: "0 0 24px 0",
          }}
        >
          Preencha seus dados e apareça para quem precisa de um profissional da área elétrica.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <input
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Especialidade"
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              background:
                "linear-gradient(135deg, #ffe066 0%, #ffb300 60%, #ff8f00 100%)",
              color: "#0b2c6b",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 12px 30px rgba(255, 193, 7, 0.45)",
              marginTop: "6px",
            }}
          >
            Cadastrar profissional
          </button>

          <a
            href="/"
            style={{
              textDecoration: "none",
              textAlign: "center",
              marginTop: "8px",
              color: "#ffffff",
              opacity: 0.9,
            }}
          >
            Voltar para a página inicial
          </a>
        </form>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  fontSize: "16px",
  border: "1px solid rgba(255,255,255,0.20)",
  borderRadius: "12px",
  outline: "none",
  backgroundColor: "rgba(255,255,255,0.92)",
  color: "#0f172a",
};