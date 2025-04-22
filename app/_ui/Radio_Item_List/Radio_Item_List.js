"use client";
import styles from "@/app/_ui/Radio_Item_List/Radio_Item_List.module.css";
import { use, useState } from "react";

function RadioItemList({ Question, OptionTextArray = [] }) {
    const [selected, setSelected] = useState("option1");
    return (
        <div className={styles.radio_container}>
            <h1 className={styles.radio_question}>{Question}</h1>
            {OptionTextArray.map((option, index) => (
                <div
                    key={index}
                    className={styles.radio_option_container}>
                    <input
                        type='radio'
                        name='radio-option'
                        value={option}
                        checked={selected === "option1"}
                        onChange={() => setSelected("option1")}
                        className={styles.radio_selection_box}
                    />
                    <span className={styles.selection_text}>{option}</span>
                </div>
            ))}
        </div>
    );
}

export default RadioItemList;
