import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import rutas from "../help/rutas";

export default function AppNotPages() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={{span:4, offset:4}} className="text-center">
          <img style={{width:'100%'}} src="/img/404-not-found.svg"  alt="una imagen"/>
       
        <h2>Pagina no encontrada</h2>
        <p>
        <Link to={rutas.HomePages}>Inicio</Link>
        </p>
        </Col>
      </Row>
    </Container>
  );
}
