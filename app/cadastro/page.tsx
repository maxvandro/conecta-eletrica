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

    setMensagem("Enviando cadastro...");

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
      console.error(error);
      setMensagem("Erro ao cadastrar: " + error.message);
      return;
    }

    setMensagem("Cadastro enviado com sucesso. Agora ele ficará em análise antes de aparecer publicamente.");
    setNome("");
    setCidade("");
    setTelefone("");
    setEspecialidade("");
    setEmail("");
    setAceitou(false);
  }

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <div style={badgeStyle}>Cadastro profissional</div>

        <h1 style={titleStyle}>Faça parte da plataforma</h1>

        <p style={subtitleStyle}>
          Preencha seus dados para análise. Após aprovação, seu perfil poderá
          aparecer na área pública da plataforma.
        </p>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome completo"
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

          <div style={lgpdBoxStyle}>
            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={aceitou}
                onChange={(e) => setAceitou(e.target.checked)}
                style={{ marginRight: 8, marginTop: 3 }}
              />
              <span>
                Li e aceito a{" "}
                <a
                  href="/privacidade"
                  target="_blank"
                  rel="noreferrer"
                  style={linkGoldStyle}
                >
                  Política de Privacidade
                </a>{" "}
                e autorizo o tratamento dos meus dados para análise, aprovação e
                eventual divulgação do meu perfil na plataforma.
              </span>
            </label>
          </div>

          <button type="submit" style={buttonPrimaryStyle}>
            Enviar cadastro
          </button>
        </form>

        <p style={messageStyle}>{mensagem}</p>

        <div style={footerLinksStyle}>
          <a href="/profissionais" style={linkGoldStyle}>
            Ver profissionais aprovados
          </a>
          <a href="/privacidade" style={linkGoldStyle}>
            Política de Privacidade
          </a>
        </div>
      </div>
    </main>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #081a3a 0%, #0c2a66 55%, #1a5fd0 100%)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  padding: "24px",
};

const containerStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "680px",
  background: "rgba(255,255,255,0.09)",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "24px",
  padding: "28px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
  backdropFilter: "blur(6px)",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255, 213, 74, 0.45)",
  color: "#f5d35a",
  fontWeight: "bold",
  marginBottom: 18,
};

const titleStyle: React.CSSProperties = {
  margin: "0 0 12px 0",
  fontSize: "44px",
  lineHeight: 1.05,
};

const subtitleStyle: React.CSSProperties = {
  margin: "0 0 24px 0",
  fontSize: "18px",
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.92)",
};

const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const inputStyle: React.CSSProperties = {
  padding: "15px 16px",
  borderRadius: "12px",
  border: "none",
  fontSize: "16px",
  outline: "none",
  background: "#fff",
  color: "#1a1a1a",
};

const lgpdBoxStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "14px",
  padding: "14px",
  marginTop: "4px",
};

const checkboxLabelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  fontSize: "14px",
  lineHeight: 1.6,
};

const buttonPrimaryStyle: React.CSSProperties = {
  padding: "15px",
  borderRadius: "12px",
  border: "none",
  fontSize: "16px",
  fontWeight: "bold",
  background: "#d9f46a",
  color: "#15316b",
  cursor: "pointer",
  marginTop: "6px",
};

const messageStyle: React.CSSProperties = {
  marginTop: "18px",
  minHeight: "24px",
  lineHeight: 1.5,
};

const footerLinksStyle: React.CSSProperties = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
  marginTop: "10px",
};

const linkGoldStyle: React.CSSProperties = {
  color: "#ffd54a",
  textDecoration: "none",
  fontWeight: 600,
};