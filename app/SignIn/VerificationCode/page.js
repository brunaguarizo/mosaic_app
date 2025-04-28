"use client";
import { useRouter } from "next/navigation";
import styles from "./VerificationCode.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import CodeBox from "@/app/_ui/Code_Box/Code_Box";
import Button from "@/app/_ui/Button/Button";
import InfoBanner from "@/app/_ui/Info_Banner/Info_Banner";

export default function SignIn() {
    const router = useRouter();
    const handleSubmit = () => {
        router.replace("/");
    };
    const handleResend = () => {
        router.replace("/");
    };
    const handleChange = () => {
        router.replace("/");
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
            />
            {/* add the path to the submit button */}

            <div classNames={styles.links}>
                <InfoBanner linkText={"Resend Code"} />
                {/* add the path to the resend popup button */}
                <InfoBanner linkText={"Change Email"} />
                {/* add the path to the change email popup button */}
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
        </div>
    );
}
