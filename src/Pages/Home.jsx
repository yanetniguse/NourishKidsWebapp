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
                        <img
                            src="./src/assets/mountain.jpg"
                            alt=""
                            className="section-image"
                            width="300px"
                        />
                    </div>
                    <div className="section-text-container">
                        <h2 className="section-heading">Main heading</h2>
                        <section className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Tempora velit ipsam minus sequi eaque nihil,
                            aliquid vitae voluptatibus pariatur delectus, fugit
                            debitis amet fugiat aspernatur reiciendis quis ipsum
                            suscipit hic provident sint laudantium neque eum
                            beatae ducimus. Quidem perspiciatis blanditiis
                            praesentium molestias voluptatibus veniam
                            repellendus.
                        </section>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="section-text-container">
                    <h2 className="section-heading">About us</h2>
                    <div className="description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Animi fuga reprehenderit itaque iusto sint
                        laboriosam magnam rerum. Provident voluptatum dolore
                        nemo, fugiat, impedit vel consequatur dolorum nihil
                        veritatis sint id quidem porro labore vitae voluptates
                        ratione officia reiciendis soluta quo suscipit tempore a
                        expedita incidunt.
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
