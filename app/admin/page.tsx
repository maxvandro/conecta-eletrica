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
    if (autorizado) {
      carregar();
    }
  }, [autorizado]);

  if (!autorizado) {
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
            maxWidth: "420px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "18px",
            padding: "24px",
          }}
        >
          <h1 style={{ marginTop: 0 }}>Acesso ao Admin</h1>

          <input
            type="password"
            placeholder="Digite a senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
              marginBottom: "12px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <button
            onClick={verificarSenha}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
              background: "#d9f46a",
              color: "#15316b",
              cursor: "pointer",
            }}
          >
            Entrar
          </button>

          <p style={{ marginTop: "14px" }}>{mensagem}</p>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "24px",
        background:
          "linear-gradient(135deg, #0a1f44 0%, #0d2f6f 55%, #1c63d5 100%)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1>Painel Admin</h1>

        {mensagem && <p>{mensagem}</p>}

        <div style={{ display: "grid", gap: "16px" }}>
          {dados.map((p) => (
            <div
              key={p.id}
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "18px",
                padding: "18px",
              }}
            >
              <h3 style={{ marginTop: 0 }}>{p.nome}</h3>

              <p>Cidade: {p.cidade}</p>
              <p>Telefone: {p.telefone}</p>
              <p>Email: {p.email}</p>
              <p>Especialidade: {p.especialidade}</p>
              <p>Status: {p.status}</p>
              <p>Aceitou LGPD: {p.aceitou_lgpd ? "Sim" : "Não"}</p>
              <p>
                Consentimento em:{" "}
                {p.consentimento_em
                  ? new Date(p.consentimento_em).toLocaleString("pt-BR")
                  : "-"}
              </p>

              <div style={{ display: "flex", gap: "10px", marginTop: "12px", flexWrap: "wrap" }}>
                <button
                  onClick={() => atualizarStatus(p.id, "aprovado")}
                  style={botaoVerde}
                >
                  Aprovar
                </button>

                <button
                  onClick={() => atualizarStatus(p.id, "bloqueado")}
                  style={botaoVermelho}
                >
                  Bloquear
                </button>

                <button
                  onClick={() => atualizarStatus(p.id, "pendente")}
                  style={botaoAmarelo}
                >
                  Voltar para pendente
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const botaoVerde: React.CSSProperties = {
  background: "green",
  color: "#fff",
  padding: "10px 14px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const botaoVermelho: React.CSSProperties = {
  background: "red",
  color: "#fff",
  padding: "10px 14px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const botaoAmarelo: React.CSSProperties = {
  background: "#d9f46a",
  color: "#15316b",
  padding: "10px 14px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};