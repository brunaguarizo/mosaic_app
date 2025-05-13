import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Settings_OptionsDark.module.css";
import Toggle from "../Toggle/Toggle";

const SettingsOptionsDark = () => {
    const [colourBlindMode, setColourBlindMode] = React.useState(false);
    const [darkToggle, setDarkToggle] = React.useState(true);
    const router = useRouter();

    const handleAccountInformationClick = () => {
        router.push("/AccountInformation");
    };
    const handleHelpAndSupportClick = () => {
        router.push("/TextInformation/HelpAndSupport");
    };
    const handleSecurityAndPrivacyClick = () => {
        router.push("/TextInformation/SecurityAndPrivacy");
    };
    const handleAboutUsClick = () => {
        router.push("/TextInformation/AboutUs");
    };

    const handleDarkToggle = (newValue) => {
        if (!newValue) {
            router.replace("/Settings/Original");
            window.location.reload();
        }
        setDarkToggle(newValue);
    };

    return (
        <div className={styles.settingsContainer}>
            <div
                className={styles.settingsList}
                onClick={handleAccountInformationClick}>
                <div className={styles.left}>
                    <svg
                        className={styles.icon}
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M10 2C7.24 2 5 4.24 5 7C5 9.76 7.24 12 10 12C12.76 12 15 9.76 15 7C15 4.24 12.76 2 10 2ZM10 10C8.34 10 7 8.66 7 7C7 5.34 8.34 4 10 4C11.66 4 13 5.34 13 7C13 8.66 11.66 10 10 10ZM10 14C6.67 14 2 15.34 2 18V20H18V18C18 15.34 13.33 14 10 14ZM4 18C4.22 16.88 7.31 16 10 16C12.69 16 15.78 16.88 16 18H4Z'
                            fill='currentColor'
                        />
                    </svg>
                    <p className={styles.text}>Account Information</p>
                </div>
                <svg
                    className={styles.icon}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M12.6 12L8.7 8.1C8.3134 7.7134 8.3134 7.0866 8.7 6.7C9.0866 6.3134 9.7134 6.3134 10.1 6.7L14.6929 11.2929C15.0834 11.6834 15.0834 12.3166 14.6929 12.7071L10.1 17.3C9.7134 17.6866 9.0866 17.6866 8.7 17.3C8.3134 16.9134 8.3134 16.2866 8.7 15.9L12.6 12Z'
                        fill='currentColor'
                    />
                </svg>
            </div>

            <div className={styles.settingsList}>
                <div className={styles.left}>
                    <svg
                        className={styles.icon}
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 16.14 7.86 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 7.86 16.14 4.5 12 4.5ZM12 17.5C8.96 17.5 6.5 15.04 6.5 12C6.5 8.96 8.96 6.5 12 6.5C15.04 6.5 17.5 8.96 17.5 12C17.5 15.04 15.04 17.5 12 17.5Z'
                            fill='currentColor'
                        />
                    </svg>
                    <p className={styles.text}>Color Blind Mode</p>
                </div>
                <Toggle
                    isToggled={colourBlindMode}
                    setIsToggled={setColourBlindMode}
                />
            </div>
            <div className={styles.settingsList}>
                <div className={styles.left}>
                    <svg
                        className={styles.icon}
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M12 3C7.03 3 2.73 6.11 1 10.5C2.73 14.89 7.03 18 12 18C16.97 18 21.27 14.89 23 10.5C21.27 6.11 16.97 3 12 3ZM12 16C8.13 16 4.84 13.36 3.34 10.5C4.84 7.64 8.13 5 12 5C15.87 5 19.16 7.64 20.66 10.5C19.16 13.36 15.87 16 12 16ZM12 7C10.34 7 9 8.34 9 10C9 11.66 10.34 13 12 13C13.66 13 15 11.66 15 10C15 8.34 13.66 7 12 7Z'
                            fill='currentColor'
                        />
                    </svg>
                    <p className={styles.text}>Dark Mode</p>
                </div>
                <Toggle
                    isToggled={darkToggle}
                    setIsToggled={handleDarkToggle}
                />
            </div>
            <div
                className={styles.settingsList}
                onClick={handleHelpAndSupportClick}>
                <div className={styles.left}>
                    <svg
                        className={styles.icon}
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 17H13V15H11V17ZM11 7H13V13H11V7Z'
                            fill='currentColor'
                        />
                    </svg>
                    <p className={styles.text}>Help & Support</p>
                </div>
                <svg
                    className={styles.icon}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M12.6 12L8.7 8.1C8.3134 7.7134 8.3134 7.0866 8.7 6.7C9.0866 6.3134 9.7134 6.3134 10.1 6.7L14.6929 11.2929C15.0834 11.6834 15.0834 12.3166 14.6929 12.7071L10.1 17.3C9.7134 17.6866 9.0866 17.6866 8.7 17.3C8.3134 16.9134 8.3134 16.2866 8.7 15.9L12.6 12Z'
                        fill='currentColor'
                    />
                </svg>
            </div>
            <div
                className={styles.settingsList}
                onClick={handleSecurityAndPrivacyClick}>
                <div className={styles.left}>
                    <svg
                        className={styles.icon}
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 19.54C10.14 17.36 7 13.28 7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 13.28 13.86 17.36 12 19.54Z'
                            fill='currentColor'
                        />
                    </svg>
                    <p className={styles.text}>Security & Privacy</p>
                </div>
                <svg
                    className={styles.icon}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M12.6 12L8.7 8.1C8.3134 7.7134 8.3134 7.0866 8.7 6.7C9.0866 6.3134 9.7134 6.3134 10.1 6.7L14.6929 11.2929C15.0834 11.6834 15.0834 12.3166 14.6929 12.7071L10.1 17.3C9.7134 17.6866 9.0866 17.6866 8.7 17.3C8.3134 16.9134 8.3134 16.2866 8.7 15.9L12.6 12Z'
                        fill='currentColor'
                    />
                </svg>
            </div>
            <div
                className={styles.settingsList}
                onClick={handleAboutUsClick}>
                <div className={styles.left}>
                    <svg
                        className={styles.icon}
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 17H13V15H11V17ZM11 7H13V13H11V7Z'
                            fill='currentColor'
                        />
                    </svg>
                    <p className={styles.text}>About Us</p>
                </div>
                <svg
                    className={styles.icon}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M12.6 12L8.7 8.1C8.3134 7.7134 8.3134 7.0866 8.7 6.7C9.0866 6.3134 9.7134 6.3134 10.1 6.7L14.6929 11.2929C15.0834 11.6834 15.0834 12.3166 14.6929 12.7071L10.1 17.3C9.7134 17.6866 9.0866 17.6866 8.7 17.3C8.3134 16.9134 8.3134 16.2866 8.7 15.9L12.6 12Z'
                        fill='currentColor'
                    />
                </svg>
            </div>
        </div>
    );
};

export default SettingsOptionsDark;
