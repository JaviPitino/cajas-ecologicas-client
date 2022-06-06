import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editProfileService } from "../../services/auth.services";

function ProfileEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  //const [ password, setPassword ] = useState("")

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  //const handlePassword = (e) => setPassword(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("haciendo submit")
    try {
      const updateProfile = new FormData();
      console.log(e.target)
      const inputImg = e.target.querySelector("#img")
      console.log(inputImg.files[0])
      updateProfile.append("username", username);
      updateProfile.append("image", inputImg.files[0]);
      updateProfile.append("email", email);
     // updateProfile.append("password", password)

      //console.log(updateProfile);
      editProfileService(id, updateProfile);
      navigate(`/profile/${id}`);
    } catch (error) {
      navigate("/error");
    }
  };



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
          {/* <div>
            <input type="password" name="password"  onChange={handlePassword} value={email}/>
            <label htmlFor="password">Contraseña</label>
        </div> */}

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
            <input type="file" id="img" name="image"/>
          </div>
          <br />
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
