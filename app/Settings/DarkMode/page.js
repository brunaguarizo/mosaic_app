import React from "react";
import styles from "../Settings.module.css";
import StatusBarDark from "../../_ui/StatusBar/StatusBarDark";
import Headingbar from "../../_ui/Heading_Bar/Heading_Bar";
import UserInfo from "../../_ui/User_Info/User_Info";
import SettingsOptionsDark from "../../_ui/Settings_Options/Settings_OptionsDark";
import LogOutDark from "../../_ui/LogOut/LogOutDark";
import NavbarDark from "../../_ui/navbar/navbarDark";

export default function SettingsDark() {
    return (
        <div className={styles.containerdark}>
            {/* Status Bar */}
            <StatusBarDark />
            {/* Heading Bar */}
            <Headingbar
                type='navigation'
                heading='Settings'
            />
            <div className={styles.content}>
                {/* User Info */}
                <UserInfo />
                {/* Settings Options */}
                <SettingsOptionsDark />
                {/* Log Out  */}
                <LogOutDark />
            </div>
            {/* Nav Bar */}
            <NavbarDark />
        </div>
    );
}
