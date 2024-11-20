import { useState } from "react";
import { auth, googleProvider } from "../config/firebase.config.jsx";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import googleIcon from "../assets/icons/google.svg";

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isIncorrect, setIsIncorrect] = useState(false);

    const signIn = async (e) => {
        try {
            e.preventDefault();
            await signInWithEmailAndPassword(auth, email, password);
            console.log(`${auth?.currentUser?.email} has logged in`);
            navigate("/profiles");
        } catch (err) {
            if (err.code === "auth/invalid-credential") {
                setIsIncorrect(true);
            } else {
                console.error(err);
            }
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            console.log(`${auth?.currentUser?.email} has logged in`);
            navigate("/profiles");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-heading">Login</h1>
            <form className="login-signup" action="">
                <label htmlFor="username">Email</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                />

                <label htmlFor="username">Password</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                />

                {isIncorrect && (
                    <p style={{ color: "red" }}>
                        The username or password is incorrect
                    </p>
                )}

                <button onClick={(e) => signIn(e)} className="submit-button">
                    Submit
                </button>

                <hr />
                <p className="or">or</p>
                <div onClick={signInWithGoogle} className="alt-login-signup">
                    <img src={googleIcon} alt="" className="icon" />
                    <div className="icon-text">Google</div>
                </div>
            </form>
        </div>
    );
};
