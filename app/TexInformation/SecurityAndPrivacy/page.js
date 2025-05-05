import styles from "@/app/TexInformation/TextInformation.module.css"
import DescriptionBox from "@/app/_ui/Description_Box/Description_Box";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";




export default function SecurityAndPrivacy() {
   return (
       <div className={styles.container}>


            {/* Status Bar */}
            <StatusBar />


            <Headingbar heading="Security & Privacy" type="navigation"/>


            <div>
           Learn how Mosaic protects your information and what measures we take to keep your data safe.
            </div>


          <DescriptionBox title="Our Commitment to Privacy"
          description="Mosaic is built on the principle that your data belongs to you. We collect only the information necessary to provide and improve our services, and we never sell your details to third parties. From the moment you sign up, we make sure every piece of data you share is handled responsibly, respecting your right to confidentiality."
          useCase="conditions"/>
         
          <DescriptionBox title="Security Measures in Place"
          description="To keep your information safe, we use advanced encryption protocols whenever data is transmitted or stored on our servers. Mosaic also conducts regular security assessments to identify potential vulnerabilities and quickly address them. Our goal is to ensure that your interactions on Mosaic remain private, reliable, and fully under your control."
          useCase="conditions"/>
         
       </div>
   );
}
