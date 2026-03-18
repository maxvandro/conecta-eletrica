export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        background:
          "linear-gradient(135deg, #0a1f44 0%, #0d2f6f 50%, #1c63d5 100%)",
      }}
    >
      <header
        style={{
          width: "100%",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/logo.png"
            alt="MaxVandro Representações"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "8px",
            }}
          />
          <strong style={{ color: "#ffffff" }}>
            MaxVandro Representações
          </strong>
        </div>

        <nav style={{ display: "flex", gap: "16px" }}>
          <a href="/" style={linkStyle}>Início</a>
          <a href="/profissionais" style={linkStyle}>Profissionais</a>
          <a href="/cadastro" style={linkStyle}>Cadastrar</a>
        </nav>
      </header>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "760px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            borderRadius: "24px",
            padding: "48px 32px",
            boxShadow: "0 25px 70px rgba(0,0,0,0.45)",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 16px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 210, 60, 0.15)",
              border: "1px solid rgba(255, 210, 60, 0.35)",
              color: "#ffd54a",
              fontWeight: "bold",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            Plataforma de profissionais da área elétrica
          </div>

          <h1 style={{ fontSize: "44px", marginBottom: "12px" }}>
            ⚡ Conecta Elétrica
          </h1>

          <p
            style={{
              fontSize: "18px",
              marginBottom: "28px",
              color: "rgba(255,255,255,0.9)",
              lineHeight: "1.6",
            }}
          >
            Encontre eletricistas confiáveis perto de você.
            <br />
            Simples, rápido e direto.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a href="/profissionais">
              <button style={botaoPrincipal}>
                Encontrar profissional
              </button>
            </a>

            <a href="/cadastro">
              <button style={botaoSecundario}>
                Sou profissional
              </button>
            </a>
          </div>

          <div
            style={{
              marginTop: "34px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              {
                titulo: "Busca rápida",
                texto: "Encontre profissionais com poucos cliques.",
              },
              {
                titulo: "Mais confiança",
                texto: "Dados organizados antes do contato.",
              },
              {
                titulo: "Cadastro simples",
                texto: "Sem burocracia para entrar.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "16px",
                  padding: "18px",
                  textAlign: "left",
                }}
              >
                <strong style={{ color: "#ffd54a" }}>{item.titulo}</strong>
                <p style={{ fontSize: "14px", marginTop: "6px" }}>
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "14px",
  opacity: 0.9,
};

const botaoPrincipal = {
  width: "100%",
  padding: "14px",
  fontSize: "16px",
  fontWeight: "bold",
  background:
    "linear-gradient(135deg, #ffe066 0%, #ffb300 60%, #ff8f00 100%)",
  color: "#0a1f44",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  boxShadow: "0 12px 30px rgba(255, 193, 7, 0.4)",
};

const botaoSecundario = {
  width: "100%",
  padding: "14px",
  fontSize: "16px",
  fontWeight: "bold",
  backgroundColor: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "12px",
  cursor: "pointer",
};