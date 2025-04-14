import  styles from './navbar.module.css';

function Navbar() {
    return (
    <nav className={styles.nav}>
        <ul>
            <li className={styles.navbar__item}>
                <img src="/navbar/home.svg" alt="Dashboard icon"/>
                <a className={styles.navbar__text} href="/dashboard">Dashboard</a>
                </li>


            <li>
                <img src="/navbar/portfolio.svg" alt="Portfolio icon"/>
                <a href="/portfolio">Portfolio</a>
                </li>
            <li>
                <img src="/navbar/profile.svg" alt="Profile icon"/>
                <a href="/profile">Profile</a>
                </li>
        </ul>
    </nav>
    );
}


export default Navbar;
