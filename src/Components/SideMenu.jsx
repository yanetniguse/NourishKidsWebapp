import { Link, useOutletContext } from "react-router-dom";
import homeIcon from "../assets/icons/home.svg";
import profileIcon from "../assets/icons/profile.svg";
import profilesIcon from "../assets/icons/profiles.svg";
import mealPlannerIcon from "../assets/icons/meal-planner.svg";
import nutritionCalculatorIcon from "../assets/icons/nutrition-calculator.svg";
import profileCreatorIcon from "../assets/icons/profile-creator.svg";
import mealPlansIcon from "../assets/icons/meal-plans.svg";

export const SideMenu = () => {
  const context = useOutletContext();
  const profile = context.activeProfile;

  return (
    context.activeProfile.id && (
      <div className="sidemenu">
        <div className="sidemenu-group">
          <Link className="sidemenu-link" to="/dashboard">
            <img className="sidemenu-link-icon" src={homeIcon} />
            <div className="sidemenu-link-text">Home</div>
          </Link>

          <Link className="sidemenu-link" to="/meal-planner">
            <img className="sidemenu-link-icon" src={mealPlannerIcon} />
            <div className="sidemenu-link-text">Meal Planner</div>
          </Link>

          <Link
            className="sidemenu-link"
            to="https://www.nutritionvalue.org/nutritioncalculator.php"
            target="_blank"
          >
            <img className="sidemenu-link-icon" src={nutritionCalculatorIcon} />
            <div className="sidemenu-link-text">Nutrition Calculator</div>
          </Link>
          <hr style={{ width: "100%", border: "1px solid grey" }} />
          <Link className="sidemenu-link" to="/profiles">
            <img className="sidemenu-link-icon" src={profilesIcon} />
            <div className="sidemenu-link-text">Profiles</div>
          </Link>

          <Link className="sidemenu-link" to="/profile-creator">
            <img className="sidemenu-link-icon" src={profileCreatorIcon} />
            <div className="sidemenu-link-text">Profile Creator</div>
          </Link>

          <Link className="sidemenu-link" to={`/profile/${profile.id}`}>
            <img className="sidemenu-link-icon" src={profileIcon} />
            <div className="sidemenu-link-text">Profile</div>
          </Link>

          <Link className="sidemenu-link" to="/meal-plans">
            <img className="sidemenu-link-icon" src={mealPlansIcon} />
            <div className="sidemenu-link-text">Meal Plans</div>
          </Link>
        </div>
      </div>
    )
  );
};
