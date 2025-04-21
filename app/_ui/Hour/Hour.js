import { useEffect, useState } from "react";
import styles from "./Hour.module.css";

const Hour = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    return <div className={styles.hour}>{formattedTime}</div>;
};

export default Hour;
