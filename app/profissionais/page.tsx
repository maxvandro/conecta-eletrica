"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Profissional = {
  id: number;
  nome: string;
  cidade: string;
  telefone: string;
  especialidade: string;
  status: string;
};

export default function ProfissionaisPage() {
  const [dados, setDados] = useState<Profissional[]>([]);
  const [mensagem, setMensagem] = useState("Carregando profissionais...");

  async function carregar() {
    const { data, error } = await supabase
      .from("profissionais")
      .select("id, nome, cidade, telefone, especialidade, status")
      .eq("status", "aprovado")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
      setMensagem("Erro ao carregar: " + error.message);
      return;
    }

    setDados(data || []);
    setMensagem("");
  }

  function limparTelefone(telefone: string) {
    let numero = telefone.replace(/\D/g, "");

    // Remove código do país se vier com 55 na frente
    if (numero.length >= 12 && numero.startsWith("55")) {
      numero = numero.slice(2);
    }

    return numero;
  }

  function montarLinkWhatsapp(telefone: string) {
    const numeroLimpo = limparTelefone(telefone);
    return `https://wa.me/55${numeroLimpo}`;
  }

  function mascararTelefone(telefone: string) {
    const numeroLimpo = limparTelefone(telefone);

    // Esperado no Brasil:
    // 10 dígitos = DDD + 8 dígitos
    // 11 dígitos = DDD + 9 dígitos
    if (numeroLimpo.length < 10) {
      return telefone;
    }

    const ddd = numeroLimpo.slice(0, 2);
    const final = numeroLimpo.slice(-4);

    return `(${ddd}) XXXXX-${final}`;
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <div style={badgeStyle}>Profissionais aprovados</div>

        <h1 style={titleStyle}>Encontre um profissional</h1>

        <p style={subtitleStyle}>
          Consulte profissionais aprovados na plataforma e escolha quem faz mais
          sentido para o seu atendimento.
        </p>

        {mensagem && dados.length === 0 ? (
          <div style={emptyBoxStyle}>{mensagem}</div>
        ) : dados.length === 0 ? (
          <div style={emptyBoxStyle}>
            Nenhum profissional aprovado no momento.
          </div>
        ) : (
          <div style={gridStyle}>
            {dados.map((p) => (
              <div key={p.id} style={cardStyle}>
                <div style={cardHeaderStyle}>
                  <h2 style={cardTitleStyle}>{p.nome}</h2>
                  <span style={verifiedBadgeStyle}>Verificado</span>
                </div>

                <p style={textStyle}>
                  <strong>Telefone:</strong> {mascararTelefone(p.telefone)}
                </p>

                <p style={textStyle}>
                  <strong>Cidade:</strong> {p.cidade}
                </p>

                <p style={textStyle}>
                  <strong>Especialidade:</strong> {p.especialidade}
                </p>

                <div style={{ marginTop: 18 }}>
                  <a
                    href={montarLinkWhatsapp(p.telefone)}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "block" }}
                  >
                    <button style={buttonWhatsappStyle}>Falar no WhatsApp</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={supportBoxStyle}>
          <p style={{ margin: "0 0 10px 0", fontWeight: 600 }}>
            Precisa alterar ou remover seus dados?
          </p>
          <a
            href="https://wa.me/5591999999999"
            target="_blank"
            rel="noreferrer"
            style={linkGoldStyle}
          >
            Solicitar atualização ou remoção dos dados
          </a>
        </div>

        <div style={{ marginTop: 22 }}>
          <a href="/" style={backLinkStyle}>
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </main>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #081a3a 0%, #0c2a66 55%, #1a5fd0 100%)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  padding: "24px",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 18px",
  borderRadius: 999,
  border: "1px solid rgba(255, 213, 74, 0.45)",
  background: "rgba(255,255,255,0.08)",
  color: "#f5d35a",
  fontWeight: "bold",
  marginBottom: 24,
};

const titleStyle: React.CSSProperties = {
  fontSize: "56px",
  lineHeight: 1.05,
  margin: "0 0 16px 0",
  maxWidth: "700px",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: 1.6,
  marginBottom: "28px",
  maxWidth: "760px",
  color: "rgba(255,255,255,0.92)",
};

const emptyBoxStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "20px",
  padding: "24px",
  fontSize: "18px",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "18px",
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "22px",
  padding: "22px",
  boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
};

const cardHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "center",
  marginBottom: "14px",
  flexWrap: "wrap",
};

const cardTitleStyle: React.CSSProperties = {
  margin: 0,
  color: "#f5d35a",
  fontSize: "24px",
};

const verifiedBadgeStyle: React.CSSProperties = {
  background: "rgba(217,244,106,0.18)",
  color: "#d9f46a",
  border: "1px solid rgba(217,244,106,0.35)",
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: "12px",
  fontWeight: "bold",
};

const textStyle: React.CSSProperties = {
  margin: "0 0 10px 0",
  fontSize: "16px",
  lineHeight: 1.5,
};

const buttonWhatsappStyle: React.CSSProperties = {
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

const supportBoxStyle: React.CSSProperties = {
  marginTop: "24px",
  padding: "18px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "16px",
};

const linkGoldStyle: React.CSSProperties = {
  color: "#ffd54a",
  textDecoration: "none",
  fontWeight: "bold",
};

const backLinkStyle: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
};