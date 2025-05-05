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
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showRequestSentPopup, setRequestSentPopup] = useState(false);

    useEffect(() => {
        const savedProfile = localStorage.getItem("userProfile");
        if (savedProfile) {
            setAccountInfo(JSON.parse(savedProfile));
        }
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
                placeholder={AccountInformation.firstName}
                defaultValue={AccountInformation.firstName}
                readOnly
            />
            <SingleInput
                type='secondary'
                placeholder={AccountInformation.FirstName}
                defaultValue={AccountInformation.firstName}
                readOnly
            />
            <SingleInput
                inputName='Username'
                placeholder={AccountInformation.username}
                defaultValue={AccountInformation.username}
            />
            <SingleInput
                inputName='Email'
                placeholder={AccountInformation.email}
                defaultValue={AccountInformation.email}
            />
            <SocialMedia />
            <Button
                type='primary'
                size='large'
                value='Delete Your Account'
                onClick={handleDeleteAccount}
            />
            {/* Resend Code PopUp */}
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
            {/* Resend Code PopUp */}
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
