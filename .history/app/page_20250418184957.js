import Navbar from "@/app/_ui/navbar/navbar";
import ProjectCard from "./_ui/Project_card/Project_card";
import Button from "./_ui/Button/Button";
import DatePicker from "./_ui/Date_PopUp/Date_PopUp";
import DateCard from "./_ui/Date_Card/Date_Card";
import CreateProject from "./_ui/Create_Project_Button/Create_Project_Button";
import DescriptionBox from "./_ui/Description_Box/Description_Box";

export default function Home() {
    return (
        <div>
            <CreateProject />
            <DescriptionBox
                title='Title goes here'
                description='This contains some sort of description'
                useCase='primary'
            />
            <DateCard />
        </div>
    );
}
