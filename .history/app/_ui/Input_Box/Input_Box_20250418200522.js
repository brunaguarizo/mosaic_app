import classNames from "classnames";
import styles from "./Input_Box.module.css";

function SingleInput() {
    return (
        <div className={styles.primary}>
            <p className={styles.input_name}> Placeholder</p>
            <input
                className={styles.input_box}
                type='text'
                defaultValue='Placeholder'
            />
        </div>
    );
}

export default SingleInput;
