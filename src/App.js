import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Create and configure the chatbot script element
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;
    script.setAttribute('chatbotId', 'JYT_XbQwOhNUCc_4Xbm9K');
    script.setAttribute('domain', 'www.chatbase.co');

    // Append script to the body and set up configuration
    document.body.appendChild(script);
    window.embeddedChatbotConfig = {
      chatbotId: 'JYT_XbQwOhNUCc_4Xbm9K',
      domain: 'www.chatbase.co',
    };

    // Clean up the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="site-main-wrapper">
      <header>
        <nav id="main-nav" className="flex items-center justify-between">
          <div className="branding">
            <img id="mlogo" src="/images/main_logo.png" alt="NourishKids Logo" />
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#aim" className="nav-link">Aim</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#community" className="nav-link">Community</a>
          </div>
          <div className="nav-actions">
            <a href="#signup-modal">
              <button className="btn btn-primary">Profile</button>
            </a>
          </div>
        </nav>

        <div className="hero">
          <div className="hero-text">
            <h6>NourishKids</h6>
            <h1>Promoting <span>Healthy Nutrition</span> for Children Under 5</h1>
            <p>Join us in our mission to ensure every child gets the nutrition they need to thrive. Explore resources, engage with our community, and get personalized advice from our chatbot.</p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <div className="hero-image">
            <img src="/images/kids.jpg" alt="Healthy Kids" />
          </div>
        </div>
      </header>

      <section id="about" className="about">
        <div className="about-inner">
          <div className="about-img">
            <img className="about-me-img" src="/images/team.jpg" alt="Founder" />
          </div>
          <div className="about-text">
            <h1>About <span>Us</span></h1>
            <h3>Hello! We’re NourishKids.</h3>
            <p>NourishKids was founded by Yanet Niguse, a passionate advocate for empowering disadvantaged children through nutrition. Our mission is to ensure that every child under 5 has access to nutritious food, combating child malnutrition and promoting healthy eating habits. We are committed to contributing to the achievement of SDG 2 (Zero Hunger).</p>
            <div className="social">
              <a href="https://yanet-niguse-tesfay.vercel.app/"><img src="/images/website.jpg" alt="Website" /></a>
              <a href="https://www.facebook.com/nourishkids"><img src="/images/facebook.jpg" alt="Facebook" /></a>
              <a href="https://twitter.com/nourishkids"><img src="/images/instagram.jpg" alt="Instagram" /></a>
              <a href="#"><img src="/images/whatsapp.jpg" alt="WhatsApp" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="aim" className="impact-and-scalability">
        <div className="container">
          <h2 className="section-heading">Impact and Scalability</h2>
          <div className="impact-content">
            <p>NourishKids aims to make a meaningful impact on child nutrition by providing essential resources and tools to parents and caregivers. Our platform is designed to:</p>
            <ul>
              <li>Empower parents with knowledge on balanced diets and essential nutrients.</li>
              <li>Offer personalized meal planning based on child age, dietary needs, and preferences.</li>
              <li>Promote healthy eating habits through easy-to-follow recipes and nutritional guides.</li>
              <li>Address common feeding challenges and special dietary needs with tailored solutions.</li>
            </ul>
            <p>With scalability in mind, NourishKids can expand its reach to support more families globally, adapting to diverse cultural and dietary preferences.</p>
            <p className="cta">Join us in creating a brighter future for children's health, one meal at a time.</p>
          </div>
        </div>
      </section>

      <section className="community-reviews" id="community">
        <div className="container flex">
          <div className="community">
            <h1>Join Our Community</h1>
            <p>Engage with other parents and caregivers to share experiences and advice.</p>
            <button className="btn btn-primary">Join Now</button>
          </div>
          <div className="reviews">
            <h1 className="section-heading"><span>What</span> Parents Say</h1>
            <p>Hear from parents who have benefited from our resources and community.</p>
            <div className="slider">
              <div className="slide">
                <img src="images/mother of all (meriam ).jpg" alt="Sarah M." />
                <p>"NourishKids has been a lifesaver. The meal plans and nutritional guides have helped me ensure my child is eating well."</p>
                <span>- Sarah M., Proud Parent</span>
              </div>
              <div className="slide">
                <img src="images/mother of all (meriam ).jpg" alt="John D." />
                <p>"The community forum is fantastic! I've connected with so many parents and gained valuable insights."</p>
                <span>- John D., Father of Two</span>
              </div>
              <div className="slide">
                <img src="images/mother of all (meriam ).jpg" alt="Merry." />
                <p>"Blessed be What you do!"</p>
                <span>- Merry, Mother of All</span>
              </div>
            </div>
            <div className="slider-dots"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
