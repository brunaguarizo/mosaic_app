"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SignIn.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import SingleInput from "@/app/_ui/Input_Box/Input_Box";
import Button from "@/app/_ui/Button/Button";
import InfoBanner from "@/app/_ui/Info_Banner/Info_Banner";
import PopUp from "@/app/_ui/PopUp/PopUp";
import popupStyles from "@/app/_ui/PopUp/PopUp.module.css";

export default function SignIn() {
    const router = useRouter();
    const [Email, setEmail] = useState("");
    const [showIncompleteProfilePopup, setShowIncompleteProfilePopup] =
        useState(false);
    const handleCode = () => {
        if (!Email) {
            setShowIncompleteProfilePopup(true);
            return;
        } else {
            router.replace("/SignIn/VerificationCode");
        }
    };
    const handleCloseIncompleteProfilePopup = () => {
        setShowIncompleteProfilePopup(false);
    };

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            {/* Logo */}
            <svg
                className={styles.logo}
                width='247'
                height='184'
                viewBox='0 0 247 184'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M78.7774 6.19512C82.8019 9.60922 84.8142 14.5834 84.8142 21.1403V51.0081H67.6081V24.6223C67.6081 19.2863 64.5557 16.754 60.3502 16.754C55.5569 16.754 52.2333 19.8968 52.2333 25.2327V51.0081H35.1175V24.6223C35.1175 19.6481 31.8843 16.754 27.611 16.754C23.0664 16.754 19.7427 19.7159 19.7427 25.2327V51.0081H2.62695V2.41925H19.4036V9.15702C22.1168 4.00195 28.3119 0.949601 34.507 1.04004C40.7022 1.13048 45.0659 3.75324 47.5304 8.72743C51.3741 3.57236 57.8406 1.04004 64.4879 1.04004C70.0726 1.04004 74.8885 2.78101 78.8226 6.19512H78.7774Z'
                    fill='#141414'
                />
                <path
                    d='M117.734 52.3873C109.776 52.3873 103.4 49.9454 98.4255 44.9712C93.5418 39.997 91.0773 33.9602 91.0773 26.725C91.0773 19.4898 93.5191 13.4529 98.4255 8.45611C103.4 3.48192 109.776 1.04004 117.734 1.04004C125.693 1.04004 132.069 3.48192 137.043 8.45611C142.018 13.4303 144.459 19.4672 144.459 26.725C144.459 33.9828 142.018 39.997 137.043 44.9712C132.069 49.9454 125.693 52.3873 117.734 52.3873ZM127.344 26.6345C127.344 21.2986 123.229 17.1157 117.734 17.1157C112.24 17.1157 108.216 21.2986 108.216 26.6345C108.216 32.2192 112.399 36.3342 117.734 36.3342C123.07 36.3342 127.344 32.2192 127.344 26.6345Z'
                    fill='#141414'
                />
                <path
                    d='M141.678 111.015L148.846 99.2126C154.34 102.966 159.405 104.888 163.949 104.888C166.821 104.888 168.313 104.096 168.313 102.627C168.313 101.926 167.612 101.315 166.12 100.795C164.718 100.275 155.99 97.743 154.069 96.7707C147.693 94.0575 144.55 89.5129 144.55 83.2274C144.55 78.5019 146.472 74.6582 150.315 71.7867C154.159 68.8926 159.224 67.423 165.6 67.423C172.496 67.423 178.781 69.4353 184.389 73.4598L177.402 84.9005C173.129 82.3682 169.104 81.0568 165.441 81.0568C162.909 81.0568 161.598 81.7577 161.598 83.0691C161.598 84.3805 163.09 85.3301 166.142 86.031C170.416 87.0032 174.169 88.292 177.493 89.9651C183.439 93.0175 185.7 96.7707 185.7 102.378C185.7 107.262 183.778 111.286 179.934 114.339C176.091 117.391 170.845 118.883 164.13 118.883C155.651 118.883 148.145 116.261 141.678 111.015Z'
                    fill='#141414'
                />
                <path
                    d='M227.528 68.8926H243.694V117.459H227.528V114.045C223.594 117.097 219.05 118.68 213.894 118.68C206.998 118.68 201.323 116.238 196.869 111.332C192.415 106.357 190.222 100.23 190.222 92.9948C190.222 85.7596 192.483 79.7228 196.937 74.9069C201.391 70.1135 207.066 67.649 213.894 67.649C219.23 67.649 223.775 69.2317 227.528 72.4424V68.87V68.8926ZM224.295 100.185C226.217 98.1725 227.167 95.8211 227.167 93.1079C227.167 90.3947 226.217 88.1337 224.295 86.2118C222.373 84.29 220.022 83.3178 217.218 83.3178C211.633 83.3178 207.338 87.7719 207.338 93.1079C207.338 95.8211 208.287 98.1725 210.209 100.185C212.131 102.107 214.482 103.056 217.195 103.056C219.909 103.056 222.351 102.107 224.272 100.185H224.295Z'
                    fill='#141414'
                />
                <path
                    d='M79.8398 182.779H62.6337V134.213H79.8398V182.779Z'
                    fill='#141414'
                />
                <path
                    d='M93.4511 176.742C88.6578 171.949 86.2837 165.822 86.2837 158.406C86.2837 150.989 88.6352 144.862 93.4511 140.159C98.2444 135.366 104.553 132.992 112.33 132.992C122.55 132.992 131.458 137.785 135.732 147.485L122.098 154.562C119.837 150.809 116.671 148.887 112.76 148.887C107.175 148.887 103.241 152.911 103.241 158.406C103.241 163.9 107.175 168.105 112.67 168.105C116.785 168.105 120.447 165.844 121.94 162.43L135.664 170.547C131.391 178.845 122.731 183.819 112.172 183.819C104.575 183.819 98.2896 181.468 93.4736 176.742H93.4511Z'
                    fill='#141414'
                />
                <path
                    d='M220.881 0H178.194C163.983 0 152.464 11.5198 152.464 25.7302C152.464 39.9405 163.983 51.4603 178.194 51.4603H220.881C235.092 51.4603 246.611 39.9405 246.611 25.7302C246.611 11.5198 235.092 0 220.881 0Z'
                    fill='#2B5FFC'
                />
                <path
                    d='M220.881 132.54H171.569C157.358 132.54 145.839 144.059 145.839 158.27C145.839 172.48 157.358 184 171.569 184H220.881C235.092 184 246.611 172.48 246.611 158.27C246.611 144.059 235.092 132.54 220.881 132.54Z'
                    fill='#00C14F'
                />
                <path
                    d='M25.9379 132.54H25.9154C11.8174 132.54 0.388672 143.968 0.388672 158.066V158.473C0.388672 172.571 11.8174 184 25.9154 184H25.9379C40.0359 184 51.4646 172.571 51.4646 158.473V158.066C51.4646 143.968 40.0359 132.54 25.9379 132.54Z'
                    fill='#FF5E09'
                />
                <path
                    d='M107.944 66.2246H26.1188C11.9085 66.2246 0.388672 77.7444 0.388672 91.9548C0.388672 106.165 11.9085 117.685 26.1188 117.685H107.944C122.155 117.685 133.674 106.165 133.674 91.9548C133.674 77.7444 122.155 66.2246 107.944 66.2246Z'
                    fill='#FFDA01'
                />
            </svg>
            {/* Content */}
            <h1 className={styles.header}>Sign Up or Log In</h1>
            <p className={styles.description}>
                To continue, please enter<br></br> your email.
            </p>
            <p className={styles.label}>
                You will be sent a verification code once<br></br> to be able to
                access your account.
            </p>
            {/* Input */}
            <SingleInput
                type='secondary'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />
            {/* Button */}
            <Button
                type='primary'
                size='large'
                value='Submit'
                onClick={handleCode}
            />
            {/* Incomplete profile data popup */}
            {showIncompleteProfilePopup && (
                <PopUp
                    onClose={handleCloseIncompleteProfilePopup}
                    buttonText='Ok'
                    buttonType='primary'>
                    <h2 className={popupStyles.popup_header}>
                        Please fill out all fields before submitting
                    </h2>
                </PopUp>
            )}
            <div className={styles.terms}>
                <InfoBanner
                    prefix={"By signing up to Mosaic, you agree to our "}
                    linkText={"terms of use"}
                    linkDirectory={"/TextInformation/TermsOfUse"}
                    suffix={
                        ", and to the collection of your personal information."
                    }
                />
            </div>
        </div>
    );
}
