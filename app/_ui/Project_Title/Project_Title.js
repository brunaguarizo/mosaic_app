"use client";

import styles from "./Project_Title.module.css";
import ProgressCircle from "../Circle_Progress/Circle_Progress";

function ProjectTitle({ title, description }) {
    return (
        <div className={styles.project_primary}>
            <div className={styles.project_content}>
                <h1 className={styles.description_heading}>
                    {title}Trendsetter
                </h1>
                <p className={styles.description_body}>
                    {description}A set of social media advertisements for a new
                    fashion brand for the upcoming spring/summer season.
                </p>
            </div>
            <ProgressCircle
                percentage={100}
                variant='secondary'
            />
        </div>
    );
}

export default ProjectTitle;
