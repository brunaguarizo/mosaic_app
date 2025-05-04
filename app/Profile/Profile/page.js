"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import styles from "@/app/Profile/CreateProfile/CreateProfile.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Profile_Cover_Box from "../../_ui/Profile_Cover_Box/Profile_Cover_Box";
import SingleInput from "../../_ui/Input_Box/Input_Box";
import InterestChip from "../../_ui/Interest_Chip/Interest_Chip";
import SocialMedia from "../../_ui/SocialMedia/SocialMedia";
import Button from "../../_ui/Button/Button";
import LongInput from "../../_ui/Long_Input_Box/Long_Input_Box";
import Headingbar from "../../_ui/Heading_Bar/Heading_Bar";
import Navbar from "../../_ui/navbar/navbar";

export default function Profile() {
    const router = useRouter();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const savedProfile = localStorage.getItem("userProfile");
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }
    }, []);

    const handleEditProfile = () => {
        router.push("/Profile/CreateProfile");
    };

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            <Headingbar
                heading='Profile'
                type='heading'
            />
            <Profile_Cover_Box
                type='secondary'
                username={profile.username}
                location={profile.location}
                avatarSrc={profile.avatar}
            />
            <SingleInput
                type='secondary'
                placeholder='First Name'
                defaultValue={profile.firstName}
                readOnly
            />
            <SingleInput
                type='secondary'
                placeholder='Last Name'
                defaultValue={profile.lastName}
                readOnly
            />
            <SingleInput
                type='secondary'
                placeholder='Username'
                defaultValue={profile.username}
                readOnly
            />
            <div className={styles.content_box}>
                <div className={styles.content_info}>
                    <h1 className={styles.content_header}>Interests</h1>
                    <p className={styles.content_description}>
                        Your selected interests
                    </p>
                </div>
                <div className={styles.chips_container}>
                    <div className={styles.Three_column}>
                        {profile.interests.map((interest, index) => (
                            <InterestChip
                                key={index}
                                type='icon'
                                interest={interest}
                                isSelected={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <LongInput
                placeholder='About me'
                defaultValue={profile.aboutMe}
                readOnly
            />
            <SingleInput
                inputName='Location'
                placeholder='Location'
                defaultValue={profile.location}
                readOnly
            />
            <div className={styles.social_media}>
                <SocialMedia />
            </div>
            <div className={styles.button_column}>
                <div className={styles.button}>
                    <Button
                        type='primary'
                        size='large'
                        value='Edit Profile'
                        onClick={handleEditProfile}
                    />
                </div>
            </div>
            <div className={styles.navigation_bar}>
                <Navbar />
            </div>
        </div>
    );
}
