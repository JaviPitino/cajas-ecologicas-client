import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { findBoxesIdFarmer } from '../../services/box.services'
import { Link } from 'react-router-dom'

function BoxesByFarmer() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [ allBoxesByFarmer, setallBoxesByFarmer ] = useState()
  const [ productToBuy, setproductToBuy] = useState(null)
  
  useEffect(() => {
    getBoxesByFarmer()
  }, [])

  const getBoxesByFarmer = async () => {
    try {
      const boxesFarmer = await findBoxesIdFarmer (id)
      setallBoxesByFarmer(boxesFarmer.data)
    } catch (error) {
      navigate('/')
    }
  }

    
  if (!allBoxesByFarmer) return <h3>...Loading</h3>

  return (
    <div>BoxesByFarmer
      {allBoxesByFarmer.map((eachBox) => {
        return (
          <div>
            <Link to={`/cajas/${eachBox._id}`}>
              <img src={eachBox.image} alt="" />
              <p>{eachBox.name}</p>
            </Link>
            
          </div>
        )
      })
      
      }
    </div>
  )
}

export default BoxesByFarmer