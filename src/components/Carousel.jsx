import React from 'react'

function Carousel() {
  return (
    <div className='containerCarusel'>
        <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
          <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active float-left w-full">
              <img
                src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carousel2_we0fr6.jpg"
                class="block w-full"
                alt="Campo de trigo"
              />
            </div>
            <div class="carousel-item float-left w-full">
              <img
                src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carousel3_jt7fwx.jpg"
                class="block w-full"
                alt="Cajas de comida"
              />
            </div>
            <div class="carousel-item float-left w-full">
              <img
                src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carrousel1_mlrpe8.jpg"
                class="block w-full"
                alt="Cultivos"
              />
            </div>
            <div class="carousel-item float-left w-full">
              <img
                src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carousel4_u3wqsw.jpg"
                class="block w-full"
                alt="Productos ecologicos"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
}

export default Carousel