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
import SettingsOptions from "./_ui/Settings_Options/Settings_Options";
import LogOut from "./_ui/LogOut/LogOut";
import SocialMedia from "./_ui/SocialMedia/SocialMedia";
import StatusBar from "./_ui/StatusBar/StatusBar";
import PortfolioCard from "./_ui/Portfolio_Card/Portfolio_Card";
import Tag from "./_ui/Tag/Tag";
import UserInfo from "./_ui/User_Info/User_Info";
import TaskList from "./_ui/Task_List/Task_List";
import RadioItemList from "./_ui/Radio_Item_List/Radio_Item_List";
import CheckBoxItem from "./_ui/Checkbox_Item_List/Checkbox_Item_List";
import CheckboxItemList from "./_ui/Checkbox_Item_List/Checkbox_Item_List";
import InfoBanner from "./_ui/Info_Banner/Info_Banner";
import CodeBox from "./_ui/Code_Box/Code_Box";

export default function Home() {
    return (
        <div className={Styles.container}>
            <UserInfo />

            <InfoBanner
                prefix='By signing up to Mosaic, you agree to our '
                linkText='terms of use'
                suffix=', and to the collection of your personal information.'
            />
         

        </div>
    );
}
