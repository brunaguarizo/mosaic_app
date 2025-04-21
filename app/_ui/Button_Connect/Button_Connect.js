"use client";

import React, { useState } from "react";
import styles from "./Button_Connect.module.css";

const ButtonConnect = () => {
    const [isConnected, setIsConnected] = useState(false);

    const handleToggle = () => {
        setIsConnected((prev) => !prev);
    };

    return (
        <button
            className={`${styles.button} ${
                isConnected ? styles.primary : styles.disabled
            }`}
            onClick={handleToggle}>
            {isConnected ? "Connected" : "Disconnected"}
        </button>
    );
};

export default ButtonConnect;
