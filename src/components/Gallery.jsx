import React, { Fragment } from 'react'
import img1 from '../images/gallery/img1.jpg'
import img2 from '../images/gallery/img2.jpg'
import img3 from '../images/gallery/img3.jpg'
import img4 from '../images/gallery/img4.jpg'
import img5 from '../images/gallery/img5.jpg'
import img6 from '../images/gallery/img6.jpg'
import img7 from '../images/gallery/img7.jpg'
import img8 from '../images/gallery/img8.jpg'
import img9 from '../images/gallery/img9.jpg'
import img11 from '../images/gallery/img11.jpg'
import img12 from '../images/gallery/img12.jpg'

export default function Gallery () {
  return (
    <Fragment>

      <section id="gallery" className="gallery">
        <div className="container">

          <div className="section-title">
            <h2>Gallery</h2>
            <p>Ayudamos a los más Necesitados, proporcionando un entorno enriquecido y receptivo para aprender, crecer y alcanzar su potencial.</p>
          </div>

          <div className="row no-gutters">

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-1.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={img1} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-2.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={img2} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-3.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={img3} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-4.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={img4} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-5.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={img5} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-6.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={img6} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-7.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={img7} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-8.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={img8} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-8.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={img9} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-8.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={img11} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-8.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src={img12} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </Fragment>
  )
}
