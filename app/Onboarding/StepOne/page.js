"use client";
import styles from "./StepOne.module.css";
import StatusBar from "@/app/_ui/StatusBar/StatusBar";
import { useRouter } from "next/navigation";

export default function StepOne() {
    const router = useRouter();
    const handleNext = () => {
        router.replace("/Onboarding/StepTwo");
    };
    const handleSkip = () => {
        router.replace("/SignIn/SignIn");
    };

    return (
        <div className={styles.container}>
            {/* Status Bar */}
            <StatusBar />
            <button
                className={styles.skipButton}
                onClick={handleSkip}>
                Skip
                <svg
                    className={styles.icon}
                    width='13'
                    height='15'
                    viewBox='0 0 13 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M4.59999 7.5L0.724994 2.075C0.491661 1.74167 0.462494 1.39583 0.637494 1.0375C0.812494 0.679167 1.10833 0.5 1.52499 0.5C1.69166 0.5 1.84999 0.5375 1.99999 0.6125C2.14999 0.6875 2.26666 0.791667 2.34999 0.925L7.04999 7.5L2.34999 14.075C2.26666 14.2083 2.14999 14.3125 1.99999 14.3875C1.84999 14.4625 1.69166 14.5 1.52499 14.5C1.12499 14.5 0.833327 14.3208 0.649994 13.9625C0.466661 13.6042 0.491661 13.2583 0.724994 12.925L4.59999 7.5ZM10.55 7.5L6.67499 2.075C6.44166 1.74167 6.41249 1.39583 6.58749 1.0375C6.76249 0.679167 7.05833 0.5 7.47499 0.5C7.64166 0.5 7.79999 0.5375 7.94999 0.6125C8.09999 0.6875 8.21666 0.791667 8.29999 0.925L13 7.5L8.29999 14.075C8.21666 14.2083 8.09999 14.3125 7.94999 14.3875C7.79999 14.4625 7.64166 14.5 7.47499 14.5C7.07499 14.5 6.78333 14.3208 6.59999 13.9625C6.41666 13.6042 6.44166 13.2583 6.67499 12.925L10.55 7.5Z'
                        fill='#2B5FFC'
                    />
                </svg>
            </button>

            {/* Illustration */}
            <div className={styles.illustration}>
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
                                xlinkHref='/onboarding/Image_01.png'
                            />
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Progress Dots */}
            <div className={styles.dots}>
                <span className={styles.dot + " " + styles.active}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Build your portfolio,
                    <br />
                    step by step
                </h1>
                <p className={styles.text}>
                    Easily create a professional portfolio with our guided
                    process. Follow clear steps to showcase your skills,
                    projects, and experience effortlessly.
                </p>
            </div>

            {/* Arrows */}
            <button
                className={styles.nextButton}
                onClick={handleNext}>
                <div style={{ width: "45px" }}></div>
                <svg
                    className={styles.right}
                    width='44'
                    height='52'
                    viewBox='0 0 44 52'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M17.2929 35.2929C17.6834 35.6834 18.3166 35.6834 18.7071 35.2929L27.2929 26.7071C27.6834 26.3166 27.6834 25.6834 27.2929 25.2929L18.7071 16.7071C18.3166 16.3166 17.6834 16.3166 17.2929 16.7071L16.9321 17.0679C16.5416 17.4584 16.5416 18.0916 16.9321 18.4821L24.45 26L16.9321 33.5179C16.5416 33.9084 16.5416 34.5416 16.9321 34.9321L17.2929 35.2929Z'
                        fill='currentColor'
                    />
                </svg>
            </button>
        </div>
    );
}
