import styles from "./Profile_Cover_Box.module.css";
import AvatarPicker from "../Profile_Avatar_PopUp/Profile_Avatar_PopUp";
import { useState } from "react";
import classNames from "classnames";

function ProfileCover({ username, city, province, location, type }) {
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
        <div className={ContainerClasses}>
            <div className={styles.background_cover}></div>
            <img
                src='/Avatars/Purple_Avatar.svg'
                className={AvatarClasses}
            />
            <a href='/'>
                <svg
                    viewBox='0 0 20 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={EditClasses}>
                    <path
                        d='M2 20.025C1.45 20.025 0.979167 19.8292 0.5875 19.4375C0.195833 19.0458 0 18.575 0 18.025V4.025C0 3.475 0.195833 3.00417 0.5875 2.6125C0.979167 2.22083 1.45 2.025 2 2.025H10.925L8.925 4.025H2V18.025H16V11.075L18 9.075V18.025C18 18.575 17.8042 19.0458 17.4125 19.4375C17.0208 19.8292 16.55 20.025 16 20.025H2ZM7 14.025C6.44772 14.025 6 13.5773 6 13.025V10.1892C6 9.924 6.10536 9.66964 6.29289 9.48211L15.175 0.6C15.375 0.4 15.6 0.25 15.85 0.15C16.1 0.05 16.35 0 16.6 0C16.8667 0 17.1208 0.05 17.3625 0.15C17.6042 0.25 17.825 0.4 18.025 0.6L19.425 2.025C19.6083 2.225 19.75 2.44583 19.85 2.6875C19.95 2.92917 20 3.175 20 3.425C20 3.675 19.9542 3.92083 19.8625 4.1625C19.7708 4.40417 19.625 4.625 19.425 4.825L10.5431 13.7311C10.3554 13.9193 10.1007 14.025 9.83499 14.025H7ZM8 12.025H9.4L15.2 6.225L14.5 5.525L13.775 4.825L8 10.6V12.025Z'
                        fill='#141414'
                    />
                </svg>
            </a>
            <div />
            <div className={styles.profile_info}>
                <p className={styles.username}>{username}</p>
                <p className={styles.location}>
                    {city}, {province}
                </p>
            </div>
        </div>
    );
}

export default ProfileCover;
