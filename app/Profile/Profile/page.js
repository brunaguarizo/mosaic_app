"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import styles from "@/app/Profile/CreateProfile/CreateProfile.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import popupStyles from "@/app/_ui/PopUp/PopUp.module.css";
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
        router.push("/Profile/EditProfile");
    };

    // if (!profile) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            <Headingbar
                heading='Profile'
                type='settings'
            />
            <Profile_Cover_Box
                type='secondary'
                onClick={handleEditProfile}
                avatarSrc={profile?.avatar || "/Avatars/Yellow_Avatar.svg"}
            />
            <SingleInput
                type='secondary'
                placeholder={profile?.firstName || "Justin"}
                defaultValue={profile?.firstName || "Justin"}
                readOnly
            />
            <SingleInput
                type='secondary'
                placeholder={profile?.lastName || "Pham"}
                defaultValue={profile?.lastName || "Pham"}
                readOnly
            />
            <SingleInput
                type='secondary'
                placeholder={profile?.username || "justinpham"}
                defaultValue={profile?.username || "justinpham"}
                readOnly
            />
            <div className={styles.content_box}>
                <div className={styles.content_info}>
                    <h1 className={styles.content_header}>Interests</h1>
                    <p className={styles.content_description}>
                        Your main interests
                    </p>
                </div>
                <div className={styles.chips_container}>
                    <div className={styles.Three_column}>
                        {profile?.interests.map((interest, index) => (
                            <InterestChip
                                key={index}
                                type='icon'
                                interest={interest}
                                isSelected={true}
                            />
                        )) || (
                            <InterestChip
                                type='icon'
                                interest='design'
                                isSelected={true}
                            />
                        )}
                    </div>
                </div>
            </div>
            <LongInput
                placeholder={
                    profile?.aboutMe ||
                    "I am a 24 year old designer from Surrey, BC."
                }
                defaultValue={profile?.aboutMe}
                readOnly
            />
            <SingleInput
                inputName='Location'
                placeholder={profile?.location || "Surrey, BC, Canada"}
                defaultValue={profile?.location || "Surrey, BC, Canada"}
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
