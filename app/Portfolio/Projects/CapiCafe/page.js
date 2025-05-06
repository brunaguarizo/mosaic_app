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

export default function CapiCafeInfo() {
    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />

            <Headingbar
                heading='Capi Cafe'
                type='navigation'
            />
            <div>
                <img
                    className={styles.cover_image}
                    src='/portfolio/capicafe.png'
                    alt='fish friends cover image'></img>
            </div>
            <div className={styles.descriptions}>
                <ProjectTitle
                    title='Capi Cafe'
                    description='Language Requirements - Must be able to have options for English, Spanish, French, Italian, German, Portuguese, and Mandarin.
                    Customer Service - The AI must be able to assist users with whatever they need
                    Speed - The chatbot should be quick to  respond to user requests'
                    percentage={100}
                    variant='secondary'
                    className={styles.project_title}
                />

                <DescriptionBox
                    title='Desciption'
                    description='Dashboard Overview – Quick access to tank conditions & reminders
                    Water Quality Tracker – pH, ammonia, temperature insights
                    Fish Compatibility Guide – AI-powered suggestions for tankmates
                    Community Hub – Connects fish owners for advice & tips'
                    useCase='secondary'
                />
                <DescriptionBox
                    title='Roles'
                    description='Backend Developer'
                    useCase='secondary'
                />
                <DescriptionBox
                    title='Tools Used'
                    description='Visual Studio Code, GitHub'
                    useCase='secondary'
                />
            </div>

            <TaskDropDown>
                <div title='Analyze the Website'>
                    <TaskList
                        Tasks={[
                            "Look at the files containing images of the website [Capi-Café_Images.zip]",

                            "Do research on the user group of this app",
                        ]}
                    />
                </div>
                <div title='Do Research on Users'>
                    <TaskList
                        Tasks={[
                            "make a set of wireframes for the app",
                            "can either be made with paper or with software ",
                        ]}
                    />
                </div>
                <div title='Do More Research'>
                    <TaskList
                        Tasks={[
                            "Do research on how AI chatbots work and  the best practices to code one",
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
