import { CaretDown } from "@phosphor-icons/react";
import "./Planos.css";

export default function Planos(prop) {
  if (prop.img) {
    return (
      <>
        <div className="plan imgPlan">
          <div className="plan-title" style={{ background: `${prop.color}`, borderBottom: `${prop.color == "#fff" ? "1px solid #EBE9E9" : ""}` }}>
            <h2>{prop.id}</h2>
          </div>
          <div className="plan-sections">
            <img src={prop.img} alt="Moça apoiada em um celular" />
          </div>
          <div className="plan-button">
            <button style={{background: `${prop.color}`,}} className={prop.color == "#fff" ? "border" : ""}>
              {prop.btnText}
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="plan">
        <div className="plan-title" style={{ background: `${prop.color}`, borderBottom: `${prop.color == "#fff" ? "1px solid #EBE9E9" : ""}` }}>
          <h2>{prop.id}</h2>
        </div>
        {prop.items.map((data, i) => (
          <div key={i} className="plan-sections">
            <h3>{data.section}</h3>
            <button>
              {data.listText}
              <b>{data.preco}</b>
              <CaretDown size={13} className="caretdown" />
            </button>
          </div>
        ))}
            <div className="seta">
            <CaretDown size={13} className="caretdown" />
            </div>
        <div className="plan-button">
          <button
            style={{ background: `${prop.color}` }}
            className={prop.color == "#fff" ? "border" : "roxo"}
          >
            {prop.btnText}
          </button>
        </div>
      </div>
    </>
  );
}

