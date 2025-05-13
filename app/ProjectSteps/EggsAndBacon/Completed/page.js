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
import TaskDropDown from "@/app/_ui/Task_Dropdown/Task_Dropdown";
import TaskList from "@/app/_ui/Task_List/Task_List";

export default function ProjectName() {
    const router = useRouter();
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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

            <Headingbar
                heading='Eggs and Bacon'
                type='navigation'
            />
            <div>
                <img
                    className={styles.cover_image}
                    src='/portfolio/eggsandbacon.png'
                    alt='fish friends cover image'></img>
            </div>

            <ProjectTitle
                title='Eggs and Bacon'
                description='Create a set of logos and posters for a new, trendy brunch cafe who’s main market is millennials in Vancouver.'
                percentage={100}
                variant='secondary'
                className={styles.project_title}
            />

            <DescriptionBox
                title='Desciption'
                description='Tasty Food
                    Cool Place To Eat
                    Fun For Everyone
                    Vegan Friendly'
                useCase='secondary'
            />
            <DescriptionBox
                title='Roles'
                description='Graphic Designer'
                useCase='secondary'
            />
            <DescriptionBox
                title='Tools Used'
                description='Adobe Illustrator, Adobe Photoshop'
                useCase='secondary'
            />

            <TaskDropDown>
                <div title='Come Up with Ideas'>
                    <TaskList
                        Tasks={[
                            "Look for images need to make the posters ",
                            "Find typography to make the branding unique",
                            "Find colours that will make these designs stand out in the best way possible",
                        ]}
                    />
                </div>
                <div title='Find all Needed Assets'>
                    <TaskList
                        Tasks={[
                            "Come up with a list of ideas of what to use or create in the logos or posters",
                            "Get inspiration based on the target market",
                            "Takes notes on any word processing software, making sure to keep track of any sources",
                        ]}
                    />
                </div>
                <div title='Create the Posters'>
                    <TaskList
                        Tasks={[
                            "Using Adobe Photoshop and Adobe Illustrator, create the posters for Eggs and Bacon ",
                        ]}
                    />
                </div>
            </TaskDropDown>
            <Button
                type='primary'
                size='large'
                value='Add Project to Portfolio'
                onClick={() => setIsPopupOpen(true)}
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
                    buttonType='warning'
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
