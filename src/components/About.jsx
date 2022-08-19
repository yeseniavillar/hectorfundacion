import React, { Fragment } from 'react'
import Contacts from './Contacts'
import Gallery from './Gallery'
import News from './News'
import Team from './Team'
export default function About () {
  return (
        <Fragment >
            <main id="main" >

            <section id="about" className="about">
                    <div className="container">
            <div className="section-title">
                   <h2>About</h2>
                <p>La fundacion Hector A. Rodriguez Fue fundada por Magdalena Y Laura Rathe.
                Con la vision de trabajar por la construccion de un mundo equitativo y sostenible, el 3 de noviembre de
                2001. Fue incorporada legarmente mediante el Decreto del poder Ejecutivo No. 366 de 9 de mayo del 2002.
                </p><br></br>
                 <p>
                Está inscrita en el Consejo Nacional de Seguimiento a las Asociaciones sin fines de
                lucro de la Oficina Nacional de Planificación, clasificándose como una “asociación de
                beneficio público o servicio a terceras personas”, de acuerdo con la Ley No.122-05 para la
                regulación y fomento de las asociaciones sin fines de lucro.
                </p>
                 </div>
                      <div className="row">
                            <div className="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
                                <a href="https://youtu.be/iTC0XOr09-E" className="glightbox play-btn mb-4"></a>
                            </div>

                            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5 mx-4">

                                <div className="icon-box">
                                <div className="icon"><i className='bx bx-world'></i></div>
                                    <h4 className="title"><a href="#about">Mision</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>

                                <div className="icon-box">
                                <div className="icon"><i className='bx bxs-donate-heart'></i></div>
                                    <h4 className="title"><a href="#about">Vision</a></h4>
                                    <p className="description">Trabajar en la construcción de un mundo equitativo y sostenible.</p>
                                </div>

                                <div className="icon-box">
                                <div className="icon"><i className='bx bxs-heart'></i></div>
                                    <h4 className="title"><a href="#about">Valores</a></h4>
                                    <p className="description">
                                        <ul>
                                            <li>Excelencia</li>
                                            <li>Integridad</li>
                                            <li>Colaboración</li>
                                            <li>Impacto y relevancia</li>
                                            <li>Visión ecosistémica</li>
                                        </ul>
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                  <News/>
                <Team/>
                <Gallery/>
                <Contacts/>

                </main>
        </Fragment>
  )
}