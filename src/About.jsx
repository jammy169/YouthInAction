import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="mission">
        <h1>Our Mission</h1>
       <h2><p>Empowering youth to lead and innovate for a better future.</p></h2> 
      </section>
      <section className="vision">
        <h1>Our Vision</h1>
        <h2><p>To create a global network of young leaders who drive positive change.</p></h2>
      </section>
      <section className="team">
        <h1>Meet Our Team</h1>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h2>John Doe</h2>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h2>Jane Smith</h2>
            <p>Chief Operations Officer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h2>Emily Johnson</h2>
            <p>Head of Community Engagement</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;