import classNames from "classnames";
import styles from "./Input_Box.module.css";

function SingleInput({ inputName, placeholder, type }) {
    const InputClasses = classNames(styles.primary, {
        [styles.secondary]: type === "secondary",
    });

    const InputHeaderClasses = classNames(styles.input_box, {
        [styles.hidden]: type === "secondary",
    });

    return (
        <div className={styles.input_box}>
            <div>
                <p className={styles.input_name}>{inputName}</p>
            </div>
            <input
                className={InputHeaderClasses}
                type='text'
                defaultValue={placeholder}
            />
        </div>
    );
}

export default SingleInput;
