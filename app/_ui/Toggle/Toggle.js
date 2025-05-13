import React from "react";
import styles from "./Toggle.module.css";

const Toggle = ({ isToggled, setIsToggled }) => {
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

    return (
        <div className={styles.toggleContainer}>
            <button
                className={`${styles.toggleButton} ${
                    toggled ? styles.toggled : styles.untoggled
                }`}
                onClick={handleToggle}>
                <div className={styles.circle}></div>
            </button>
        </div>
    );
};

export default Toggle;
