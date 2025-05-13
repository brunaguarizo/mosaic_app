import classNames from "classnames";
import styles from "./Description_Box.module.css";

function DescriptionBox({
    title,
    description,
    useCase,
    icon,
    subtitle,
    description2,
}) {
    const DescriptionClasses = classNames(styles.project_primary, {
        [styles.conditions]: useCase === "conditions",
        [styles.project_secondary]: useCase === "secondary",
    });

    return (
        <div className={DescriptionClasses}>
            <h1 className={styles.description_heading}>
                {icon && <span className={styles.icon}>{icon}</span>}
                {title}
            </h1>
            <p className={styles.description_body}>{description}</p>
            {subtitle && (
                <h2 className={styles.description_subtitle}>{subtitle}</h2>
            )}
            {description2 && (
                <p className={styles.description_body}>{description2}</p>
            )}
        </div>
    );
}

export default DescriptionBox;
