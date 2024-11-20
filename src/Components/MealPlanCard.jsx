import mountain from "../assets/images/mountain.jpg";

export const MealPlanCard = (props) => {
    return (
        <div className="meal-card-container">
            <div
                className="meal-card-image"
                style={{
                    backgroundImage: `url(${mountain})`,
                }}
            >
                <img alt="" />
            </div>
            <div className="meal-card-text">
                <h4 className="meal-card-title">{props.name}</h4>
                <div className="meal-card-description">{props.description}</div>
            </div>
        </div>
    );
};
