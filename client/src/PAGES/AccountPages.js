import { Container, Row, Col,Card,Button } from "react-bootstrap";
import useAuth from "../user/useAuth";
export default function AppAccount(){
    const {user}= useAuth();  
    return (
       <Container>
        <Row className="mt-4">
          <Col xs="12" className="text-center">
           <img src="/img/male_avatar.svg" alt="soy tu cuenta" style={{width:"200px",height:"200px",
           borderRadius:"50%"
            }}/>
          </Col>
          <Col className="mt-4">
            <Card>
               <p className="text-center"><b>nombre:</b>{user.name}</p>
            </Card>
            <Card>
               <p className="text-center"><b>correo:</b>{user.email}</p>
            </Card>
            <Card>
            <p className="text-center"><b>rol:</b>{user.role}</p>
           
            <Button variant="warning" className="mt-1">
            Editar cuenta
            </Button>
            <Button variant="link" className="mt-2">
                 Editar contraseña
              </Button>
              <Button variant="link" className="mt-3 text-danger" >
                Eliminar cuenta
              </Button>
              </Card>
          </Col>
        </Row>
       </Container>
    );
  
  

}