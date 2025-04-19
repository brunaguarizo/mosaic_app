import classNames from "classnames";
import styles from "./Input_Box.module.css";

function SingleInput({ inputName, placeholder, type }) {
    const InputHeaderClasses = classNames(styles.inputName, {
        [styles.hidden]: type === "secondary",
    });

    return (
        <div className={styles.primary}>
            <div className={InputHeaderClasses}>
                <p className={styles.input_name}>{inputName}</p>
            </div>
            <input
                className={styles.input_box}
                type='text'
                defaultValue={placeholder}
            />
        </div>
    );
}

export default SingleInput;
