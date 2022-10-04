import { Col, Container, Row, Stack } from "react-bootstrap";
import { TbCertificate } from "react-icons/tb";
import AnimCargando from "./animCargando";
export default function Cargando() {
  return (
    <>
      <div className="postion-relative">
        <div className="position-absolute text-success top-50 start-50position-absolute top-50 start-50 translate-middle">
          <div className="text-dark fs-1">
            <div className="d-block d-sm-block d-md-none">
              <Container className="text-center">
                <Row>
                  <Col className="col-12">
                    <AnimCargando />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TbCertificate className="text-primary fs-1" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <strong>Cargando</strong>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="d-none d-sm-none d-md-block">
              <AnimCargando />
              <strong> Cargando </strong>
              <TbCertificate className="text-primary fs-1" />
              <AnimCargando />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
