import  styles from './navbar.module.css';

function Navbar() {
    return (
    <nav className={styles.nav}>

        <a className={styles.navbar__item} href="/dashboard">
            <svg className={styles.navbar__icon} width="16" height="18" viewBox="0 0 16 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 15.5H5V10.5C5 10.2167 5.09583 9.97917 5.2875 9.7875C5.47917 9.59583 5.71667 9.5 6 9.5H10C10.2833 9.5 10.5208 9.59583 10.7125 9.7875C10.9042 9.97917 11 10.2167 11 10.5V15.5H14V6.5L8 2L2 6.5V15.5ZM0 15.5V6.5C0 6.18333 0.0708333 5.88333 0.2125 5.6C0.354167 5.31667 0.55 5.08333 0.8 4.9L6.8 0.4C7.15 0.133333 7.55 0 8 0C8.45 0 8.85 0.133333 9.2 0.4L15.2 4.9C15.45 5.08333 15.6458 5.31667 15.7875 5.6C15.9292 5.88333 16 6.18333 16 6.5V15.5C16 16.05 15.8042 16.5208 15.4125 16.9125C15.0208 17.3042 14.55 17.5 14 17.5H10C9.71667 17.5 9.47917 17.4042 9.2875 17.2125C9.09583 17.0208 9 16.7833 9 16.5V11.5H7V16.5C7 16.7833 6.90417 17.0208 6.7125 17.2125C6.52083 17.4042 6.28333 17.5 6 17.5H2C1.45 17.5 0.979167 17.3042 0.5875 16.9125C0.195833 16.5208 0 16.05 0 15.5Z"/>
            </svg>
            <p className={styles.navbar__text}>Dashboard</p>
         </a>
            <a className={styles.navbar__item} href="/portfolio">
                <img className={styles.navbar__icon} src="/navbar/portfolio.svg" alt="Portfolio icon"/>
                <p className={styles.navbar__text} >Portfolio</p>
            </a>
            <a className={styles.navbar__item}  href="/profile">
                <img className={styles.navbar__icon} src="/navbar/profile.svg" alt="Profile icon"/>
                <p className={styles.navbar__text}>Profile</p>
            </a>
    </nav>
    );
}


export default Navbar;
