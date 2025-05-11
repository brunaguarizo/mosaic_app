import styles from "./Profile_Cover_Box.module.css";
import AvatarPicker from "../Profile_Avatar_PopUp/Profile_Avatar_PopUp";
import { useState } from "react";
import classNames from "classnames";

function ProfileCover({
    firstName,
    lastName,
    city,
    province,
    location,
    type,
    onClick,
    avatarSrc,
}) {
    const ContainerClasses = classNames(styles.container, {
        [styles.secondary]: type === "secondary",
    });

    const AvatarClasses = classNames(styles.profile_avatar, {
        [styles.avatar_center]: type === "secondary",
    });

    const EditClasses = classNames(styles.edit_icon, {
        [styles.edit_background]: type === "secondary",
    });
    const ProfileInfoClasses = classNames(styles.profile_info, {
        [styles.hidden]: type === "secondary",
    });

    return (
        <div className={styles.background_cover}>
            <img
                src={avatarSrc || "/Avatars/Unselected_Avatar.svg"}
                className={styles.profile_avatar}
                alt='Profile Avatar'
            />
        </div>
    );
}

export default ProfileCover;
