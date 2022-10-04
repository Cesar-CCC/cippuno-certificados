import { Spinner } from "react-bootstrap";

export default function AnimCargando() {
  return (
    <>
      <Spinner animation="grow" size="sm" variant="dark" />
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" size="sm" variant="dark" />
    </>
  );
}
