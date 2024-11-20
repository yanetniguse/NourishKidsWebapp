import { useState } from "react";
import { db } from "../config/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate, useOutletContext } from "react-router-dom";
import { SideMenu } from "../Components/SideMenu";

export const MealPlanner = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [visible, setVisibie] = useState("public");
  const mealPlanColRef = collection(db, "mealPlans");
  const context = useOutletContext();
  const navigate = useNavigate();

  const submitMealPlan = async (e) => {
    try {
      e.preventDefault();
      await addDoc(mealPlanColRef, {
        name: name,
        description: description,
        ingredients: ingredients,
        image: imageUrl,
        visibility: visible,
        profileId: context.activeProfile.id,
      });
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main-app-container">
      <SideMenu />
      <div className="meal-plan-container">
        <h1>Meal Planner</h1>

        <form className="meal-planner">
          <label htmlFor="meal-name">Meal Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="meal-description">Meal Description</label>
          <textarea
            name="meal-description"
            id="meal-description"
            rows="4"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="ingredients">Ingredients/recipe</label>
          <textarea
            name="ingredients"
            id="ingredients"
            rows="6"
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></textarea>

          <label htmlFor="image-upload">Meal Image(optional)</label>
          <input
            type="text"
            name="image-upload"
            id="image-upload"
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <label>
            <input
              type="radio"
              value="public"
              checked={visible === "public"}
              onChange={(e) => setVisibie(e.target.value)}
            />
            public
          </label>

          <label>
            <input
              type="radio"
              value="private"
              checked={visible === "private"}
              onChange={(e) => setVisibie(e.target.value)}
            />
            private
          </label>

          <button className="submit-button" onClick={(e) => submitMealPlan(e)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
