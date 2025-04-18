import { useState, useEffect } from "react";
import "./Progress_Circle.module.css";

export default function ProgressCircle({ percentage = 30 }) {
    const [progress, setProgress] = useState(0);

    // Circle math
    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    // Percentage filled
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    // Percentage animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(percentage);
        }, 100);

        return () => clearTimeout(timer);
    }, [percentage]);

    return (
        <div className='progress-container-wrapper'>
            <div className='progress-container'>
                <svg
                    className='progress-circle'
                    viewBox='0 0 100 100'>
                    <circle
                        className='progress-circle-bg'
                        cx='50'
                        cy='50'
                        r={radius}
                        strokeWidth='8'
                        stroke='currentColor'
                        fill='transparent'
                    />
                    <circle
                        className='progress-circle-indicator'
                        cx='50'
                        cy='50'
                        r={radius}
                        strokeWidth='8'
                        stroke='currentColor'
                        fill='transparent'
                        strokeLinecap='round'
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                    />
                </svg>
                <div className='progress-percentage'>{progress}%</div>
            </div>
        </div>
    );
}
