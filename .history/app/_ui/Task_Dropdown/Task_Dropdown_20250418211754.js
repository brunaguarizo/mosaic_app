import React, { useState } from "react";
import styles from "./Task_Dropdown.module.css";

function TaskDropDown({ sections }) {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className={styles.dropdown}>
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
                            {openIndex === idx ? (
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <mask
                                        id='mask0_2077_1026'
                                        style='mask-type:alpha'
                                        maskUnits='userSpaceOnUse'
                                        x='0'
                                        y='0'
                                        width='24'
                                        height='24'>
                                        <rect
                                            width='24'
                                            height='24'
                                            transform='matrix(1 0 0 -1 0 24)'
                                            fill='#D9D9D9'
                                        />
                                    </mask>
                                    <g mask='url(#mask0_2077_1026)'>
                                        <path
                                            d='M12 9L7 14H17L12 9Z'
                                            fill='#141414'
                                        />
                                    </g>
                                </svg>
                            ) : (
                                "▼"
                            )}
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
