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
import TaskDropDown from "@/app/_ui/Task_Dropdown/Task_Dropdown";

export default function ProjectName() {
    const router = useRouter();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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

            {/* Task Dropdown */}
            <TaskDropDown>
                <div title='Define Brand Elements'>
                    <ul>
                        <li>
                            Research eco-friendly travel agencies and their
                            branding
                        </li>
                        <li>Define brand values and mission statement</li>
                        <li>
                            Create mood board with sustainable and adventurous
                            themes
                        </li>
                        <li>Develop color palette inspired by nature</li>
                        <li>
                            Choose typography that reflects sustainability and
                            adventure
                        </li>
                    </ul>
                </div>
                <div title='Design the Visual Assets'>
                    <ul>
                        <li>Design logo incorporating eco-friendly elements</li>
                        <li>Create brand patterns using natural elements</li>
                        <li>Develop icon set for travel and sustainability</li>
                        <li>Design business cards and letterhead</li>
                        <li>Create social media templates</li>
                    </ul>
                </div>
                <div title='Apply Branding to Marketing Materials'>
                    <ul>
                        <li>Design travel brochure with sustainable focus</li>
                        <li>Create website mockup with brand elements</li>
                        <li>Develop email newsletter template</li>
                        <li>Design promotional posters for eco-tours</li>
                        <li>Create branded merchandise mockups</li>
                    </ul>
                </div>
            </TaskDropDown>

            {/* Button */}
            <Button
                type='primary'
                size='large'
                value='Add to Portfolio'
                onClick={handlePortfolio}
            />

            <div className={styles.nav}>
                <Navbar />
            </div>

            {isPopupOpen && (
                <PopUp
                    onClose={() => {
                        setIsPopupOpen(false);
                        router.replace("/Dashboard");
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
