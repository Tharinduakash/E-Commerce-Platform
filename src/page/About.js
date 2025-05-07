import React from 'react';
import './pages.css';
import aboutHero from '../assets/about-hero.jpg';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import './About.css';

const About = () => {
    return (
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>Our <span className="highlight">Story</span></h1>
            <p className="hero-subtitle">Building digital experiences that matter</p>
          </div>
          <div className="about-hero-image">
            <img src={aboutHero} alt="Our team working together" />
          </div>
        </section>
  
        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              We exist to create digital solutions that solve real problems with beautiful, 
              intuitive interfaces powered by cutting-edge technology. Our team of passionate 
              developers and designers work tirelessly to deliver exceptional experiences.
            </p>
            <div className="mission-stats">
              <div className="mission-stat">
                <h3>5+</h3>
                <p>Years in Business</p>
              </div>
              <div className="mission-stat">
                <h3>200+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="mission-stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We push boundaries and explore new technologies to deliver groundbreaking solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Great work happens when diverse minds come together with shared purpose.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Excellence</h3>
              <p>We settle for nothing less than exceptional in everything we create.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Passion</h3>
              <p>We love what we do, and it shows in every project we deliver.</p>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The brilliant minds behind our success</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={team1} alt="Alex Johnson" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <h3>Alex Johnson</h3>
              <p className="position">CEO & Founder</p>
              <p className="bio">
                Visionary leader with 10+ years in digital transformation and product strategy.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={team2} alt="Sarah Chen" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <h3>Sarah Chen</h3>
              <p className="position">Lead Designer</p>
              <p className="bio">
                Creative powerhouse specializing in UX/UI and brand identity systems.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={team3} alt="Michael Rodriguez" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <h3>Michael Rodriguez</h3>
              <p className="position">Senior Developer</p>
              <p className="bio">
                React expert who builds performant, accessible web applications.
              </p>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="about-cta">
          <h2>Ready to work with us?</h2>
          <p>We're always excited to meet new clients and tackle fresh challenges.</p>
          <button className="cta-button">Get in Touch</button>
        </section>
      </div>
    );
  };
  
  export default About;