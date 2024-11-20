import contactUs from "../assets/images/contact-us.jpg";

export const Contacts = () => {
    return (
        <>
            <div
                className="page-heading"
                style={{
                    backgroundImage: `url(${contactUs})`,
                }}
            >
                <div className="page-heading-text">Contacts</div>
            </div>
            <section className="page-section">
                <div className="section-text-container">
                    <div
                        className="section-description"
                        style={{
                            fontSize: "1.5em",
                        }}
                    >
                        <div>Email: nourishkids@gmail.com</div>
                        <div>Phone: 0700430030</div>
                    </div>
                </div>
            </section>
        </>
    );
};
