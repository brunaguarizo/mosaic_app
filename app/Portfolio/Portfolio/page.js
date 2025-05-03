"use client";
import styles from "@/app/Portfolio/Portfolio/Portfolio.module.css";
import PortfolioCard from "@/app/_ui/Portfolio_Card/Portfolio_Card";
import ProfileCover from "@/app/_ui/Profile_Cover_Box/Profile_Cover_Box";
import Navbar from "@/app/_ui/navbar/navbar";
import Tag from "@/app/_ui/Tag/Tag";
import InterestChip from "@/app/_ui/Interest_Chip/Interest_Chip";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import { useState } from "react";

export default function PortfolioHome() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className={styles.container}>
                {/* Status Bar */}
                <StatusBar />
                <ProfileCover
                    username='Justin Pham'
                    city='Surrey'
                    province='BC'
                />
                <div className={styles.interests}>
                    <InterestChip
                        interest='design'
                        type='icon'
                        isSelected={true}
                    />
                    <InterestChip
                        type='icon'
                        interest='marketing'
                        isSelected={true}
                    />
                    <InterestChip
                        type='icon'
                        interest='uxui'
                        isSelected={true}
                    />
                </div>
                <div className={styles.projects_rows}>
                    <PortfolioCard
                        ProjectName='FishFriends'
                        ProjectImage='../Portfolio/fish.png'
                        interest='uxui'
                    />
                    <PortfolioCard
                        ProjectName='Soda Summer'
                        ProjectImage='../Portfolio/soda.png'
                        interest='design'
                    />
                    <PortfolioCard
                        ProjectName='Piannato'
                        ProjectImage='../Portfolio/piannato.png'
                        interest='design'
                    />
                    <PortfolioCard
                        ProjectName='Tree Roots'
                        ProjectImage='../Portfolio/rootbeer.png'
                        interest='marketing'
                    />
                    <PortfolioCard
                        ProjectName='Weather Like'
                        ProjectImage='../Portfolio/weather.png'
                        interest='frontend'
                    />
                    <PortfolioCard
                        ProjectName='Capi Cafe'
                        ProjectImage='../Portfolio/capicafe.png'
                        interest='backend'
                    />
                </div>
                {isMenuOpen && (
                    <div className={styles.dropdown__menu}>
                        <ul className={styles.dropdown__list}>
                            <li
                                className={styles.dropdown__item}
                                onClick={handleAddToPortfolio}>
                                {MenuItem1}
                            </li>
                            <li
                                className={styles.dropdown__item}
                                onClick={handleDeleteProject}>
                                {MenuItem2}
                            </li>
                        </ul>
                    </div>
                )}
                <Navbar className={styles.navigation_bar} />
            </div>
        </>
    );
}
