import mountain from "../assets/images/mountain.jpg";
import profileIcon from "../assets/icons/profile.svg";

export const ProfileCard = (props) => {
    const profile = props.profile;

    return (
        <div className="profile-card-container">
            <div className="profile-card-image">
                <img src={profileIcon} alt="" />
            </div>
            <div className="profile-card-text">
                <h4 className="profile-card-title">{profile.name}</h4>
            </div>
        </div>
    );
};
