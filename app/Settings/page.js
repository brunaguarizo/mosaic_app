"use client";

import styles from "./Settings.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "../_ui/Heading_Bar/Heading_Bar";
import UserInfo from "../_ui/User_Info/User_Info";
import SettingsOptions from "../_ui/Settings_Options/Settings_Options";
import LogOut from "../_ui/LogOut/LogOut";
import Navbar from "../_ui/navbar/navbar";
export default function Settings() {
    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            {/* Heading Bar */}
            <Headingbar
                type='navigation'
                heading='Settings'
            />
            <div className={styles.content}>
                {/* User Info */}
                <UserInfo />
                {/* Settings Options */}
                <SettingsOptions />
                {/* Log Out  */}
                <LogOut />
            </div>
            {/* Nav Bar */}
            <Navbar />
        </div>
    );
}
