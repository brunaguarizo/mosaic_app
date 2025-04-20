"use client";
import styles from "@/app/_ui/Profile_Avatar_PopUp/Profile_Avatar_PopUp.module.css";
import { useState } from "react";

const Avatars = [
    "/avatars/Purple_Avatar.svg",
    "/avatars/Yellow_Avatar.svg",
    "/avatars/Orange_Avatar.svg",
    "/avatars/Green_Avatar.svg",
];

function AvatarPicker() {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    return (
        <div className={styles.PopUp_Container}>
            <h2>Pick your Gem!</h2>
            <div className={styles.avatar_row}>
                {Avatars.map((src, index) => (
                    <div
                        key={index}
                        className={styles.avatar_container}
                        onClick={() => setSelectedAvatar(src)}>
                        <img
                            src={src}
                            alt={`Avatar ${index + 1}`}
                            className={styles.avatar_image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AvatarPicker;
