import { useState } from "react";
import { useParams } from "react-router-dom";
import Cargando from "./cargando";

export default function MostrarCertificado() {
  const { idCurso, idCert } = useParams();
  const [pdfListo, setPdfListo] = useState(false);
  //--
  const cargandoPDF = () => {
    setPdfListo(true);
  };
  return (
    <>
      {!pdfListo ? <Cargando /> : null}
      <div className="bg-success">
        <iframe
          frameBorder="0"
          style={{
            position: "fixed",
            top: "0px",
            bottom: "0px",
            right: "0px",
            width: "100%",
            border: "none",
            margin: "0",
            padding: "0",
            overflow: "hidden",
            zIndex: "999999",
            height: "100%",
          }}
          src={
            process.env.PUBLIC_URL +
            `/certificados/${idCurso}/${idCert}.pdf`
          }
          onLoad={cargandoPDF}
        />
      </div>
    </>
  );
}
