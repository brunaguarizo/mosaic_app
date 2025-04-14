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
         <svg className={styles.navbar__icon} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.88889 4.44444V0.888889C8.88889 0.637037 8.97407 0.425926 9.14444 0.255556C9.31482 0.0851852 9.52593 0 9.77778 0H15.1111C15.363 0 15.5741 0.0851852 15.7444 0.255556C15.9148 0.425926 16 0.637037 16 0.888889V4.44444C16 4.6963 15.9148 4.90741 15.7444 5.07778C15.5741 5.24815 15.363 5.33333 15.1111 5.33333H9.77778C9.52593 5.33333 9.31482 5.24815 9.14444 5.07778C8.97407 4.90741 8.88889 4.6963 8.88889 4.44444ZM0 8V0.888889C0 0.637037 0.0851852 0.425926 0.255556 0.255556C0.425926 0.0851852 0.637037 0 0.888889 0H6.22222C6.47407 0 6.68519 0.0851852 6.85556 0.255556C7.02593 0.425926 7.11111 0.637037 7.11111 0.888889V8C7.11111 8.25185 7.02593 8.46296 6.85556 8.63333C6.68519 8.8037 6.47407 8.88889 6.22222 8.88889H0.888889C0.637037 8.88889 0.425926 8.8037 0.255556 8.63333C0.0851852 8.46296 0 8.25185 0 8ZM8.88889 15.1111V8C8.88889 7.74815 8.97407 7.53704 9.14444 7.36667C9.31482 7.1963 9.52593 7.11111 9.77778 7.11111H15.1111C15.363 7.11111 15.5741 7.1963 15.7444 7.36667C15.9148 7.53704 16 7.74815 16 8V15.1111C16 15.363 15.9148 15.5741 15.7444 15.7444C15.5741 15.9148 15.363 16 15.1111 16H9.77778C9.52593 16 9.31482 15.9148 9.14444 15.7444C8.97407 15.5741 8.88889 15.363 8.88889 15.1111ZM0 15.1111V11.5556C0 11.3037 0.0851852 11.0926 0.255556 10.9222C0.425926 10.7519 0.637037 10.6667 0.888889 10.6667H6.22222C6.47407 10.6667 6.68519 10.7519 6.85556 10.9222C7.02593 11.0926 7.11111 11.3037 7.11111 11.5556V15.1111C7.11111 15.363 7.02593 15.5741 6.85556 15.7444C6.68519 15.9148 6.47407 16 6.22222 16H0.888889C0.637037 16 0.425926 15.9148 0.255556 15.7444C0.0851852 15.5741 0 15.363 0 15.1111ZM1.77778 7.11111H5.33333V1.77778H1.77778V7.11111ZM10.6667 14.2222H14.2222V8.88889H10.6667V14.2222ZM10.6667 3.55556H14.2222V1.77778H10.6667V3.55556ZM1.77778 14.2222H5.33333V12.4444H1.77778V14.2222Z"/>
        </svg>

            <p className={styles.navbar__text}>Portfolio</p>
         </a>
         <a className={styles.navbar__item} href="/profile">
            <svg className={styles.navbar__icon}  width="17" height="16" viewBox="0 0 17 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.58 12.08C4.26 11.56 5.02 11.15 5.86 10.85C6.7 10.55 7.58 10.4 8.5 10.4C9.42 10.4 10.3 10.55 11.14 10.85C11.98 11.15 12.74 11.56 13.42 12.08C13.8867 11.5333 14.25 10.9133 14.51 10.22C14.77 9.52667 14.9 8.78667 14.9 8C14.9 6.22667 14.2767 4.71667 13.03 3.47C11.7833 2.22333 10.2733 1.6 8.5 1.6C6.72667 1.6 5.21667 2.22333 3.97 3.47C2.72333 4.71667 2.1 6.22667 2.1 8C2.1 8.78667 2.23 9.52667 2.49 10.22C2.75 10.9133 3.11333 11.5333 3.58 12.08ZM8.5 8.8C7.71333 8.8 7.05 8.53 6.51 7.99C5.97 7.45 5.7 6.78667 5.7 6C5.7 5.21333 5.97 4.55 6.51 4.01C7.05 3.47 7.71333 3.2 8.5 3.2C9.28667 3.2 9.95 3.47 10.49 4.01C11.03 4.55 11.3 5.21333 11.3 6C11.3 6.78667 11.03 7.45 10.49 7.99C9.95 8.53 9.28667 8.8 8.5 8.8ZM8.5 16C7.39333 16 6.35333 15.79 5.38 15.37C4.40667 14.95 3.56 14.38 2.84 13.66C2.12 12.94 1.55 12.0933 1.13 11.12C0.71 10.1467 0.5 9.10667 0.5 8C0.5 6.89333 0.71 5.85333 1.13 4.88C1.55 3.90667 2.12 3.06 2.84 2.34C3.56 1.62 4.40667 1.05 5.38 0.63C6.35333 0.21 7.39333 0 8.5 0C9.60667 0 10.6467 0.21 11.62 0.63C12.5933 1.05 13.44 1.62 14.16 2.34C14.88 3.06 15.45 3.90667 15.87 4.88C16.29 5.85333 16.5 6.89333 16.5 8C16.5 9.10667 16.29 10.1467 15.87 11.12C15.45 12.0933 14.88 12.94 14.16 13.66C13.44 14.38 12.5933 14.95 11.62 15.37C10.6467 15.79 9.60667 16 8.5 16ZM8.5 14.4C9.20667 14.4 9.87333 14.2967 10.5 14.09C11.1267 13.8833 11.7 13.5867 12.22 13.2C11.7 12.8133 11.1267 12.5167 10.5 12.31C9.87333 12.1033 9.20667 12 8.5 12C7.79333 12 7.12667 12.1033 6.5 12.31C5.87333 12.5167 5.3 12.8133 4.78 13.2C5.3 13.5867 5.87333 13.8833 6.5 14.09C7.12667 14.2967 7.79333 14.4 8.5 14.4ZM8.5 7.2C8.84667 7.2 9.13333 7.08667 9.36 6.86C9.58667 6.63333 9.7 6.34667 9.7 6C9.7 5.65333 9.58667 5.36667 9.36 5.14C9.13333 4.91333 8.84667 4.8 8.5 4.8C8.15333 4.8 7.86667 4.91333 7.64 5.14C7.41333 5.36667 7.3 5.65333 7.3 6C7.3 6.34667 7.41333 6.63333 7.64 6.86C7.86667 7.08667 8.15333 7.2 8.5 7.2Z" fill="#141414"/>
            </svg>

            <p className={styles.navbar__text}>Profile</p>
         </a>
    </nav>
    );
}


export default Navbar;
