"use client";
import { useRouter } from "next/navigation";
import styles from "./Task2.module.css";
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
        router.replace("/ProjectSteps/EggsAndBacon/Task3");
    };
    const handleLater = () => {
        router.replace("/Dashboard/DashboardRegular");
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
                pagination='2/3'
            />
            {/* Progress */}
            <ProjectTitle
                title='Eggs and Bacon'
                description="A set of logos and posters for a new, trendy brunch cafe who's main market is millennials in Vancouver."
                percentage={66}
                variant='secondary'
                className={styles.project_title}
            />

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

            {/* Task */}
            <div className={styles.task_content}>
                <h2>2. Design the Visual Assets</h2>
                <ul className={styles.task_item}>
                    <li>
                        Create a logo that represents the cafe's brunch focus
                        (e.g., eggs, bacon, coffee, or minimalist food icons).
                    </li>
                    <li>
                        Design a brand pattern or graphic elements inspired by
                        breakfast ingredients and modern cafe aesthetics.
                    </li>
                    <li>
                        Develop iconography and secondary visuals to maintain
                        consistency across digital and print materials.
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
