"use client";

import { useEffect, useState } from "react";

type Profissional = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  especialidade: string;
};

export default function ProfissionaisPage() {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);

  useEffect(() => {
    const profissionaisSalvos = localStorage.getItem("profissionais");
    const lista = profissionaisSalvos ? JSON.parse(profissionaisSalvos) : [];
    setProfissionais(lista);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
        background:
          "linear-gradient(135deg, #0a1f44 0%, #0d2f6f 50%, #1c63d5 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
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
          Profissionais cadastrados
        </div>

        <h1
          style={{
            fontSize: "40px",
            margin: "0 0 12px 0",
          }}
        >
          Encontre um profissional
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.92)",
            marginBottom: "28px",
            maxWidth: "700px",
          }}
        >
          Veja os profissionais disponíveis e escolha quem faz mais sentido para o seu atendimento.
        </p>

        {profissionais.length === 0 ? (
          <div
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(6px)",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.20)",
            }}
          >
            <p style={{ margin: 0 }}>Nenhum profissional cadastrado ainda.</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            {profissionais.map((profissional) => (
              <div
                key={profissional.id}
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(6px)",
                  borderRadius: "20px",
                  padding: "22px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.20)",
                  color: "#ffffff",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: "22px",
                    color: "#ffd54a",
                  }}
                >
                  {profissional.nome}
                </h2>

                <p style={{ margin: "0 0 8px 0" }}>
                  <strong>Email:</strong> {profissional.email}
                </p>

                <p style={{ margin: "0 0 8px 0" }}>
                  <strong>Telefone:</strong> {profissional.telefone}
                </p>

                <p style={{ margin: "0 0 8px 0" }}>
                  <strong>Cidade:</strong> {profissional.cidade}
                </p>

                <p style={{ margin: "0 0 18px 0" }}>
                  <strong>Especialidade:</strong> {profissional.especialidade}
                </p>

                <a
                  href={`https://wa.me/55${profissional.telefone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <button
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      fontSize: "15px",
                      fontWeight: "bold",
                      background:
                        "linear-gradient(135deg, #ffe066 0%, #ffb300 60%, #ff8f00 100%)",
                      color: "#0b2c6b",
                      border: "none",
                      borderRadius: "12px",
                      cursor: "pointer",
                      boxShadow: "0 12px 30px rgba(255, 193, 7, 0.35)",
                    }}
                  >
                    Falar no WhatsApp
                  </button>
                </a>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "24px" }}>
          <a
            href="/"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              opacity: 0.9,
            }}
          >
            Voltar para a página inicial
          </a>
        </div>
      </div>
    </main>
  );
}