import { useState } from "react";
import { db } from "../config/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../config/firebase.config";
import { useNavigate, useOutletContext } from "react-router-dom";
import { SideMenu } from "../Components/SideMenu";

export const ProfileCreator = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(Date.now());
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const context = useOutletContext();
  const navigate = useNavigate();

  const profileColRef = collection(db, "profiles");

  const onSubmitProfile = async (e) => {
    try {
      e.preventDefault();
      let profile = {
        name: name,
        birthDate: birthDate,
        weight: Number(weight),
        height: Number(height),
        userId: auth?.currentUser?.uid,
      };
      await addDoc(profileColRef, profile);
      context.setActiveProfile(profile);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="main-app-container">
      <SideMenu />

      <div className="profile-container">
        <h1>Profile Creator</h1>
        <form className="profile-creator">
          <label htmlFor="profile-name">Profile Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />

          <label htmlFor="full-name">Birth Date</label>
          <input
            onChange={(e) => setBirthDate(e.target.value)}
            type="date"
            name="full-name"
            required
          />

          <label htmlFor="weight">Weight in kg</label>
          <input
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            name="weight"
          />

          <label htmlFor="height">Height in cm</label>
          <input
            onChange={(e) => setHeight(e.target.value)}
            type="number"
            name="height"
          />

          <button onClick={(e) => onSubmitProfile(e)} className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
