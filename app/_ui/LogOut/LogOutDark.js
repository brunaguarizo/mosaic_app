import React from "react";
import styles from "./LogOutDark.module.css";
import { useRouter } from "next/navigation";

function LogOutDark() {
    const router = useRouter();
    const handleLogOut = () => {
        router.push("/SignIn/SignIn");
    };
    return (
        <div
            className={styles.logoutContainer}
            onClick={handleLogOut}>
            <div className={styles.left}>
                <svg
                    className={styles.icon}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H11C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5H5V19H11C11.5523 19 12 19.4477 12 20C12 20.5523 11.5523 21 11 21H5ZM16.7252 16.2748C16.3279 16.6721 15.681 16.6636 15.2943 16.2558C14.9218 15.863 14.93 15.245 15.3127 14.8623L17.175 13H10C9.44771 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11H17.175L15.3127 9.13775C14.93 8.755 14.9218 8.13701 15.2943 7.74424C15.681 7.33644 16.3279 7.32786 16.7252 7.72525L20.2929 11.2929C20.6834 11.6834 20.6834 12.3166 20.2929 12.7071L16.7252 16.2748Z'
                        fill='currentColor'
                    />
                </svg>

                <p className={styles.text}>Log Out</p>
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
    );
}

export default LogOutDark;
