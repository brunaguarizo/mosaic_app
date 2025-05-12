"use client";
import { useRouter } from "next/navigation";
import styles from "./Step7.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import ProgressBar from "@/app/_ui/Progress_Bar/Progress_Bar";
import SingleInput from "@/app/_ui/Input_Box/Input_Box";
import RadioItemList from "@/app/_ui/Radio_Item_List/Radio_Item_List";
import Button from "@/app/_ui/Button/Button";
import Navbar from "@/app/_ui/navbar/navbar";
import Image from "next/image";
import { useState } from "react";
import PopUp from "@/app/_ui/PopUp/PopUp";

export default function ProjectName() {
    const router = useRouter();
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const handleNext = () => {
        router.replace("/CreateProject/Step8");
    };
    const handleLater = () => {
        router.replace("/Dashboard/DashboardRegular");
    };
    const handleDelete = () => {
        setShowDeletePopup(true);
    };
    const handleConfirmDelete = () => {
        setShowDeletePopup(false);
        router.replace("/Dashboard/DashboardRegular");
    };

    const options = ["Health", "Technology", "Education", "E-Commerce", "None"];

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            {/* heading */}
            <Headingbar
                type='navigation'
                pagination='7/10'
            />
            <div className={styles.content}>
                {/* progress */}
                <ProgressBar CompletionAmount={70} />
                {/* Image */}
                <img
                    className={styles.image}
                    src='/createproject/image_09.png'
                    quality={100}
                    width={361}
                    height={460}
                    alt='Graphics'
                />

                {/* Content */}

                <p className={styles.title}>
                    How much time can you dedicate to this project per week?
                </p>
                <RadioItemList OptionTextArray={options} />

                {/* Button */}
                <Button
                    type='primary'
                    size='large'
                    value='Next'
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
                        value='Continue Later'
                        onClick={handleLater}
                    />
                </div>
            </div>

            <div className={styles.nav_bar}>
                <Navbar />
            </div>

            {/* Delete Confirmation Popup */}
            {showDeletePopup && (
                <PopUp
                    onClose={() => {
                        setShowDeletePopup(false);
                        router.replace("/Dashboard/DashboardRegular");
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
