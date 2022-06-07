import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { findBoxesService } from '../../services/box.services'
import { AuthContext } from "../../context/auth.context";


function FarmerBoxes() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const [ boxesByFarmer, setBoxesByFarmer ] = useState([])
  const [ allBoxes, setAllBoxes ] = useState([])

  useEffect(() =>{
    getBoxesByFarmer()
  }, [])

    const getBoxesByFarmer = async () => {

      console.log(user._id)

    try {

      const response = await findBoxesService()
      setAllBoxes(response.data)
      console.log("DATA", response.data)
      console.log("Este es el logueado", user._id)
    

  
      // if (user.role === "client"){
      //   const responseParams = await findBoxesService(id)
      //   setBoxesByFarmer(responseParams.data)
      //   console.log("Soy cliente", responseParams.data)
      // } 
      // if (user.role === "farmer") {
      //   const response = await findBoxesService(user._id)
      //   setBoxesByFarmer(response.data)
      //   console.log("Soy farmer", response.data)
      // }
    } catch (error) {
      navigate('/error')
    }
  }

  if (!boxesByFarmer) {
    return <h3>...Loading...</h3>
  }
  return (
    <div>
     {
       allBoxes.map((eachBox) => {
         return (
         eachBox.farmer.map((eachFarmer) => {
          
            return (
             <li> {eachBox.name} </li> 
            )
          
         })
         )
       })
     }
    </div>
  )
}

export default FarmerBoxes