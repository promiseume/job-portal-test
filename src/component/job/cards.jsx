import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import shaw from "../../assets/shaw.png";
import "./card.css";
import {
  FaClock,
  FaDollarSign,
  FaBriefcase,
  FaExclamationCircle,
} from "react-icons/fa";
import Jobs from "../../jobs";

export default function Cards() {
  return (
    <section>
      {Jobs.map((job) => {
        return (
          <Card key={job.id} className={"job-cards"}>
            <div className="card-container">
              <main>
                <div className="card-content">
                  <div>
                    <img src={job.image} />
                  </div>
                  <div className="card-header">
                    <p>{job.company}</p>
                    <h3>{job.position}</h3>
                    <h5>
                      Bangalore,India{" "}
                      {job.remoteWorkAvailable ? "| Remote work available" : ""}
                    </h5>
                  </div>
                </div>
                <div className="card-content job-require">
                  <p className="icon-content">
                    <FaClock />
                    &nbsp;{job.type}
                  </p>
                  <p className="icon-content">
                    <FaDollarSign />
                    &nbsp;{job.salary} per year
                  </p>
                  <p className="icon-content">
                    <FaBriefcase />
                    &nbsp;{job.YOE} years experience
                  </p>
                </div>
                <div>
                    <div className='recruit-speed'>
                   {job.responsiveRecruiter ? <button className="respon-recruiting">
                   <FaClock />
                    &nbsp;Responsive Recruiter
                  </button>
                  : null
                 }
                  <button className="card-recruiting">
                    <FaExclamationCircle />
                    &nbsp;Urgent Recruiting
                  </button>
                  </div>
                  <ul>
                    {job.specification.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </main>
              <p>posted {job.timePosted} ago</p>
            </div>

            <div className="card-container">
              <p>{job.numberOfApplicants} Applicant</p>
              <div>
                <button className="card-save">Save</button>
                <button className="card-apply">Apply now</button>
              </div>
            </div>
          </Card>
        );
      })}
    </section>
  );
}
