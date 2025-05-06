"use client";
import { useState } from "react";

import styles from "@/app/Portfolio/Projects/PortfolioProject.module.css";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import DescriptionBox from "@/app/_ui/Description_Box/Description_Box";
import TaskDropDown from "@/app/_ui/Task_Dropdown/Task_Dropdown";
import ProjectTitle from "@/app/_ui/Project_Title/Project_Title";
import TaskList from "@/app/_ui/Task_List/Task_List";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Navbar from "@/app/_ui/navbar/navbar";

export default function PiannattoInfo() {
    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            <Headingbar
                heading='Piannatto'
                type='navigation'
            />
            <div>
                <img
                    className={styles.cover_image}
                    src='/portfolio/piannato.png'
                    alt='CapiCafe cover image'></img>
            </div>
            <div className={styles.descriptions}>
                <ProjectTitle
                    title='Piannatto'
                    description='Piannatto is a sophisticated, luxurious music academy that specializes in piano, guitar and vocal lessons. They have requested a redesign of their brand identity to help modernize their brand and feel trendy.'
                    percentage={100}
                    variant='secondary'
                    className={styles.project_title}
                />

                <DescriptionBox
                    title='Desciption'
                    description='Logo & Brand Identity – Sophisticated yet trendy
Color & Typography System – Minimalistic and modern, keeping accessibility in mind
Website & Social Media UI – Luxurious, making sure that people know they aren’t an academy for everyone but for those who can afford their price tag'
                    useCase='secondary'
                />
                <DescriptionBox
                    title='Roles'
                    description='Brand Designer, UI Designer'
                    useCase='secondary'
                />
                <DescriptionBox
                    title='Tools Used'
                    description='Figma, Adobe Illustrator, Adobe Photoshop'
                    useCase='secondary'
                />
            </div>

            <TaskDropDown>
                <div title='Get Creative'>
                    <TaskList
                        Tasks={[
                            "Look online for inspiration on design and brand identity",

                            "Read books in typography and design to gain more knowledge",
                        ]}
                    />
                </div>
                <div title='Find Assets'>
                    <TaskList
                        Tasks={[
                            "Find fonts that can express both luxury and modern vibes",
                            "Look for graphics that can help elevate the deliverables",
                            " Search for images that will express the businesses goals the best",
                        ]}
                    />
                </div>
                <div title='Create the First Designs'>
                    <TaskList
                        Tasks={[
                            "Make the first versions of the posters,brand identity, logo and website",
                            "Get feedback on your designs if available",
                        ]}
                    />
                </div>
            </TaskDropDown>
            <div className={styles.nav_bar}>
                <Navbar />
            </div>
        </div>
    );
}
