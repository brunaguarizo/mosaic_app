import classNames from "classnames";
import styles from "./Input_Box.module.css";

function SingleInput({ inputName, placeholder, type }) {
    const InputClasses = classNames(styles.primary, {
        [styles.secondary]: type === "secondary",
        [styles.hidden]: type === "secondary",
    });

    return (
        <div className={InputClasses}>
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
