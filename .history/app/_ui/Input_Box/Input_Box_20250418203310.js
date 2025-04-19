import classNames from "classnames";
import styles from "./Input_Box.module.css";

function SingleInput({ inputName, placeholder, type }) {
    const InputHeaderClasses = classNames(styles.input_box, {
        [styles.hidden]: type === "secondary",
    });

    return (
        <div className={styles.primary}>
            <div>
                <p className={}>{inputName}</p>
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
