import classNames from "classnames";
import styles from "./Input_Box.module.css";

function SingleInput({ inputName, placeholder }) {
    return (
        <div className={styles.primary}>
            <p className={styles.input_name}> Placeholder</p>
            <input
                className={styles.input_text}
                type='text'
                defaultValue={placeholder}
            />
        </div>
    );
}

export default SingleInput;
