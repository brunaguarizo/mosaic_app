import  styles from './project_card.module.css';

function ProjectCard() {
    return ( 

        <div className={styles.card__container}>
            <svg menu icon></svg>
            <div className={styles.progressbar}></div>
            <p>project title</p>
        </div>
    );
}
export default ProjectCard;