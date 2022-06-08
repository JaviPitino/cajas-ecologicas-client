import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { clientBoxesService } from '../../services/client.services'
import { Button } from 'react-bootstrap';

function ClientBoxes() {
    const navigate = useNavigate();
    const [ clientBoxes, setClientBoxes ] = useState([])

    useEffect(() => {
      getBoxesByClient();
    }, [])

    const getBoxesByClient = async () => {

      try {
        const response = await clientBoxesService()
        setClientBoxes(response.data)
      } catch (error) {
        navigate('/error')
      }
    }
    
    if (!clientBoxes) {
      return <h3>...Loading...</h3>
    }

  return (

    <div>
        { clientBoxes.lenght === 0 ? (<Link to={'/cliente'}> <h5>No has comprado ninguna caja</h5> <Button>Compra tu caja</Button></Link>)
          : (
            clientBoxes.map((eachBox) => {
              return (
                <div> {
                  <Link to={`/cajas/${eachBox._id}`}><img src={eachBox.image} alt="caja" /> <br />{eachBox.name}</Link>
                }</div>
                )
            })
          )
        }
    </div>
  )

}

export default ClientBoxes