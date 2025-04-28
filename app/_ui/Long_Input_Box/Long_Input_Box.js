import classNames from "classnames";
import styles from "./Long_Input_Box.module.css";

function LongInput({ placeholder }) {
    return (
        <div className={styles.container}>
            <textarea
                className={styles.input_area}
                placeholder={placeholder}></textarea>
        </div>
    );
}

export default LongInput;
