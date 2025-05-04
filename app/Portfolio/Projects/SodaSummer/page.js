"use client";
import { useState } from "react";

import styles from "@/app/Portfolio/Projects/PortfolioProject.module.css";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import DescriptionBox from "@/app/_ui/Description_Box/Description_Box";
import TaskDropDown from "@/app/_ui/Task_Dropdown/Task_Dropdown";
import ProjectTitle from "@/app/_ui/Project_Title/Project_Title";
import TaskList from "@/app/_ui/Task_List/Task_List";

export default function SodaSummerInfo() {
    return (
        <div className={styles.container}>
            <Headingbar
                heading='SodaSummer'
                type='navigation'
            />
            <div>
                <img
                    className={styles.cover_image}
                    src='/portfolio/soda.png'
                    alt='fish friends cover image'></img>
            </div>
            <div className={styles.descriptions}>
                <ProjectTitle
                    title='Soda Summer'
                    description='Soda Summer is a bright and playful branding project for a fictional soda brand that captures the essence of summer with bold colors, fun typography, and a nostalgic feel.'
                    percentage={100}
                    variant='secondary'
                    className={styles.project_title}
                />

                <DescriptionBox
                    title='Desciption'
                    description='Logo & Brand Identity – Playful, nostalgic design with a modern twist
Color & Typography System – Bright, energetic aesthetic reflecting summer vibes
Packaging Design – High-quality soda can and bottle mockups
Website & Social Media UI – A cohesive digital experience for the brand'
                    useCase='secondary'
                />
                <DescriptionBox
                    title='Roles'
                    description='Brand Designer, UI Designer'
                    useCase='secondary'
                />
                <DescriptionBox
                    title='Tools Used'
                    description='Adobe Illustrator, Adobe Photoshop, Figma'
                    useCase='secondary'
                />
            </div>

            <TaskDropDown>
                <div title='Find Some Inspiration'>
                    <TaskList
                        Tasks={[
                            "Do research on logos, packaging, colours and typography",

                            "Do research on nostalgic feeling designs",
                        ]}
                    />
                </div>
                <div title='Make Mockups'>
                    <TaskList
                        Tasks={[
                            "Make a set of mockups for the logos, branding, packaging",
                            "Create a presentable format for the mockups for feedback ",
                        ]}
                    />
                </div>
                <div title='Get Feedback'>
                    <TaskList
                        Tasks={[
                            "Get a few people, ideally those with knowledge on design and branding to give feedback",
                            "Evaluate on which feedback is important to iterate on",
                            "Apply feedback on the mockups and make the next version",
                        ]}
                    />
                </div>
            </TaskDropDown>
        </div>
    );
}
