export default function PrivacidadePage() {
  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <div style={badgeStyle}>Privacidade e proteção de dados</div>

        <h1 style={titleStyle}>Política de Privacidade</h1>

        <p style={textStyle}>
          Esta plataforma foi criada para conectar profissionais a clientes,
          respeitando a transparência, a boa-fé e os princípios da Lei Geral de
          Proteção de Dados Pessoais (LGPD).
        </p>

        <Section
          title="1. Dados coletados"
          content={
            <>
              <p style={textStyle}>Podemos coletar os seguintes dados:</p>
              <ul style={listStyle}>
                <li>Nome</li>
                <li>Cidade</li>
                <li>Telefone</li>
                <li>E-mail</li>
                <li>Especialidade</li>
              </ul>
            </>
          }
        />

        <Section
          title="2. Finalidade do tratamento"
          content={
            <ul style={listStyle}>
              <li>analisar e aprovar o cadastro do profissional</li>
              <li>divulgar o perfil aprovado na plataforma</li>
              <li>permitir contato entre cliente e profissional</li>
              <li>manter organização e segurança da base cadastral</li>
            </ul>
          }
        />

        <Section
          title="3. Dados exibidos publicamente"
          content={
            <p style={textStyle}>
              Apenas informações necessárias para a finalidade da plataforma
              são exibidas publicamente. O e-mail do profissional não é
              mostrado na área pública.
            </p>
          }
        />

        <Section
          title="4. Consentimento"
          content={
            <p style={textStyle}>
              Ao marcar o aceite no formulário de cadastro, o profissional
              declara que leu esta política e autoriza o tratamento dos seus
              dados nos termos aqui informados.
            </p>
          }
        />

        <Section
          title="5. Aprovação interna"
          content={
            <p style={textStyle}>
              Todo cadastro passa por análise. Apenas profissionais aprovados
              ficam visíveis ao público.
            </p>
          }
        />

        <Section
          title="6. Direitos do titular"
          content={
            <p style={textStyle}>
              O titular pode solicitar atualização, correção ou remoção dos seus
              dados a qualquer momento pelos canais disponibilizados na
              plataforma.
            </p>
          }
        />

        <Section
          title="7. Segurança"
          content={
            <p style={textStyle}>
              Adotamos medidas administrativas e técnicas para restringir acesso
              indevido e proteger os dados armazenados.
            </p>
          }
        />

        <Section
          title="8. Contato"
          content={
            <p style={textStyle}>
              Para solicitações relacionadas à privacidade, correção ou remoção
              de dados, utilize o canal informado na plataforma.
            </p>
          }
        />

        <div style={{ marginTop: 26 }}>
          <a href="/" style={backLinkStyle}>
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitleStyle}>{title}</h2>
      {content}
    </section>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  padding: "32px 24px",
  background: "#f4f7fc",
  color: "#1a1a1a",
  fontFamily: "Arial, sans-serif",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "920px",
  margin: "0 auto",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: 999,
  background: "#e9eefc",
  color: "#1c63d5",
  fontWeight: "bold",
  marginBottom: 18,
};

const titleStyle: React.CSSProperties = {
  margin: "0 0 18px 0",
  fontSize: "42px",
  lineHeight: 1.05,
};

const sectionStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #e6ebf5",
  borderRadius: "18px",
  padding: "20px",
  marginTop: "18px",
  boxShadow: "0 8px 22px rgba(0,0,0,0.04)",
};

const sectionTitleStyle: React.CSSProperties = {
  margin: "0 0 12px 0",
  fontSize: "22px",
};

const textStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "16px",
  lineHeight: 1.7,
};

const listStyle: React.CSSProperties = {
  margin: "10px 0 0 18px",
  lineHeight: 1.8,
};

const backLinkStyle: React.CSSProperties = {
  color: "#1c63d5",
  textDecoration: "none",
  fontWeight: "bold",
};