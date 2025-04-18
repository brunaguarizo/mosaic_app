import { useState, useEffect } from "react";
import styles from ".Circle_Progress.module.css";

export default function ProgressCircle({ percentage = 30 }) {
    const [progress, setProgress] = useState(0);

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
                        className={styles.progressCircleBg}
                        cx='50'
                        cy='50'
                        r={radius}
                        strokeWidth='8'
                        fill='transparent'
                    />
                    <circle
                        className={styles.progressCircleIndicator}
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
                <div className={styles.progressPercentage}>{progress}%</div>
            </div>
        </div>
    );
}
