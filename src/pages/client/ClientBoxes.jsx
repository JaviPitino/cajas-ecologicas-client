import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { clientBoxesService } from '../../services/client.services'
import { Button, Card} from 'react-bootstrap';

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
    <div className="box-container">
    <Card className="card-container">
      { clientBoxes.length === 0 ? (<Link to={'/cliente'}> <h5>No has comprado ninguna caja</h5> <Button variant="success">Compra tu caja</Button></Link>)
      : (
        clientBoxes.map((eachBox) => {
          return (
          <>
          <Card.Img variant="top" />
            <Card.Body>
              <Link className="link" to={`/cajas/${eachBox._id}`}>
                <img src={eachBox.image} alt="caja" />
              <Card.Title className="boxes-title"> {eachBox.name.toUpperCase()}
              </Card.Title>
              </Link>
            <Card.Text className="boxes-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi odit velit soluta et quas voluptatibus quos ullam cumque dicta omnirupti?
            </Card.Text>
          </Card.Body>
          </>

          )
        })
      )
    }
    </Card>
    </div>
  )

}

export default ClientBoxes