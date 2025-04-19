import classNames from "classnames";
import styles from "./Input_Box.module.css";

function SingleInput({ inputName, placeholder, type }) {
    const InputClasses = classNames(styles.primary, {
        [styles.secondary]: type === "secondary",
    });

    const InputHeaderClasses = classNames(styles.input_name, {
        [styles.hidden]: type === "secondary",
    });

    return (
        <div className={InputClasses}>
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
