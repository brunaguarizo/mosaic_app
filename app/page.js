"use client";
import Styles from "@/app/page.module.css";
import Navbar from "@/app/_ui/navbar/navbar";
import ProjectCard from "./_ui/Project_card/Project_card";
import Button from "./_ui/Button/Button";
import DatePicker from "./_ui/Date_PopUp/Date_PopUp";
import DateCard from "./_ui/Date_Card/Date_Card";
import CreateProject from "./_ui/Create_Project_Button/Create_Project_Button";
import DescriptionBox from "./_ui/Description_Box/Description_Box";
import Searchbar from "./_ui/Search_Bar/Search_Bar";
import Headingbar from "./_ui/Heading_Bar/Heading_Bar";
import NotificationBox from "./_ui/Notification_Box/Notification_Box";
import ProgressBar from "./_ui/Progress_Bar/Progress_Bar";
import SingleInput from "./_ui/Input_Box/Input_Box";
import TaskDropDown from "./_ui/Task_Dropdown/Task_Dropdown";
import LinkButton from "./_ui/Link_Button/Link_Button";
import AvatarPicker from "./_ui/Profile_Avatar_PopUp/Profile_Avatar_PopUp";
import ProfileCover from "./_ui/Profile_Cover_Box/Profile_Cover_Box";
import PopUp from "./_ui/PopUp/PopUp";
import InterestChip from "./_ui/Interest_Chip/Interest_Chip";

export default function Home() {
    return (
        <div className={Styles.container}>
            <InterestChip
                interest='design'
                type='icon'
            />
            <InterestChip
                interest='marketing'
                type='icon'
            />
            <InterestChip
                interest='frontend'
                type='icon'
            />
        </div>
    );
}
