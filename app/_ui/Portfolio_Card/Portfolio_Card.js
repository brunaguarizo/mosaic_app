import { useState } from "react";
import Tag from "../Tag/Tag";
import styles from "./Portfolio_Card.module.css";
import PopUp from "../PopUp/PopUp";
import popupStyles from "@/app/_ui/PopUp/PopUp.module.css";
import DropDownMenu from "../DropDown_Menu/DropDown_Menu";
import { useRouter } from "next/navigation";
import Router from "next/router";

function PortfolioCard({ ProjectName, ProjectImage, interest, onClick }) {
    const router = useRouter();

    // Control visibility - menu dropdown
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Combined modal states
    const [popupState, setPopupState] = useState({
        isArchivedOpen: false,
        isDeletedOpen: false,
    });

    // Switch visibility - menu dropdown
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handlePopUp = (popUpName, value) => {
        setPopupState((prev) => ({
            ...prev,
            [popUpName]: value,
        }));
    };

    //Handle pop-up actions
    const handleArchive = () => {
        handlePopUp("isArchivedOpen", false);
        // Add your archive logic here
    };

    const handleDelete = () => {
        handlePopUp("isDeletedOpen", false);
        // Add your delete logic here
    };

    const handleCancel = (popupName) => {
        handlePopUp(popupName, false);
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
                    <path
                        d='M12 8C12.55 8 13.0208 7.80417 13.4125 7.4125C13.8042 7.02083 14 6.55 14 6C14 5.45 13.8042 4.97917 13.4125 4.5875C13.0208 4.19583 12.55 4 12 4C11.45 4 10.9792 4.19583 10.5875 4.5875C10.1958 4.97917 10 5.45 10 6C10 6.55 10.1958 7.02083 10.5875 7.4125C10.9792 7.80417 11.45 8 12 8ZM12 10C11.45 10 10.9792 10.1958 10.5875 10.5875C10.1958 10.9792 10 11.45 10 12C10 12.55 10.1958 13.0208 10.5875 13.4125C10.9792 13.8042 11.45 14 12 14C12.55 14 13.0208 13.8042 13.4125 13.4125C13.8042 13.0208 14 12.55 14 12C14 11.45 13.8042 10.9792 13.4125 10.5875C13.0208 10.1958 12.55 10 12 10ZM12 16C11.45 16 10.9792 16.1958 10.5875 16.5875C10.1958 16.9792 10 17.45 10 18C10 18.55 10.1958 19.0208 10.5875 19.4125C10.9792 19.8042 11.45 20 12 20C12.55 20 13.0208 19.8042 13.4125 19.4125C13.8042 19.0208 14 18.55 14 18C14 17.45 13.8042 16.9792 13.4125 16.5875C13.0208 16.1958 12.55 16 12 16Z'
                        fill='currentColor'
                    />
                </svg>
                {/* Menu dropdown */}
                {isMenuOpen && (
                    <DropDownMenu
                        ActionText='Archive Project'
                        DeleteText='Delete Project'
                        onActionClick={() =>
                            handlePopUp("isArchivedOpen", true)
                        }
                        onDeleteClick={() => handlePopUp("isDeletedOpen", true)}
                        onEditClick={() => router.push("/Profile")}
                    />
                )}
            </div>
            <div className={styles.bottom}>
                <p className={styles.text}>{ProjectName}</p>
                <Tag interest={interest} />
            </div>
            {popupState.isArchivedOpen && (
                <PopUp
                    onClose={handleArchive}
                    buttonText='Confirm'
                    buttonType='warning'
                    secondaryButtonText='Undo'
                    secondaryButtonType='secondary'
                    onSecondaryButtonClick={() =>
                        handleCancel("isArchivedOpen")
                    }>
                    <h2 className={popupStyles.popup_header}>
                        Project Archived
                    </h2>
                    <p className={popupStyles.popup_text}>
                        You have successfully added this project to your archive
                    </p>
                </PopUp>
            )}
            {popupState.isDeletedOpen && (
                <PopUp
                    onClose={handleDelete}
                    buttonText='Delete'
                    buttonType='warning'
                    secondaryButtonText='Undo'
                    secondaryButtonType='secondary'
                    onSecondaryButtonClick={() =>
                        handleCancel("isDeletedOpen")
                    }>
                    <h2 className={popupStyles.popup_header}>
                        Do you wish to delete this project permanently?
                    </h2>
                </PopUp>
            )}
        </div>
    );
}

export default PortfolioCard;
