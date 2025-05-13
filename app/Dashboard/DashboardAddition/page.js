"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "@/app/Dashboard/DashboardRegular/Dashboard.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Profile_Cover_Box from "@/app/_ui/Profile_Cover_Box/Profile_Cover_Box";
import SingleInput from "@/app/_ui/Input_Box/Input_Box";
import InterestChip from "@/app/_ui/Interest_Chip/Interest_Chip";
import SocialMedia from "@/app/_ui/SocialMedia/SocialMedia";
import Button from "@/app/_ui/Button/Button";
import LongInput from "@/app/_ui/Long_Input_Box/Long_Input_Box";
import PopUp from "@/app/_ui/PopUp/PopUp";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import CreateProject from "@/app/_ui/Create_Project_Button/Create_Project_Button";
import ProjectCard from "@/app/_ui/Project_Card/Project_card";
import Navbar from "@/app/_ui/navbar/navbar";
import Searchbar from "@/app/_ui/Search_Bar/Search_Bar";

export default function DashboardAddition() {
    const router = useRouter();

    const handleEggsAndBaconClick = () => {
        router.push("/ProjectSteps/EggsAndBacon/Task1");
    };
    const handleTrendsetterClick = () => {
        router.push("/ProjectSteps/Trendsetter/Task1");
    };

    const handleWanderworksClick = () => {
        router.push("/ProjectSteps/WanderWorks/Task1");
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
                ProjectName='WanderWorks'
                Interest='design'
                onClick={handleWanderworksClick}
                ActionText='Add to Portfolio'
                DeleteText='Delete Project'
            />

            <ProjectCard
                ProjectName='Eggs and Bacon'
                Interest='design'
                onClick={handleEggsAndBaconClick}
                ActionText='Add to Portfolio'
                DeleteText='Delete Project'
            />
            <ProjectCard
                ProjectName='Trendsetter'
                Interest='marketing'
                onClick={handleTrendsetterClick}
                ActionText='Add to Portfolio'
                DeleteText='Delete Project'
            />

            <div className={styles.navigation_bar}>
                <Navbar />
            </div>
        </div>
    );
}
