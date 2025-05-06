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
                heading='Tree Roots'
                type='navigation'
            />
            <div>
                <img
                    className={styles.cover_image}
                    src='/portfolio/rootbeer.png'
                    alt='fish friends cover image'></img>
            </div>
            <div className={styles.descriptions}>
                <ProjectTitle
                    title='Tree Roots'
                    description='Tree Roots is an eco-friendly brand of root beer that is based in North America. They are planning on expanding into Europe and want to have an effective marketing plan to help increase the success of their expansion.'
                    percentage={100}
                    variant='secondary'
                    className={styles.project_title}
                />

                <DescriptionBox
                    title='Desciption'
                    description='SWOT Analysis - Get an overview of the business
Competitive Analysis - Understand the European market
Document Presentation - The document should be presentable to anyone in the company'
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
                <div title='Analyze the Business'>
                    <TaskList
                        Tasks={[
                            "Analyze the business based on the document [Tree-Roots_Document.txt] ",
                        ]}
                    />
                </div>
                <div title='Research the Market'>
                    <TaskList
                        Tasks={[
                            "Do research on the European beverages market",
                            "can either be made with paper or with software ",
                            "Takes notes on any word processing software, making sure to keep track of any sources",
                        ]}
                    />
                </div>
                <div title='Learn About the Industry'>
                    <TaskList
                        Tasks={[
                            "Watch documentaries or read credible sources of information on the European beverages industry ",
                            "Takes notes on any word processing software, making sure to keep track of any sources",
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
