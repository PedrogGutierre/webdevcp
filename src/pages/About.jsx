import Celular1 from "../assets/cel.png";
import Celular2 from "../assets/cel2.png";
import Planos from "../components/Planos";

const planos = [
  {
    title: "Individual",
    customColor: "#6975E8",
    options: [
      {
        userQuantity: "1",
        price: 15,
        videosQuantity: 10,
      },
    ],
  },
  {
    title: "Profissional - Times",
    options: [
      {
        userQuantity: "1 - 10",
        price: 40,
        videosQuantity: "unlimited",
      },
      {
        userQuantity: "+10",
        price: 20,
        videosQuantity: "unlimited",
      },
    ],
  },
  {
    title: "Corporativo",
    img: "./src/assets/mocacell.png",
    customLabel: "Entre em contato",
  },
];

function AboutPage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.leftSection}>
          <h1 style={styles.title}>Bem-vindo à resolução dos vídeos</h1>
          <h2 style={styles.subtitle}>
            Somos uma startup com o objetivo de facilitar a produção de conteúdo
            em larga escala com qualidade profissional, capaz de atingir uma
            audiência de milhões de seguidores.
          </h2>
          <button style={styles.button}>Baixe o app</button>
        </div>
        <div style={styles.rightSection}>
          <div style={styles.imagesContainer}>
            <img src={Celular1} alt="Celular 1" style={styles.image} />
            <img src={Celular2} alt="Celular 2" style={styles.image} />
          </div>
        </div>
      </div>
      <div style={styles.planosContainer}>
        <h2 style={styles.planosTitle}>Planos</h2>
        <div style={styles.planosList}>
          {planos.map((item, index) => (
            <Planos {...item} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    backgroundColor: "#f0f0f0",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "30px",
    padding:"40px 0"
  },
  leftSection: {
    maxWidth: "500px",
    textAlign: "left",
  },
  title: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "20px",
    marginTop: "25px",
    marginBottom: "25px",
    color: "#555",
  },
  button: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "15px 40px",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
  imagesContainer: {
    display: "flex",
    gap: "20px",
  },
  image: {
    width: "200px",
    height: "auto",
  },
  planosContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: "30px",
  },
  planosTitle: {
    fontSize: "30px",
    marginBottom: "20px",
  },
  planosList: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    maxWidth: "1200px",
    width: "100%",
  },
};

export default AboutPage;
