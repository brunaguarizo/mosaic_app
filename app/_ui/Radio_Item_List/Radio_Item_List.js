"use client";
import styles from "@/app/_ui/Radio_Item_List/Radio_Item_List.module.css";
import { use, useState } from "react";

function RadioItemList({ OptionTextArray = [] }) {
    const [selected, setSelected] = useState("");

    return (
        <div className={styles.radio_container}>
            {OptionTextArray.map((option, index) => (
                <div
                    key={index}
                    className={styles.radio_option_container}>
                    <input
                        type='radio'
                        name='radio-option'
                        value={option.value || option}
                        checked={selected === (option.value || option)}
                        onChange={() => setSelected(option.value || option)}
                        className={styles.radio_selection_box}
                    />
                    <span className={styles.selection_text}>
                        {option.label || option}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default RadioItemList;
