"use client";
import { useState } from "react";

import styles from "@/app/Portfolio/Projects/PortfolioProject.module.css";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import DescriptionBox from "@/app/_ui/Description_Box/Description_Box";
import TaskDropDown from "@/app/_ui/Task_Dropdown/Task_Dropdown";
import ProjectTitle from "@/app/_ui/Project_Title/Project_Title";
import TaskList from "@/app/_ui/Task_List/Task_List";

export default function WanderworksInfo() {
    return (
        <div className={styles.container}>
            <Headingbar
                heading='WanderWorks'
                type='navigation'
            />
            <div>
                <img
                    className={styles.cover_image}
                    src='/portfolio/wanderworks.png'
                    alt='Wanderworks cover image'></img>
            </div>
            <div className={styles.descriptions}>
                <ProjectTitle
                    title='WanderWorks'
                    description='Create a visual brand identity for an Eco-Friendly travel agency that focus on sustainability and adventure.'
                    percentage={100}
                    variant='secondary'
                    className={styles.project_title}
                />

                <DescriptionBox
                    title='Desciption'
                    description='Sustainability
Adventure
Empowerment through travel
Community building
Education on environmental conservation'
                    useCase='secondary'
                />
                <DescriptionBox
                    title='Roles'
                    description='UX Designer, UI Designer, Researcher'
                    useCase='secondary'
                />
                <DescriptionBox
                    title='Tools Used'
                    description='Figma, Adobe Illustrator, User Testing'
                    useCase='secondary'
                />
            </div>

            <TaskDropDown>
                <div title='Define Brand Elements'>
                    <TaskList
                        Tasks={[
                            "Establish the brand’s mission, vision, and values to ensure alignment with eco-conscious travelers.",

                            "Choose a brand name, tagline, and tone of voice that convey sustainability and adventure.",
                            "Identify a color palette (earthy greens, ocean blues, warm browns) that reflects nature and sustainability. Select typography that is clean, modern, and natural-looking.",
                        ]}
                    />
                </div>
                <div title='Design the Visual Assets'>
                    <TaskList
                        Tasks={[
                            "Create a logo that represents sustainability and adventure (e.g., mountains, leaves, waves, or minimalist nature icons).",
                            "Design a brand pattern or graphic elements inspired by natural textures (wood grain, water ripples, etc.).",
                            "Develop iconography and secondary visuals to maintain consistency across digital and print materials.",
                        ]}
                    />
                </div>
                <div title='Apply Branding to Marketing Materials'>
                    <TaskList
                        Tasks={[
                            "Design business cards, brochures, and social media templates using the visual identity.",
                            "Create a website mockup incorporating the branding, eco-friendly messaging, and adventure imagery.",
                            "Develop a brand guideline document to ensure consistency in all branding applications.",
                        ]}
                    />
                </div>
            </TaskDropDown>
        </div>
    );
}
