"use client";
import { useState } from "react";

import styles from "@/app/Portfolio/Projects/PortfolioProject.module.css";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import DescriptionBox from "@/app/_ui/Description_Box/Description_Box";
import TaskDropDown from "@/app/_ui/Task_Dropdown/Task_Dropdown";
import ProjectTitle from "@/app/_ui/Project_Title/Project_Title";
import TaskList from "@/app/_ui/Task_List/Task_List";

export default function WeatherLikeInfo() {
    return (
        <div className={styles.container}>
            <Headingbar
                heading='Weather Like'
                type='navigation'
            />
            <div>
                <img
                    className={styles.cover_image}
                    src='/portfolio/weather.png'
                    alt='CapiCafe cover image'></img>
            </div>
            <div className={styles.descriptions}>
                <ProjectTitle
                    title='Weather Like'
                    description='Weather Like is a weather app that seamlessly connects to social media apps allowing for people to seamlessly share weather information to friends and family. Create a static website using HTML and CSS to help promote their app.'
                    percentage={100}
                    variant='secondary'
                    className={styles.project_title}
                />

                <DescriptionBox
                    title='Desciption'
                    description='Homepage - Explain what the app is about to users
                    About Us - Explain how the app got started
                    FAQ - Give users easy access to tips and tricks for the app '
                    useCase='secondary'
                />
                <DescriptionBox
                    title='Roles'
                    description='Frontend Developer'
                    useCase='secondary'
                />
                <DescriptionBox
                    title='Tools Used'
                    description='Figma, Visual Studio Code, GitHub'
                    useCase='secondary'
                />
            </div>

            <TaskDropDown>
                <div title='Do Some research'>
                    <TaskList
                        Tasks={[
                            "Find websites to reference for your website",

                            "Create a mood board to collect ideas",
                        ]}
                    />
                </div>
                <div title='Sketch the Wireframes'>
                    <TaskList
                        Tasks={[
                            "Make some sketches using paper and pen",
                            "Express as many ideas as you can ",
                        ]}
                    />
                </div>
                <div title='Prototype The Lo-fi Wireframes'>
                    <TaskList
                        Tasks={[
                            "Make the Lo-Fi wireframes for the website Figma",
                        ]}
                    />
                </div>
            </TaskDropDown>
        </div>
    );
}
