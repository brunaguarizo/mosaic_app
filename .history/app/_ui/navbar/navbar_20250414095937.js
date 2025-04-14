export default function Navbar() {
    return <nav className="nav">
        <ul>
            <li><img src="public/navbar/home.svg" alt="Dashboard icon"/><a href="/dashboard">Dashboard</a></li>
            <li><img src="public/navbar/portfolio.svg" alt="Portfolio icon"/><a href="/portfolio">Portfolio</a></li>
            <li><img src="public/navbar/profile.svg" alt="Profile icon"/><a href="/profile">Profile</a></li>
        </ul>
    </nav>
}

import styles from "./_ui/navbar/navbar.css"
