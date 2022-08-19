import React, { Fragment } from 'react'
import team from '../images/team/team-1.jpg'

export default function Team () {
  return (
       <Fragment>
       <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
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
                <h4>Hecto Rodriguez</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={team}className="img-fluid" alt=""/>
                <div className="social">
                  <a href="#hero"><i className="bi bi-twitter"></i></a>
                  <a href="#hero"><i className="bi bi-facebook"></i></a>
                  <a href="#hero"><i className="bi bi-instagram"></i></a>
                  <a href="#hero"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
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
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
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
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
        </Fragment>
  )
}
