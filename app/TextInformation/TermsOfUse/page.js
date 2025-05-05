import styles from "@/app/TextInformation/TextInformation.module.css"
import DescriptionBox from "@/app/_ui/Description_Box/Description_Box"; 
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";


export default function TermsOfUse() {
    return (
        <div className={styles.container}>
             {/* Status Bar */}
             <StatusBar />
             <Headingbar heading="Terms Of Use" type="navigation"/>
             <div>
             Review the guidelines and conditions for using Mosaic. Help keep Mosaic a safe, creative space for everyone
             </div>
           <DescriptionBox description="By accessing or using Mosaic, you agree to be bound by the following terms and conditions. You must comply with all applicable laws when using this site, and you are solely responsible for any content or data you upload. Mosaic retains all intellectual property rights to the platform’s design, code, and proprietary features. Any unauthorized use, reproduction, or redistribution of Mosaic’s materials is strictly prohibited. While we strive to keep our services secure and functional, Mosaic assumes no liability for interruptions, data loss, or third-party breaches. We reserve the right to modify or update these terms at any time, and your continued use of Mosaic signifies acceptance of any changes. If you do not agree with these terms, you may not access or otherwise use Mosaic’s services.  Furthermore, you acknowledge that any user-generated content, including but not limited to text, images, and code, reflects the views of the individual user and not Mosaic. We do not actively monitor user submissions; however, we reserve the right to remove or edit content that violates applicable laws or our community guidelines. Mosaic may offer integrations with external platforms or services, and your use of such integrations is subject to the respective third-party terms. In the event of a dispute arising from your use of Mosaic, you agree to attempt an informal resolution before pursuing any legal remedies. If you do not agree with these terms, or any future modifications, you must discontinue using Mosaic immediately." useCase="conditions"/>
        </div>
    );
}
