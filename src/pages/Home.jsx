import HeroImage from "../assets/hero-image.png";
import Card from "../components/Card";

const platforms = [
  {
    title: "YouTube",
    desc: "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
    color: "#F1C2B0",
    icon: "./src/assets/youtube.png",
  },
  {
    title: "TikTok",
    desc: "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
    color: "#F9EB98",
    icon: "./src/assets/tiktok.png",
  },
  {
    title: "Facebook",
    desc: "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
    color: "#C0D9DD",
    icon: "./src/assets/facebook.png",
  },
  {
    title: "Instagram",
    desc: "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
    color: "#6975E8",
    icon: "./src/assets/instagram.png",
  },
];

function Home() {
  return (
    <main>
      <div className="container">
        <div className="linha banner">
          <div className="banner-content">
            <h1>Crie seus vídeos online</h1>
            <p>
              Transforme suas ideias em filmes memoráveis: onde a criatividade
              encontra a simplicidade.
            </p>
            <button>Começar agora!</button>
          </div>
          <img src={HeroImage} alt="" />
        </div>

        <div className="card-group">
          {platforms.map((item, index) => (
            <Card {...item} key={index} index={index + 1} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
