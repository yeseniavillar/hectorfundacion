import React, { Fragment } from 'react'
import team from '../images/team/team-1.jpg'

export default function Team () {
  return (
    <Fragment>
      <section id="team" className="team section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Founder</h2>
          </div>

          <div className="row align-items-center">

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src={team} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#hero"><i className="bi bi-twitter"></i></a>
                    <a href="#hero"><i className="bi bi-facebook"></i></a>
                    <a href="#hero"><i className="bi bi-instagram"></i></a>
                    <a href="#hero"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Hecto Rodriguez</h4>
                  <span>Founder</span>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-6">
              <div className="section-title">
                <h2>Biografia</h2>
                <p><strong>Hecto A. Rodriguez</strong> nació en Santo Domingo (Republica Dominicana) el 7 de noviembre de 1980</p><br></br>
                <p>Es  un empresario dominicano nacido en Argelia, autor de novelas, ensayos y obras de teatro. Sus escritos giran  alrededor de su propia conciencia sobre el destino del ser humano, desarrollando de este modo una filosofía del absurdo de la condición humana. Esta corriente de pensamiento se oponía a cualquier ideología que alejara al hombre de lo humano, ya se tratara de una religión como de un sistema político.</p>
                 </div>
            </div>
          </div>
        </div>
      </section>
</Fragment>
  )
}
