"use client";
import Styles from "@/app/page.module.css";
import Navbar from "@/app/_ui/navbar/navbar";
import ProjectCard from "./_ui/Project_card/Project_card";
import Button from "./_ui/Button/Button";
import DatePicker from "./_ui/Date_PopUp/Date_PopUp";
import DateCard from "./_ui/Date_Card/Date_Card";
import CreateProject from "./_ui/Create_Project_Button/Create_Project_Button";
import DescriptionBox from "./_ui/Description_Box/Description_Box";
import Searchbar from "./_ui/Search_Bar/Search_Bar";
import Headingbar from "./_ui/Heading_Bar/Heading_Bar";
import NotificationBox from "./_ui/Notification_Box/Notification_Box";
import ProgressBar from "./_ui/Progress_Bar/Progress_Bar";
import SingleInput from "./_ui/Input_Box/Input_Box";
import Accordion from "./_ui/Task_Dropdown/Task_Dropdown";
import TaskDropDown from "./_ui/Task_Dropdown/Task_Dropdown";

export default function Home() {
    return (
        <div className={Styles.container}>
            <Headingbar
                heading='Heading'
                type='navigation'
            />
            <Headingbar
                heading='Heading'
                type='pagination'
            />
            <Headingbar
                heading='Heading'
                type='search'
            />
            <Headingbar
                heading='Heading'
                type='heading'
            />
            <TaskDropDown
                sections={[
                    {
                        index: 1,
                        title: "Task One",
                        items: ["Step A", "Step B", "Step C"],
                    },
                    {
                        index: 2,
                        title: "Task Two",
                        items: ["Step X", "Step Y"],
                    },
                ]}
            />
            <ProgressBar CompletionAmount={100} />
            <SingleInput
                inputName='Name'
                placeholder='Placeholder'
            />
            <NotificationBox
                type='primary'
                notificationHeading='Heading'
                notificationBody='some text to describe notification'
                image='mosaic-favicon'
                time='now'
            />
            <NotificationBox
                type='secondary'
                notificationHeading='Heading'
                notificationBody='some text to describe notification'
                image='mosaic-favicon'
                time='now'
            />
            <Searchbar type='primary' />
            <Searchbar
                type='secondary'
                inputView='invisible'
            />

            <CreateProject />
            <DescriptionBox
                title='Title goes here'
                description='This contains some sort of description'
                useCase='primary'
            />
            <DescriptionBox
                title='Title goes here'
                description='This contains some sort of description'
                useCase='secondary'
            />
            <DescriptionBox
                title='Title goes here'
                description='This contains some sort of description'
                useCase='conditions'
            />
            <DateCard />
            <Navbar />
        </div>
    );
}
