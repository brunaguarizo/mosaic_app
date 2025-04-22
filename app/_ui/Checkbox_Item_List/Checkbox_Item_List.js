"use client";
import styles from "./Checkbox_Item_List.module.css";
import { use, useState } from "react";

function CheckboxItemList({ Question, OptionTextArray = [] }) {
    const [selected, setSelected] = useState("option1");
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
                        checked={selected === "option1"}
                        onChange={() => setSelected("option1")}
                        className={styles.checkbox_selection_box}
                    />
                    <span className={styles.selection_text}>{option}</span>
                </div>
            ))}
        </div>
    );
}

export default CheckboxItemList;
