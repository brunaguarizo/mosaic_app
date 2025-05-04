import styles from "./Tag.module.css";

const labels = {
    design: "Design",
    marketing: "Marketing",
    uxui: "UX/UI",
    frontend: "Frontend",
    backend: "Backend",
};

export default function Tag({ interest }) {
    const className = `${styles.chip} ${styles[interest]}`;

    return (
        <div className={className}>
            <span className={styles.label}>{labels[interest]}</span>
        </div>
    );
}
