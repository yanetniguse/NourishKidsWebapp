import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { db } from "../config/firebase.config";
import { SideMenu } from "../Components/SideMenu";

export const MealPlanEditor = () => {
  const context = useOutletContext();
  const mealPlan = context.selectedMealPlan;

  const [updatedName, setUpdatedName] = useState(mealPlan.name);
  const [updatedDescription, setUpdatedDescription] = useState(
    mealPlan.description
  );
  const [updatedIngredients, setUpdatedIngredients] = useState(
    mealPlan.ingredients
  );
  const [updatedImageUrl, setUpdatedImageUrl] = useState(mealPlan.imageUrl);
  const [updatedvisible, setUpdatedVisible] = useState(mealPlan.visibility);

  const mealPlanDocRef = doc(db, "mealPlans", mealPlan.id);

  const navigate = useNavigate();

  const updateMealPlan = async (e) => {
    try {
      e.preventDefault();
      let updatedMealPlan = {
        name: updatedName,
        description: updatedDescription,
        ingredients: updatedIngredients,
        imageUrl: String(updatedImageUrl),
        visible: updatedvisible,
      };
      await updateDoc(mealPlanDocRef, {
        ...mealPlan,
        ...updatedMealPlan,
      });
      navigate("/meal-plans");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="main-app-container">
      <SideMenu />

      <div className="meal-plan-container">
        <h1>Meal Plan Editor</h1>
        <form className="meal-planner">
          <label htmlFor="meal-name">Meal Name</label>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            required
          />

          <label htmlFor="meal-description">Meal Description</label>
          <textarea
            name="meal-description"
            id="meal-description"
            value={updatedDescription}
            rows="4"
            onChange={(e) => setUpdatedDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="ingredients">Ingredients/recipe</label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={updatedIngredients}
            rows="6"
            onChange={(e) => setUpdatedIngredients(e.target.value)}
            required
          ></textarea>

          <label htmlFor="image-upload">Meal Image(optional)</label>
          <input
            type="text"
            name="image-upload"
            value={updatedImageUrl}
            id="image-upload"
            onChange={(e) => setUpdatedImageUrl(e.target.value || "")}
          />

          <label>
            <input
              type="radio"
              value="public"
              checked={updatedvisible === "public"}
              onChange={(e) => setUpdatedVisible(e.target.value)}
            />
            public
          </label>

          <label>
            <input
              type="radio"
              value="private"
              checked={updatedvisible === "private"}
              onChange={(e) => setUpdatedVisible(e.target.value)}
            />
            private
          </label>
          {context.selectedMealPlan.profileId == context.activeProfile.id && (
            <button
              className="submit-button"
              onClick={(e) => updateMealPlan(e)}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
