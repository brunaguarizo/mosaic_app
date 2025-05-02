"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./Dashboard.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Profile_Cover_Box from "../../_ui/Profile_Cover_Box/Profile_Cover_Box";
import SingleInput from "../../_ui/Input_Box/Input_Box";
import InterestChip from "../../_ui/Interest_Chip/Interest_Chip";
import SocialMedia from "../../_ui/SocialMedia/SocialMedia";
import Button from "../../_ui/Button/Button";
import LongInput from "../../_ui/Long_Input_Box/Long_Input_Box";
import PopUp from "../../_ui/PopUp/PopUp";
import Headingbar from "../../_ui/Heading_Bar/Heading_Bar";
import CreateProject from "../../_ui/Create_Project_Button/Create_Project_Button";
import ProjectCard from "../../_ui/Project_card/Project_card";
import Navbar from "../../_ui/navbar/navbar";
import Searchbar from "../../_ui/Search_Bar/Search_Bar";

export default function Dashboard() {
    const router = useRouter();
    const handleEggsAndBaconClick = () => {
        router.push("/ProjectSteps/EggsAndBacon/Task1");
    };
    const handleTrendsetterClick = () => {
        router.push("/ProjectSteps/Trendsetter/Task1");
    };
    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            <Headingbar
                heading='Dashboard'
                type='heading'
            />
            <CreateProject />
            <div>
                <p>Archived Projects</p>
            </div>

            <ProjectCard
                ProjectDescription="A set of logos and posters for a new, trendy brunch cafe who's main market is millennials in Vancouver."
                ProjectName='Eggs and Bacon'
                Interest='design'
                onClick={handleEggsAndBaconClick}
            />
            <ProjectCard
                ProjectDescription='A social media campaign for a new fashion brand for the upcoming spring/summer season.'
                ProjectName='Trendsetter'
                Interest='marketing'
                onClick={handleTrendsetterClick}
            />

            <div className={styles.navigation_bar}>
                <Navbar />
            </div>
        </div>
    );
}
