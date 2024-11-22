import { Link, useOutletContext } from "react-router-dom";
import { MealPlanCard } from "../Components/MealPlanCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";
import { query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { SideMenu } from "../Components/SideMenu";

export const Dashboard = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [createdMealPlans, setCreatedMealPlans] = useState([]);
  const context = useOutletContext();

  const mealPlanColRef = collection(db, "mealPlans");
  const isPublicMealPlan = query(
    mealPlanColRef,
    where("visibility", "==", "public")
  );
  const isCreatedMealPlan = query(
    mealPlanColRef,
    where("profileId", "==", String(context.activeProfile.id))
  );

  const getMealPlans = async () => {
    try {
      const data = await getDocs(isPublicMealPlan);
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

  const getCreatedMealPlans = async () => {
    try {
      const data = await getDocs(isCreatedMealPlan);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setCreatedMealPlans(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMealPlans();
    getCreatedMealPlans();
  }, []);

  return (
    <div className="main-app-container">
      <SideMenu />

      <div className="dashboard-container">
        <div className="dashboard-heading">
          <h2 className="dashboard-section-title">Featured Meal Plans</h2>
        </div>
        <div className="card-section">
          {mealPlans.map((mealPlan) => (
            <Link
              key={mealPlan.id}
              onClick={() => context.setSelectedMealPlan(mealPlan)}
              to={`/meal-plan/${mealPlan.id}`}
            >
              <MealPlanCard
                key={mealPlan.id}
                name={mealPlan.name}
                description={mealPlan.description}
              />
            </Link>
          ))}
        </div>

        <div className="dashboard-heading">
          <h2 className="dashboard-section-title">Created Meal Plans</h2>
        </div>
        <div className="card-section">
          {createdMealPlans.map((mealPlan) => (
            <Link
              key={mealPlan.id}
              onClick={() => context.setSelectedMealPlan(mealPlan)}
              to={`/meal-plan/${mealPlan.id}`}
            >
              <MealPlanCard
                key={mealPlan.id}
                image={mealPlan.imageUrl}
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
