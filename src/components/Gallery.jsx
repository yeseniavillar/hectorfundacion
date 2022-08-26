import React, { Fragment } from 'react'
import img15 from '../images/gallery/img15.jpg'
import img11 from '../images/gallery/img11.jpg'
import img12 from '../images/gallery/img12.jpg'
import img13 from '../images/gallery/img13.jpg'
import img9 from '../images/gallery/img9.jpg'

export default function Gallery () {
  return (

    <Fragment>

<section id="gallery" className="gallery mt-5">
<div className="container">
           <div className="section-title">
            <h2>Gallery</h2>
            <p>Ayudamos a los más Necesitados, proporcionando un entorno enriquecido y receptivo para aprender, crecer y alcanzar su potencial.</p>
          </div>
     <div className="row">
      <div className="card pt-5">
      <div className="slider col-md-8 d-flex justify-content-center">
        <div className="carb-body">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active ">
                    <img src={img15} className="d-block w-100 h-800" alt="..."/>
                  </div>
                  <div className="carousel-item">
                  <img src={img11} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                  <img src={img12} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                  <img src={img13} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                  <img src={img9} className="d-block w-100" alt="..."/>
                  </div>
                  </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden ">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon " aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
      </div>
      </div>
    </div>
  </section>
 </Fragment>
  )
}
