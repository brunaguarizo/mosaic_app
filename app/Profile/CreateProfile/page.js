"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "@/app/Profile/CreateProfile/CreateProfile.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Profile_Cover_Box from "../../_ui/Profile_Cover_Box/Profile_Cover_Box";
import SingleInput from "../../_ui/Input_Box/Input_Box";
import InterestChip from "../../_ui/Interest_Chip/Interest_Chip";
import SocialMedia from "../../_ui/SocialMedia/SocialMedia";
import Button from "../../_ui/Button/Button";
import LongInput from "../../_ui/Long_Input_Box/Long_Input_Box";
import PopUp from "../../_ui/PopUp/PopUp";
import popupStyles from "@/app/_ui/PopUp/PopUp.module.css";
import AvatarPicker from "../../_ui/Profile_Avatar_PopUp/Profile_Avatar_PopUp";

export default function CreateProfile() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [location, setLocation] = useState("");
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [showCancelPopup, setShowCancelPopup] = useState(false);
    const [showSavePopup, setShowSavePopup] = useState(false);
    const [showIncompleteProfilePopup, setShowIncompleteProfilePopup] =
        useState(false);
    const [showAvatarPickerPopup, setShowAvatarPickerPopup] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const router = useRouter();

    const saveProfileData = () => {
        const profileData = {
            firstName,
            lastName,
            username,
            aboutMe,
            location,
            interests: selectedInterests,
            avatar: selectedAvatar,
            socialMedia: {
                // Add social media data if needed
            },
        };
        localStorage.setItem("userProfile", JSON.stringify(profileData));
    };

    const handleSave = () => {
        if (
            !firstName ||
            !lastName ||
            !username ||
            !aboutMe ||
            !location ||
            selectedInterests.length === 0 ||
            !selectedAvatar
        ) {
            setShowIncompleteProfilePopup(true);
            return;
        } else {
            saveProfileData();
            setShowSavePopup(true);
        }
    };

    const handleCancel = () => {
        setShowCancelPopup(false);

        setShowSavePopup(false);
    };

    const handleCancelPopup = () => {
        setShowCancelPopup(false);
        setShowSavePopup(false);
    };

    const handleCloseIncompleteProfilePopup = () => {
        setShowIncompleteProfilePopup(false);
    };

    const handleConfirm = () => {
        router.push("/SignIn");
    };
    const handleConfirmSave = () => {
        router.push("/Dashboard/DashboardRegular");
    };

    const handleInterestClick = (interest) => {
        setSelectedInterests((prev) => {
            if (prev.includes(interest)) {
                return prev.filter((item) => item !== interest);
            } else {
                return [...prev, interest];
            }
        });
    };

    const handleAvatarClick = () => {
        setShowAvatarPickerPopup(true);
    };

    const handleAvatarSelect = (avatarSrc) => {
        setSelectedAvatar(avatarSrc);
        setShowAvatarPickerPopup(false);
    };

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            <Profile_Cover_Box
                type='secondary'
                onClick={handleAvatarClick}
                avatarSrc={selectedAvatar}
            />
            <SingleInput
                type='secondary'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <SingleInput
                type='secondary'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <SingleInput
                type='secondary'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <div className={styles.content_box}>
                <div className={styles.content_info}>
                    <h1 className={styles.content_header}>Interests</h1>
                    <p className={styles.content_description}>
                        Select your main interests
                    </p>
                </div>

                <div className={styles.chips_container}>
                    <div className={styles.Three_column}>
                        <InterestChip
                            type='icon'
                            interest='design'
                            isSelected={selectedInterests.includes("design")}
                            onClick={() => handleInterestClick("design")}
                        />
                        <InterestChip
                            type='icon'
                            interest='uxui'
                            isSelected={selectedInterests.includes("uxui")}
                            onClick={() => handleInterestClick("uxui")}
                        />
                        <InterestChip
                            type='icon'
                            interest='marketing'
                            isSelected={selectedInterests.includes("marketing")}
                            onClick={() => handleInterestClick("marketing")}
                        />
                    </div>
                    <div className={styles.Two_column}>
                        <InterestChip
                            type='icon'
                            interest='frontend'
                            isSelected={selectedInterests.includes("frontend")}
                            onClick={() => handleInterestClick("frontend")}
                        />
                        <InterestChip
                            type='icon'
                            interest='backend'
                            isSelected={selectedInterests.includes("backend")}
                            onClick={() => handleInterestClick("backend")}
                        />
                    </div>
                </div>
            </div>
            <LongInput
                placeholder='About me'
                onChange={(e) => setAboutMe(e.target.value)}
            />
            <SingleInput
                inputName='Location'
                placeholder='Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <div className={styles.social_media}>
                <SocialMedia />
            </div>
            <div className={styles.button_column}>
                <div className={styles.button}>
                    <Button
                        type='primary'
                        size='large'
                        value='Save'
                        onClick={handleSave}
                    />
                </div>
                <div className={styles.button}>
                    <Button
                        type='secondary'
                        size='large'
                        value='Cancel'
                        onClick={handleCancel}
                    />
                </div>
            </div>
            {/* Cancel Profile Creation PopUp */}
            {showCancelPopup && (
                <PopUp
                    onClose={handleConfirm}
                    buttonText='Confirm'
                    buttonType='primary'
                    secondaryButtonText='Cancel'
                    secondaryButtonType='secondary'
                    onSecondaryButtonClick={handleCancelPopup}>
                    <h2 className={popupStyles.popup_header}>
                        Do you wish to cancel your profile creation?
                    </h2>
                    <p className={popupStyles.popup_text}>
                        To continue using Mosaic App, you must have a profile to
                        save your projects.
                    </p>
                </PopUp>
            )}
            {/* Save Profile Creation PopUp */}
            {showSavePopup && (
                <PopUp
                    onClose={handleConfirmSave}
                    buttonText='Confirm'
                    buttonType='primary'
                    secondaryButtonText='Undo'
                    secondaryButtonType='secondary'
                    onSecondaryButtonClick={handleCancel}>
                    <h2 className={popupStyles.popup_header}>
                        Profile changes successfully saved
                    </h2>
                    <p className={popupStyles.popup_text}>
                        You have successfully saved the changes to your profile
                    </p>
                </PopUp>
            )}

            {/* Incomplete profile data popup */}
            {showIncompleteProfilePopup && (
                <PopUp
                    onClose={handleCloseIncompleteProfilePopup}
                    buttonText='Ok'
                    buttonType='primary'>
                    <h2 className={popupStyles.popup_header}>
                        Please fill out all fields and select an avatar before
                    </h2>
                </PopUp>
            )}
            {/* Avatar Picker Popup */}
            {showAvatarPickerPopup && (
                <AvatarPicker
                    isOpen={showAvatarPickerPopup}
                    onClose={() => setShowAvatarPickerPopup(false)}
                    onSelect={handleAvatarSelect}
                />
            )}
        </div>
    );
}
