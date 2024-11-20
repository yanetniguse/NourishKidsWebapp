import { Link, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { SideMenu } from "../Components/SideMenu";
import { MealPlanCard } from "../Components/MealPlanCard";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";

export const MealPlans = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const context = useOutletContext();

  const mealPlanColRef = collection(db, "mealPlans");
  const profileMealPlan = query(
    mealPlanColRef,
    where("profileId", "==", context.activeProfile.id)
  );

  const getMealPlans = async () => {
    try {
      const data = await getDocs(profileMealPlan);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setMealPlans(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMealPlans();
  }, []);

  return (
    <div className="main-app-container">
      <SideMenu />

      <div className="meal-plans-container">
        <h1>Meal Plans</h1>

        <div className="card-section">
          {mealPlans.map((mealPlan) => (
            <Link to={`/meal-plan/${mealPlan.id}`}>
              <MealPlanCard
                key={mealPlan.id}
                name={mealPlan.name}
                description={mealPlan.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};