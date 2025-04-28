import theme from "../../theme/theme";
import Testimonials from "../../components/cards/card_testimonials/testimonials";

const Depoimentos = () => {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: theme.colors.background,
        padding: "80px 20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Título com destaque */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "60px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#F77C2C",
            fontSize: "2.5rem",
            fontWeight: 700,
            margin: 0,
            position: "relative",
            display: "inline-block",
          }}
        >
          Depoimentos
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "#F77C2C",
              borderRadius: "2px",
            }}
          ></span>
        </h1>
        {/* <p
          style={{
            color: "#666",
            fontSize: "1.1rem",
            marginTop: "20px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          Veja o que as pessoas estão falando sobre nosso trabalho
        </p> */}
      </div>

      {/* Container dos cards */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: "40px",
          padding: "20px",
        }}
      >
        <Testimonials
        img="https://i.imgur.com/44pFGmn.png"
          textToShow="Era muito pequena quando tive câncer, mas guardo várias lembranças. Fui uma criança brava e não entendia por que precisava me tratar, ir ao hospital toda hora. Até hoje não gosto de tirar sangue com aquela agulha fininha. Prefiro a mais grossa. A outra me lembra o hospital e as crianças que estavam em situação pior que a minha. A parte boa daquele período era a salinha de recreação. Pintávamos muitos desenhos. Era o momento em que podíamos brincar de ser crianças. Acho que a experiência do câncer me marcou para sempre. Cresci mais sensível aos problemas dos outros. Sou generosa. Gosto de ouvir, ajudar, repartir minhas coisas. Vivo emprestando roupas às amigas. Não tenho apego. Estudei num colégio de elite e sinto que tenho preocupações mais relevantes que muitas colegas de minha idade. Dou aulas num projeto comunitário da Prefeitura. Tenho o maior carinho por aquelas crianças. Neste mundo, cada um tem de fazer um pouco. A soma de esforços vai fazer a diferença. Sonho em casar e ter filhos. Construir aquilo tudo que a palavra família representa."                              
        />

        <Testimonials
          img="https://i.imgur.com/Ivcab5a.png"
          textToShow="Ela descobriu o linfoma de Hodgkin, um tipo de câncer no sistema linfático, em março. Mateo tinha apenas 2 meses. Rita tem certeza de que vai sobreviver para vê-lo crescer. Uma certeza contagiante
Durante a gravidez, tive umas alergias pelo corpo. Coçava muito, nas pernas, nos braços. Não desconfiei de nada. O Mateo nasceu saudável, com 3,370 quilos e 50 centímetros. Foi tudo muito tranqüilo. Eu não podia imaginar que estava com câncer. Em abril, saiu uma bola grande no meu pescoço. Depois, a pálpebra do meu olho esquerdo ficou meio caída. Emagreci muito. Comecei a ficar muito cansada.

Fiz uma ultra-sonografia. Os médicos detectaram líquido no pulmão. Fui internada para retirá-lo. Descobriram o linfoma. Nunca tinha ouvido falar nisso. É um tumor no sistema linfático, que pega áreas enormes. Meu “alien” ia do pescoço até a barriga. Quando soube da doença, só pensava em meu filho. Minha mãe morreu quando eu tinha 6 anos. Sofri com madrasta. Não quero que aconteça o mesmo com o Mateo.
"                              
        />

        {/* <Testimonials
          textToShow="O trabalho do CAPC é essencial para nossa comunidade. Eles trazem não apenas conhecimento técnico, mas também um olhar humano e sensível para cada caso. Parceria fundamental para nossa instituição."                              
        /> */}
      </div>

      {/* Elementos decorativos */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 20% 30%, rgba(247,124,44,0.1) 0%, transparent 40%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      ></div>
    </section>
  );
};

export default Depoimentos;
