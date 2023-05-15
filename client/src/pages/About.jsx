import React from "react";
import LogoutBar from "../components/LogoutBar";

const About = () => {
  return (
    <div>
      <LogoutBar />
      <div className={"container mt-5"}>
        <h1>Reputed Edtech platform </h1>
        <h2>for Vernacular Languages</h2>
        <div>
          <div class="row justify-content-md-center mt-5">
            <div class="col col-lg-5">
              GUVI is an IIT-M & IIM-A incubated Ed-tech company that focuses on
              providing personalized learning solutions for its learners right
              from online learning, upskilling & recruitment opportunities in
              world-class quality. And, bestow tech-skills with the comfort of
              your native language
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
