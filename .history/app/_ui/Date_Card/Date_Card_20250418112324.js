"use client";

import styles from "./Date_Card.module.css";

export default function DateCard({ startDate, endDate, onClick }) {
    const formatDate = (date) => {
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, "0");
        const month = d.toLocaleString("en-US", { month: "short" });
        const year = d.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    return (
        <div
            className={styles.card}
            onClick={onClick}>
            <div className={styles.header}>
                <span className={styles.icon}>📅</span>
                <span className={styles.label}>Start and End Date</span>
                <span className={styles.chevron}>▾</span>
            </div>
            <div className={styles.dateRange}>
                {formatDate(startDate)} - {formatDate(endDate)}
            </div>
        </div>
    );
}
