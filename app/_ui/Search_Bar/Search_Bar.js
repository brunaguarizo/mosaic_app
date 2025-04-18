import classNames from "classnames";
import styles from "./Search_Bar.module.css";

function Searchbar({ type, inputView, onClick }) {
    const SearchClasses = classNames(styles.primary, {
        [styles.secondary]: type === "secondary",
    });
    const InputClasses = classNames(styles.visible, {
        [styles.invisible]: inputView === "invisible",
    });

    return (
        <div className={SearchClasses}>
            <svg
                className={styles.search_icon}
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M6.65718 13.3144C4.79659 13.3144 3.22191 12.67 1.93314 11.3812C0.644381 10.0925 0 8.51778 0 6.65718C0 4.79659 0.644381 3.22191 1.93314 1.93314C3.22191 0.644381 4.79659 0 6.65718 0C8.51778 0 10.0925 0.644381 11.3812 1.93314C12.67 3.22191 13.3144 4.79659 13.3144 6.65718C13.3144 7.40825 13.1949 8.11664 12.9559 8.78236C12.7169 9.44808 12.3926 10.037 11.9829 10.5491L17.7184 16.2845C17.9061 16.4723 18 16.7112 18 17.0014C18 17.2916 17.9061 17.5306 17.7184 17.7184C17.5306 17.9061 17.2916 18 17.0014 18C16.7112 18 16.4723 17.9061 16.2845 17.7184L10.5491 11.9829C10.037 12.3926 9.44808 12.7169 8.78236 12.9559C8.11664 13.1949 7.40825 13.3144 6.65718 13.3144ZM6.65718 11.266C7.93741 11.266 9.0256 10.8179 9.92176 9.92176C10.8179 9.0256 11.266 7.93741 11.266 6.65718C11.266 5.37696 10.8179 4.28876 9.92176 3.3926C9.0256 2.49644 7.93741 2.04836 6.65718 2.04836C5.37696 2.04836 4.28876 2.49644 3.3926 3.3926C2.49644 4.28876 2.04836 5.37696 2.04836 6.65718C2.04836 7.93741 2.49644 9.0256 3.3926 9.92176C4.28876 10.8179 5.37696 11.266 6.65718 11.266Z'
                    fill='#141414'
                />
            </svg>
            <input
                className={InputClasses}
                type='text'
                defaultValue='Search...'
                onClick={onClick}
            />
        </div>
    );
}

export default Searchbar;
