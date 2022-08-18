import React, {useState} from "react";
import HeaderImg from "../../assets/headerImg.png";
import "./hero.css";
import Select from 'react-select';


export default function Hero() {
  const country = [
      { value: 'Remote', label: 'Remote' },
      { value: 'Usa', label: 'Usa' },
      { value: 'Uk,london', label: 'Uk,london' },
      { value: 'Nigeria', label: 'Nigeria' }
    ];
    const [countries, setCountries] = useState('Country')
 
  return (
    <>
      <section className="hero-section">
        <div className="hero-heading">
          <h2>Find freelance and fulltime developer jobs.</h2>
          <p>
            Glumos is your one-stop-centre for thousands of digital freelance
            and fulltime jobs.
          </p>
          <div className="search-jobs">

  <div className="search-job">
    <form className="search-form">
      <div className="search-opt">
        <div className="input-button">
          <input type="text" placeholder="Search a job"/>
        </div>
        <div className="select-form">
        <Select
                        defaultValue={countries}
                        onChange={setCountries}
                        options={country}
                        placeholder='Country'
                    />
        </div>
      </div>
      <div className="search-btn">
        <button>Search</button>
      </div>
    </form>
  </div>

          </div>
        </div>
        <div className="hero-img">
          <img src={HeaderImg} alt="header-photo" />
        </div>
      </section>
    </>
  );
}
