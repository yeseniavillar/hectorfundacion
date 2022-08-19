import React, { Fragment } from 'react'
import hero from '../images/apoyo.png'

export default function Hero () {
  return (
        <Fragment>
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>FUNDACION HECTOR A RODRIGUEZ</h1>
                            <h5> Ayudamos a los más Necesitados, proporcionando un entorno enriquecido
                                 y receptivo para aprender crecer y alcanzar su potencial.</h5>

                            <div><a href="#about" className="btn-get-started scrollto">Read more</a></div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={hero} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
  )
}
