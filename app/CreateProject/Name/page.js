"use client";
import { useRouter } from "next/navigation";
import styles from "./Name.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import ProgressBar from "@/app/_ui/Progress_Bar/Progress_Bar";
import SingleInput from "@/app/_ui/Input_Box/Input_Box";
import Button from "@/app/_ui/Button/Button";
import Navbar from "@/app/_ui/navbar/navbar";
import Image from "next/image";

export default function ProjectName() {
    const router = useRouter();
    const handleNext = () => {
        router.replace("/CreateProject/Step1");
    };

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            {/* heading */}
            <Headingbar
                type='navigation'
                pagination='0/10'
            />
            {/* progress */}
            <ProgressBar CompletionAmount={0} />
            {/* Image */}
            <img
                className={styles.image}
                src='/createproject/image_02.png'
                quality={100}
                width={361}
                height={460}
                alt='Graphics'
            />

            {/* Content */}
            <div className={styles.content}>
                <p className={styles.title}>Project Name</p>
                <p className={styles.description}>
                    This will not be the name of the final scenario, but will be
                    used as a placeholder name until you finish the
                    questionnaire and have a scenario.
                </p>
            </div>

            {/* Button */}
            <SingleInput
                type='secondary'
                placeholder='Project Name'
            />
            <Button
                type='primary'
                size='large'
                value='Next'
                onClick={handleNext}
            />

            <div className={styles.nav_bar}>
                <Navbar />
            </div>
        </div>
    );
}
