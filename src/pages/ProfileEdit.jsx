import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom" 
import { editProfileService } from '../services/auth.services'

function ProfileEdit() {

  const navigate = useNavigate()
  const { id } = useParams()

  const [ username, setUsername ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ image, setImage ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleUsername = (e) => setUsername(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handleImage = (e) => setImage(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const updateProfile = {
        username,
        email,
        image,
        password
      }
      await editProfileService(id, updateProfile)
      navigate(`/profile/${id}`)
    } catch (error) {
      navigate('/error')
    }

  }

  return (
    <div><div id="login-form"><h1>Editar Perfil</h1>
    <form onsubmit={handleSubmit}>
        <div>
            <input type="text" name="username"  onChange={handleUsername} value={username}/>
            <label htmlFor="username">Usuario</label>
        </div>
        {/* <div>
            <input type="password" name="password"  onChange={handleEmail} value={email}/>
            <label htmlFor="password">Contraseña</label>
        </div> */}

        <div>
            <input type="email" name="email"  onChange={handleEmail} value={email}/>
            <label htmlFor="email">Email</label>
        </div>
        
        <div>
          <br/>
          <label htmlFor="image">Imagen</label>
          <br/>
            <input type="file" name="image"  onChange={handleImage} value={image}/>
            
        </div>
        <br/>
        <button type="submit">Actualizar</button>
    
    </form>
    </div>   </div>
  )
}

export default ProfileEdit