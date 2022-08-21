import React, { Fragment } from 'react'
import team from '../images/team/team-1.jpg'

export default function Team () {
  return (
       <Fragment>
       <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Fundador</h2>
        </div>

        <div className="row align-items-center">

          <div className="col-lg-5 col-md-2 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={team} className="img-fluid" alt=""/>
                <div className="social">
                  <a href="#hero"><i className="bi bi-twitter"></i></a>
                  <a href="#hero"><i className="bi bi-facebook"></i></a>
                  <a href="#hero"><i className="bi bi-instagram"></i></a>
                  <a href="#hero"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Hector A. Rodriguez</h4>
                <span>Fundador</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
        </Fragment>
  )
}
