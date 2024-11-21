import { useNavigate, useOutletContext } from "react-router-dom";
import { SideMenu } from "../Components/SideMenu";
import defaultMealPlanImage from "../assets/images/meal-card-image-default.jpg";

export const MealPlan = () => {
  const context = useOutletContext();
  const profile = context.activeProfile;
  const mealPlan = context.selectedMealPlan;
  const navigate = useNavigate();

  let isProfileMealPlan = mealPlan.profileId === profile.id;

  return (
    <div className="main-app-container">
      <SideMenu />
      <div className="meal-plan-container">
        <img src={mealPlan.imageUrl} alt="" />
        <h2>{mealPlan.name}</h2>

        <div className="meal-text">
          <h3 style={{ marginBottom: "3px" }}>Description:</h3>
          <p>{mealPlan.description}</p>
        </div>
        <div className="meal-text">
          <h3 style={{ marginBottom: "3px" }}>Ingredients:</h3>
          <p>{mealPlan.ingredients}</p>
        </div>
        {isProfileMealPlan && (
          <button
            className="submit-button"
            onClick={() => navigate("/meal-plan-editor")}
          >
            Edit Meal Plan
          </button>
        )}
      </div>
    </div>
  );
};
