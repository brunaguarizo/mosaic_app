"use client";
import { useRouter } from "next/navigation";
import styles from "./StepFour.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Button from "@/app/_ui/Button/Button";
import Image from "next/image";

export default function StepOne() {
    const router = useRouter();
    const handleNext = () => {
        router.replace("/SignIn/SignIn");
    };
    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            <div className={styles.spacer}></div>

            {/* Illustration */}
            <div className={styles.illustrationWrapper}>
                <Image
                    src='/onboarding/Image_04.png'
                    quality={100}
                    unoptimized={true}
                    width={361}
                    height={460}
                    alt='Graphics'
                />
            </div>

            {/* Progress Dots */}
            <div className={styles.dots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot + " " + styles.active}></span>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <h1 className={styles.title}>Let&apos;s make your Mosaic!</h1>
                <p className={styles.text}>
                    Let&apos;s show the world what you can do; let&apos;s show
                    the world your Mosaic.
                </p>
            </div>

            {/* Start Button */}
            <Button
                type='primary'
                size='large'
                value="Let's go!"
                onClick={handleNext}
            />
        </div>
    );
}
