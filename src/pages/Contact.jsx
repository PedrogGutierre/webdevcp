import iconDiscord from "../assets/iconDiscord.png";
import iconInstagram from "../assets/iconInstagram.png";
import iconTwiter from "../assets/iconTwiter.png";

function Contact() {
  return (
    <main style={styles.container}>
      <div style={styles.leftSection}>
        <h1 style={styles.title}>Dúvidas e suporte, entre em contato:</h1>
        <div style={styles.iconsContainer}>
          <img src={iconTwiter} alt="icone twitter" style={styles.icon} />
          <img src={iconInstagram} alt="icone instagram" style={styles.icon} />
          <img src={iconDiscord} alt="icone discord" style={styles.icon} />
        </div>
      </div>
      <div style={styles.rightSection}>
        <form style={styles.form}>
          <label style={styles.formLabel}>
            <span>Nome:</span>
            <input type="text" />
          </label>
          <label style={styles.formLabel}>
            <span>Email:</span>
            <input type="email" />
          </label>
          <label style={styles.formLabelTextArea}>
            <span>Mensagem:</span>
            <textarea></textarea>
          </label>
          <button style={styles.button} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;

const styles = {
  container: {
    padding: "50px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flex:1

  },
  leftSection: {
    maxWidth: "none",
    textAlign: "left",
    flex: "1",
    padding: "20px",

  },
  title: {
    fontSize: "60px",
    marginBottom: "20px",
  },
  rightSection: {
    borderLeft: "1px solid #888",
    flex: "1",
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  formLabel: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  formLabelTextArea: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  iconsContainer: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    width: "64px",
    height: "64px",
  },
  button: {
    padding: "8px 0",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "8px",
    backgroundColor: "#6975E8",
    cursor: "pointer",
    alignSelf:"flex-end",
    width:"256px"
  },
};
