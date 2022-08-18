import React from "react";
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <h2>glumos</h2>
      <section className='footer-content'>
        <div>
          <p>
            Block E, Level 2, Faculty of Business and Law, No. 1 Jalan Taylor's
            Subang Jaya, Selangor 47500. Malaysia
          </p>
        </div>
        <div>
        <p><a href='/'>Privacy</a></p>
            <p><a href='/'>Terms and Conditions</a></p>
        </div>
        <div>
        <p><a href='/'>Browse Jobs</a></p>
        <p><a href='/'>Browse Companies</a></p>
        <p><a href='/'>Browse Jobseekers</a></p>
        </div>
        <div>
        <p><a href='/'>Freelance Jobs</a></p>
        <p><a href='/'>Fulltime Jobs</a></p>
        </div>
        <div>
        <p><a href='/'>&copy;2022 glumos</a></p>
        </div>
      </section>
    </div>
  );
}
