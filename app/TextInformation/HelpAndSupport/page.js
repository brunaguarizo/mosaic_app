import styles from "@/app/TextInformation/TextInformation.module.css";
import DescriptionBox from "@/app/_ui/Description_Box/Description_Box";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Headingbar from "@/app/_ui/Heading_Bar/Heading_Bar";

export default function HelpAndSupport() {
    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />

            <Headingbar
                heading='Help & Support'
                type='navigation'
            />

            <div>
                We’re here to support you through your journey. How can we help?
            </div>

            <DescriptionBox
                icon={
                    <svg
                        width='22'
                        height='23'
                        viewBox='0 0 22 23'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <mask
                            id='mask0_793_3831'
                            style={{ maskType: "alpha" }}
                            maskUnits='userSpaceOnUse'
                            x='0'
                            y='0'
                            width='22'
                            height='23'>
                            <rect
                                y='0.333252'
                                width='22'
                                height='22'
                                fill='#D9D9D9'
                            />
                        </mask>
                        <g mask='url(#mask0_793_3831)'>
                            <path
                                d='M18.2875 19.5833C16.3778 19.5833 14.491 19.1669 12.6271 18.3343C10.7632 17.5017 9.06736 16.3214 7.53958 14.7937C6.01181 13.2659 4.8316 11.5701 3.99896 9.70617C3.16632 7.84228 2.75 5.95547 2.75 4.04575C2.75 3.77075 2.84167 3.54159 3.025 3.35825C3.20833 3.17492 3.4375 3.08325 3.7125 3.08325H7.425C7.63889 3.08325 7.82986 3.15582 7.99792 3.30096C8.16597 3.4461 8.26528 3.61797 8.29583 3.81659L8.89167 7.02492C8.92222 7.26936 8.91458 7.47561 8.86875 7.64367C8.82292 7.81172 8.73889 7.95686 8.61667 8.07909L6.39375 10.3249C6.69931 10.8902 7.06215 11.4364 7.48229 11.9635C7.90243 12.4905 8.36458 12.9985 8.86875 13.4874C9.34236 13.961 9.83889 14.4003 10.3583 14.8051C10.8778 15.21 11.4278 15.5805 12.0083 15.9166L14.1625 13.7624C14.3 13.6249 14.4795 13.5218 14.701 13.453C14.9226 13.3843 15.1403 13.3652 15.3542 13.3958L18.5167 14.0374C18.7306 14.0985 18.9062 14.2093 19.0438 14.3697C19.1812 14.5301 19.25 14.7096 19.25 14.9083V18.6208C19.25 18.8958 19.1583 19.1249 18.975 19.3083C18.7917 19.4916 18.5625 19.5833 18.2875 19.5833ZM5.52292 8.58325L7.03542 7.07075L6.64583 4.91659H4.60625C4.68264 5.54297 4.78958 6.16172 4.92708 6.77284C5.06458 7.38395 5.26319 7.98742 5.52292 8.58325ZM13.7271 16.7874C14.3229 17.0471 14.9302 17.2534 15.549 17.4062C16.1677 17.5589 16.7903 17.6583 17.4167 17.7041V15.6874L15.2625 15.252L13.7271 16.7874Z'
                                fill='#141414'
                            />
                        </g>
                    </svg>
                }
                title='Call Us'
                description={
                    "Call us directly for quick \n and professional support."
                }
                subtitle='International:'
                description2='+1 800-472-2390'
                useCase='conditions'
            />

            <DescriptionBox
                title='Email Us'
                description={"Reach out; we’ll respond \n within 24 hours."}
                subtitle='Our Email:'
                description2='contact@mosaic.com'
                useCase='conditions'
            />

            <DescriptionBox
                title='Quick Fixes'
                description={
                    "Try these easy troubleshooting tips! \n \n 1. Close & Reopen Mosaic \n 2. Check Your Internet Connection \n 3. Clear Browser/App Cache \n 4. Restart Your Device"
                }
                useCase='conditions'
            />
        </div>
    );
}
