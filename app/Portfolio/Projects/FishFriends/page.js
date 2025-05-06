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

export default function FishFriendsInfo() {
    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />

            <Headingbar
                heading='Fish Friends'
                type='navigation'
            />
            <div>
                <img
                    className={styles.cover_image}
                    src='/portfolio/fish.png'
                    alt='fish friends cover image'></img>
            </div>
            <div className={styles.descriptions}>
                <ProjectTitle
                    title='Fish Friends'
                    description='Fish Friends is a mobile app designed for beginner and experienced fish owners to track water conditions, get fish care guidance, and connect with a community of hobbyists.'
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
                <div title='Do Some research'>
                    <TaskList
                        Tasks={[
                            "Look at pet care apps",
                            "Do research on how to take care of fish",

                            "Do research on the user group of this app",
                        ]}
                    />
                </div>
                <div title='Sketch the Wireframes'>
                    <TaskList
                        Tasks={[
                            "make a set of wireframes for the app",
                            "can either be made with paper or with software ",
                        ]}
                    />
                </div>
                <div title='Prototype The Lo-fi Wireframes'>
                    <TaskList
                        Tasks={[
                            "Using whatever prototype software you prefer, make the first set of lo-fi wireframes",
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
