"use client";
import { useRouter } from "next/navigation";
import styles from "./CreateProfile.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Profile_Cover_Box from "../_ui/Profile_Cover_Box/Profile_Cover_Box";
import SingleInput from "../_ui/Input_Box/Input_Box";
import InterestChip from "../_ui/Interest_Chip/Interest_Chip";
import SocialMedia from "../_ui/SocialMedia/SocialMedia";
import Button from "../_ui/Button/Button";
import LongInput from "../_ui/Long_Input_Box/Long_Input_Box";

export default function StepOne() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            <Profile_Cover_Box type='secondary' />
            <SingleInput
                type='secondary'
                placeholder='First Name'
            />
            <SingleInput
                type='secondary'
                placeholder='Last Name'
            />
            <SingleInput
                type='secondary'
                placeholder='Username'
            />
            <div className={styles.content_box}>
                <div className={styles.content_info}>
                    <h1 className={styles.content_header}>Interests</h1>
                    <p className={styles.content_description}>
                        Select your main interests
                    </p>
                </div>

                <div className={styles.chips_container}>
                    <div className={styles.Three_column}>
                        <InterestChip
                            type='icon'
                            interest='design'
                        />
                        <InterestChip
                            type='icon'
                            interest='uxui'
                        />
                        <InterestChip
                            type='icon'
                            interest='marketing'
                        />
                    </div>
                    <div className={styles.Two_column}>
                        <InterestChip
                            type='icon'
                            interest='frontend'
                        />
                        <InterestChip
                            type='icon'
                            interest='backend'
                        />
                    </div>
                </div>
            </div>
            <LongInput placeholder='About me' />
            <SingleInput
                inputName='Location'
                placeholder='Location'
            />
            <div className={styles.social_media}>
                <SocialMedia />
            </div>
            <div className={styles.button_column}>
                <div className={styles.button}>
                    <Button
                        type='terciary'
                        size='large'
                        value='Save'
                        isDisabled={true}
                    />
                </div>
                <div className={styles.button}>
                    <Button
                        type='secondary'
                        size='large'
                        value='Cancel'
                    />
                </div>
            </div>
        </div>
    );
}
