import "../App.css";
import { BiError } from "react-icons/bi";
export default function NotFound() {
  return (
    <div className="App-NotFound">
      <div>
        <strong className="App-NF-text">404</strong>
        <br />
        <strong className="fs-4">Not Found</strong>
        <br />
        <BiError className="App-logo m-3 fs-1 text-danger"/>
        <p className="fs-5">No se encontró la página que intenta acceder</p>
      </div>
    </div>
  );
}
