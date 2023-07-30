"use client"
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    useEffect(() => {
    }, []);
    return (
        <button onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
        }}>
            <span className="material-symbols-outlined">{
                theme === "light" ? "light_mode" : "dark_mode"
            }
            </span>
        </button>
    );
}

export default ThemeToggle;