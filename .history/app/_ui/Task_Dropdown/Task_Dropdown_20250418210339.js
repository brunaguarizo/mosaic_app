import React, { useState } from "react";
import styles from "./Task_Dropdown.module.css";

export default function TaskDropDown({ sections }) {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className={styles.accordion}>
            {sections.map((section, idx) => (
                <div
                    key={idx}
                    className={styles.section}>
                    <div
                        className={styles.header}
                        onClick={() => handleToggle(idx)}>
                        <span className={styles.index}>{section.index}.</span>
                        <span className={styles.title}>{section.title}</span>
                        <span className={styles.arrow}>
                            {openIndex === idx ? "▲" : "▼"}
                        </span>
                    </div>
                    {openIndex === idx && (
                        <div className={styles.content}>
                            <ul>
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className={styles.divider}></div>
                </div>
            ))}
        </div>
    );
}

export default TaskDropDown;
