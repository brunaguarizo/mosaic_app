"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./VerificationCode.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import CodeBox from "@/app/_ui/Code_Box/Code_Box";
import Button from "@/app/_ui/Button/Button";
import InfoBanner from "@/app/_ui/Info_Banner/Info_Banner";
import PopUp from "@/app/_ui/PopUp/PopUp";
import popupStyles from "@/app/_ui/PopUp/PopUp.module.css";

export default function SignIn() {
    const router = useRouter();
    const [showResendPopup, setShowResendPopup] = useState(false);

    const handleSubmit = () => {
        router.replace("/Profile/CreateProfile");
    };

    const handleResend = () => {
        setShowResendPopup(true);
    };

    const handleChange = () => {
        router.replace("/SignIn/SignIn");
    };

    const closeResendPopup = () => {
        setShowResendPopup(false);
    };

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />

            {/* Content */}
            <div className={styles.content}>
                <h1 className={styles.header}>Enter verification code</h1>
                <p className={styles.description}>
                    Please insert the code sent to your email.
                </p>
                <p className={styles.label}>*********oe@gmail.com</p>
            </div>

            <CodeBox />
            <Button
                type='primary'
                size='large'
                value='Submit'
                onClick={handleSubmit}
            />
            {/* add the path to the submit button */}

            <div className={styles.links}>
                <InfoBanner
                    linkText={"Resend Code"}
                    onClick={handleResend}
                />
                <InfoBanner
                    linkText={"Change Email"}
                    linkDirectory='/SignIn/SignIn'
                    onClick={handleChange}
                />
            </div>

            <div className={styles.terms}>
                <InfoBanner
                    prefix={"By signing up to Mosaic, you agree to our "}
                    linkText={"terms of use"}
                    suffix={
                        ", and to the collection of your personal information."
                    }
                />
                {/* add the path to the terms and conditions link */}
            </div>

            {/* Resend Code PopUp */}
            {showResendPopup && (
                <PopUp onClose={closeResendPopup}>
                    <h2 className={popupStyles.popup_header}>
                        New verification code sent
                    </h2>
                    <p className={popupStyles.popup_text}>
                        In a few minutes you will receive the verification code
                        in your email.
                    </p>
                </PopUp>
            )}
        </div>
    );
}
