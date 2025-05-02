"use client";
import styles from "@/app/_ui/Profile_Avatar_PopUp/Profile_Avatar_PopUp.module.css";
import { useState } from "react";

const Avatars = [
    "/Avatars/Purple_Avatar.svg",
    "/Avatars/Yellow_Avatar.svg",
    "/Avatars/Orange_Avatar.svg",
    "/Avatars/Green_Avatar.svg",
];

function AvatarPicker({ isOpen, onClose, onSelect }) {
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    if (!isOpen) return null;

    const handleAvatarSelect = (src) => {
        setSelectedAvatar(src);
        if (onSelect) {
            onSelect(src);
        }
    };

    return (
        <>
            <div
                className={styles.popup_overlay}
                onClick={onClose}></div>
            <div className={styles.PopUp_Container}>
                <h2>Pick your Gem!</h2>
                <div className={styles.avatar_row}>
                    {Avatars.map((src, index) => (
                        <div
                            key={index}
                            className={`${styles.avatar_container} ${
                                selectedAvatar === src ? styles.selected : ""
                            }`}
                            onClick={() => handleAvatarSelect(src)}>
                            <img
                                src={src}
                                alt={`Avatar ${index + 1}`}
                                className={styles.avatar_image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AvatarPicker;
