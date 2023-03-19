import { Container, Row, Col ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import rutas from "../help/rutas";
export default function AppHome(){
    
    return (
      <Container>
      <Row className="mt-5">
        <Col xs={{span:12}} md={{span:6}} className="mb-5 text-center">
        
       
        <h2 >Bienvenido al gestor de tareas</h2>
        <p> 
          gestiona tus tareas en nuestro gestor
        
        </p>
        <div>
        <Link to={rutas.LoginPages}>Ingresa</Link> 
         <Button as={Link} to={rutas.RegisterPages} className="ml-1 ms-2 ">Crea una cuenta</Button>
        </div>
        </Col>
        <Col>
         <img  className="img-fluid" src="/img/task-manager.svg" alt="imagen" />
        </Col>
      </Row>
    </Container>
    );
  
  

}