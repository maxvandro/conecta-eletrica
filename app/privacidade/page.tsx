export default function PrivacidadePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px 24px",
        background: "#f7f8fc",
        color: "#1a1a1a",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1>Política de Privacidade</h1>

        <p>
          Esta plataforma tem como objetivo conectar profissionais a clientes
          interessados em seus serviços, com transparência e respeito à Lei
          Geral de Proteção de Dados Pessoais (LGPD).
        </p>

        <h2>1. Dados coletados</h2>
        <p>Podemos coletar os seguintes dados do profissional cadastrado:</p>
        <ul>
          <li>Nome</li>
          <li>Cidade</li>
          <li>Telefone</li>
          <li>E-mail</li>
          <li>Especialidade</li>
        </ul>

        <h2>2. Finalidade do uso</h2>
        <p>Os dados são utilizados para:</p>
        <ul>
          <li>análise e aprovação do cadastro</li>
          <li>divulgação profissional na plataforma</li>
          <li>contato entre cliente e profissional</li>
          <li>organização e administração da base de profissionais</li>
        </ul>

        <h2>3. Dados exibidos publicamente</h2>
        <p>
          Para respeitar a privacidade do profissional, nem todos os dados são
          exibidos publicamente. O e-mail, por exemplo, é utilizado apenas para
          controle interno e contato administrativo, não sendo mostrado na área
          pública.
        </p>

        <h2>4. Consentimento</h2>
        <p>
          Ao marcar o aceite no formulário de cadastro, o profissional autoriza
          o tratamento de seus dados conforme esta Política de Privacidade.
        </p>

        <h2>5. Aprovação do cadastro</h2>
        <p>
          Todo cadastro passa por análise interna. Apenas profissionais
          aprovados ficam visíveis ao público.
        </p>

        <h2>6. Solicitação de alteração ou remoção</h2>
        <p>
          O titular dos dados pode solicitar atualização, correção ou remoção de
          suas informações a qualquer momento por meio do canal informado na
          plataforma.
        </p>

        <h2>7. Segurança</h2>
        <p>
          Adotamos medidas técnicas e administrativas para proteger os dados
          contra acessos não autorizados, uso indevido, alteração ou divulgação
          indevida.
        </p>

        <h2>8. Contato</h2>
        <p>
          Para assuntos relacionados à privacidade, exclusão ou atualização de
          dados, entre em contato pelo canal informado na plataforma.
        </p>

        <div style={{ marginTop: "24px" }}>
          <a href="/" style={{ color: "#1c63d5", textDecoration: "none" }}>
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </main>
  );
}