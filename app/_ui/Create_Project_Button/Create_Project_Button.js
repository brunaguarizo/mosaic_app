import styles from "./Create_Project_Button.module.css";
import { useRouter } from "next/navigation";

function CreateProject(onClick) {
    const router = useRouter();
    const handleCreateProjectClick = () => {
        router.push("/CreateProject/Intro");
    };
    return (
        <button
            className={styles.button_background}
            onClick={handleCreateProjectClick}>
            <div>
                <svg
                    className={styles.button_icon}
                    // width='42'
                    // height='42'
                    // viewBox='0 0 42 42'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <rect
                        x='0.5'
                        width='42'
                        height='42'
                        rx='21'
                        fill='white'
                    />
                    <path
                        d='M21.5 30C21.2167 30 20.9792 29.9042 20.7875 29.7125C20.5958 29.5208 20.5 29.2833 20.5 29V22H13.5C13.2167 22 12.9792 21.9042 12.7875 21.7125C12.5958 21.5208 12.5 21.2833 12.5 21C12.5 20.7167 12.5958 20.4792 12.7875 20.2875C12.9792 20.0958 13.2167 20 13.5 20H20.5V13C20.5 12.7167 20.5958 12.4792 20.7875 12.2875C20.9792 12.0958 21.2167 12 21.5 12C21.7833 12 22.0208 12.0958 22.2125 12.2875C22.4042 12.4792 22.5 12.7167 22.5 13V20H29.5C29.7833 20 30.0208 20.0958 30.2125 20.2875C30.4042 20.4792 30.5 20.7167 30.5 21C30.5 21.2833 30.4042 21.5208 30.2125 21.7125C30.0208 21.9042 29.7833 22 29.5 22H22.5V29C22.5 29.2833 22.4042 29.5208 22.2125 29.7125C22.0208 29.9042 21.7833 30 21.5 30Z'
                        fill='#2B5FFC'
                    />
                </svg>
            </div>

            <h2 className={styles.button_heading}>Create a project</h2>
            <p className={styles.button_description}>
                {" "}
                Fill out a questionnaire and then receiving a customized
                scenario and task list catered to your needs.
            </p>
        </button>
    );
}

export default CreateProject;
