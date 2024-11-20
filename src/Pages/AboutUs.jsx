import aboutUs from "../assets/images/about-us.jpg";
import aboutUs2 from "../assets/images/about-us-2.jpg";
import ourAim from "../assets/images/our-aim.jpg";
import ourCommunity from "../assets/images/our-community.png";

export const AboutUs = () => {
    return (
        <div>
            <h1
                className="page-heading"
                style={{
                    backgroundImage: `url(${aboutUs})`,
                }}
            >
                <div className="page-heading-text">About Us</div>
            </h1>
            <section className="page-section">
                <div
                    className="section-image-container"
                    style={{
                        backgroundImage: `url(${aboutUs2})`,
                    }}
                >
                    <img
                        src="./src/assets/mountain.jpg"
                        alt=""
                        className="section-image"
                        width="300px"
                    />
                </div>
                <div className="section-text-container">
                    <h2 className="section-heading">About NourishKids</h2>
                    <section className="description">
                        NourishKids is dedicated to promoting healthy nutrition
                        for children and empowering communities to thrive. We
                        aim to make a lasting impact by addressing food
                        insecurity and improving access to nutritious meals
                    </section>
                </div>
            </section>

            <section className="page-section">
                <div className="section-text-container">
                    <h2 className="section-heading">Our Aim</h2>
                    <section className="description">
                        Our goal is to break the cycle of malnutrition and
                        poverty by providing education, resources, and support
                        to families in need. We believe in empowering the next
                        generation with the knowledge and tools to lead healthy
                        lives.
                    </section>
                </div>
                <div
                    className="section-image-container"
                    style={{
                        backgroundImage: `url(${ourAim})`,
                    }}
                >
                    <img
                        src="./src/assets/mountain.jpg"
                        alt=""
                        className="section-image"
                        width="300px"
                    />
                </div>
            </section>

            <section className="page-section">
                <div
                    className="section-image-container"
                    style={{
                        backgroundImage: `url(${ourCommunity})`,
                    }}
                >
                    <img
                        src="./src/assets/mountain.jpg"
                        alt=""
                        className="section-image"
                        width="300px"
                    />
                </div>
                <div className="section-text-container">
                    <h2 className="section-heading">Join Our Community</h2>
                    <section className="description">
                        Become a part of the NourishKids family. Together, we
                        can create a healthier future for children everywhere.
                        Connect with us through our programs, events, and
                        volunteer opportunities.
                    </section>
                </div>
            </section>
        </div>
    );
};
