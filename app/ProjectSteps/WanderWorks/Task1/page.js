"use client";
import { useRouter } from "next/navigation";
import styles from "./Task1.module.css";
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
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const handleNext = () => {
        router.push("/ProjectSteps/WanderWorks/Task2");
    };
    const handleLater = () => {
        router.push("/Dashboard/DashboardAddition");
    };
    const handleDelete = () => {
        setShowDeletePopup(true);
    };
    const handleConfirmDelete = () => {
        setShowDeletePopup(false);
        router.replace("/Dashboard/DashboardRegular");
    };

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />

            {/* heading */}
            <Headingbar
                type='navigation'
                pagination='1/3'
            />
            {/* Progress */}
            <ProjectTitle
                title='WanderWorks'
                description='Create a visual brand identity for an Eco-Friendly travel agency that focus on sustainability and adventure.'
                percentage={33}
                variant='secondary'
                className={styles.project_title}
            />

            {/* Content */}
            <DescriptionBox
                title='Description'
                description={
                    "- Sustainability  \n - Adventure \n- Empowerment through travel  \n - Community building \n- Education on environmental conservation"
                }
                useCase='secondary'
            />

            {/* Date */}
            <DateCard
                startDate={3}
                endDate={13}
            />

            {/* Task */}
            <div className={styles.task_content}>
                <h2>1. Define Brand Elements</h2>
                <ul className={styles.task_item}>
                    <li>
                        Establish the brand's mission, vision, and values to
                        ensure alignment with eco-conscious travelers.
                    </li>
                    <li>
                        Choose a brand name, tagline, and tone of voice that
                        convey sustainability and adventure.
                    </li>
                    <li>
                        Identify a color palette (earthy greens, ocean blues,
                        warm browns) that reflects nature and sustainability.
                        Select typography that is clean, modern, and
                        natural-looking.
                    </li>
                </ul>
            </div>

            {/* Button */}
            <Button
                type='primary'
                size='large'
                value='Task Completed'
                onClick={handleNext}
            />
            <div className={styles.buttons}>
                <Button
                    type='secondary'
                    size='large'
                    value='Delete'
                    onClick={handleDelete}
                />
                <Button
                    type='secondary'
                    size='large'
                    value='Continue Later'
                    onClick={handleLater}
                />
            </div>

            <div className={styles.nav_bar}>
                <Navbar />
            </div>

            {/* Delete Confirmation Popup */}
            {showDeletePopup && (
                <PopUp
                    onClose={() => {
                        setShowDeletePopup(false);
                        router.replace("/Dashboard/DashboardRegular");
                    }}
                    buttonText='Delete'
                    buttonType='warning'
                    secondaryButtonText='Undo'
                    secondaryButtonType='terciary'
                    onSecondaryButtonClick={() => setShowDeletePopup(false)}>
                    <h2 className={styles.popup_header}>
                        Do you wish to delete this project permanently?
                    </h2>
                </PopUp>
            )}
        </div>
    );
}
