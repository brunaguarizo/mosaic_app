import classNames from "classnames";
import styles from "./Description_Box.module.css";

function DescriptionBox({ title, description, useCase }) {
    const DescriptionClasses = classNames(styles.project_primary, {
        [styles.conditions]: useCase === "conditions",
        [styles.project_secondary]: useCase === "secondary",
    });

    return (
        <div className={DescriptionClasses}>
            <h1 className={styles.description_heading}>{title}</h1>
            <p className={styles.description_body}>{description}</p>
        </div>
    );
}

export default DescriptionBox;
