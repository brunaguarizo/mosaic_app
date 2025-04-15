import styles from "./Project_card.module.css";

function ProjectCard() {
    return (
        <div className={styles.card__container}>
            <svg
                menu
                icon></svg>
            <div className={styles.progressbar}></div>
            <p>project title</p>
            project tag - component
            <p>project description</p>
            <div date>
                <svg> icon </svg>
                <p>date text</p>
            </div>
            button - component
        </div>
    );
}
export default ProjectCard;
