"use client";
import { useRouter } from "next/navigation";
import styles from "./Completed.module.css";
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

    const handleNext = () => {
        router.replace("/ProjectSteps/WanderWorks/Done");
    };

    const handlePortfolio = () => {
        setIsPopupOpen(true);
    };

    const handleUndo = () => {
        setIsPopupOpen(false);
    };

    const handleConfirm = () => {
        setIsPopupOpen(false);
        router.replace("/Portfolio/Portfolio");
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
                percentage={100}
                variant='secondary'
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
                <h2>1. Define Brand Elements </h2>
                <h2>2. Design the Visual Assets</h2>
                <h2>3. Apply Branding to Marketing Materials</h2>
            </div>

            {/* Button */}
            <Button
                type='primary'
                size='large'
                value='View Project'
                onClick={handleNext}
            />
            <Button
                type='secondary'
                size='large'
                value='Add to Portfolio'
                onClick={handlePortfolio}
            />

            <div className={styles.nav}>
                <Navbar />
            </div>

            {isPopupOpen && (
                <PopUp
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    title='Project added to portfolio'
                    description='You have successfully added this project to your portfolio'
                    buttons={[
                        {
                            text: "Undo",
                            variant: "tertiary",
                            onClick: handleUndo,
                        },
                        {
                            text: "Confirm",
                            variant: "primary",
                            onClick: handleConfirm,
                        },
                    ]}
                />
            )}
        </div>
    );
}
