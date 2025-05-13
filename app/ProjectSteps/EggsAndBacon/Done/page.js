"use client";
import { useRouter } from "next/navigation";
import styles from "./Done.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import DescriptionBox from "@/app/_ui/Description_Box/Description_Box";
import Button from "@/app/_ui/Button/Button";
import Navbar from "@/app/_ui/navbar/navbar";
import { useState } from "react";
import PopUp from "@/app/_ui/PopUp/PopUp";
import ProjectTitle from "@/app/_ui/Project_Title/Project_Title";
import DateCard from "@/app/_ui/Date_Card/Date_Card";
export default function ProjectName() {
    const router = useRouter();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePortfolio = () => {
        setIsPopupOpen(true);
    };

    const handleViewProject = () => {
        router.replace("/ProjectSteps/EggsAndBacon/Completed");
    };

    const handleUndo = () => {
        setIsPopupOpen(false);
    };

    const handleConfirm = () => {
        setIsPopupOpen(false);
        router.replace("/");
    };
    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />

            {/* heading */}
            <Headingbar
                type='navigation'
                pagination='3/3'
            />
            {/* Progress */}
            <ProjectTitle
                title='Eggs and Bacon'
                description="A set of logos and posters for a new, trendy brunch cafe who's main market is millennials in Vancouver."
                percentage={100}
                variant='secondary'
                className={styles.project_title}
            />

            {/* Congrats */}
            <div className={styles.task_content}>
                <h2>Congratulations!</h2>
                <p className={styles.task_item}>
                    You completed all the tasksand finished your project.
                </p>
            </div>

            {/* Content */}
            <DescriptionBox
                title='Description'
                description='Eggs and Bacon is a new, trendy brunch cafe in Vancouver who employed you to create a set of logos and posters to advertise their opening and brunch menu.'
                useCase='secondary'
            />

            {/* Date */}
            <DateCard
                startDate={3}
                endDate={13}
            />

            {/* Button */}
            <Button
                type='primary'
                size='large'
                value='View Project Details'
                onClick={handleViewProject}
            />
            <Button
                type='secondary'
                size='large'
                value='Add Project to Portfolio'
                onClick={handlePortfolio}
            />

            <div className={styles.nav_bar}>
                <Navbar />
            </div>

            {isPopupOpen && (
                <PopUp
                    onClose={() => {
                        setIsPopupOpen(false);
                        router.replace("/Portfolio/Portfolio");
                    }}
                    buttonText='Confirm'
                    buttonType='primary'
                    secondaryButtonText='Undo'
                    secondaryButtonType='terciary'
                    onSecondaryButtonClick={() => setIsPopupOpen(false)}>
                    <h2 className={styles.popup_header}>
                        Project added to portfolio
                    </h2>
                    <p>
                        You have successfully added this project to your
                        portfolio{" "}
                    </p>
                </PopUp>
            )}
        </div>
    );
}
