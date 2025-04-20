import React, { useState } from "react";
import styles from "./Toggle.module.css";

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled((prev) => !prev);
    };

    return (
        <div className={styles.toggleContainer}>
            <button
                className={`${styles.toggleButton} ${
                    isToggled ? styles.toggled : styles.untoggled
                }`}
                onClick={handleToggle}>
                <div className={styles.circle}></div>
            </button>
        </div>
    );
};

export default Toggle;
