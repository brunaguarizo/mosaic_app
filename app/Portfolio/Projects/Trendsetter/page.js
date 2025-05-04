"use client";
import { useState } from "react";

import styles from "@/app/Portfolio/Projects/PortfolioProject.module.css";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import DescriptionBox from "@/app/_ui/Description_Box/Description_Box";
import TaskDropDown from "@/app/_ui/Task_Dropdown/Task_Dropdown";
import ProjectTitle from "@/app/_ui/Project_Title/Project_Title";
import TaskList from "@/app/_ui/Task_List/Task_List";

export default function FishFriendsInfo() {
    return (
        <div className={styles.container}>
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
            <div className={styles.descriptions}>
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
            </div>

            <TaskDropDown>
                <div title='Get Your Inspiration'>
                    <TaskList
                        Tasks={[
                            "Find inspiration to create your marketing campaign ",
                            "Use online or physical media to inspire",
                        ]}
                    />
                </div>
                <div title='Create the Campaign'>
                    <TaskList
                        Tasks={[
                            "Use Adobe Photoshop and Adobe Illustrator, make the media used for the campaign",
                        ]}
                    />
                </div>
                <div title='Launch Your First Campaign'>
                    <TaskList
                        Tasks={[
                            "Using a social media account, create posts for your campaign",
                            "Make sure to use tags to get clicks and views",
                            "Aim to get the most engagement you can",
                        ]}
                    />
                </div>
            </TaskDropDown>
        </div>
    );
}
