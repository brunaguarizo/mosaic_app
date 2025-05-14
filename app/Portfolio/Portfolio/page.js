"use client";
import styles from "@/app/Portfolio/Portfolio/Portfolio.module.css";
import PortfolioCard from "@/app/_ui/Portfolio_Card/Portfolio_Card";
import PortfolioCover from "@/app/_ui/Portfolio_Cover_Box/Portfolio_Cover_Box";
import Navbar from "@/app/_ui/navbar/navbar";
import Tag from "@/app/_ui/Tag/Tag";
import InterestChip from "@/app/_ui/Interest_Chip/Interest_Chip";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PortfolioHome() {
    const router = useRouter();
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        const savedProfile = localStorage.getItem("userProfile");
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }
    }, []);

    const handleFishFriendsClick = () => {
        router.push("/Portfolio/Projects/FishFriends");
    };
    const handleSodaSummerClick = () => {
        router.push("/Portfolio/Projects/SodaSummer");
    };
    const handlePiannatoClick = () => {
        router.push("/Portfolio/Projects/Piannato");
    };
    const handleTreeRootClick = () => {
        router.push("/Portfolio/Projects/TreeRoots");
    };
    const handleWeatherLikeClick = () => {
        router.push("/Portfolio/Projects/WeatherLike");
    };
    const handleCapiCafeClick = () => {
        router.push("/Portfolio/Projects/CapiCafe");
    };

    return (
        <>
            <div className={styles.container}>
                {/* Status Bar */}
                <StatusBar />
                <Headingbar
                    type='navigation'
                    heading='Portfolio'
                    pagination={
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={() => router.push("/Settings/Original")}>
                            <svg
                                width='20'
                                height='21'
                                viewBox='0 0 20 21'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M9.30496 20.5C8.85496 20.5 8.46746 20.35 8.14246 20.05C7.81746 19.75 7.62163 19.3833 7.55496 18.95L7.32996 17.3C7.11329 17.2167 6.90913 17.1167 6.71746 17C6.52579 16.8833 6.33829 16.7583 6.15496 16.625L4.60496 17.275C4.18829 17.4583 3.77163 17.475 3.35496 17.325C2.93829 17.175 2.61329 16.9083 2.37996 16.525L1.20496 14.475C0.971628 14.0917 0.904961 13.6833 1.00496 13.25C1.10496 12.8167 1.32996 12.4583 1.67996 12.175L3.00496 11.175C2.98829 11.0583 2.97996 10.9458 2.97996 10.8375V10.1625C2.97996 10.0542 2.98829 9.94167 3.00496 9.825L1.67996 8.825C1.32996 8.54167 1.10496 8.18333 1.00496 7.75C0.904961 7.31667 0.971628 6.90833 1.20496 6.525L2.37996 4.475C2.61329 4.09167 2.93829 3.825 3.35496 3.675C3.77163 3.525 4.18829 3.54167 4.60496 3.725L6.15496 4.375C6.33829 4.24167 6.52996 4.11667 6.72996 4C6.92996 3.88333 7.12996 3.78333 7.32996 3.7L7.55496 2.05C7.62163 1.61667 7.81746 1.25 8.14246 0.95C8.46746 0.65 8.85496 0.5 9.30496 0.5H11.655C12.105 0.5 12.4925 0.65 12.8175 0.95C13.1425 1.25 13.3383 1.61667 13.405 2.05L13.63 3.7C13.8466 3.78333 14.0508 3.88333 14.2425 4C14.4341 4.11667 14.6216 4.24167 14.805 4.375L16.355 3.725C16.7716 3.54167 17.1883 3.525 17.605 3.675C18.0216 3.825 18.3466 4.09167 18.58 4.475L19.755 6.525C19.9883 6.90833 20.055 7.31667 19.955 7.75C19.855 8.18333 19.63 8.54167 19.28 8.825L17.955 9.825C17.9716 9.94167 17.98 10.0542 17.98 10.1625V10.8375C17.98 10.9458 17.9633 11.0583 17.93 11.175L19.255 12.175C19.605 12.4583 19.83 12.8167 19.93 13.25C20.03 13.6833 19.9633 14.0917 19.73 14.475L18.53 16.525C18.2966 16.9083 17.9716 17.175 17.555 17.325C17.1383 17.475 16.7216 17.4583 16.305 17.275L14.805 16.625C14.6216 16.7583 14.43 16.8833 14.23 17C14.03 17.1167 13.83 17.2167 13.63 17.3L13.405 18.95C13.3383 19.3833 13.1425 19.75 12.8175 20.05C12.4925 20.35 12.105 20.5 11.655 20.5H9.30496ZM9.47996 18.5H11.455L11.805 15.85C12.3216 15.7167 12.8008 15.5208 13.2425 15.2625C13.6841 15.0042 14.0883 14.6917 14.455 14.325L16.93 15.35L17.905 13.65L15.755 12.025C15.8383 11.7917 15.8966 11.5458 15.93 11.2875C15.9633 11.0292 15.98 10.7667 15.98 10.5C15.98 10.2333 15.9633 9.97083 15.93 9.7125C15.8966 9.45417 15.8383 9.20833 15.755 8.975L17.905 7.35L16.93 5.65L14.455 6.7C14.0883 6.31667 13.6841 5.99583 13.2425 5.7375C12.8008 5.47917 12.3216 5.28333 11.805 5.15L11.48 2.5H9.50496L9.15496 5.15C8.63829 5.28333 8.15913 5.47917 7.71746 5.7375C7.27579 5.99583 6.87163 6.30833 6.50496 6.675L4.02996 5.65L3.05496 7.35L5.20496 8.95C5.12163 9.2 5.06329 9.45 5.02996 9.7C4.99663 9.95 4.97996 10.2167 4.97996 10.5C4.97996 10.7667 4.99663 11.025 5.02996 11.275C5.06329 11.525 5.12163 11.775 5.20496 12.025L3.05496 13.65L4.02996 15.35L6.50496 14.3C6.87163 14.6833 7.27579 15.0042 7.71746 15.2625C8.15913 15.5208 8.63829 15.7167 9.15496 15.85L9.47996 18.5ZM10.53 14C11.4966 14 12.3216 13.6583 13.005 12.975C13.6883 12.2917 14.03 11.4667 14.03 10.5C14.03 9.53333 13.6883 8.70833 13.005 8.025C12.3216 7.34167 11.4966 7 10.53 7C9.54663 7 8.71746 7.34167 8.04246 8.025C7.36746 8.70833 7.02996 9.53333 7.02996 10.5C7.02996 11.4667 7.36746 12.2917 8.04246 12.975C8.71746 13.6583 9.54663 14 10.53 14Z'
                                    fill='#141414'
                                />
                            </svg>
                        </span>
                    }
                />
                <PortfolioCover
                    firstName='Justin'
                    lastName='Pham'
                    city='Surrey'
                    province='BC'
                    avatarSrc='/Avatars/Yellow_Avatar.svg'
                    interests={["design", "marketing", "uxui"]}
                    aboutMe='I am a 24 year old designer from Surrey, BC.'
                    socialMedia={{
                        linkedin: "https://linkedin.com",
                        behance: "https://behance.net",
                        github: "https://github.com",
                    }}
                />

                <div className={styles.projects_rows}>
                    <PortfolioCard
                        ProjectName='FishFriends'
                        ProjectImage='/portfolio/fish.png'
                        interest='uxui'
                        onClick={handleFishFriendsClick}
                    />
                    <PortfolioCard
                        ProjectName='Soda Summer'
                        ProjectImage='/portfolio/soda.png'
                        interest='design'
                        onClick={handleSodaSummerClick}
                    />
                    <PortfolioCard
                        ProjectName='Piannato'
                        ProjectImage='/portfolio/piannato.png'
                        interest='design'
                        onClick={handlePiannatoClick}
                    />
                    <PortfolioCard
                        ProjectName='Tree Roots'
                        ProjectImage='/portfolio/rootbeer.png'
                        interest='marketing'
                        onClick={handleTreeRootClick}
                    />
                    <PortfolioCard
                        ProjectName='Weather Like'
                        ProjectImage='/portfolio/weather.png'
                        interest='frontend'
                        onClick={handleWeatherLikeClick}
                    />
                    <PortfolioCard
                        ProjectName='Capi Cafe'
                        ProjectImage='/portfolio/capicafe.png'
                        interest='backend'
                        onClick={handleCapiCafeClick}
                    />
                </div>

                <div className={styles.navigation_bar}>
                    <Navbar />
                </div>
            </div>
        </>
    );
}
