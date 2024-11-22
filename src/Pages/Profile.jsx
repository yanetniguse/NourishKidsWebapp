import { Link } from "react-router-dom";
import { useOutletContext, useNavigate } from "react-router-dom";
import { SideMenu } from "../Components/SideMenu";
import { MealPlanCard } from "../Components/MealPlanCard";
import { useState, useEffect } from "react";
import { db } from "../config/firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";
import profileIcon from "../assets/icons/profile.svg";

export const Profile = () => {
  const context = useOutletContext();
  const navigate = useNavigate();
  const profile = context.activeProfile;
  let age = calculateAge(new Date(context.activeProfile.birthDate));
  let bmi = calculateBmi(
    context.activeProfile.weight,
    context.activeProfile.height
  );

  function calculateBmi(weight, height) {
    return Math.round((weight / (height / 100) ** 2) * 100) / 100;
  }

  function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust if the birthday hasn't occurred yet this year
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  const [mealPlans, setMealPlans] = useState([]);

  const mealPlanColRef = collection(db, "mealPlans");
  const profileMealPlan = query(
    mealPlanColRef,
    where("profileId", "==", String(context.activeProfile.id))
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

  getMealPlans();

  const goToProfileEditor = (e) => {
    e.preventDefault();
    navigate("/profile-editor");
  };

  return (
    <div className="main-app-container">
      <SideMenu />
      <div className="profile-container">
        <h1>Profile page</h1>
        <div className="profile-page">
          <div className="profile-section">
            <img src={profileIcon} alt="" />
            <p className="profile-name">{profile.name}</p>
            <p>Birth Date: {profile.birthDate}</p>
            <p>Age: {age}</p>
            <p>Weight in kg: {profile.weight}</p>
            <p>Height in cm: {profile.height}</p>
            <p>
              BMI: {bmi} kg/m<sup>2</sup>
            </p>
            <button
              className="submit-button"
              onClick={(e) => goToProfileEditor(e)}
            >
              Edit Profile
            </button>
          </div>
          <div className="meal-plans-section">
            <h1>Created Meal Plans</h1>
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
      </div>
    </div>
  );
};
