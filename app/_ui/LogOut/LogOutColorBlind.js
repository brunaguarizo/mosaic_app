import styles from "./LogOutColorBlind.module.css";

export default function LogOutColorBlind() {
    return (
        <button className={styles.logout}>
            <svg
                className={styles.icon}
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M5 10H15'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                />
                <path
                    d='M10 5L15 10L10 15'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                />
            </svg>
            <span className={styles.text}>Log Out</span>
        </button>
    );
}
