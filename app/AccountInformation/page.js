"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import styles from "@/app/Profile/CreateProfile/CreateProfile.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import popupStyles from "@/app/_ui/PopUp/PopUp.module.css";
import SingleInput from "../_ui/Input_Box/Input_Box";
import Headingbar from "../_ui/Heading_Bar/Heading_Bar";
import SocialMedia from "../_ui/SocialMedia/SocialMedia";
import Button from "../_ui/Button/Button";
import PopUp from "../_ui/PopUp/PopUp";

export default function AccountInformation() {
    const router = useRouter();
    const [AccountInfo, setAccountInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showRequestSentPopup, setRequestSentPopup] = useState(false);

    useEffect(() => {
        const savedProfile = localStorage.getItem("userProfile");
        if (savedProfile) {
            try {
                const parsedProfile = JSON.parse(savedProfile);
                setAccountInfo(parsedProfile);
            } catch (error) {
                console.error("Error parsing profile data:", error);
            }
        }
        setIsLoading(false);
    }, []);

    const handleDeleteAccount = () => {
        setShowDeletePopup(true);
    };
    const handleClose = () => {
        setShowDeletePopup(false);
    };
    const handleConfirmDelete = () => {
        setShowDeletePopup(false);
        setRequestSentPopup(true);
    };
    const handleCloseRequestSent = () => {
        setRequestSentPopup(false);
    };
    const handleShowRequest = () => {
        setRequestSentPopup(true);
    };

    if (isLoading) {
        return (
            <div className={styles.container}>
                <StatusBar />
                <Headingbar
                    heading='Account Information'
                    type='navigation'
                />
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            <Headingbar
                heading='Account Information'
                type='navigation'
            />

            <SingleInput
                inputName='Name'
                placeholder={AccountInfo?.firstName || "Justin"}
                defaultValue={AccountInfo?.firstName || ""}
                readOnly
            />
            <SingleInput
                type='secondary'
                placeholder={AccountInfo?.lastName || "Pham"}
                defaultValue={AccountInfo?.lastName || ""}
                readOnly
            />
            <SingleInput
                inputName='Username'
                placeholder={AccountInfo?.username || " justinpham"}
                defaultValue={AccountInfo?.username || ""}
                readOnly
            />
            <SingleInput
                inputName='Email'
                placeholder={AccountInfo?.email || "justinpham@gmail.com"}
                defaultValue={AccountInfo?.email || ""}
                readOnly
            />
            <SocialMedia />
            <Button
                type='primary'
                size='large'
                value='Delete Your Account'
                onClick={handleDeleteAccount}
            />
            {/* DeletePopUp */}
            {showDeletePopup && (
                <PopUp
                    onClose={handleClose}
                    buttonText='Cancel'
                    buttonType='warning'
                    secondaryButtonText='Confirm'
                    secondaryButtonType='terciary'
                    onSecondaryButtonClick={handleConfirmDelete}>
                    <h2 className={popupStyles.popup_header}>
                        Do you wish to permanently delete your account?
                    </h2>
                    <p className={popupStyles.popup_text}>
                        If you choose to proceed with deleting your account,
                        this action can not be undone
                    </p>
                </PopUp>
            )}
            {/* Show request sent PopUp */}
            {showRequestSentPopup && (
                <PopUp
                    onClose={handleCloseRequestSent}
                    buttonText='Done'
                    buttonType='warning'
                    secondaryButtonText='Undo'
                    secondaryButtonType='terciary'
                    onSecondaryButtonClick={handleCloseRequestSent}>
                    <h2 className={popupStyles.popup_header}>
                        Your request has been sent
                    </h2>
                    <p className={popupStyles.popup_text}>
                        Please check the email you used to sign up for Mosaic
                        for further details on the process of deleting your
                        account.
                    </p>
                </PopUp>
            )}
        </div>
    );
}
