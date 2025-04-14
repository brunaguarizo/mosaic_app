import  styles from './navbar.module.css';

function Navbar() {
    return (
    <nav className={styles.nav}>
        <ul>
            <li className={styles.navbar__item}>
                <img className={styles.navbar__icon} src="/navbar/home.svg" alt="Dashboard icon"/>
                <a className={styles.navbar__text} href="/dashboard">Dashboard</a>
            </li>
            <li className={styles.navbar__item}>
                <img className={styles.navbar__icon} src="/navbar/home.svg" alt="Dashboard icon"/>
                <a className={styles.navbar__text} href="/dashboard">Dashboard</a>
            </li>
            <li className={styles.navbar__item}>
                <img className={styles.navbar__icon} src="/navbar/home.svg" alt="Dashboard icon"/>
                <a className={styles.navbar__text} href="/dashboard">Dashboard</a>
            </li>
        </ul>
    </nav>
    );
}


export default Navbar;
