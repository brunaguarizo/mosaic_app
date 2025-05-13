"use client";
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

    const handleColourBlindToggle = async (newValue) => {
        if (newValue) {
            setColourBlindMode(true);
            await router.push("/Settings/ColorBlindMode");
        } else {
            setColourBlindMode(false);
            await router.push("/Settings/Original");
        }
    };

    const handleDarkToggle = async (newValue) => {
        if (!newValue) {
            setDarkToggle(false);
            await router.push("/Settings/Original");
        }
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
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M11.9999 16C13.2499 16 14.3124 15.5625 15.1874 14.6875C16.0624 13.8125 16.4999 12.75 16.4999 11.5C16.4999 10.25 16.0624 9.1875 15.1874 8.3125C14.3124 7.4375 13.2499 7 11.9999 7C10.7499 7 9.6874 7.4375 8.8124 8.3125C7.9374 9.1875 7.4999 10.25 7.4999 11.5C7.4999 12.75 7.9374 13.8125 8.8124 14.6875C9.6874 15.5625 10.7499 16 11.9999 16ZM11.9999 14.2C11.2499 14.2 10.6124 13.9375 10.0874 13.4125C9.5624 12.8875 9.2999 12.25 9.2999 11.5C9.2999 10.75 9.5624 10.1125 10.0874 9.5875C10.6124 9.0625 11.2499 8.8 11.9999 8.8C12.7499 8.8 13.3874 9.0625 13.9124 9.5875C14.4374 10.1125 14.6999 10.75 14.6999 11.5C14.6999 12.25 14.4374 12.8875 13.9124 13.4125C13.3874 13.9375 12.7499 14.2 11.9999 14.2ZM11.9999 19C9.76657 19 7.72907 18.4 5.8874 17.2C4.04574 16 2.59157 14.4167 1.5249 12.45C1.44157 12.3 1.37907 12.1458 1.3374 11.9875C1.29574 11.8292 1.2749 11.6667 1.2749 11.5C1.2749 11.3333 1.29574 11.1708 1.3374 11.0125C1.37907 10.8542 1.44157 10.7 1.5249 10.55C2.59157 8.58333 4.04574 7 5.8874 5.8C7.72907 4.6 9.76657 4 11.9999 4C14.2332 4 16.2707 4.6 18.1124 5.8C19.9541 7 21.4082 8.58333 22.4749 10.55C22.5582 10.7 22.6207 10.8542 22.6624 11.0125C22.7041 11.1708 22.7249 11.3333 22.7249 11.5C22.7249 11.6667 22.7041 11.8292 22.6624 11.9875C22.6207 12.1458 22.5582 12.3 22.4749 12.45C21.4082 14.4167 19.9541 16 18.1124 17.2C16.2707 18.4 14.2332 19 11.9999 19ZM11.9999 17C13.8832 17 15.6124 16.5042 17.1874 15.5125C18.7624 14.5208 19.9666 13.1833 20.7999 11.5C19.9666 9.81667 18.7624 8.47917 17.1874 7.4875C15.6124 6.49583 13.8832 6 11.9999 6C10.1166 6 8.3874 6.49583 6.8124 7.4875C5.2374 8.47917 4.03324 9.81667 3.1999 11.5C4.03324 13.1833 5.2374 14.5208 6.8124 15.5125C8.3874 16.5042 10.1166 17 11.9999 17Z'
                            fill='currentColor'
                        />
                    </svg>
                    <p className={styles.text}>Color Blind Mode</p>
                </div>
                <Toggle
                    isToggled={colourBlindMode}
                    setIsToggled={handleColourBlindToggle}
                />
            </div>
            <div className={styles.settingsList}>
                <div className={styles.left}>
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.2333 3 12.4625 3.00833 12.6875 3.025C12.9292 3.04291 13.0099 3.35464 12.8316 3.51879C12.3847 3.93006 12.0117 4.41963 11.7125 4.9875C11.3042 5.7625 11.1 6.6 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.4167 12.9 18.2583 12.6958 19.025 12.2875C19.5866 11.9884 20.0722 11.6155 20.4817 11.1689C20.6455 10.9902 20.9571 11.0708 20.975 11.3125C20.9917 11.5375 21 11.7667 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21ZM12 19C13.4667 19 14.7833 18.5958 15.95 17.7875C17.1167 16.9792 17.9667 15.925 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.7042 14.1792 11.2625 12.7375C9.82083 11.2958 9.1 9.55 9.1 7.5C9.1 7.16667 9.125 6.83333 9.175 6.5C9.225 6.16667 9.29167 5.83333 9.375 5.5C8.075 6.03333 7.02083 6.88333 6.2125 8.05C5.40417 9.21667 5 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z'
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
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M12.2435 21.9355C12.0842 21.9798 11.9158 21.9798 11.7565 21.9355C9.54901 21.322 7.71767 20.0144 6.2625 18.0125C4.75417 15.9375 4 13.6333 4 11.1V5.693C4 5.27616 4.25857 4.90304 4.64888 4.75667L11.6489 2.13167C11.8753 2.04678 12.1247 2.04678 12.3511 2.13167L19.3511 4.75667C19.7414 4.90304 20 5.27616 20 5.693V11.1C20 13.6333 19.2458 15.9375 17.7375 18.0125C16.2823 20.0144 14.451 21.322 12.2435 21.9355ZM12 19.9C13.7333 19.35 15.1667 18.25 16.3 16.6C17.4333 14.95 18 13.1167 18 11.1V6.375L12 4.125L6 6.375V11.1C6 13.1167 6.56667 14.95 7.7 16.6C8.83333 18.25 10.2667 19.35 12 19.9Z'
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
