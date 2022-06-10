import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.services";
import { AuthContext } from "../../context/auth.context";
import { Button, Form, Modal } from "react-bootstrap";

//Página Pop Up para el login del usuario

function Login() {
  // UseContext
  const { authenticateUser, user } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  // Creamos los estados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  // Eventos Handlers
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  //Funcionalidad para mandar la información introducida en el formulario al BE y controlar el acceso desde allí

  const handleLogin = async (e) => {
    e.preventDefault();

    const userIdentity = {
      email,
      password,
    };

    try {
      // Validar al usuario
      const response = await loginService(userIdentity);
      // Guardar el Token en el localStorage
      localStorage.setItem("authToken", response.data.authToken);
      const role = await authenticateUser();
      //! CONDICIONAL PARA REDIRECCIONAR SEGUN EL ROL DEL USUARIO QUE SE LOGEA
      if (role === "farmer") {
        navigate("/agricultor");
      }
      if (role === "client") {
        navigate("/cliente");
      }
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  //Renderizamos el formulario para el login a la web. El login redireccionara segun el rol del usuario que accede.

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Accede
      </Button>

      <Modal id="mastrarmodal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Accede a Ecocajas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo Electónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Correo Electrónico"
                autoFocus
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                placeholder="Inserte su contraseña"
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button type="submit" variant="success" onClick={handleClose}>
              Acceder
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
