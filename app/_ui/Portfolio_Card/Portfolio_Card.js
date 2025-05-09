import { useState } from "react";
import Tag from "../Tag/Tag";
import styles from "./Portfolio_Card.module.css";
import PopUp from "../PopUp/PopUp";
import popupStyles from "@/app/_ui/PopUp/PopUp.module.css";
import { useRouter } from "next/navigation";
import Router from "next/router";

function PortfolioCard({ ProjectName, ProjectImage, interest, onClick }) {
    const [showArchivedPopup, setShowArchivedPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleArchivedPopUp = () => {
        setShowArchivedPopup(true);
    };

    const handleDeletePopUp = () => {
        setShowDeletePopup(true);
    };

    const handleConfirm = () => {
        setIsMenuOpen(false);
        setShowArchivedPopup(false);
        setShowDeletePopup(false);
        router.push("/Portfolio/Portfolio");
    };
    const handleConfirmDelete = () => {
        setIsMenuOpen(false);
        setShowArchivedPopup(false);
        setShowDeletePopup(false);
        router.push("/Portfolio/Portfolio");
    };
    const handleCancel = () => {
        setShowArchivedPopup(false);
        setShowDeletePopup(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img
                    className={styles.image}
                    src={ProjectImage}
                    alt='Fish'
                    onClick={onClick}
                />
                <svg
                    className={styles.icon}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    onClick={toggleMenu}
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z' />
                </svg>
                {isMenuOpen && (
                    <div className={styles.dropdown__menu}>
                        <ul className={styles.dropdown__list}>
                            <li
                                className={styles.dropdown__item}
                                onClick={handleArchivedPopUp}>
                                Archive Project
                            </li>
                            <li
                                className={styles.dropdown__item}
                                onClick={handleDeletePopUp}>
                                Delete Project
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className={styles.bottom}>
                <p className={styles.text}>{ProjectName}</p>
                <Tag interest={interest} />
            </div>
            {showArchivedPopup && (
                <PopUp
                    onClose={handleConfirm}
                    buttonText='Confirm'
                    buttonType='primary'
                    secondaryButtonText='Undo'
                    secondaryButtonType='secondary'
                    onSecondaryButtonClick={handleCancel}>
                    <h2 className={popupStyles.popup_header}>
                        Project Archived
                    </h2>
                    <p className={popupStyles.popup_text}>
                        You have successfully added this project to your archive
                    </p>
                </PopUp>
            )}
            {showDeletePopup && (
                <PopUp
                    onClose={handleConfirmDelete}
                    buttonText='Confirm'
                    buttonType='primary'
                    secondaryButtonText='Undo'
                    secondaryButtonType='secondary'
                    onSecondaryButtonClick={handleCancel}>
                    <h2 className={popupStyles.popup_header}>
                        Do you wish to delete this project permanently?
                    </h2>
                </PopUp>
            )}
        </div>
    );
}

export default PortfolioCard;
