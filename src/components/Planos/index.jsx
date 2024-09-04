import styles from "./Planos.module.css";

export default function Planos({
  title,
  customColor,
  options,
  img,
  customLabel,
}) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title} style={{ backgroundColor: customColor }}>
        {title}
      </h3>
      <div className={styles.cardContent}>
        {options &&
          options.map((item, index) => (
            <div key={index} className={styles.option}>
              <h4>
                {item.userQuantity} usuário{item.userQuantity != "1" && "s"}
              </h4>
              <p>
                {item.videosQuantity === "unlimited" ? "Vídeos ilimitados" : item.videosQuantity + " Vídeos"}   <span>R${item.price}</span>
              </p>
            </div>
          ))}
        {img && <img src={img} />}
        <button style={{ backgroundColor: customColor, color: customColor && "white", borderColor: customColor && "transparent" }}>
          {customLabel ? customLabel : "Cadastrar"}
        </button>
      </div>
    </div>
  );
}
