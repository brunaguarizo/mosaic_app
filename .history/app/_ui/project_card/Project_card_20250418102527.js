"use client";
import { useState } from "react";
import styles from "./Project_card.module.css";
import Button from "../Button/Button";
import Tag from "../Tag/Tag";
import ProgressCircle from "../_ui/Circle_Progress/Circle_Progress";

function ProjectCard() {
    // Control visibility - menu dropdown
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Switch visibility - menu dropdown
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.card__container}>
            <div className={styles.card__menu}>
                <svg
                    className={styles.card__icon}
                    width='34'
                    height='28'
                    viewBox='0 0 34 28'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={toggleMenu}
                    style={{ cursor: "pointer" }}>
                    <path d='M9 20C8.71667 20 8.47917 19.9042 8.2875 19.7125C8.09583 19.5208 8 19.2833 8 19C8 18.7167 8.09583 18.4792 8.2875 18.2875C8.47917 18.0958 8.71667 18 9 18H25C25.2833 18 25.5208 18.0958 25.7125 18.2875C25.9042 18.4792 26 18.7167 26 19C26 19.2833 25.9042 19.5208 25.7125 19.7125C25.5208 19.9042 25.2833 20 25 20H9ZM9 15C8.71667 15 8.47917 14.9042 8.2875 14.7125C8.09583 14.5208 8 14.2833 8 14C8 13.7167 8.09583 13.4792 8.2875 13.2875C8.47917 13.0958 8.71667 13 9 13H25C25.2833 13 25.5208 13.0958 25.7125 13.2875C25.9042 13.4792 26 13.7167 26 14C26 14.2833 25.9042 14.5208 25.7125 14.7125C25.5208 14.9042 25.2833 15 25 15H9ZM9 10C8.71667 10 8.47917 9.90417 8.2875 9.7125C8.09583 9.52083 8 9.28333 8 9C8 8.71667 8.09583 8.47917 8.2875 8.2875C8.47917 8.09583 8.71667 8 9 8H25C25.2833 8 25.5208 8.09583 25.7125 8.2875C25.9042 8.47917 26 8.71667 26 9C26 9.28333 25.9042 9.52083 25.7125 9.7125C25.5208 9.90417 25.2833 10 25 10H9Z' />
                </svg>

                {/* Menu dropdown */}
                {isMenuOpen && (
                    <div className={styles.dropdown__menu}>
                        <ul className={styles.dropdown__list}>
                            <li className={styles.dropdown__item}>
                                Add to Portfolio
                            </li>
                            <li className={styles.dropdown__item}>
                                Delete Project
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <ProgressCircle percentage={30} />

            <p className={styles.card__title}>Eggs and Bacon</p>
            <Tag />

            <p className={styles.card__text}>
                A set of logos and posters for a new, trendy brunch cafe who's
                main market is millennials in Vancouver.
            </p>
            <div className={styles.date}>
                <svg
                    className={styles.date__icon}
                    width='18'
                    height='20'
                    viewBox='0 0 18 20'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V1C3 0.716667 3.09583 0.479167 3.2875 0.2875C3.47917 0.0958333 3.71667 0 4 0C4.28333 0 4.52083 0.0958333 4.7125 0.2875C4.90417 0.479167 5 0.716667 5 1V2H13V1C13 0.716667 13.0958 0.479167 13.2875 0.2875C13.4792 0.0958333 13.7167 0 14 0C14.2833 0 14.5208 0.0958333 14.7125 0.2875C14.9042 0.479167 15 0.716667 15 1V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z' />
                </svg>
                <p className={styles.card__text}>01 May, 2025 - 15 May, 2025</p>
            </div>
            <Button
                value='Primary Button'
                type='primary'
                //onClick={}
            />
        </div>
    );
}
export default ProjectCard;
