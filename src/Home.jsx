import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <span className="text-green">Youth</span>
            <span className="text-white">In</span>
            <span className="text-orange">Action</span>
          </h1>
          <h2>Grow Lead Inspire</h2>
          <motion.button 
            className="explore-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Join YouthInAction?</h2>
        <div className="features-grid">
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3" alt="Leadership" />
            <h3>Youth Leadership</h3>
            <p>Develop essential leadership skills and confidence</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3" alt="Community" />
            <h3>Community Impact</h3>
            <p>Make a difference in your local community</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3" alt="Network" />
            <h3>Global Youth Network</h3>
            <p>Connect with young leaders worldwide</p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact">
        <div className="impact-content">
          <h2>Our Youth Impact</h2>
          <div className="impact-stats">
            <div className="stat">
              <h3>5,000+</h3>
              <p>Young Leaders</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>Countries</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Youth Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Make an Impact?</h2>
        <p>Join YouthInAction and become part of the next generation of leaders</p>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.button>
      </section>
    </div>
  );
};

export default Home;
