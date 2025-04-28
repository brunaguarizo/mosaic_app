"use client";
import { useRouter } from "next/navigation";
import styles from "./StepFour.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import Button from "@/app/_ui/Button/Button";

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
                <svg
                    className={styles.illustration}
                    width='361'
                    height='460'
                    viewBox='0 0 361 460'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'>
                    <rect
                        width='361'
                        height='460'
                        fill='url(#pattern0_793_4549)'
                    />
                    <defs>
                        <pattern
                            id='pattern0_793_4549'
                            patternContentUnits='objectBoundingBox'
                            width='1'
                            height='1'>
                            <use
                                xlinkHref='#image0_793_4549'
                                transform='matrix(0.0019305 0 0 0.00151502 0 0.0538253)'
                            />
                        </pattern>
                        <image
                            id='image0_793_4549'
                            width='518'
                            height='589'
                            xlinkHref='/onboarding/Image_04.png'
                        />
                    </defs>
                </svg>
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
