import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editProfileService, getProfileDetailsService } from "../../services/auth.services";
import { uploadService } from '../../services/profile.services'
import { Form, Button } from 'react-bootstrap'

function ProfileEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState();
  //const [ password, setPassword ] = useState("")

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  //const handlePassword = (e) => setPassword(e.target.value)

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {

    try {

      const response = await getProfileDetailsService()
      setUsername(response.data.username)
      setEmail(response.data.email)
      setImage(response.data.image)

    } catch(error) {
      navigate("/error")
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("haciendo submit")
    try {
        const updateProfile = {
          username,
          email,
          image
        };
  
      await editProfileService(id, updateProfile);
      navigate(`/profile`);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleImageChange = async (e) => {

    const uploadForm = new FormData()
    uploadForm.append("image", e.target.files[0])

    try {
      const response = await uploadService(uploadForm)
      setImage(response.data)

    } catch(error) {
      navigate("/error")
    }
  }

  return (
    <div className="form-center container-fluid">
      <div className="row col-4 map_section">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor="username"> Usuario </Form.Label>
            <Form.Control type="text"
                name="username"
                onChange={handleUsername}
                value={username} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label htmlFor="email"> Email </Form.Label>
            <Form.Control type="email"
              name="email"
              onChange={handleEmail}
              value={email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label htmlFor="image"> Imagen </Form.Label>
            <Form.Control type="file" id="img" name="image" onChange={handleImageChange} />
          </Form.Group>
          <img width={"150px"} src={image} alt="imagen perfil" />
          <br />
        <Button type="submit" variant="success">Actualizar</Button>
        </Form>  
      </div>
    </div>


    // <div>
    //   <div id="login-form">
    //     <h1>Editar Perfil</h1>
    //     <form onSubmit={handleSubmit} >
    //       <div>
    //         <label htmlFor="username">Usuario</label>
    //         <input
    //           type="text"
    //           name="username"
    //           onChange={handleUsername}
    //           value={username}
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="email">Email</label>
    //         <input
    //           type="email"
    //           name="email"
    //           onChange={handleEmail}
    //           value={email}
    //         />
    //       </div>

    //       <div>
    //         <br />
    //         <label htmlFor="image">Imagen</label>
    //         <br />
    //         <input type="file" id="img" name="image" onChange={handleImageChange} />
    //       </div>
    //       <br />
    //       <button type="submit">Actualizar</button>
    //     </form>
    //     <img src={image} alt="imagen perfil" />
    //   </div>
    // </div>
  );
}

export default ProfileEdit;
