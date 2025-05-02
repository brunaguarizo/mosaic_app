"use client";
import { useRouter } from "next/navigation";
import styles from "./Task3.module.css";
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
        router.replace("/ProjectSteps/WanderWorks/Completed");
    };
    const handleLater = () => {
        router.replace("/Dashboard");
    };
    const handleDelete = () => {
        setShowDeletePopup(true);
    };
    const handleConfirmDelete = () => {
        setShowDeletePopup(false);
        router.replace("/Dashboard");
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
                title='WanderWorks'
                description='Create a visual brand identity for an Eco-Friendly travel agency that focus on sustainability and adventure.'
                percentage={75}
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
                <h2>3. Apply Branding to Marketing Materials</h2>
                <ul className={styles.task_item}>
                    <li>
                        Design business cards, brochures, and social media
                        templates using the visual identity.
                    </li>
                    <li>
                        Create a website mockup incorporating the branding,
                        eco-friendly messaging, and adventure imagery.
                    </li>
                    <li>
                        Develop a brand guideline document to ensure consistency
                        in all branding applications.
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

            <div className={styles.nav}>
                <Navbar />
            </div>

            {/* Delete Confirmation Popup */}
            {showDeletePopup && (
                <PopUp
                    onClose={() => {
                        setShowDeletePopup(false);
                        router.replace("/Dashboard");
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
