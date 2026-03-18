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

  function excluirProfissional(id: number) {
    const confirmar = confirm("Tem certeza que deseja excluir este profissional?");
    if (!confirmar) return;

    const atualizados = profissionais.filter((p) => p.id !== id);

    localStorage.setItem("profissionais", JSON.stringify(atualizados));
    setProfissionais(atualizados);
  }

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
          <div style={cardVazio}>
            <p style={{ margin: 0 }}>Nenhum profissional cadastrado ainda.</p>
          </div>
        ) : (
          <div style={grid}>
            {profissionais.map((profissional) => (
              <div key={profissional.id} style={card}>
                <h2 style={nome}>{profissional.nome}</h2>

                <p><strong>Email:</strong> {profissional.email}</p>
                <p><strong>Telefone:</strong> {profissional.telefone}</p>
                <p><strong>Cidade:</strong> {profissional.cidade}</p>
                <p><strong>Especialidade:</strong> {profissional.especialidade}</p>

                <div style={botoes}>
                  <a
                    href={`https://wa.me/55${profissional.telefone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ flex: 1 }}
                  >
                    <button style={botaoWhatsapp}>
                      WhatsApp
                    </button>
                  </a>

                  <button
                    onClick={() => excluirProfissional(profissional.id)}
                    style={botaoExcluir}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "24px" }}>
          <a href="/" style={voltar}>
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </main>
  );
}

/* ===== ESTILOS ===== */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const card = {
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.18)",
  backdropFilter: "blur(6px)",
  borderRadius: "20px",
  padding: "22px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.20)",
};

const cardVazio = {
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "20px",
  padding: "24px",
};

const nome = {
  margin: "0 0 12px 0",
  fontSize: "22px",
  color: "#ffd54a",
};

const botoes = {
  display: "flex",
  gap: "8px",
  marginTop: "16px",
};

const botaoWhatsapp = {
  width: "100%",
  padding: "12px",
  fontSize: "14px",
  fontWeight: "bold",
  background: "#ffd54a",
  color: "#0b2c6b",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const botaoExcluir = {
  padding: "12px",
  fontSize: "14px",
  fontWeight: "bold",
  background: "#ff4d4d",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const voltar = {
  color: "#ffffff",
  textDecoration: "none",
  opacity: 0.9,
};