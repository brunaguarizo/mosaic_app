"use client";

import styles from "./Project_Title.module.css";
import ProgressCircle from "../Circle_Progress/Circle_Progress";

function ProjectTitle({
    title = "Trendsetter",
    description = "A set of social media advertisements for a new fashion brand for the upcoming spring/summer season.",
    percentage = 0,
}) {
    return (
        <div className={styles.project_primary}>
            <div className={styles.project_content}>
                <h1 className={styles.description_heading}>{title}</h1>
                <p className={styles.description_body}>{description}</p>
            </div>
            <ProgressCircle
                percentage={percentage}
                variant='secondary'
                hideText={percentage === 0}
            />
        </div>
    );
}

export default ProjectTitle;
