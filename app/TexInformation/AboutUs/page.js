
import DescriptionBox from "@/app/_ui/Description_Box/Description_Box"; 
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";
import styles from "@/app/TexInformation/TextInformation.module.css"

export default function AboutUs() {
    return (
        <div className={styles.container}>

             {/* Status Bar */}
             <StatusBar />

             <Headingbar heading="About Us" type="navigation"/>

             <div>
            Meet the team behind Mosaic!
             </div>

           <DescriptionBox title="The Roots"
           description="Mosaic was born out of a simple observation: talented students and aspiring creatives often struggle to build authentic portfolio pieces without real-world briefs. Our founding team saw the need for a platform that could generate realistic, scenario-based challenges on demand. That initial spark led to the creation of Mosaic: an all-in-one environment where users can explore, practice, and refine."
           useCase="conditions"/>
           
           <DescriptionBox title="Our Purpose"
           description="At Mosaic, we believe that hands-on practical projects are the keys to unlocking skill. That’s why we focus on bridging the gap between theory and real-world application. Our AI generator, structured workflows, and collaborative features empower learners and professionals alike to push boundaries, discover new ideas, and assemble a mosaic of experience—one project at a time."
           useCase="conditions"/>
           
        </div>
    );
}