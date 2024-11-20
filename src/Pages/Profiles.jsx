import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

import { auth, db } from "../config/firebase.config";
import { getDocs, collection, query, where } from "firebase/firestore";
import { ProfileCard } from "../Components/ProfileCard";

import noProfile from "../assets/icons/no-profile.svg";
import { SideMenu } from "../Components/SideMenu";

export const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const context = useOutletContext();
  const navigate = useNavigate();

  const profileColRef = collection(db, "profiles");
  const q = query(
    profileColRef,
    where("userId", "==", String(auth?.currentUser?.uid))
  );

  const getProfiles = async () => {
    try {
      const data = await getDocs(q);
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

  getProfiles();

  const chooseProfile = (profile) => {
    context.setActiveProfile(profile);
    console.log(profile);
  };

  return (
    <div className="main-app-container">
      <SideMenu />
      <div className="profiles-container">
        {profiles.length !== 0 ? (
          <>
            <h1>Profiles</h1>
            <div className="profiles-section">
              {profiles.map((profile) => (
                <Link
                  to="/dashboard"
                  key={profile.id}
                  className="card-container"
                  onClick={() => chooseProfile(profile)}
                >
                  <ProfileCard profile={profile} />
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="no-profile-section">
            <div className="no-profile-image">
              <img src={noProfile} alt="" />
            </div>
            <h2>You have not created any profiles yet</h2>
            <button
              className="submit-button"
              onClick={() => navigate("/profile-creator")}
            >
              Create a profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
