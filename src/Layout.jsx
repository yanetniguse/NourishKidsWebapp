import { useEffect, useState } from "react";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    const [activeProfile, setActiveProfile] = useState({});
    const [selectedMealPlan, setSelectedMealPlan] = useState({});

    useEffect(() => {
        const profile = localStorage.getItem("ACTIVE_PROFILE");
        const mealPlan = localStorage.getItem("SELECTED_MEALPLAN");
        if (profile) setActiveProfile(JSON.parse(profile));
        if (mealPlan) setSelectedMealPlan(JSON.parse(mealPlan));
    }, []);

    useEffect(() => {
        if (Object.keys(activeProfile).length > 0)
            localStorage.setItem(
                "ACTIVE_PROFILE",
                JSON.stringify(activeProfile)
            );
        if (Object.keys(selectedMealPlan).length > 0)
            localStorage.setItem(
                "SELECTED_MEALPLAN",
                JSON.stringify(selectedMealPlan)
            );
    }, [activeProfile]);

    return (
        <div className="layout">
            <Navbar />
            <main>
                <Outlet
                    context={{
                        activeProfile,
                        setActiveProfile,
                        selectedMealPlan,
                        setSelectedMealPlan,
                    }}
                />
            </main>
            <Footer />
        </div>
    );
};
