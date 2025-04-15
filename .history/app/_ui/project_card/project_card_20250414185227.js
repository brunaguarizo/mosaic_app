import styles from "./Project_card.module.css";
import Button from "../Button/Button";

function ProjectCard() {
    return (
        <div className={styles.card__container}>
            <svg
                className={styles.card__icon}
                width='34'
                height='28'
                viewBox='0 0 34 28'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M9 20C8.71667 20 8.47917 19.9042 8.2875 19.7125C8.09583 19.5208 8 19.2833 8 19C8 18.7167 8.09583 18.4792 8.2875 18.2875C8.47917 18.0958 8.71667 18 9 18H25C25.2833 18 25.5208 18.0958 25.7125 18.2875C25.9042 18.4792 26 18.7167 26 19C26 19.2833 25.9042 19.5208 25.7125 19.7125C25.5208 19.9042 25.2833 20 25 20H9ZM9 15C8.71667 15 8.47917 14.9042 8.2875 14.7125C8.09583 14.5208 8 14.2833 8 14C8 13.7167 8.09583 13.4792 8.2875 13.2875C8.47917 13.0958 8.71667 13 9 13H25C25.2833 13 25.5208 13.0958 25.7125 13.2875C25.9042 13.4792 26 13.7167 26 14C26 14.2833 25.9042 14.5208 25.7125 14.7125C25.5208 14.9042 25.2833 15 25 15H9ZM9 10C8.71667 10 8.47917 9.90417 8.2875 9.7125C8.09583 9.52083 8 9.28333 8 9C8 8.71667 8.09583 8.47917 8.2875 8.2875C8.47917 8.09583 8.71667 8 9 8H25C25.2833 8 25.5208 8.09583 25.7125 8.2875C25.9042 8.47917 26 8.71667 26 9C26 9.28333 25.9042 9.52083 25.7125 9.7125C25.5208 9.90417 25.2833 10 25 10H9Z' />
            </svg>
            <div className={styles.card__progressbar}></div>
            <p className={styles.card__title}>project title</p>
            project tag - component
            <p>project description</p>
            <div date>
                <svg> icon </svg>
                <p>date text</p>
            </div>
            <Button />
        </div>
    );
}
export default ProjectCard;
