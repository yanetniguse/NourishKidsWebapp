import { useState } from "react";
import { db } from "../config/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { auth } from "../config/firebase.config";
import { useNavigate, useOutletContext } from "react-router-dom";
import { SideMenu } from "../Components/SideMenu";

export const ProfileEditor = () => {
  const context = useOutletContext();
  const activeProfile = context.activeProfile;

  const [name, setName] = useState(activeProfile.name);
  const [birthDate, setBirthDate] = useState(activeProfile.birthDate);
  const [weight, setWeight] = useState(activeProfile.weight);
  const [height, setHeight] = useState(activeProfile.height);

  const navigate = useNavigate();

  const profileRef = doc(db, "profiles", context.activeProfile.id);

  const onEditProfile = async (e) => {
    try {
      e.preventDefault();
      const updatedProfile = {
        id: context.activeProfile.id,
        name: name,
        birthDate: birthDate,
        weight: Number(weight),
        height: Number(height),
        userId: auth?.currentUser?.uid,
      };
      await updateDoc(profileRef, updatedProfile);
      context.setActiveProfile(updatedProfile);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="main-app-container">
      <SideMenu />
      <div className="profile-container">
        <h1>Profile Editor</h1>
        <form className="profile-creator" onSubmit={onEditProfile}>
          <label htmlFor="profile-name">Profile Name</label>
          <input
            id="profile-name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            required
          />

          <label htmlFor="birth-date">Birth Date</label>
          <input
            id="birth-date"
            onChange={(e) => setBirthDate(e.target.value)}
            type="date"
            value={birthDate}
            required
          />

          <label htmlFor="weight">Weight in kg</label>
          <input
            id="weight"
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            value={weight}
          />

          <label htmlFor="height">Height in cm</label>
          <input
            id="height"
            onChange={(e) => setHeight(e.target.value)}
            type="number"
            value={height}
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
