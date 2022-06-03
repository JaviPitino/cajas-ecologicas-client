import React from 'react'
import { useState } from 'react'

function Search(props) {

  // Creamos estados
  const [ search, setSearch ] = useState("")

  // Eventos 
  const handleSearch = (e) => {
    setSearch(e.target.value)
    props.searchList(e.target.value)
  } 

   // Renderizar
  return (

    <div id="form-center" className="container-fluid">
          <div className="row col-8" id="map_section">
        <form>
            <label htmlFor="search"></label>
            <input className="form-control" type="text" name='search' placeholder='Selecciona tu alimento' onChange={handleSearch} value={search} />
            <br />
        </form>
        </div>
    </div>
  )
}

export default Search