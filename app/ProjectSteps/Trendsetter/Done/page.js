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
import PopUpStyles from "@/app/_ui/PopUp/PopUp.module.css";
import ProjectTitle from "@/app/_ui/Project_Title/Project_Title";
import DateCard from "@/app/_ui/Date_Card/Date_Card";
import TaskDropDown from "@/app/_ui/Task_Dropdown/Task_Dropdown";
import TaskList from "@/app/_ui/Task_List/Task_List";

export default function ProjectName() {
    const router = useRouter();
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePortfolio = () => {
        setIsPopupOpen(true);
    };

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />

            <Headingbar
                heading='Trendsetter'
                type='navigation'
            />
            <div>
                <img
                    className={styles.cover_image}
                    src='/portfolio/trendsetter.png'
                    alt='fish friends cover image'></img>
            </div>

            <ProjectTitle
                title='Trendsetter'
                description='Create a social media campaign for a new fashion brand for the upcoming spring/summer season.'
                percentage={100}
                variant='secondary'
                className={styles.project_title}
            />

            <DescriptionBox
                title='Desciption'
                description='Modern
                    Warm Weather
                    Cooling Technology
                    Trendy
                    Luxury Fashion'
                useCase='secondary'
            />
            <DescriptionBox
                title='Roles'
                description='Marketer, Researcher'
                useCase='secondary'
            />
            <DescriptionBox
                title='Tools Used'
                description='Google Docs, Adobe InDesign, Adobe Acrobat'
                useCase='secondary'
            />

            <DateCard
                startDate={3}
                endDate={13}
            />

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
