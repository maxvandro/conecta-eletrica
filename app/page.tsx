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
      {/* HEADER */}
      <header
        style={{
          width: "100%",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/logo.png" style={{ width: "42px" }} />
          <strong style={{ color: "#fff" }}>
            MaxVandro Representações
          </strong>
        </div>
      </header>

      {/* CONTEÚDO */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h1>⚡ Conecta Elétrica</h1>

          <p style={{ marginBottom: "20px" }}>
            Precisa de eletricista confiável agora?
          </p>

          {/* BOTÃO PRINCIPAL */}
          <a
            href="https://wa.me/5591999999999"
            target="_blank"
          >
            <button
              style={{
                width: "100%",
                padding: "16px",
                fontSize: "18px",
                fontWeight: "bold",
                background:
                  "linear-gradient(135deg, #ffe066, #ffb300)",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Falar no WhatsApp agora
            </button>
          </a>

          <div style={{ marginTop: "20px" }}>
            <a href="/profissionais" style={{ color: "#fff" }}>
              Ver profissionais cadastrados
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}