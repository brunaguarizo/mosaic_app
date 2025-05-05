import styles from "@/app/TexInformation/TextInformation.module.css"
import DescriptionBox from "@/app/_ui/Description_Box/Description_Box";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";




export default function HelpAndSupport() {
   return (
       <div className={styles.container}>


            {/* Status Bar */}
            <StatusBar />


            <Headingbar heading="Help & Support" type="navigation"/>


            <div>
            We’re here to support you through your journey. How can we help?
            </div>


          <DescriptionBox title="Call Us"
          description="Call us directly for quick and professional support."
          useCase="conditions"/>
         
          <DescriptionBox title="Email Us"
          description="Reach out; we’ll respond within 24 hours."
          useCase="conditions"/>
         
          <DescriptionBox title="Quick Fixes"
          description="Try these easy troubleshooting tips!"
          useCase="conditions"/>
       </div>
   );
}


