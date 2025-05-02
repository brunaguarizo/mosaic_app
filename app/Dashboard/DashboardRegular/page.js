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

    const handleDeleteProject = (projectName) => {
        console.log(`Deleting project: ${projectName}`);
    };

    const handleAddToPortfolio = (projectName) => {
        console.log(`Adding project to portfolio: ${projectName}`);
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
                ProjectName='Eggs and Bacon'
                Interest='design'
                onClick={handleEggsAndBaconClick}
                onDelete={() => handleDeleteProject("Eggs and Bacon")}
                onAddToPortfolio={() => handleAddToPortfolio("Eggs and Bacon")}
                MenuItem1='Add to Portfolio'
                MenuItem2='Delete Project'
            />
            <ProjectCard
                ProjectName='Trendsetter'
                Interest='marketing'
                onClick={handleTrendsetterClick}
                onDelete={() => handleDeleteProject("Trendsetter")}
                onAddToPortfolio={() => handleAddToPortfolio("Trendsetter")}
                MenuItem1='Add to Portfolio'
                MenuItem2='Delete Project'
            />

            <div className={styles.navigation_bar}>
                <Navbar />
            </div>
        </div>
    );
}
