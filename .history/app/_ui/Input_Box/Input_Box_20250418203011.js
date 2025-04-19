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
        <div className={InputClasses}>
            <div>
                <p className={InputHeaderClasses}>{inputName}</p>
            </div>
            <input
                className={}
                type='text'
                defaultValue={placeholder}
            />
        </div>
    );
}

export default SingleInput;
