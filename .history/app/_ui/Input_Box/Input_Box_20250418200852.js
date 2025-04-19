import classNames from "classnames";
import styles from "./Input_Box.module.css";

function SingleInput({ inputName, placeholder, type }) {
    const InputClasses = classNames(styles.primary, {
        [styles.secondary]: type === "secondary",
        [styles.hidden]: type === "secondary",
    });
    const timeClasses = classNames(styles.time, {
        [styles.timePrimary]: type !== "secondary",
        [styles.timeSecondary]: type === "secondary",
    });
    return (
        <div className={styles.primary}>
            <p className={styles.input_name}> {inputName}</p>
            <input
                className={styles.input_text}
                type='text'
                Value={placeholder}
            />
        </div>
    );
}

export default SingleInput;
