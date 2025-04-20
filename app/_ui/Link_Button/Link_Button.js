import classNames from "classnames";
import styles from "./Link_Button.module.css";

function LinkButton({ linkDirectory, LinkText }) {
    return (
        <div className={styles.container}>
            <a
                href={linkDirectory}
                className={styles.link}>
                {LinkText}
            </a>
        </div>
    );
}

export default LinkButton;
