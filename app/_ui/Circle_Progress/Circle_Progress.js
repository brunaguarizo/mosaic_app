"use client";
import { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./Circle_Progress.module.css";

export default function ProgressCircle({ percentage = 30, type }) {
    const [progress, setProgress] = useState(0);
    const IndicatorClasses = classNames(styles.progressCircleIndicator, {
        [styles.projectCardIndicator]: type === "card",
    });

    const BackgroundClasses = classNames(styles.progressCircleBg, {
        [styles.projectCircleBg]: type === "card",
    });
    const PercentageClasses = classNames(styles.progressPercentage, {
        [styles.projectPercentage]: type === "card",
    });

    // Calcular circunferência do círculo
    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    // Calcular valor do stroke-dashoffset baseado na porcentagem
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    // Animar o progresso ao carregar o componente
    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(percentage);
        }, 100);

        return () => clearTimeout(timer);
    }, [percentage]);

    return (
        <div className={styles.progressContainerWrapper}>
            <div className={styles.progressContainer}>
                <svg
                    className={styles.progressCircle}
                    viewBox='0 0 100 100'>
                    <circle
                        className={BackgroundClasses}
                        cx='50'
                        cy='50'
                        r={radius}
                        strokeWidth='8'
                        fill='transparent'
                    />
                    <circle
                        className={IndicatorClasses}
                        cx='50'
                        cy='50'
                        r={radius}
                        strokeWidth='8'
                        fill='transparent'
                        strokeLinecap='round'
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                    />
                </svg>
                <div className={PercentageClasses}>{progress}%</div>
            </div>
        </div>
    );
}
