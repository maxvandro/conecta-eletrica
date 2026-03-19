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

  function montarLinkWhatsapp(telefone: string) {
    const numeroLimpo = telefone.replace(/\D/g, "");
    return `https://wa.me/55${numeroLimpo}`;
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a1f44 0%, #0d2f6f 55%, #1c63d5 100%)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(255, 215, 92, 0.45)",
            background: "rgba(255,255,255,0.08)",
            color: "#f5d35a",
            fontWeight: "bold",
            marginBottom: "24px",
          }}
        >
          Profissionais cadastrados
        </div>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1.05",
            margin: "0 0 16px 0",
            maxWidth: "700px",
          }}
        >
          Encontre um profissional
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "28px",
            maxWidth: "760px",
            color: "rgba(255,255,255,0.92)",
          }}
        >
          Veja os profissionais disponíveis e escolha quem faz mais sentido para o seu atendimento.
        </p>

        {mensagem && dados.length === 0 ? (
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "20px",
              padding: "24px",
              fontSize: "18px",
            }}
          >
            {mensagem}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "18px",
            }}
          >
            {dados.map((p) => (
              <div
                key={p.id}
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "22px",
                  padding: "22px",
                  boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
                }}
              >
                <h2
                  style={{
                    marginTop: 0,
                    marginBottom: "16px",
                    color: "#f5d35a",
                    fontSize: "22px",
                  }}
                >
                  {p.nome}
                </h2>

                <p style={textStyle}>
                  <strong>Telefone:</strong> {p.telefone}
                </p>

                <p style={textStyle}>
                  <strong>E-mail:</strong> {p.email}
                </p>

                <p style={textStyle}>
                  <strong>Cidade:</strong> {p.cidade}
                </p>

                <p style={textStyle}>
                  <strong>Especialidade:</strong> {p.especialidade}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "20px",
                  }}
                >
                  <a
                    href={montarLinkWhatsapp(p.telefone)}
                    target="_blank"
                    rel="noreferrer"
                    style={{ flex: 1 }}
                  >
                    <button style={botaoWhatsapp}>WhatsApp</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "24px" }}>
          <a href="/" style={{ color: "#ffffff", textDecoration: "none" }}>
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </main>
  );
}

const textStyle: React.CSSProperties = {
  margin: "0 0 10px 0",
  fontSize: "16px",
  lineHeight: "1.5",
};

const botaoWhatsapp: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background: "#f1d35a",
  color: "#17326d",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};