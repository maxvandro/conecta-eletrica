export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #081a3a 0%, #0c2a66 55%, #1a5fd0 100%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.png"
            alt="MaxVandro Representações"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              objectFit: "cover",
              background: "#ffffff",
            }}
          />
          <div>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              MaxVandro Representações
            </div>
            <div style={{ fontSize: "13px", opacity: 0.85 }}>
              Plataforma profissional de conexão e indicação
            </div>
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <a href="/profissionais" style={navLinkStyle}>
            Profissionais
          </a>
          <a href="/cadastro" style={navLinkStyle}>
            Cadastro
          </a>
          <a href="/admin" style={navLinkStyle}>
            Admin
          </a>
          <a href="/privacidade" style={navLinkStyle}>
            Privacidade
          </a>
        </nav>
      </header>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px 48px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
          alignItems: "center",
        }}
      >
        <div>
          <div style={badgeStyle}>Plataforma profissional</div>

          <h1
            style={{
              fontSize: "58px",
              lineHeight: 1.02,
              margin: "18px 0 18px 0",
              maxWidth: "700px",
            }}
          >
            Conecta
            <br />
            Elétrica
          </h1>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.92)",
              maxWidth: "650px",
              marginBottom: "28px",
            }}
          >
            Encontre profissionais da área elétrica com mais confiança,
            organização e critério. Cadastros passam por análise antes de serem
            exibidos publicamente.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "26px",
            }}
          >
            <a href="/profissionais">
              <button style={primaryButtonStyle}>
                Ver profissionais aprovados
              </button>
            </a>

            <a href="/cadastro">
              <button style={secondaryButtonStyle}>
                Cadastrar profissional
              </button>
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "14px",
              maxWidth: "760px",
            }}
          >
            <div style={miniCardStyle}>
              <strong style={miniCardTitleStyle}>Triagem</strong>
              <p style={miniCardTextStyle}>
                Todo novo cadastro entra como pendente e passa por análise.
              </p>
            </div>

            <div style={miniCardStyle}>
              <strong style={miniCardTitleStyle}>Confiança</strong>
              <p style={miniCardTextStyle}>
                Só profissionais aprovados aparecem na área pública.
              </p>
            </div>

            <div style={miniCardStyle}>
              <strong style={miniCardTitleStyle}>Contato rápido</strong>
              <p style={miniCardTextStyle}>
                O cliente pode falar direto pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "26px",
            padding: "24px",
            boxShadow: "0 22px 55px rgba(0,0,0,0.20)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div style={panelHeaderStyle}>
            <span style={panelBadgeStyle}>Fluxo da plataforma</span>
          </div>

          <div style={flowCardStyle}>
            <div style={flowNumberStyle}>1</div>
            <div>
              <h3 style={flowTitleStyle}>Profissional se cadastra</h3>
              <p style={flowTextStyle}>
                O profissional informa nome, cidade, telefone, especialidade,
                e-mail e aceite da política de privacidade.
              </p>
            </div>
          </div>

          <div style={flowCardStyle}>
            <div style={flowNumberStyle}>2</div>
            <div>
              <h3 style={flowTitleStyle}>Cadastro entra em análise</h3>
              <p style={flowTextStyle}>
                O registro fica como pendente até ser aprovado no painel
                administrativo.
              </p>
            </div>
          </div>

          <div style={flowCardStyle}>
            <div style={flowNumberStyle}>3</div>
            <div>
              <h3 style={flowTitleStyle}>Publicação controlada</h3>
              <p style={flowTextStyle}>
                Apenas profissionais aprovados ficam visíveis no site.
              </p>
            </div>
          </div>

          <div style={flowCardStyle}>
            <div style={flowNumberStyle}>4</div>
            <div>
              <h3 style={flowTitleStyle}>Cliente entra em contato</h3>
              <p style={flowTextStyle}>
                O contato é feito diretamente pelo WhatsApp, com agilidade e
                simplicidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 48px",
        }}
      >
        <div style={trustBoxStyle}>
          <h2 style={{ marginTop: 0, marginBottom: "12px", fontSize: "28px" }}>
            Compromisso com privacidade e responsabilidade
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "16px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.92)",
            }}
          >
            Esta plataforma adota critérios de análise cadastral e tratamento de
            dados alinhados à LGPD, com controle interno, política de
            privacidade e opção de solicitação de remoção ou atualização de
            dados.
          </p>

          <div style={{ marginTop: "18px" }}>
            <a href="/privacidade" style={linkGoldStyle}>
              Ler política de privacidade
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
          padding: "22px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
            color: "rgba(255,255,255,0.82)",
            fontSize: "14px",
          }}
        >
          <span>Conecta Elétrica • Plataforma profissional</span>
          <span>Desenvolvido por MaxVandro Representações</span>
        </div>
      </footer>
    </main>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "14px",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255, 213, 74, 0.45)",
  color: "#f5d35a",
  fontWeight: "bold",
};

const primaryButtonStyle: React.CSSProperties = {
  padding: "15px 22px",
  borderRadius: "12px",
  border: "none",
  background: "#d9f46a",
  color: "#15316b",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};

const secondaryButtonStyle: React.CSSProperties = {
  padding: "15px 22px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.10)",
  color: "#ffffff",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};

const miniCardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "18px",
  padding: "18px",
};

const miniCardTitleStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  color: "#f5d35a",
  fontSize: "16px",
};

const miniCardTextStyle: React.CSSProperties = {
  margin: 0,
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.92)",
  fontSize: "14px",
};

const panelHeaderStyle: React.CSSProperties = {
  marginBottom: "18px",
};

const panelBadgeStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "8px 12px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)",
  color: "#d9f46a",
  fontWeight: "bold",
  fontSize: "13px",
};

const flowCardStyle: React.CSSProperties = {
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
  padding: "16px 0",
  borderBottom: "1px solid rgba(255,255,255,0.10)",
};

const flowNumberStyle: React.CSSProperties = {
  width: "34px",
  height: "34px",
  borderRadius: 999,
  background: "#d9f46a",
  color: "#15316b",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const flowTitleStyle: React.CSSProperties = {
  margin: "0 0 6px 0",
  fontSize: "18px",
};

const flowTextStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "15px",
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.90)",
};

const trustBoxStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "24px",
  padding: "24px",
};

const linkGoldStyle: React.CSSProperties = {
  color: "#ffd54a",
  textDecoration: "none",
  fontWeight: "bold",
};