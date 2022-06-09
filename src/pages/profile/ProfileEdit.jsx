import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editProfileService } from "../../services/auth.services";
import { uploadService } from '../../services/profile.services'

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

  }, [])

  // const getUserData = () => {

  //   try {

  //     const response = await 

  //   } catch(error) {
  //     navigate("/error")
  //   }

  // }

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
    <div>
      <div id="login-form">
        <h1>Editar Perfil</h1>
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              name="username"
              onChange={handleUsername}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleEmail}
              value={email}
            />
          </div>

          <div>
            <br />
            <label htmlFor="image">Imagen</label>
            <br />
            <input type="file" id="img" name="image" onChange={handleImageChange} />
          </div>
          <br />
          <button type="submit">Actualizar</button>
        </form>
        <img src={image} alt="imagen perfil" />
      </div>
    </div>
  );
}

export default ProfileEdit;
