import { Footer } from "../Components/Footer";
import image1 from "../assets/images/image-1.jpg";
import image2 from "../assets/images/image-2.jpg";
import image3 from "../assets/images/image-3.jpg";
import aboutUs from "../assets/images/about-us.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${image1})`,
          color: "white",
        }}
        className="page-section-background main-background"
      >
        <div className="page-section">
          <div
            className="section-image-container"
            style={{
              backgroundImage: `url(${image3})`,
            }}
          >
            <img src="" alt="" className="section-image" width="300px" />
          </div>
          <div className="section-text-container">
            <h2 className="section-heading">NourishKids</h2>
            <section className="main-description">
              Promoting healthy nutrition and empowering communities to thrive.
              Join us in making a difference.
            </section>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-text-container">
          <h2 className="section-heading">About us</h2>
          <div className="description">
            Our mission is to make healthy eating fun and accessible for kids.
            We provide expert tips, easy meal plans, and kid-friendly recipes to
            help parents and caregivers nourish their children with the right
            foods. With the support of nutritionists and pediatric experts, we
            aim to inspire lifelong healthy habits and ensure kids grow strong
            and healthy. Join us in creating a healthier future, one meal at a
            time!
          </div>
          <br />
          <Link to="/about-us">Read more</Link>
        </div>
        <div
          className="section-image-container"
          style={{
            backgroundImage: `url(${aboutUs})`,
          }}
        >
          <img
            src="./images/mountain.jpg"
            alt=""
            className="section-image"
            width="300px"
          />
        </div>
      </section>
    </>
  );
};
