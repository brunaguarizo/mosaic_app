import classNames from "classnames";
import styles from "./Progress_Bar.module.css";

function ProgressBar({ CompletionAmount }) {
    return (
        <div className={styles.background}>
            <div className={styles.icon}>
                <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={styles.icon}>
                    <rect
                        width='40'
                        height='40'
                        rx='20'
                        fill='currentColor'
                    />
                    <path
                        d='M17.8702 25.3699C17.5702 25.3699 17.2852 25.2499 17.0752 25.0399L12.8302 20.7949C12.3952 20.3599 12.3952 19.6399 12.8302 19.2049C13.2652 18.7699 13.9852 18.7699 14.4202 19.2049L17.8702 22.6549L25.5802 14.9449C26.0152 14.5099 26.7352 14.5099 27.1702 14.9449C27.6052 15.3799 27.6052 16.0999 27.1702 16.5349L18.6652 25.0399C18.4552 25.2499 18.1702 25.3699 17.8702 25.3699Z'
                        fill='white'
                    />
                </svg>
            </div>
            <div className={styles.content_row}>
                <div className={styles.bar_text}>
                    <h1 className={styles.bar_amount}>{CompletionAmount} %</h1>
                    <p className={styles.bar_completion}>Completed</p>
                </div>
                <div className={styles.bar}></div>
            </div>
        </div>
    );
}

export default ProgressBar;
