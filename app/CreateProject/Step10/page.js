"use client";
import { useRouter } from "next/navigation";
import styles from "./Step10.module.css";
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
        router.replace("/");
    };
    const handleLater = () => {
        router.replace("/Dashboard");
    };
    const handleDelete = () => {
        setShowDeletePopup(true);
    };
    const handleConfirmDelete = () => {
        setShowDeletePopup(false);
        router.replace("/Dashboard");
    };

    const options = [
        "Limited Creative Freedom",
        "Some Creative Freedom",
        "Full Creative Freedom",
    ];

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
            {/* Image */}
            <img
                className={styles.image}
                src='/createproject/image_12.png'
                quality={100}
                width={361}
                height={460}
                alt='Graphics'
            />

            {/* Content */}
            <div className={styles.content}>
                <p className={styles.title}>
                    Do you want limited creative freedom, or full creative
                    freedom?
                </p>
                <RadioItemList OptionTextArray={options} />
            </div>

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
