import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useState } from 'react'

function CarouselHome() {
    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
  
  return (
    <Carousel>
          <Carousel.Item interval={4000}>
        <img
          className="image-carousel"
          src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654519948/carousel/newcarousel/carousel2_we0fr6_twnoce.jpg"
          alt="Productos ecologicos"
        />
        <Carousel.Caption className='caption'>
        <h2 className="titulo-foto">Busca los agricultores más cerca de tu residencia</h2>
          <p>Podrás buscar entre nuestros agricultores, los que se encuentren más cercanos a tí</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="image-carousel"
          src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654519896/carousel/newcarousel/carousel3_jt7fwx_cby3d9.jpg"
          alt="Cajas de comida"
        />
        <Carousel.Caption className='caption'>
        <h2 className="titulo-foto">Los mejores productos ecológicos de cercanía</h2>
          <p>Únete a nuestra comunidad y disfruta de una comida, sana, cercana y sostenible</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="image-carousel"
          src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654519978/carousel/newcarousel/carrousel1_mlrpe8_oxhyuo.jpg"
          alt="Campo de trigo"
        />
        <Carousel.Caption className='caption'>
          <h2 className="titulo-foto lead">Escoge la Eco-caja que mejor se amolde a tí</h2>
          <p>Cada agricultor, prepara tres tamaños de cajas diferentes, a las que podrás añadir más alimentos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="image-carousel"
          src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654519924/carousel/newcarousel/carousel4_u3wqsw_gzhzcz.jpg"
          alt="Cultivos"
        />
        <Carousel.Caption className='caption'>
        <h2 className="titulo-foto">Cuida del medioambiente, come sano y saludable</h2>
          <p>Al utilizar nuestro Eco-Huerto cuidarás del mediambiente al contaminar menos</p>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  );


    // <div className='containerCarousel'>
    //   <div>
    //     <h4 className="textofoto">Lo que sea</h4>
    //   </div>
    //     <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
    //       <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    //         <button
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide-to="0"
    //           className="active"
    //           aria-current="true"
    //           aria-label="Slide 1"
    //         ></button>
    //         <button
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide-to="1"
    //           aria-label="Slide 2"
    //         ></button>
    //         <button
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide-to="2"
    //           aria-label="Slide 3"
    //         ></button>
    //         <button
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide-to="3"
    //           aria-label="Slide 4"
    //         ></button>
    //       </div>
    //       <div className="carousel-inner relative w-full overflow-hidden">
    //         <div className="carousel-item active float-left w-full">
    //           <img
    //             src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carousel2_we0fr6.jpg"
    //             className="block w-full"
    //             alt="Campo de trigo"
    //           />
    //         </div>
    //         <div className="carousel-item float-left w-full">
    //           <img
    //             src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carousel3_jt7fwx.jpg"
    //             className="block w-full"
    //             alt="Cajas de comida"
    //           />
    //         </div>
    //         <div className="carousel-item float-left w-full">
    //           <img
    //             src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carrousel1_mlrpe8.jpg"
    //             className="block w-full"
    //             alt="Cultivos"
    //           />
    //         </div>
    //         <div className="carousel-item float-left w-full">
    //           <img
    //             src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carousel4_u3wqsw.jpg"
    //             className="block w-full"
    //             alt="Productos ecologicos"
    //           />
    //         </div>
    //       </div>
    //       <button
    //         className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide="prev"
    //       >
    //         <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    //         <span className="visually-hidden">Previous</span>
    //       </button>
    //       <button
    //         className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide="next"
    //       >
    //         <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    //         <span className="visually-hidden">Next</span>
    //       </button>
    //     </div>
    //  </div>
  // )
}

export default CarouselHome;