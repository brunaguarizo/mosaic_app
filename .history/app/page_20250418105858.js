import Navbar from "./_ui/Navbar/Navbar";
import ProjectCard from "./_ui/Project_card/Project_card";
import Button from "./_ui/Button/Button";
import DatePicker from "./_ui/Date_PopUp/Date_PopUp";

export default function Home() {
    return (
        <div>
            <ProjectCard />

            <Button
                value='Primary Button'
                type='primary'
                //onClick={}
            />
            <DatePicker />

            <Button
                value='Secondary Button'
                type='secondary'
                //onClick={}
            />

            <Button
                value='Warning Button'
                type='warning'
                //onClick={}
            />
            <Navbar />
        </div>
    );
}
