import guitarImg from "../../../../assets/images/main-guitar.png";
import "./style.css";
export function InstrumentView() {
  return (
    <div className="instrument-view">
      <div className="instrument-title">
        <h2>Instrumentos Musicais</h2>
        <h3>Guitarra</h3>
        <div className="instrument-current">
          <span> 03 </span>
          <span> - </span>
          <span> 04 </span>
        </div>
      </div>

      <div className="instrument-image-wrapper">
        <img src={guitarImg} className="instrument-image" />
        <div className="background-circle" />
      </div>

      <div className="instrument-action">
        <p>Quer aprender as melhores técnicas de violão clique em:</p>
        <a href="">Saiba mais</a>
      </div>
    </div>
  );
}
