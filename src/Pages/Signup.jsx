import { useState } from "react";
import { auth } from "../config/firebase.config.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import googleIcon from "../assets/icons/google.svg";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alreadyExists, setAlreadyExists] = useState(false);
    const navigate = useNavigate();

    const signUp = async (e) => {
        try {
            e.preventDefault();
            await createUserWithEmailAndPassword(auth, email, password);
            console.log(`${auth?.currentUser?.email} has been created`);
            navigate("/profiles");
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                setAlreadyExists(true);
            } else {
                console.error(err);
            }
        }
    };

    const signInWithGoogle = async (e) => {
        try {
            e.preventDefault();
            await signInWithPopup(auth, googleProvider);
            // user created successfully
            console.log(`${auth?.currentUser?.email} has logged in`);
            navigate("/profiles");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-heading">Sign Up</h1>
            <form className="login-signup" action="">
                <label htmlFor="username">Email</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                />
                {alreadyExists && (
                    <div style={{ color: "red" }}>
                        This user already exists in use
                    </div>
                )}

                <label htmlFor="username">Password</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                />

                <button onClick={(e) => signUp(e)} className="submit-button">
                    Submit
                </button>

                <hr />
                <p className="or">or</p>
                <div
                    className="alt-login-signup"
                    onClick={(e) => signInWithGoogle(e)}
                >
                    <img src={googleIcon} alt="" className="icon" />
                    <div className="icon-text">Google</div>
                </div>
            </form>
        </div>
    );
};
