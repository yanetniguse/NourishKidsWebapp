import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useOutletContext,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Contacts } from "./Pages/Contacts";
import { Login } from "./Pages/Login";
import { Layout } from "./Layout";
import { Dashboard } from "./Pages/Dashboard";
import { MealPlanner } from "./Pages/MealPlanner";
import { Signup } from "./Pages/Signup";
import { ProfileCreator } from "./Pages/ProfileCreator";
import { Profiles } from "./Pages/Profiles";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase.config";
import { Profile } from "./Pages/Profile";
import { ProfileEditor } from "./Pages/ProfileEditor";
import { MealPlan } from "./Pages/MealPlan";
import { MealPlans } from "./Pages/MealPlans";
import { MealPlanEditor } from "./Pages/MealPlanEditor";

export const Router = () => {
  const [profiles, setProfiles] = useState([]);
  const [mealPlans, setMealPlans] = useState([]);
  const context = useOutletContext();

  const profileColRef = collection(db, "profiles");
  const mealPlanColRef = collection(db, "mealPlans");

  const getProfiles = async () => {
    try {
      const data = await getDocs(profileColRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setProfiles(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const getMealPlans = async () => {
    try {
      const data = await getDocs(mealPlanColRef);
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

  // onSnapshot(profileColRef, (snapshot) => {
  //   let updatedProfiles = [];
  //   snapshot.docs.forEach((doc) => {
  //     updatedProfiles.push({ ...doc.data(), id: doc.id });
  //   });
  //   setProfiles(updateProfiles);
  // });

  // onSnapshot(mealPlanColRef, (snapshot) => {
  //   let updatedMealPlans = [];
  //   snapshot.docs.forEach((doc) => {
  //     updatedMealPlans.push({ ...doc.data(), id: doc.id });
  //   });
  //   setMealPlans(updatedMealPlans);
  // });

  useEffect(() => {
    setTimeout(() => {
      getProfiles();
      getMealPlans();
    }, 1000);
  }, [JSON.stringify(profiles), JSON.stringify(length)]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meal-planner" element={<MealPlanner />} />
            <Route path="/meal-plans" element={<MealPlans />} />
            <Route path="meal-plan-editor" element={<MealPlanEditor />} />
            <Route path="/profile-creator" element={<ProfileCreator />} />
            <Route path="/profile-editor" element={<ProfileEditor />} />
            <Route path="/profiles" element={<Profiles />} />
            {profiles.map((doc) => (
              <Route
                key={doc.id}
                path={`/profile/${doc.id}`}
                element={<Profile />}
              />
            ))}
            {mealPlans.map((doc) => (
              <Route
                key={doc.id}
                path={`/meal-plan/${doc.id}`}
                element={<MealPlan />}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
