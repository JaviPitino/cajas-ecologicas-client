import React from 'react'
import {Card, CardGroup} from 'react-bootstrap' 
function InfoBoxes() {
  return (
    <div>
    <CardGroup  className="card-boxes">
    <Card>
    <Card.Img src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654763386/EcoFood/caja-peque%C3%B1a-logo_uxp284.png" alt="imagen caja" />
    <Card.Body>
      <Card.Title>Pequeña</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Disponible</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img src={"https://res.cloudinary.com/dikww9ljc/image/upload/v1654763386/EcoFood/caja-mediana-logo_uvavis.png"} alt="imagen caja" />
    <Card.Body>
      <Card.Title>Mediana</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Disponible</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img  src={"https://res.cloudinary.com/dikww9ljc/image/upload/v1654763386/EcoFood/caja-grande-logo_z17dcv.png"} alt="imagen caja" />
    <Card.Body>
      <Card.Title>Grande</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Disponible</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>

  )
}

export default InfoBoxes