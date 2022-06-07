import React, { useState } from 'react'
import { useParams } from 'react-router'

function BoxesByFarmer() {
  const { id } = useParams()
  const [ allBoxesByFarmer, setallBoxesByFarmer ] = useState()
  


  return (
    <div>BoxesByFarmer</div>
  )
}

export default BoxesByFarmer