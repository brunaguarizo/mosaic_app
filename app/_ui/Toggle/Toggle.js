import React from "react";
import styles from "./Toggle.module.css";

const Toggle = ({ isToggled, setIsToggled, toggledClassName }) => {
    const [internalToggled, setInternalToggled] = React.useState(false);
    const toggled =
        typeof isToggled === "boolean" ? isToggled : internalToggled;
    const setToggled = setIsToggled || setInternalToggled;

    const handleToggle = () => {
        const newValue = !toggled;
        if (typeof isToggled === "boolean" && setIsToggled) {
            setIsToggled(newValue);
        } else {
            setToggled(newValue);
        }
    };

    const buttonClass = `${styles.toggleButton} ${
        toggled ? styles.toggled : ""
    } ${toggled && toggledClassName ? styles[toggledClassName] : ""}`;

    return (
        <div className={styles.toggleContainer}>
            <button
                className={buttonClass}
                onClick={handleToggle}>
                <div className={styles.circle}></div>
            </button>
        </div>
    );
};

export default Toggle;
