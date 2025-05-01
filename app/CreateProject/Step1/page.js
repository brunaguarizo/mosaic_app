"use client";
import { useRouter } from "next/navigation";
import styles from "./Step1.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import ProgressBar from "@/app/_ui/Progress_Bar/Progress_Bar";
import SingleInput from "@/app/_ui/Input_Box/Input_Box";
import RadioItemList from "@/app/_ui/Radio_Item_List/Radio_Item_List";
import Button from "@/app/_ui/Button/Button";
import Navbar from "@/app/_ui/navbar/navbar";
import Image from "next/image";

export default function ProjectName() {
    const router = useRouter();
    const handleNext = () => {
        router.replace("/CreateProject/Step2");
    };

    const options = [
        "Graphic Design",
        "Marketing",
        "UX/UI",
        "Frontend",
        "Backend",
    ];

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            {/* heading */}
            <Headingbar
                type='navigation'
                pagination='2/10'
            />
            {/* progress */}
            <ProgressBar CompletionAmount={10} />
            {/* Image */}
            <img
                className={styles.image}
                src='/createproject/image_03.png'
                quality={100}
                width={361}
                height={460}
                alt='Graphics'
            />

            {/* Content */}
            <div className={styles.content}>
                <p className={styles.title}>What is this project for?</p>
                <RadioItemList OptionTextArray={options} />{" "}
            </div>

            {/* Button */}
            <Button
                type='primary'
                size='large'
                value='Next'
                onClick={handleNext}
            />

            <div className={styles.nav}>
                <Navbar />
            </div>
        </div>
    );
}
