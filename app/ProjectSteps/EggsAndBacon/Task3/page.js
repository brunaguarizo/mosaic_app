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
        router.push("/ProjectSteps/EggsAndBacon/Done");
    };
    const handleLater = () => {
        router.push("/Dashboard/DashboardRegular");
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
                <h2>3. Create Marketing Materials</h2>
                <ul className={styles.task_item}>
                    <li>
                        Design a series of posters for the cafe's grand opening,
                        featuring the logo and brand elements.
                    </li>
                    <li>
                        Create social media graphics and digital ads to promote
                        the cafe's brunch menu and special events.
                    </li>
                    <li>
                        Develop a style guide that documents the brand's visual
                        identity, including logo usage, color codes, typography,
                        and design principles.
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
