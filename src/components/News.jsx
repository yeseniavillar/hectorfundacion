import React, { Fragment } from 'react'

export default function News () {
  return (

    <Fragment>
      <div className="container">
        <div className="section-title">
          <h2>News</h2>
        </div>
      </div>

      <section id="news" className="testimonials">
        <div id="myCarousel" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container text-danger">
                <div className="carousel-caption text-start">
                  <h1>Fundacion Hector A. Rodriguez</h1>
                  <p>La Fundación apoya la creencia de que todos los individuos tienen derecho a la dignidad
                    y al amor propio y que la mayoría de los individuos están dispuestos, cuando se les da la
                    oportunidad, a hacerse responsables de sus actos y de su bienestar. La Fundación también
                    cree que las personas competentes también se benefician de los estímulos y los recordatorios
                    ocasionales</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption">
                  <h1>Fundacion Hector A. Rodriguez</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption">
                  <h1>Fundacion Hector A. Rodriguez</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

    </Fragment>
  )
}
