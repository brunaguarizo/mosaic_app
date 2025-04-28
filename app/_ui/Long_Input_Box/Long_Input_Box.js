import classNames from "classnames";
import styles from "./Long_Input_Box.module.css";

function LongInput({ placeholder, value, onChange }) {
    return (
        <div className={styles.container}>
            <textarea
                className={styles.input_area}
                placeholder={placeholder}
                value={value}
                onChange={onChange}></textarea>
        </div>
    );
}

export default LongInput;
