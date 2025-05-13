import React from "react";
import styles from "../Settings.module.css";
import StatusBarDark from "../../_ui/StatusBar/StatusBarDark";
import Headingbar from "../../_ui/Heading_Bar/Heading_Bar";
import UserInfo from "../../_ui/User_Info/User_Info";
import SettingsOptionsColorBlind from "../../_ui/Settings_Options/Settings_OptionsColorBlind";
import LogOutColorBlind from "../../_ui/LogOut/LogOutColorBlind";
import NavbarColorBlind from "../../_ui/navbar/navbarColorBlind";

export default function SettingsColorBlind() {
    return (
        <div className={styles.containerblind}>
            {/* Status Bar */}
            <StatusBarDark />
            {/* Heading Bar */}
            <Headingbar
                type='navigation'
                heading='Settings'
            />
            <div className={styles.content}>
                {/* User Info */}
                <UserInfo colorBlind />
                {/* Settings Options */}
                <SettingsOptionsColorBlind />
                {/* Log Out  */}
                <LogOutColorBlind />
            </div>
            {/* Nav Bar */}
            <NavbarColorBlind />
        </div>
    );
}
