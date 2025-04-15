import Navbar from "./_ui/Navbar/Navbar";
import ProjectCard from "./_ui/Project_card/Project_card";
import Button from "./_ui/Button/Button";

export default function Home() {
    return (<ProjectCard />
    <Button
    value='Primary Button'
    type='primary'
    onClick={handleWhinyClick}
/>

<Button
    value='Secondary Button'
    type='secondary'
    onClick={handleAngryClick}
/>

<Button
    value='Warning Button'
    type='warning'
    onClick={handleWarnClick}
/>
    <Navbar />);
}
