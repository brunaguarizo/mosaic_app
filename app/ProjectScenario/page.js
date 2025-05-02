"use client";
import { useRouter } from "next/navigation";
import styles from "./ProjectScenario.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import ProgressBar from "@/app/_ui/Progress_Bar/Progress_Bar";
import DescriptionBox from "../_ui/Description_Box/Description_Box";
import Button from "@/app/_ui/Button/Button";
import Navbar from "@/app/_ui/navbar/navbar";

import { useState } from "react";
import PopUp from "@/app/_ui/PopUp/PopUp";

export default function ProjectName() {
    const router = useRouter();
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const handleNext = () => {
        router.replace("/");
    };
    const handleEdit = () => {
        router.replace("/CreateProject/Step1");
    };
    const handleDelete = () => {
        setShowDeletePopup(true);
    };
    const handleConfirmDelete = () => {
        setShowDeletePopup(false);
        router.replace("/Dashboard");
    };

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            {/* heading */}
            <Headingbar
                type='navigation'
                pagination='10/10'
            />
            {/* progress */}
            <ProgressBar CompletionAmount={100} />
            {/* Content */}
            <DescriptionBox
                title='UX/UI Design Portfolio Project Scenario'
                description={
                    "Brand Name: WanderWorks \n Industry: Eco-Friendly Travel Agency"
                }
                useCase='secondary'
            />
            <DescriptionBox
                title='Target Audience'
                description={
                    "- Young professionals (ages 25–35) \n - Eco-conscious travelers who are interested in exploring the world without harming the environment"
                }
            />
            <DescriptionBox
                title='Brand Values'
                description={
                    "- Sustainability  \n - Adventure \n- Empowerment through travel  \n - Community building \n- Education on environmental conservation"
                }
            />

            <DescriptionBox
                title='Topic'
                description={
                    "- You will be redesigning their visual brand identity to make WanderWorks appear more trendy and modern to their target audience."
                }
            />

            <DescriptionBox
                title='Client Requests'
                description={
                    "- Use lots of vibrant colours \n - Animal imagery usage would be preferred \n - They would like it if you didn’t just use greens to display that they are an eco-friendly brand"
                }
            />

            <DescriptionBox
                title='Goals'
                description={
                    "- Modernize WanderWorks brand identity  \n - Keep their brand feeling eco-friendly but not in a stereotypical way  \n - Follow accessibility practices so that their brand identity can be applied everywhere and resonate with everyone"
                }
            />

            {/* Button */}
            <Button
                type='primary'
                size='large'
                value='Save Project'
                onClick={handleNext}
            />
            <div className={styles.buttons}>
                <Button
                    type='secondary'
                    size='large'
                    value='Delete'
                    onClick={handleDelete}
                />
                <Button
                    type='secondary'
                    size='large'
                    value='Edit Answers'
                    onClick={handleEdit}
                />
            </div>

            <div className={styles.nav}>
                <Navbar />
            </div>

            {/* Delete Confirmation Popup */}
            {showDeletePopup && (
                <PopUp
                    onClose={() => {
                        setShowDeletePopup(false);
                        router.replace("/Dashboard");
                    }}
                    buttonText='Delete'
                    buttonType='warning'
                    secondaryButtonText='Undo'
                    secondaryButtonType='terciary'
                    onSecondaryButtonClick={() => setShowDeletePopup(false)}>
                    <h2 className={styles.popup_header}>
                        Do you wish to delete this project permanently?
                    </h2>
                </PopUp>
            )}
        </div>
    );
}
