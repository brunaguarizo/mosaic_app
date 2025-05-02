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
                title='Trendsetter'
                description='A set of social media advertisements for a new fashion brand for the upcoming spring/summer season.'
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
                description={`- Sustainability
- Adventure
- Empowerment through travel
- Community building
- Education on environmental conservation`}
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
