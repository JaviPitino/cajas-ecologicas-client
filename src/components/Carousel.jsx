import React from "react";
import { Carousel } from "react-bootstrap";

//Componente Carousel que mostramos en la página principal Home de la App

function CarouselHome() {
  return (
    <Carousel fade>
      <Carousel.Item interval={4000}>
        <img
          className="image-carousel"
          src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654519948/carousel/newcarousel/carousel2_we0fr6_twnoce.jpg"
          alt="Productos ecologicos"
        />
        <Carousel.Caption className="caption">
          <h2 className="titulo-foto">
            Busca los Farmers más cerca de tu residencia
          </h2>
          <p className="text-carousel">
            Podrás buscar entre nuestros Farmers, los que se encuentren más
            cercanos a tí
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="image-carousel"
          src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654519896/carousel/newcarousel/carousel3_jt7fwx_cby3d9.jpg"
          alt="Cajas de comida"
        />
        <Carousel.Caption className="caption">
          <h2 className="titulo-foto">
            Los mejores productos ecológicos de cercanía
          </h2>
          <p className="text-carousel">
            Únete a nuestra comunidad y disfruta de una comida, sana, cercana y
            sostenible
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="image-carousel"
          src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654519978/carousel/newcarousel/carrousel1_mlrpe8_oxhyuo.jpg"
          alt="Campo de trigo"
        />
        <Carousel.Caption className="caption">
          <h2 className="titulo-foto lead">
            Escoge la EcoCaja que mejor se amolde a tí
          </h2>
          <p className="text-carousel">
            Cada Farmer, prepara tres tamaños de Boxes diferentes, a las que
            podrás añadir más Foods
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="image-carousel"
          src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654519924/carousel/newcarousel/carousel4_u3wqsw_gzhzcz.jpg"
          alt="Cultivos"
        />
        <Carousel.Caption className="caption">
          <h2 className="titulo-foto">
            Cuida del medioambiente, come sano y saludable
          </h2>
          <p className="text-carousel">
            Al utilizar nuestro Eco-Huerto cuidarás del mediambiente al
            contaminar menos
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
