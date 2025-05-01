"use client";
import styles from "./Checkbox_Item_List.module.css";
import { useState } from "react";

function CheckboxItemList({ Question, OptionTextArray = [] }) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prev) => {
            if (prev.includes(option)) {
                return prev.filter((item) => item !== option);
            } else {
                return [...prev, option];
            }
        });
    };

    return (
        <div className={styles.checkbox_container}>
            <h1 className={styles.checkbox_question}>{Question}</h1>
            {OptionTextArray.map((option, index) => (
                <div
                    key={index}
                    className={styles.checkbox_option_container}>
                    <input
                        type='checkbox'
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        className={styles.checkbox_selection_box}
                    />
                    <span className={styles.selection_text}>{option}</span>
                </div>
            ))}
        </div>
    );
}

export default CheckboxItemList;
