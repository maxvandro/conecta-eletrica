"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type Profissional = {
  id: number;
  nome: string;
  cidade: string;
  telefone: string;
  especialidade: string;
  email: string;
  status: string;
  aceitou_lgpd?: boolean;
  consentimento_em?: string;
};

export default function AdminPage() {
  const [dados, setDados] = useState<Profissional[]>([]);
  const [mensagem, setMensagem] = useState("Digite a senha para acessar");
  const [senha, setSenha] = useState("");
  const [autorizado, setAutorizado] = useState(false);

  async function verificarSenha() {
    try {
      const resposta = await fetch("/api/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ senha }),
      });

      const resultado = await resposta.json();

      if (resultado.ok) {
        setAutorizado(true);
        setMensagem("");
      } else {
        setMensagem("Senha incorreta");
      }
    } catch {
      setMensagem("Erro ao verificar senha");
    }
  }

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
      alert("Erro ao atualizar status");
      return;
    }

    carregar();
  }

  useEffect(() => {
    if (autorizado) carregar();
  }, [autorizado]);

  const pendentes = useMemo(
    () => dados.filter((p) => p.status === "pendente"),
    [dados]
  );

  const aprovados = useMemo(
    () => dados.filter((p) => p.status === "aprovado"),
    [dados]
  );

  const bloqueados = useMemo(
    () => dados.filter((p) => p.status === "bloqueado"),
    [dados]
  );

  if (!autorizado) {
    return (
      <main style={loginPageStyle}>
        <div style={loginBoxStyle}>
          <div style={badgeStyle}>Área administrativa</div>
          <h1 style={{ marginTop: 0 }}>Acesso ao Admin</h1>

          <input
            type="password"
            placeholder="Digite a senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={loginInputStyle}
          />

          <button onClick={verificarSenha} style={loginButtonStyle}>
            Entrar
          </button>

          <p style={{ marginTop: 14 }}>{mensagem}</p>
        </div>
      </main>
    );
  }

  return (
    <main style={adminPageStyle}>
      <div style={adminContainerStyle}>
        <div style={badgeStyle}>Painel administrativo</div>
        <h1 style={{ marginTop: 0 }}>Gestão de profissionais</h1>

        <div style={statsGridStyle}>
          <div style={statCardStyle}>
            <strong>Pendentes</strong>
            <div style={statNumberStyle}>{pendentes.length}</div>
          </div>
          <div style={statCardStyle}>
            <strong>Aprovados</strong>
            <div style={statNumberStyle}>{aprovados.length}</div>
          </div>
          <div style={statCardStyle}>
            <strong>Bloqueados</strong>
            <div style={statNumberStyle}>{bloqueados.length}</div>
          </div>
        </div>

        <SectionAdmin
          titulo="Pendentes"
          itens={pendentes}
          atualizarStatus={atualizarStatus}
        />

        <SectionAdmin
          titulo="Aprovados"
          itens={aprovados}
          atualizarStatus={atualizarStatus}
        />

        <SectionAdmin
          titulo="Bloqueados"
          itens={bloqueados}
          atualizarStatus={atualizarStatus}
        />
      </div>
    </main>
  );
}

function SectionAdmin({
  titulo,
  itens,
  atualizarStatus,
}: {
  titulo: string;
  itens: Profissional[];
  atualizarStatus: (id: number, status: string) => Promise<void>;
}) {
  return (
    <section style={{ marginTop: 28 }}>
      <h2 style={{ marginBottom: 14 }}>{titulo}</h2>

      {itens.length === 0 ? (
        <div style={emptyAdminStyle}>Nenhum registro nesta seção.</div>
      ) : (
        <div style={adminGridStyle}>
          {itens.map((p) => (
            <div key={p.id} style={adminCardStyle}>
              <h3 style={{ marginTop: 0 }}>{p.nome}</h3>
              <p><strong>Cidade:</strong> {p.cidade}</p>
              <p><strong>Telefone:</strong> {p.telefone}</p>
              <p><strong>Email:</strong> {p.email}</p>
              <p><strong>Especialidade:</strong> {p.especialidade}</p>
              <p><strong>Status:</strong> {p.status}</p>
              <p><strong>Aceitou LGPD:</strong> {p.aceitou_lgpd ? "Sim" : "Não"}</p>
              <p>
                <strong>Consentimento em:</strong>{" "}
                {p.consentimento_em
                  ? new Date(p.consentimento_em).toLocaleString("pt-BR")
                  : "-"}
              </p>

              <div style={adminButtonsStyle}>
                <button
                  onClick={() => atualizarStatus(p.id, "aprovado")}
                  style={greenButtonStyle}
                >
                  Aprovar
                </button>

                <button
                  onClick={() => atualizarStatus(p.id, "pendente")}
                  style={yellowButtonStyle}
                >
                  Pendente
                </button>

                <button
                  onClick={() => atualizarStatus(p.id, "bloqueado")}
                  style={redButtonStyle}
                >
                  Bloquear
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

const loginPageStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #081a3a 0%, #0c2a66 55%, #1a5fd0 100%)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  padding: "24px",
};

const loginBoxStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "440px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "22px",
  padding: "26px",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255, 213, 74, 0.45)",
  color: "#f5d35a",
  fontWeight: "bold",
  marginBottom: 16,
};

const loginInputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px",
  marginBottom: "12px",
  outline: "none",
  boxSizing: "border-box",
};

const loginButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px",
  fontWeight: "bold",
  background: "#d9f46a",
  color: "#15316b",
  cursor: "pointer",
};

const adminPageStyle: React.CSSProperties = {
  minHeight: "100vh",
  padding: "24px",
  background: "linear-gradient(135deg, #081a3a 0%, #0c2a66 55%, #1a5fd0 100%)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
};

const adminContainerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const statsGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginTop: "18px",
};

const statCardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "18px",
  padding: "18px",
};

const statNumberStyle: React.CSSProperties = {
  fontSize: "34px",
  fontWeight: "bold",
  marginTop: 10,
  color: "#f5d35a",
};

const emptyAdminStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "16px",
  padding: "18px",
};

const adminGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "16px",
};

const adminCardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "18px",
  padding: "18px",
};

const adminButtonsStyle: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  marginTop: "14px",
  flexWrap: "wrap",
};

const greenButtonStyle: React.CSSProperties = {
  background: "green",
  color: "#fff",
  padding: "10px 14px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const redButtonStyle: React.CSSProperties = {
  background: "red",
  color: "#fff",
  padding: "10px 14px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const yellowButtonStyle: React.CSSProperties = {
  background: "#d9f46a",
  color: "#15316b",
  padding: "10px 14px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};