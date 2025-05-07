import React from 'react';
import './pages.css';
import heroImage from '../assets/hero-image.jpg'; // Add your image
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import './Home.css';
import aboutHero from '../assets/about-hero.jpg';
import './About.css';
import GridSection from './GridSection.js';

const Home = () => {
    return (
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Our <span className="highlight"> Travel Lunatics</span> Website</h1>
            
            <button className="cta-button">Get Started</button>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Modern web design" />
          </div>
        </section>
  
        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">Visit Sri Lanka</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-image">
                <img src={feature1} alt="Lightning Fast" />
              </div>
              <h3>Ella</h3>
              <p>Ella is a charming hill town nestled in Sri Lanka’s lush highlands, known for its stunning views, waterfalls, and laid-back vibe. Surrounded by tea plantations and misty mountains, Ella offers the perfect escape for nature lovers and adventure seekers alike. Don't miss the iconic Nine Arches Bridge, Little Adam’s Peak, and the scenic Ella Rock hike.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-image">
                <img src={feature2} alt="Responsive Design" />
              </div>
              <h3>Galle</h3>
              <p>Galle is a coastal gem on Sri Lanka’s southern tip, famous for its historic Galle Fort, a UNESCO World Heritage Site. With its cobblestone streets, colonial architecture, vibrant cafes, and ocean views, Galle blends old-world charm with modern culture. It’s the perfect spot for history lovers, beachgoers, and anyone seeking a relaxing seaside escape.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-image">
                <img src={feature3} alt="Modern UI" />
              </div>
              <h3>Sigiriya</h3>
              <p>Sigiriya, also known as the Lion Rock, is one of Sri Lanka’s most iconic landmarks. Rising dramatically from the jungle, this ancient rock fortress was once a royal palace. Today, visitors can climb to the top for breathtaking views and explore beautiful frescoes, gardens, and the mysterious mirror wall. A must-visit for history buffs and adventure lovers alike.</p>
            </div>
          </div>
          
        </section>


        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title">Main Travel Partners</h2>
          <p className="section-subtitle"></p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={team1} alt="Alex Johnson" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <h3>Insta360</h3>
              <p className="position">Action Camera</p>
              <p className="bio">
              Insta360 cameras let you capture every angle, every adventure all at once. Whether you're hiking mountains, diving oceans, or exploring city streets, shoot stunning 360° videos, AI-powered edits, and action-ready footage with ease. Perfect for creators on the move.
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
              <h3>Gimbal</h3>
              <p className="position">Stabilizer</p>
              <p className="bio">
              A gimbal is your secret weapon for buttery-smooth, shake-free videos. Whether you're walking, running, or riding, it stabilizes your camera or phone to capture cinematic shots effortlessly. Perfect for vloggers, travelers, and anyone who wants professional-quality footage on the go.
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
              <h3>GoPro Hero</h3>
              <p className="position">Action Camera</p>
              <p className="bio">
              GoPro is a world-leading brand in action cameras, known for its rugged, compact designs and high-quality video capabilities. Perfect for adventurers, With features like waterproofing, 4K+ resolution, slow-motion, and advanced stabilization (HyperSmooth).
              </p>
            </div>
          </div>
        </section>


        {/* Grid Section */}

        <GridSection />


        
        {/* Hero Section */}
        <section className="about-hero">
    
          <div className="about-hero-image">
            <img src={aboutHero} alt="Our team working together" />
          </div>
        </section>
  
  
        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-item">
            <h4>1000+</h4>
            <p>Happy Users</p>
          </div>
          <div className="stat-item">
            <h4>99.9%</h4>
            <p>Uptime</p>
          </div>
          <div className="stat-item">
            <h4>24/7</h4>
            <p>Support</p>
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="testimonials-section">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote">"This website changed how I interact with web apps!"</div>
              <div className="author">- Sarah Johnson</div>
            </div>
            <div className="testimonial-card">
              <div className="quote">"The performance is unmatched. Simply incredible."</div>
              <div className="author">- Michael Chen</div>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="cta-section">
          <h2>Ready to Experience the Difference?</h2>
          <button className="cta-button">Join Now</button>
        </section>
      </div>
    );
  };
  
  export default Home;