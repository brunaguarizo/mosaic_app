"use client";
import { useRouter } from "next/navigation";
import styles from "./Intro.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import Button from "@/app/_ui/Button/Button";
import Navbar from "@/app/_ui/navbar/navbar";
import Image from "next/image";

export default function CreateProject() {
    const router = useRouter();
    const handleNext = () => {
        router.replace("/CreateProject/Name");
    };
    const handleCancel = () => {
        router.replace("/Dashboard");
    };

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            {/* heading */}
            <Headingbar
                heading={"Create a New Project"}
                type={"navigation"}
            />
            {/* Image */}
            <img
                className={styles.image}
                src='/createproject/image_01.png'
                quality={100}
                width={361}
                height={460}
                alt='Graphics'
            />

            {/* Content */}
            <p className={styles.description}>
                Here you can create a new project for a UX/UI, Graphic Design,
                Marketing or Development portfolio. Click the start button to
                begin the questionnaire to give you a unique, customized
                scenario to fit you needs.{" "}
            </p>

            {/* Button */}
            <Button
                type='primary'
                size='large'
                value='Create Now'
                onClick={handleNext}
            />
            <Button
                type='secondary'
                size='large'
                value='Cancel'
                onClick={handleCancel}
            />

            <div className={styles.nav_bar}>
                <Navbar />
            </div>
        </div>
    );
}
