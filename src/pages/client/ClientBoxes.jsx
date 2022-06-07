import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router';
import { AuthContext } from "../../context/auth.context";
import { clientBoxesService } from '../../services/client.services'

function ClientBoxes() {

    const { user } = useContext(AuthContext);
    const [ allBoxes, setAllBoxes ] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
       getBoxesByClient();
    }, [])

    const getBoxesByClient = async () => {

        try {
             const response = await clientBoxesService()
             setAllBoxes(response.data)
             console.log("Cliente data", response.data)
             
        } catch(error) {
            navigate('/error')
        }
    }
  return (

    <div>
        ClientBoxes
    </div>
  )

}

export default ClientBoxes