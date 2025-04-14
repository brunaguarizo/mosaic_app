import  styles from './navbar.module.css';

function Navbar() {
    return (
    <nav className={styles.nav}>
        
            <a className={styles.navbar__item} href="/dashboard">
                <img className={styles.navbar__icon} src="/navbar/home.svg" alt="Dashboard icon"/>
                <p className={styles.navbar__text} >Dashboard</p>
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
